import React, { useState,useEffect } from 'react';
import { TextField, Typography, Button, Paper } from '@material-ui/core';
import useStyles from './styles'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

import { createPost,updatePost } from '../../actions/posts';


const Form = ({ currentId, setcurrentId }) => {
    const [postData, setpostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    });

    const post =  useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    console.log(post)

    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(()=>{
        if (post) {
            setpostData(post);
        }
    },[post])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId,postData))
        }
        else {
            dispatch(createPost(postData)) 
        }
    }
    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>
                <TextField name='creator' variant='outlined' label="Creator" fullWidth value={postData.creator}
                    onChange={(e) => setpostData({ ...postData, creator: e.target.value })}
                />
                <TextField name='title' variant='outlined' label="Title" fullWidth value={postData.title}
                    onChange={(e) => setpostData({ ...postData, title: e.target.value })}
                />
                <TextField name='message' variant='outlined' label="Message" fullWidth value={postData.message}
                    onChange={(e) => setpostData({ ...postData, message: e.target.value })}
                />
                <TextField name='tags' variant='outlined' label="Tags" fullWidth value={postData.tags}
                    onChange={(e) => setpostData({ ...postData, tags: e.target.value })}
                />
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setpostData({ ...postData, selectedFile: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth value>Submit</Button>
                <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth value>Clear</Button>
            </form>
        </Paper>
    )
}
export default Form;
