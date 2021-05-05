import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            height: theme.spacing(16),
        },
    },
}));
// typography styling
const useTypo = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
});

export default function GlobalData() {
    const classes = useStyles();
    const [globalstate,setGlobalstate] = useState();
    const [dataloading,setDataloding]=useState(false)
    const loading = 'Loading....'


    useEffect(()=>{
        async function fetchGlobalData (){
            setDataloding(true)
            const apiRespose = await fetch("https://covid19.mathdro.id/api")
            const apiData = await apiRespose.json()
            console.log(apiData)
            setGlobalstate(apiData)
            setDataloding(false)
        }
        fetchGlobalData();
        
    },[])

    if (dataloading){

        
        return (
            <div className={classes.root}>

            <Paper elevation={3}>
                <div className={useTypo.root}>
                    <Typography variant="h4" gutterBottom>
                        {loading}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        Total Confirmed Cases
                    </Typography>
                </div>
            </Paper>
            <Paper elevation={3}>
                <div className={useTypo.root} style = {{color :'purple'}} >
                    <Typography variant="h4" gutterBottom >
                    {loading}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        Today's Confirmed case
                    </Typography>
                </div>
            </Paper>
            <Paper elevation={3}>
                <div className={useTypo.root} style = {{color :'green'}}>
                    <Typography variant="h4" gutterBottom>
                    {loading}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        Worldwide Recoverd
                    </Typography>
                </div>
            </Paper>
            <Paper elevation={3}>
                <div className={useTypo.root}style = {{color :'red'}}>
                    <Typography variant="h4" gutterBottom>
                    {loading}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                       Worldwide Expired
                    </Typography>
                </div>
            </Paper>
        </div>
    );
}
else {
    return(
        <div className={classes.root}>

        <Paper elevation={3}>
            <div className={useTypo.root}>
                <Typography variant="h4" gutterBottom>
                <NumberFormat value={globalstate && globalstate.confirmed.value} displayType={'text'} thousandSeparator={true}  />
                    
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    Total Confirmed Cases
                </Typography>
            </div>
        </Paper>
       
        <Paper elevation={3}>
            <div className={useTypo.root} style = {{color :'green'}}>
                <Typography variant="h4" gutterBottom>
                <NumberFormat value={globalstate && globalstate.recovered.value} displayType={'text'} thousandSeparator={true}  />   
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    Worldwide Recoverd
                </Typography>
            </div>
        </Paper>
        <Paper elevation={3}>
            <div className={useTypo.root}style = {{color :'red'}}>
                <Typography variant="h4" gutterBottom>
                <NumberFormat value={globalstate && globalstate.deaths.value} displayType={'text'} thousandSeparator={true}  />
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                   Worldwide Expired
                </Typography>
            </div>
        </Paper>
    </div> 
    )
}
}
