import React from 'react';
import "./Footer.css";

function Footer({isLoaded}) {
    return (
        <div id='footer-wrapper'>
            <div id='footer-content'>
                <div>
                    <div>© 2023 Airbnb, Inc.</div>
                </div>
                <div>
                    <div>JavaScript  ·  Express  ·   React  ·  Redux  ·  PostgresSQL </div>
                </div>
                <div className="dev-info">
                    <div>Developer: Vjola Jorgji</div>
                    <a href="https://github.com/vjolaj"><i class="fa-brands fa-github"></i></a>
                    <a href='https://www.linkedin.com/in/vjola-jorgji-68a46b253/'><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    )
}


export default Footer;