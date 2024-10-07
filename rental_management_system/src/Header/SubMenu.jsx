import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SubMenu = () => {
    const { user } = useSelector((state)=> state.loginUser);
  return (
    <section className="header-section">
      <form>
        <div className="search-container">
          <input
            type="text"
            className="search-section"
            placeholder="Search for location..."
          />
          <span className="material-symbols-outlined">search</span>
        </div>
      </form>
      {user ? 
        <div className="filter-container">
          <button className="filter-button">Logout</button>
          <span className="material-symbols-outlined">tune</span>
        </div>
       : <Link to="/login">
        <div className="filter-container">
          <button className="filter-button">Login</button>
          <span className="material-symbols-outlined">tune</span>
        </div>
      </Link>}
      
    </section>
  );
};

export default SubMenu;
