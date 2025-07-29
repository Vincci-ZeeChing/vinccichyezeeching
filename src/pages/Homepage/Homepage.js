import './Homepage.css';
import Vincci from '../../assest/Vincci.png'

function Homepage() {
  return (
    <div className="homepage">


      <div className="nameCard">
        <p className="hey">Hey, I am</p>
        <p className="vincci">Vincci Chye</p>
        <p className="frontend">Frontend Developer |</p>
        <p className="tag">Google Project – Tag Implementation Specialist</p>
      </div>
      {/*<div className="circle1"></div>*/}
      {/*<div className="circle2"></div>*/}
      <img
        src={Vincci} // change path to your actual image
        alt="Vincci"
        className="profileImage"
      />
    </div>
  );
}

export default Homepage;
