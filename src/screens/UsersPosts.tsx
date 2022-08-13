import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import { useState, useEffect } from "react";
import React from 'react';

const UserPosts = (props:any) => {
    const [loading, setLoading] = useState(true);

    const [posts, setPosts] = useState([
        {userId: 1, title: "postagem1", body: "eita, isso é um post :0"},
        {userId: 2, title: "postagem2", body: "eita, isso é dois post :0"}]
    )

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${props.user.id}/posts`)
            .then((response) => response.json())
            .then((json) => {setPosts(json); setLoading(false)});
    });

    return (
        <div className="alignMent">
            <List className='postsList'>
                {posts.map((post) => (
                    <Card sx={{ maxWidth: 345, m: 2 }}>
                        <CardHeader
                            title={
                            loading ? (
                                <Skeleton
                                animation="wave"
                                height={10}
                                width="80%"
                                style={{ marginBottom: 6 }}
                                />
                            ) : (
                                props.userName
                            )
                            }
                        />
                        {loading ? (
                            <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                        ) : (
                            <CardMedia
                            component="img"
                            height="140"
                            image="https://www.rollingstone.fr/wp-content/uploads/2019/06/breaking-bad-jesse-pinkman-walter-white-1000x600.jpg"
                            alt="Jesse Pinkman and Walter White"
                            />
                        )}
                        <CardContent>
                            {loading ? (
                            <React.Fragment>
                                <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                                <Skeleton animation="wave" height={10} width="80%" />
                            </React.Fragment>
                            ) : (
                            <Typography variant="body2" color="text.secondary" component="p">
                                {
                                post.body
                                }
                            </Typography>
                            )}
                        </CardContent>
                    </Card>
                )
                )
                }
            </List>
        </div>
    )
}
export default UserPosts;