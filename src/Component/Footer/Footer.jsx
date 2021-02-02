import React from 'react'
import "./Footer.scss"
import twitter from "../Images/twitter.png"
import instagram from "../Images/instagram.png"
import facebook from "../Images/facebook.png"
import { Button, TextField } from '@material-ui/core'
import { useStyles } from "../Header/HeaderCss"

export default function Footer() {
    const classes = useStyles();
    return (
        <>
            <div className="container">
                <div className="margin_left">
                    <h1 className="color_w">Burger</h1>
                </div>
                <div>
                    <div className="contact_us">Contact Us</div>
                    <div className="container_two">
                        <div className="padding"><img src={twitter} alt="images" height="30px" /></div>
                        <div className="padding"><img src={instagram} alt="images" height="30px" /></div>
                        <div className="padding"><img src={facebook} alt="images" height="30px" /></div>
                    </div>
                </div>
                <div className="margin_right">
                    <form>
                        <Button className={classes.Button_three}>
                            subcribe
                            </Button>
                        <TextField
                            InputProps={{ className: "input" }}
                            InputLabelProps={{ className: "text__placeholder" }}
                            id="outlined-textarea"
                            label="Email"
                            placeholder="Email"
                            type="email"
                            multiline
                            variant="outlined"
                        />
                    </form>
                </div>


            </div>
            <div className="martins">
              Copywrite@Martins 2021   
            </div>
        </>
    )
}
