import '../css/exp.css'
import cap from '../images/cap.svg'

const Exp = () => {
  return (
    <div>
      <h1 className="text-center">Qualification</h1>
      <h5 className="text-center color-2">My personal journey</h5>
      <br /><br /><br /><br />
      <div className="flex">
        <img src={cap} alt="a graduation cap" className='svg' />
        <h4>Education</h4>

        <div className="edu-grid">
          {/* Self-Study */}
          <div></div>
          <div className="cool-stuff">
            <span className='round'></span>
            <span className='line'></span>
          </div>
          <div className="c">
            <h4>Self-Study (JavaScript, Backend)</h4>
            <h5 className='color-2'>Online resources</h5>
            <h5 className='color-2'>2023–2024</h5>
            <br />
          </div>

          {/* Najot Ta'lim */}
          <div></div>
          <div className="cool-stuff">
            <span className='round'></span>
            <span className='line'></span>
          </div>
          <div className="c">
            <h4>Node.js Backend</h4>
            <h5 className='color-2'>Najot Ta'lim</h5>
            <h5 className='color-2'>2024–2025</h5>
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exp
