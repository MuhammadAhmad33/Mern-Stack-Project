import React from "react";
import Post from './Post/Post'
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from '@material-ui/core'
import useStyles from './styles'
const Posts = ({setcurrentId}) => {
    const posts = useSelector((state) => state.posts);

    const classes = useStyles();
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} conatiner alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setcurrentId={setcurrentId} />
                    </Grid>
                ))}

            </Grid>
        )
    )
}
export default Posts;
