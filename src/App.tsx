import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


const App = (props: any) => {
	const styles = {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
	}
	const [users, setUsers] = useState([
		{ id: 1, name: "Minora" },
		{ id: 2, name: "Ataide" },
	]);
  const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/")
			.then((response) => response.json())
			.then((json) => {setUsers(json); setLoading(false)});
	});
	return (
		<div className="App" style={styles}>
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
	);
};

export default App;