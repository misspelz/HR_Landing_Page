import { ReactNode } from "react";
import {
  FaUsers,
  FaBriefcase,
  FaChartLine,
  FaHandHoldingUsd,
  FaGlobe,
} from "react-icons/fa";

const services = [
  {
    icon: <FaUsers size={24} aria-label="Employee Management Icon" />,
    text: "Comprehensive Employee Management",
  },
  {
    icon: <FaBriefcase size={24} aria-label="Recruitment Solutions Icon" />,
    text: "Streamlined Recruitment Solutions",
  },
  {
    icon: <FaChartLine size={24} aria-label="Performance Analytics Icon" />,
    text: "Real-time Performance Analytics",
  },
  {
    icon: <FaHandHoldingUsd size={24} aria-label="Payroll and Benefits Icon" />,
    text: "Efficient Payroll and Benefits Management",
  },
  {
    icon: <FaGlobe size={24} aria-label="Global HR Compliance Icon" />,
    text: "Global HR Compliance and Reporting",
  },
];

interface IconWrapperProps {
  icon: ReactNode;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon }) => (
  <div className="w-[44px] h-[44px] bg-blue-600 rounded-full flex justify-center items-center text-white shrink-0">
    {icon}
  </div>
);

const Services = () => {
  return (
    <div id="services" className="pt-[20px] pb-[40px] lg:py-[40px]">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-[40px] lg:gap-[80px]">
        <div className="w-full lg:w-[50%] flex flex-col gap-[8px]">
          <h2
            style={{ fontFamily: "Merriweather", fontWeight: 700 }}
            className="text-[20px] lg:text-[32px] lg:w-[379px] lg:leading-[38px]"
          >
            Services
          </h2>
          <h3 className="text-[16px] lg:text-[18px] font-[500] lg:leading-[28px]">
            We provide HR Solutions designed to streamline operations, improve
            efficiency, and foster a better work environment. Our tools empower
            HR professionals to manage talent, performance, and compliance with
            ease and accuracy.
          </h3>
        </div>

        <div className="w-full lg:w-[50%]">
          <div className="flex flex-col gap-[15px]">
            {services.map((service, index) => (
              <div key={index} className="flex gap-[24px] items-center">
                <IconWrapper icon={service.icon} />
                <h3 className="text-[16px] lg:text-[18px] font-[500] lg:leading-[28px]">
                  {service.text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
