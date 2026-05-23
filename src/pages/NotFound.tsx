import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container fade-up">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <div className="glitch-wrapper">
          <h2 className="error-text">Page Not Found</h2>
        </div>
        <p className="error-description">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="home-btn">
          <FaHome /> Back to Home
        </Link>
      </div>
      
      {/* Background decoration */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
    </div>
  );
};

export default NotFound;
