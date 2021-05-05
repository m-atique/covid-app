import React from 'react';
import styles from './Cards.module.css'
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
import Countup from 'react-countup'
import CountUp from 'react-countup';
import cx from 'classnames'

const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=>{
    if(!confirmed){
        return "loading-----"
    }
    return(
        <div className = {styles.container}>
            <Grid container spacing ={3} justify ='center'>
               <Grid item component ={Card} xs={8} md={3} className ={cx(styles.card, styles.infected)}>
                   <CardContent>
                       <Typography gutterBottom color = 'textSecondary'>Infected</Typography>
                       <Typography variant ='h5'>
                        <CountUp start ={0} end ={confirmed.value} duration={2.5} separator=','/>   
                       </Typography>
                       <Typography color = 'textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant ='body2'>Nunber of Affected </Typography>
                   </CardContent>
               </Grid>
               <Grid item component ={Card} xs={8} md={3} className = {cx(styles.card, styles.recovered)}>
                   <CardContent>
                       <Typography gutterBottom color = 'textSecondary'>Recovered</Typography>
                       <Typography variant ='h5'>
                        <CountUp start ={0} end ={recovered.value} duration={2.5} separator=','/>   
                       </Typography>
                       <Typography color = 'textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant ='body2'>Nunber of Recovered  </Typography>
                   </CardContent>
               </Grid>
               <Grid item component ={Card} xs={8} md={3} className = {cx(styles.card,styles.deaths)}>
                   <CardContent>
                       <Typography gutterBottom color = 'textSecondary'>Deaths</Typography>
                       <Typography variant ='h5'>
                        <CountUp start ={0} end ={deaths.value} duration={2.5} separator=','/>   
                       </Typography>
                       <Typography color = 'textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant ='body2'>Nunber of Deaths </Typography>
                   </CardContent>
               </Grid>
            </Grid>
        </div>
    )
}

export default Cards