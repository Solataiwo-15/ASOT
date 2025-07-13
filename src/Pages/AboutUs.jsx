import AboutWelcome from "../components/AboutWelcome";
import CTA from "../components/CTA";
import HeroAbout from "../components/HeroAbout";
import IntroAbout from "../components/IntroAbout";
import Stats from "../components/Stats";
import Testimonial from "../components/Testimonial";
import WhyUs from "../components/WhyUs";

function AboutUs () {
  return (
    <>
      <HeroAbout />
      <IntroAbout />
      <WhyUs />
      <AboutWelcome />
      <Stats />
      <Testimonial />
      <CTA />
    </>
  );
}

export default AboutUs;