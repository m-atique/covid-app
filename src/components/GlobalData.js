import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
    const {globalstate,setGlobalstate} = useState();


    useEffect(()=>{
        async function fetchGlobalData (){
            const apiRespose = await fetch("")
            const apiData = await apiRespose.json()
            console.log(apiData)
            setGlobalstate(apiData)
        }
        fetchGlobalData();
    })

    return (
        <div className={classes.root}>

            <Paper elevation={3}>
                <div className={useTypo.root}>
                    <Typography variant="h4" gutterBottom>
                        10000
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        Today Global Number
                    </Typography>
                </div>
            </Paper>
            <Paper elevation={3}>
                <div className={useTypo.root} style = {{color :'purple'}} >
                    <Typography variant="h4" gutterBottom >
                        10000
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        Today Global Active
                    </Typography>
                </div>
            </Paper>
            <Paper elevation={3}>
                <div className={useTypo.root} style = {{color :'green'}}>
                    <Typography variant="h4" gutterBottom>
                        10000
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        Today Global Recoverd
                    </Typography>
                </div>
            </Paper>
            <Paper elevation={3}>
                <div className={useTypo.root}style = {{color :'red'}}>
                    <Typography variant="h4" gutterBottom>
                        10000
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        Today Global Expired
                    </Typography>
                </div>
            </Paper>
        </div>
    );
}
