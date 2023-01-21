import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo" />
    </div>
  )
}

export default Header
