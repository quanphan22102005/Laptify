import React from "react";
import TeamMemberCard from "./components/TeamMemberCard";
import BenefitCard from "./components/BenefitCard";
import { Heart, Headphones, Shield } from "lucide-react";

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Hà Anh Tuấn",
      role: "Người sáng lập & Chủ tịch",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/About-weQAVxv1blhIeYg39tObEuzmnHkdNk.jpg",
      socialLinks: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
      memberPosition: "left",
    },
    {
      id: 2,
      name: "Trần Thành",
      role: "Giám đốc điều hành",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/About-weQAVxv1blhIeYg39tObEuzmnHkdNk.jpg",
      socialLinks: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
      memberPosition: "center",
    },
    {
      id: 3,
      name: "Sơn Tùng M-TP",
      role: "Nhà thiết kế sản phẩm",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/About-weQAVxv1blhIeYg39tObEuzmnHkdNk.jpg",
      socialLinks: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
      memberPosition: "right",
    },
  ];

  const benefits = [
    {
      id: 1,
      icon: Heart,
      title: "Miễn phí vận chuyển",
      description: "Miễn phí vận chuyển cho những đơn hàng trên 1.500.000đ",
    },
    {
      id: 2,
      icon: Headphones,
      title: "Chăm sóc khách hàng 24/7",
      description: "Hỗ trợ chăm sóc khách hàng hàng thần thiên và trực tuyến 24/7",
    },
    {
      id: 3,
      icon: Shield,
      title: "Cam kết hoàn tiền",
      description: "Hoàn tiền trong vòng 30 ngày",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="hover:text-foreground cursor-pointer">Trang chủ</span>
            <span>/</span>
            <span className="text-foreground font-medium">Về chúng tôi</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                Câu chuyện của chúng tôi
              </h1>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Ra mắt từ năm 2015, Laptify đã khẳng định vị trí của mình là
                  một cái tên hàng hàng dấu tại Việt Nam. Thay vì mơ hình bán lẻ
                  thông thường, chúng tôi xây dựng nền tảng thương mại điện tử
                  lưu hợp tác, triển khai dịch vụ chính thức để phục vụ hơn 3
                  triệu khách hàng trên toàn quốc.
                </p>

                <p>
                  Với doanh mục sản phẩm chuyên sâu, Laptify mang đến hệ sinh
                  thái toàn diện với các dòng sản phẩm chất lượng cao như region 5
                  đến các phụ kiện tương như chuột gaming, tai nghe và bàn phím cơ
                  cấp. Chúng tôi không chỉ cung cấp hiệu ứng độc phó, mà còn mang
                  đến những giải pháp công nghệ đột phá, giúp tối ưu hóa trải
                  nghiệm làm việc và giải trí của mỗi người dùng Việt.
                </p>
              </div>
            </div>

            {/* Image Content */}
            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/About-weQAVxv1blhIeYg39tObEuzmnHkdNk.jpg"
                alt="Laptify Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Đội chuyên gia của chúng tôi
          </h2>

          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Những người có tay nghề và tâm huyết trong ngành công nghiệp công
            nghệ, cam kết mang lại trải nghiệm tốt nhất cho khách hàng
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.id} benefit={benefit} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
