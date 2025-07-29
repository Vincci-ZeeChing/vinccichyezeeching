import './LandingPage.css';
import Homepage from "./Homepage/Homepage";
import About from "./About/About";
import Services from "./Services";

const LandingPage = () => {
  return (
    <div className="landing-page">

      <section className="section" >
        <Homepage/>
      </section>

      <section className="section">
        <About/>
      </section>

      <section className="section">
        <Services/>
      </section>
      {/* Add more sections like Skills, Services, Contact here in same layout */}
    </div>
  );
};

export default LandingPage;
