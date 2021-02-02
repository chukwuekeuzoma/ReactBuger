import React from 'react'
import slicebuger from "../Images/introduction.png"
import "./BodyOne.scss"
import {useStyles} from "../Header/HeaderCss"
import {Button} from '@material-ui/core';


export default function BodyOne() {
    const classes = useStyles();
    return (
        <div>
           <div className="display_flex">
              <div>
                 <img src={slicebuger} alt="images" height="80%"/>
              </div>
              <div className="p_tag margin_top">
                    <div className="Natural">
                        Natural
                    </div>
                    <p>
                        <span className="fresh">100% fresh Ingredients</span>
                    </p>
                    <p>
                        This means when you set the width height of an element,<br/>
                        the element often apper bigger than you set
                    </p>
                    <ul>
                        <li>This album is to create css rules based</li>
                        <br/>
                        <li>This album is to create css rules based</li>
                        <br/>
                        <li>This album is to create css rules based</li>
                    </ul>
                    <div className="display_flex">
                        <Button className={classes.Button_two}>
                           About us
                        </Button>
                    </div>
              </div>


           </div>
            
        </div>
    )
}
