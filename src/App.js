import React,{useState,useEffect} from "react";
import { Container, AppBar, Grow, Typography, Grid } from '@material-ui/core'

import Posts from './components/Posts/Posts';
import Form from './components/Forms/form'
import memories from './images/memories.png'
import useStyles from './styles'
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

const App = () => {
    const [currentId,setcurrentId]=useState(null);
    const classes=useStyles();
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[getPosts]);
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setcurrentId={setcurrentId}/>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setcurrentId={setcurrentId}/>
                    </Grid>
                </Grid>

            </Grow>
        </Container>
    )
}

export default App; 