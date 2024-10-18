const About = () => {
  return (
    <div id="about" className="pt-[40px] pb-[20px] lg:py-[40px]">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-[20px] lg:gap-[80px]">
        <div className="w-full lg:w-[50%] flex flex-col gap-[8px]">
          <h2
            style={{
              fontFamily: "Merriweather",
              fontWeight: 700,
            }}
            className="text-[20px] lg:text-[32px] lg:w-[379px] lg:leading-[38px]"
          >
            About Us
          </h2>
          <h3 className="text-[16px] lg:text-[18px] font-[500] lg:leading-[28px]">
          We are passionate about driving innovation and delivering exceptional solutions tailored to meet your unique needs. 
          </h3>

          {/* Mission Section */}
          <h3 className="text-[18px] lg:text-[20px] font-[600] mt-[10px] ">
            Our Mission
          </h3>
          <p className="text-[16px] lg:text-[18px] font-[400] lg:leading-[28px] mb-[10px]">
            Our mission is to empower businesses with innovative solutions that
            enhance efficiency and drive growth. We strive to be a trusted
            partner, providing exceptional service and support to help our
            clients achieve their goals.
          </p>

          {/* Vision Section */}
          <h3 className="text-[18px] lg:text-[20px] font-[600] mt-[10px]">
            Our Vision
          </h3>
          <p className="text-[16px] lg:text-[18px] font-[400] lg:leading-[28px] mb-[10px]">
            Our vision is to be a leading provider of transformative solutions
            that shape the future of industries. We aim to create lasting
            impacts by fostering innovation and sustainability in everything we
            do.
          </p>
        </div>

        <div className="w-full lg:w-[50%] py-[20px] lg:py-[40px]">
          <img
            src="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="about-us"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
