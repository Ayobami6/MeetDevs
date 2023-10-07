import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const footer = () => {
  return (
    <footer>

      <div className="footer_socials">
        <a href="" target="_blank"><FaFacebookF /></a>
        <a href="" target="_blank"><FiInstagram /></a>
        <a href="" target="_blank"><IoLogoTwitter /></a>
      </div>

      <div className="footer_copy">
        <small>&copy; 2023 Meet Devs. All rights reserved
        </small>
      </div>
      
    </footer>
  )
}

export default footer