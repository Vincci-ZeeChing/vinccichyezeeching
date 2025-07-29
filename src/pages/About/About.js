import './About.css'

function About() {
  return (
    <div>
      <div className="aboutPage">
        <p className='expert'>Your Expert in </p>
        <p className='textCard'>Frontend Development & Tag Implementation</p>
        <p className='content'>
          With hands-on experience across China, Taiwan, and Hong Kong,
          I build high-performance websites and deliver precise tracking solutions
          through Google Ads, GA4, and GTM—empowering brands to optimize, track,
          and grow with confidence.
        </p>

      </div>
      <div className='buttonContainer'>
        <button className='button'>Let’s work together
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            style={{ marginLeft: '10px', transform: 'scaleX(-1)' }}
            viewBox="0 0 24 24"
          >
            <path d="M12 4l1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default About;