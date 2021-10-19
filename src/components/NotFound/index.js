import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-page">
    <img
      src="https://res.cloudinary.com/dzfehrv3n/image/upload/v1625912176/Layer_1_yfwxh7.png"
      alt="not found"
      className="not-image"
    />
    <h1 className="not-heading">Page Not Found</h1>
    <p className="not-subheading">
      we are sorry, the page you requested could not be found
    </p>

    <Link to="/">
      <button className="home-button" type="button">
        Home Page
      </button>
    </Link>
  </div>
)
export default NotFound
