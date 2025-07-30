import "../style/Banner.css"
import logo from "../assets/logoLeaf.png"

function Banner() {
    return (
    <div className="banner">
        <img src={logo} alt="La maison de la jungle" className="logo" />
        <h1>La maison jungle</h1>
    </div>
    );
}

export default Banner;