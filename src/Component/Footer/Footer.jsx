import React from 'react'
import "./Footer.scss"
import twitter from "../Images/twitter.png"
import instagram from "../Images/instagram.png"
import facebook from "../Images/facebook.png"
import {Button, TextField} from '@material-ui/core'

export default function Footer() {
    return (
        <div className="container">
            <div>
               <h1>Burger</h1>
               <div>Contact Us</div>
               <div className="container">
                   <div><img src={twitter} alt="images" height="20px"/></div>
                   <div><img src={instagram} alt="images" height="20px"/></div>
                   <div><img src={facebook} alt="images" height="20px"/></div>
               </div>
            </div>
            <div>
                <form>
                        <div className="">
                            <Button>
                                subcribe
                            </Button>
                            <TextField
                                // className={classes.TextField}
                                id="outlined-textarea"
                                label="Email"
                                placeholder="Email"
                                type="email"
                                multiline
                                variant="outlined"
                            />
                        </div>
                </form>

            </div>
            
        </div>
    )
}
