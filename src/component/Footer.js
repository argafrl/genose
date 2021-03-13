import LOVE from "../assets/image/love.png";
import "../pages/Home.scss";

const Footer = () => {
    return (
        <div className="footer-background">
            <div className="footer">
                <img src={LOVE} alt=""/>
                <h4>Made With Love<br />Group 9</h4>
            </div>
        </div>
    );
}
 
export default Footer;