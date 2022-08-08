import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState, useEffect } from "react";



const UsersPage = () =>{
    const [loading, setLoading] = useState(true);

    const [users, setUsers] = useState([
        { id: 1, name: "Minora" },
        { id: 2, name: "Ataide" },
    ]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then((response) => response.json())
            .then((json) => {setUsers(json); setLoading(false)});
    });
    return(
        <div className="usersList alignMent">
            <h1>Lista de usuários</h1>
            <div className="card">
            {loading ? <h2>Carregando...</h2> : null}
                <List>
                    {users.map((user) => (
                        <ListItemButton>
                            <ListItemText primary={user.name}></ListItemText >
                        </ListItemButton>
                    ))}
                </List>
            </div>
		</div>
    )
}

export default UsersPage;