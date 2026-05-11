# Build stage
FROM maven:3.9-eclipse-temurin-21 AS builder

WORKDIR /app

# Copy pom.xml
COPY pom.xml .

# Download dependencies
RUN mvn dependency:resolve

# Copy source code
COPY src ./src

# Build the application
RUN mvn clean package -DskipTests

# Runtime stage
FROM eclipse-temurin:21-jre

WORKDIR /app

# Copy the JAR file from builder stage
COPY --from=builder /app/target/*.jar app.jar

# Create a non-root user for security
RUN useradd -m -u 1000 appuser && chown -R appuser:appuser /app
USER appuser

# Expose port
EXPOSE 8080

# Environment variables (can be overridden at runtime)
ENV SPRING_PROFILES_ACTIVE=prod \
    DB_URL=jdbc:mariadb://db:3306/laptify_db \
    DB_USERNAME=root \
    DB_PASSWORD=root \
    JWT_SECRET_KEY=your_secret_key_here \
    JWT_ISSUER=Laptify \
    JWT_EXPIRATION_MS=3600000 \
    JWT_REFRESH_EXPIRATION_MS=86400000 \
    CLOUDINARY_CLOUD_NAME=your_cloud_name \
    CLOUDINARY_API_KEY=your_api_key \
    CLOUDINARY_API_SECRET=your_api_secret

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD curl -f http://localhost:8080/actuator/health || exit 1

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]

