import Navbar from './NavBar';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          SAB
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;