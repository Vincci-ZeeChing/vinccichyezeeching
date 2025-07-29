import './About.css'

function About() {
  return (<div>
    <div className="aboutPage">

      <p className="expert">
          <span className="y-wrapper">
            <span className="svg-icon">
              <svg
                viewBox="0 0 82 63"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                className="svg-shape"
              >
                <line x1="5.55" y1="54.62" x2="29.62" y2="57.45" stroke="#1E82A6" strokeWidth="10"
                      strokeLinecap="round"/>
                <line x1="23.66" y1="5.36" x2="39.36" y2="38.34" stroke="#1E82A6" strokeWidth="10"
                      strokeLinecap="round"/>
                <line x1="76.14" y1="24.74" x2="66.74" y2="42.86" stroke="#1E82A6" strokeWidth="10"
                      strokeLinecap="round"/>
              </svg>
            </span>
            Y
          </span>
        our Expert in
      </p>

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
          style={{marginLeft: '10px', transform: 'scaleX(-1)'}}
          viewBox="0 0 24 24"
        >
          <path d="M12 4l1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8z"/>
        </svg>
      </button>
    </div>
  </div>)
}

export default About;