// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutClass = isDarkTheme
        ? 'main-container dark-about'
        : 'main-container light-about'
      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      return (
        <div>
          <Navbar />
          <div className={aboutClass}>
            <img src={imgUrl} alt="about" className="image" />
            <h1>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
