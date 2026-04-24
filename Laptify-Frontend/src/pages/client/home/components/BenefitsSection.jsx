import React from "react";
import { Truck, Headphones, Award } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const BenefitCard = ({ icon: Icon, title, description, index }) => {
  const cardRef = useScrollAnimation({
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
    animationClass: `animate-stagger-${(index % 5) + 1}`,
  });

  return (
    <div ref={cardRef} className="flex flex-col items-center text-center opacity-0 group">
      {/* Icon with hover rotation */}
      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
        <Icon size={30} className="text-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-snug">
        {description}
      </p>
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Truck,
      title: "Miễn phí vận chuyển",
      description: (
        <>
          Miễn phí vận chuyển cho những <br /> đơn hàng trên 1.500.000đ
        </>
      ),
    },
    {
      icon: Headphones,
      title: "Chăm sóc khách hàng 24/7",
      description: (
        <>
          Đội ngũ chăm sóc khách hàng thân thiện <br /> trực tuyến 24/7
        </>
      ),
    },
    {
      icon: Award,
      title: "Cam kết hỗ trợ tận tâm",
      description: "Hoàn tiền trong vòng 30 ngày",
    },
  ];

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((benefit, idx) => (
          <BenefitCard
            key={idx}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
