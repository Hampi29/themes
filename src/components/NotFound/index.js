// Write your code here
// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutClass = isDarkTheme
        ? 'main-container dark-about'
        : 'main-container light-about'
      return (
        <div>
          <Navbar />
          <div className={aboutClass}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="image"
            />
            <h1>Lost Your Way?</h1>
            <p>We cannot seem to find the page you are looking for.</p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
