// Write your code here
import ThemeContext from '../../context/ThemeContext'
import {Link} from 'react-router-dom'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickTheme = () => {
        toggleTheme()
      }
      const navClass = isDarkTheme ? 'navbar dark-about' : 'navbar light-about'
      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const theme = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <nav className={navClass}>
          <ul className="nav-list">
            <li>
              <img src={logoUrl} alt="website logo" className="logo" />
            </li>
            <li className="home-about">
              <Link to="/" className="home-element">
                <p>Home</p>
              </Link>
              <Link to="/about" className="home-element">
                <p>About</p>
              </Link>
            </li>
            <li>
              <button
                type="button"
                data-testid="theme"
                className="btn"
                onClick={onClickTheme}
              >
                <img src={theme} alt="theme" className="logo" />
              </button>
            </li>
          </ul>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
