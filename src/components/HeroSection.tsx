// HeroSection.tsx

import backgroundImage from "../assets/image/animatebg.avif"; // put your uploaded image in src/assets

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative  w-full py-8 bg-cover bg-center flex items-center "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        objectFit: "cover",
        objectPosition: "50% 50%",
        backgroundPosition: "cover",
        backgroundAttachment: "fixed",
        // background-attachment: scroll;
      }}
    >
      {/* Content */}
      <div className="relative z-10  mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl">
        {/* Left side */}
        <div className="text-white lg:w-1/2 mb-8 lg:mb-0">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[50px] sm:leading-[65px] lg:leading-[80px]
  "
          >
            Trusted Partner For Innovation & Transformation
          </h1>

          <button className="mt-8 px-6 py-5 bg-red-600 text-black font-semibold rounded hover:bg-black hover:border hover:border-white hover:text-white   transition-all duration-500 ease-in-out">
            <a href={`/contact-us`}>Compatibility Assessment</a>
          </button>
        </div>

        {/* Right side */}
        <div className="text-white lg:w-1/2 lg:pl-12">
          <p className="text-lg font-medium sm:text-2xl leading-loose text-pretty">
            We are a leading IT consulting firm passionate about helping people.
            Our focus on client needs, operational excellence, and return on
            investment has transformed our business and that of our clients. We
            are committed to helping our clients succeed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
