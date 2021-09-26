import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>the dojo blog</h1>
      <div className='links'>
        <Link to='/create'>New blog</Link>
        <Link
          to='/'
          style={{
            backgroundColor: "red",
            borderRadius: "8px",
          }}
        >
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
