import { IconWrapperProps } from "../../../types/Icon";
import { services } from "@utils/index";
import { useEffect, useRef, useState } from "react";

const IconWrapper: React.FC<IconWrapperProps> = ({ icon }) => (
  <div className="w-[44px] h-[44px] bg-blue-600 rounded-full flex justify-center items-center text-white shrink-0">
    {icon}
  </div>
);

const Services = () => {
  const [visibleServices, setVisibleServices] = useState<number[]>([]);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!visibleServices.includes(index)) {
              setVisibleServices((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    serviceRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      serviceRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [visibleServices]);

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
              <div
                key={index}
                data-index={index}
                ref={(el) => (serviceRefs.current[index] = el)}
                className={`flex gap-[24px] items-center transition-transform duration-700 ${
                  visibleServices.includes(index)
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
              >
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
