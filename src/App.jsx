
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Hero from "./sections/Hero";
import About from "./sections/About";
import Specialities from "./sections/Specialities";
import Doctors from "./sections/Doctors";
import Facilities from "./sections/Facilities";
import WhyChooseUs from "./sections/WhyChooseUs";
import Reviews from "./sections/Reviews";
import Appointment from "./sections/Appointment";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Specialities />
        <Doctors />
        <Facilities />
        <WhyChooseUs />
        <Reviews />
        <Appointment />
      </main>

      <Footer />
    </>
  );
}

export default App;
