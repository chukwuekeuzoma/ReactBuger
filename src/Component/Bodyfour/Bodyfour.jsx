import React from 'react'
import "./Bodyfour.scss"
import man from "../Images/man.jpg"
import mancook from "../Images/mancook (2).jpg"
import singlebuger from "../Images/singlebuger.jpg"
import tabledish from "../Images/tabledish.jpg"
import twowoman from "../Images/twowoman.jpg"
import secmancook from "../Images/mancook (2).jpg"
import Grid from '@material-ui/core/Grid';


export default function Bodyfour() {
    return (
        <div>
            <div>
                <div className="follow_con">
                    <div className="follow">
                        Follow us
                    </div>
                    <h1>@INSTAGRAM</h1>
                    <p>This means when you set the width and also with the means when you set the width</p>
                </div>
                <div style={{margin:"100px", marginTop:"20px"}}> 
                  <Grid container spacing={2}>
                      <Grid item xs={12} sm={4} md={4}>
                         <div><img src={man} alt="images" width="100%"/></div>
                      </Grid>
                      <Grid item xs={12} sm={4} md={4}>
                         <div><img src={mancook} alt="images" width="100%"/></div>
                       </Grid>
                       <Grid item xs={12} sm={4} md={4}>
                         <div><img src={singlebuger} alt="images" width="100%"/></div>
                       </Grid>
                       <Grid item xs={12} sm={4} md={4}>
                          <div><img src={tabledish} alt="images" width="100%"/></div>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                           <div><img src={twowoman} alt="images" width="100%"/></div>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                           <div><img src={secmancook} alt="images" width="100%"/></div>
                        </Grid>
                  </Grid>
                </div>
            </div>
        </div>
    )
}
