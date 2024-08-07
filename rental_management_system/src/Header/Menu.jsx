import './Header.css';
import image from '../Assets/images/I-TUS.png'

const Menu = () => {

    return (
        <header className="header-top">
            <div className="header-firstdiv">
                <img className="header-img" src={image} width="30" height="20" alt="Logo"/>
                <span className="header-span">|</span>
                <h2 className="header-h2">H&E Properties</h2>
            </div>
            <div className="header-seconddiv">
                <button className="header-listing">Start Listing</button>
                <button className="header-user">AA</button>
            </div>
        </header>
    );
}

export default Menu;