

import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const w3xhtml10Img = require("../../images/footer/valid-xhtml10.png");
const cssValidaotrImg = require("../../images/footer/vcss-blue.gif");

const Footer = () => {
    
    return (
        <>
        <div className = "footerContainer">
			<div className="footer">
				<Link to="https://validator.w3.org/check?uri=referer"><img className="xhtml10Img" src={w3xhtml10Img} alt="Valid XHTML 1.0 Strict" /></Link>
			</div>
			<div className="footer">
				<Link to="https://jigsaw.w3.org/css-validator/check/referer"><img className="cssValidator"  src={cssValidaotrImg} alt="Valid CSS!" /></Link>
			</div>
			<div className="footer">&copy; Michael Baggott 2013</div>
			<div className="footer acknowledgement"><Link to = "/acknowledgements">Acknowledgements</Link></div>
		</div>
        </>
    );
}
export default Footer;