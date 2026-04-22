import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="w-full">
      {/* Breadcrumb Navigation */}
      <nav className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link
                to="/"
                className="text-foreground transition-colors hover:text-muted-foreground"
              >
                Trang chủ
              </Link>
            </li>
            <li className="text-muted-foreground">/</li>
            <li className="text-muted-foreground">Không tìm thấy trang</li>
          </ol>
        </div>
      </nav>

      {/* 404 Content */}
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12">
        <div className="text-center">
          {/* 404 Text */}
          <h1 className="mb-6 text-7xl font-bold text-foreground">
            404 Not Found
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg text-muted-foreground">
            Không tìm thấy trang bạn yêu cầu. Bạn có thể quay trở về trang chủ để tiếp tục.
          </p>

          {/* Back to Home Button */}
          <Link
            to="/"
            className="inline-block rounded-md bg-[#E53935] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#C62828]"
          >
            Quay về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
