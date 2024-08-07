import './Header.css';

const SubMenu = () => {
    return (
        <section className="header-section">
            <form>
                <div className="search-container">
                    <input type="text" className="search-section" placeholder="Search for location..."/>
                    <span className="material-symbols-outlined">search</span>
                </div>
            </form>
            <div className="filter-container">
                <button className="filter-button">Filter</button>
                <span className="material-symbols-outlined">tune</span>
            </div>
        </section>
    );
}

export default SubMenu;
