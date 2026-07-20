import image1 from "../../assets/image/about_mobile.png";
import image2 from "../../assets/image/about_tab.png";

const OurClientsSay = () => {
  return (
    <div className="bg-white w-full mx-auto py-6 max-w-8xl">
      <picture>
        <source media="(max-width: 640px)" srcSet={image1} />
        <img
          src={image2}
          alt="Workflow"
          title="Workflow"
          width={1200}
          height={675}
          className="w-full h-auto rounded-lg object-cover"
        />
      </picture>
    </div>
  );
};

export default OurClientsSay;
