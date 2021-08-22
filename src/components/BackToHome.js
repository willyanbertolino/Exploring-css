import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

const BackToHome = () => {
  return (
    <div className="back-home-container">
      <Link className="back-home-link" to="/">
        <FaAngleLeft />
      </Link>
    </div>
  );
};

export default BackToHome;
