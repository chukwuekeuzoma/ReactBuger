import React from 'react'
import "./Header.scss"
import Twitter from "../Images/twitterOne.png"
import Facebook from "../Images/facebookOne.png"
import Instagram from "../Images/logo.png"
import Button from '@material-ui/core/Button';
import {useStyles} from "./HeaderCss"


function Header() {
 const classes = useStyles();
    return (
        <div>
           <div id="main-head">
               <div className="main_nav">
                  <div className="Buger">Buger</div>
                  <div className="nav">
                      
                          <div><span className="Home">Home</span></div>
                          <div><span className="services">Services</span></div>
                          <div><span className="about">About us</span></div>
                          <div><span className="log_out">Log Out</span></div>
                          
                   
                  </div>
                  <div className="social_one">
                      <div><img src={Twitter} alt="tw" height="20px" className="twitter_one"/></div>
                      <div><img alt="fb" className="facebook_one" height="20px" src={Facebook}/></div>
                      <div><img alt="in" className="instagram_one" height="20px" src={Instagram}/></div>
                  </div>
               </div>
               <div className="best_offer">Best offer</div>
               <div className="superburger">SUPER BURGER</div>
               <div className="Deal">DEAL</div>
               <Button className={classes.Button}>
                   Order now
               </Button>
               <div className="red_circle">
                    <div className="red_circle_content">
                        only <br/>
                        $44.99
                    </div>
                </div>
           </div>
        </div>
    )
}
export default Header

               

            

