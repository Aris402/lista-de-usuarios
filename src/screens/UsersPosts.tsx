import { ClassNames } from "@emotion/react";
import { useState, useEffect } from "react";

const UserPosts = (props:any) => {
    const [loading, setLoading] = useState(true);

    const [posts, setPosts] = useState([
        {userId: 1, title: "postagem1", body: "eita, isso é um post :0"},
        {userId: 2, title: "postagem2", body: "eita, isso é dois post :0"}]
    )

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${props.user.id}/todos`)
            .then((response) => response.json())
            .then((json) => {setPosts(json); setLoading(false)});
    });

    return (
        <div className="alignMent">
            
        </div>
    )
}
export default UserPosts;