import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState, useEffect } from "react";

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
                    <ListItemButton>
                        <ListItemText primary={post.title}></ListItemText>
                    </ListItemButton>
                )
                )
                }
            </List>
        </div>
    )
}
export default UserPosts;