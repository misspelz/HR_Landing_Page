import PrimaryBtn from "@components/button";
import Container from "@components/container";
import Typewriter from "@components/typewriter";
import { Link } from "react-router-dom";

const Hero = () => {

  return (
    <div
    className="relative h-[500px] w-full bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage:
        "url(https://images.pexels.com/photos/5989926/pexels-photo-5989926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    }}
    >
      {/* Overlay for the background color */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <Container>
        <div className="relative flex flex-col gap-[16px] lg:gap-[24px] justify-center items-center h-full">
          <h1
            style={{
              fontFamily: "Merriweather",
              fontWeight: 700,
            }}
            className="text-[24px] md:text-[32px] text-[#fff] lg:text-[48px] text-center font-[700] lg:leading-[57px] lg:w-[700px]"
          >
            <Typewriter text= "UUnlock The Full Potential For Your Workforce" speed={50}/>
          </h1>
          <h3 className="text-[16px] lg:text-[18px] font-[500]  text-[#fff]  lg:w-[800px] lg:leading-[28px]  text-center">
          By providing the right tools, training, and strategies, businesses can create an environment where employees feel engaged, motivated, and equipped to excel. This approach not only enhances individual performance but also fosters collaboration and a growth mindset across the organization, leading to sustainable success and competitive advantage.
          </h3>

          <div className="flex items-center gap-[12px] lg:gap-[24px]">
            <Link to="#">
              <PrimaryBtn className="bg-blue-600 hover:bg-blue-500 font-[600] w-[120px] lg:w-[150px] h-[38px] lg:h-[48px] flex justify-center items-center text-[#fff] duration-500 transition">
                Learn More
              </PrimaryBtn>
            </Link>
            <Link to="#">
              <PrimaryBtn className="text-slate-600 hover:bg-slate-50  border font-[600] bg-[#fff] w-[120px] lg:w-[150px]  h-[38px] lg:h-[48px] flex justify-center items-center duration-500 transition">
                Get Started
              </PrimaryBtn>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
