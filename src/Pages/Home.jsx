import Navbar from "../components/Global/Navbar";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import Testimonials from "../components/Home/Testimonials";
import BlogSection from "../components/Home/BlogSection";
import FreeGuideSection from "../components/Home/FreeGuideSection";
import FreeSession from "../components/Home/FreeSession";
import Footer from "../components/Global/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <BlogSection />
      <FreeGuideSection />
      <FreeSession />
      <Footer />
    </>
  );
}

export default App;