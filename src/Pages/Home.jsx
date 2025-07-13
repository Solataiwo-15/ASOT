import About from "../components/About";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
import Stats from "../components/Stats";
import WhyUs from "../components/WhyUs";
import AsotPicks from "../components/AsotPicks";
import Testimonial from "../components/Testimonial";
import CTA from "../components/CTA";


function Home () {
  return (
    <>
      <Hero />
      <Categories />
      <About />
      <WhyUs />
      <OurServices />
      <Stats />
      <AsotPicks />
      <Testimonial />
      <CTA />
    </>
  );
}

export default Home;