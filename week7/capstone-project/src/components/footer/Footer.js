import React from "react"
import './footer.css';

function Footer () {
    return (
        <div>
        <p id="address"><i class="fas fa-map-marker-alt"></i>     6069. Graffitti BLVD. <br />
           South Beach, FL. <br />
           Tel: (305)-699-9999
        </p>
        <br />
            <span id="footer">Ask about Private Auctions & Showings</span><br /> 
            <span className="icons"><div className="twitter"><i className="fa fa-twitter"></i></div><div className="facebook"><i className="fa fa-facebook-f"></i></div><div className="instagram"><i className="fa fa-instagram" width="150px"></i></div></span>
        </div>
    )
}

export default Footer
