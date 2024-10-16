import GetInTouch from "../../shared/GetInTouch";
import HeroSection from "./components/HeroSection";
import OurSevices from "./components/OurServices.jsx";
import PoweredBy from "./components/PoweredBy";

const Service = () => {
  const buttons = [
    {
      name: "Get in Touch",
      variant: "white",
    },
    {
      name: "Learn more about BM@P ",
      variant: "secondary",
    },
  ];
  return (
    <>
      <HeroSection />
      <OurSevices />
      <PoweredBy />
      <GetInTouch
        variant={buttons}
        heading="Ready to Transform Your Brand?"
        description={
          <p>
            Let’s collaborate to unlock your brand’s full potential.
            <br /> Contact us today and see how we can tailor our AI business
            solutions to your unique needs.
          </p>
        }
      />
    </>
  );
};

export default Service;
