import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderText from "@/components/HeaderText";
import Privacy from "@/components/Privacy";
import Waitlist from "@/components/Waitlist";
import Whyus from "@/components/Whyus";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <HeaderText />
      <AboutUs />
      <Privacy />
      <Features />
      <Whyus />
      <Waitlist />
      <Footer />
    </div>
  );
};
export default page;
