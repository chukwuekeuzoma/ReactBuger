import React from 'react'
import "./BodyThree.scss"
import chessbuger from "../Images/1 (2).png"
import bugerfries from "../Images/4.png"
import beefbuger from "../Images/5.png"
import sorcebuger from "../Images/6.png"
import cookies from "../Images/7.png"
import chocodrink from "../Images/8.png"
import platefries from "../Images/9.png"
import hotdog from "../Images/2 (2).png"


export default function BodyThree() {
    return (
        <div>
             <div> 
                <div className="Menu">
                    <div className="Menu_two">
                        Menu
                    </div>
                    <h1>What's New</h1>
                    <p>This means when you set This means when you set the width</p>
                </div>
                <div className="buger_collection">
                        <div>
                            <img src={chessbuger} alt="images"/>
                            <h3>cheese burger <span className="price">$3.99</span></h3>
                            <p>This means when you set the width and also with the</p>
                            <p>This means when you set the width</p>

                        </div>
                        <div>
                            <img src={bugerfries} alt="images"/>
                            <h3>Beef burger <span className="price">$3.99</span></h3>
                            <p>This means when you set the width</p>
                            <p>This means when you set the width and aslo with the</p>
                        </div>
                        <div>
                            <img src={beefbuger} alt="images"/>
                            <h3>cheese burger <span className="price">$3.99</span></h3>
                            <p>This means when you set the width and aslo with the</p>
                            <p>This means when you set the width</p>
                        </div>
                        <div>
                            <img src={sorcebuger} alt="images"/>
                            <h3>Beef burger <span className="price">$3.99</span></h3>
                            <p>This means when you set the width and aslo with the</p>
                            <p>This means when you set the width</p>
                        </div>
                        <div>
                            <img src={cookies} alt="images"/>
                            <h3>cheese burger <span className="price">$3.99</span></h3>
                            <p>This means when you set the width and aslo with the</p>
                            <p>This means when you set the width</p>
                        </div>
                        <div>
                            <img src={chocodrink} alt="images"/>
                            <h3>Beef burger <span className="price">$3.99</span></h3>
                            <p>This means when you set the width and aslo with the</p>
                            <p>This means when you set the width</p>
                        </div>
                        <div>
                            <img src={platefries} alt="images"/>
                            <h3>cheese burger <span className="price">$3.99</span></h3>
                            <p>This means when you set the width and also with the</p>
                            <p>This means when you set the width</p>
                        </div>
                        <div>
                            <img src={hotdog} alt="images"/>
                            <h3>cheese burger <span className="price">$3.99</span></h3>
                            <p>This means when you set the width and aslo with the</p>
                            <p>This means when you set the width</p>
                        </div>
                        <div>
                            <img src={cookies} alt="images"/>
                            <h3>Beef burger <span className="price">$3.99</span></h3>
                            <p>This means when you set the width and also with the</p>
                            <p>This means when you set the width</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}
