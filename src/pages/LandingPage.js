import './LandingPage.css';
import Homepage from "./Homepage/Homepage";
import About from "./About/About";

const LandingPage = () => {
  return (
    <div className="landing-page">

      <section className="section" >
        <Homepage/>
      </section>

      <section className="section">
        <About/>
      </section>

      {/* Add more sections like Skills, Services, Contact here in same layout */}
    </div>
  );
};

export default LandingPage;
