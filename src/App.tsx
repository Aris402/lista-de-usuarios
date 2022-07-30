import { useState, useEffect } from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import './css/styles.css';


const App = (props: any) => {
	const alignMent = {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
	}
	const navBar = {
		bgcolor: 'rgb(18, 18, 18)',
		color: 'white',
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
	const [open, setOpen] = useState(false);
	const isOpen = () => {
		setOpen(true);
	};
	
	  const isClosed = () => {
		setOpen(false);
	};


	return (
		<div className="App">
				<Toolbar sx={navBar}>
					<IconButton  edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
						<MenuIcon onClick={open ? isClosed : isOpen} />
					</IconButton>
					<Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
						Navegação
					</Typography>
				</Toolbar>
				{open ? 
					<List className="nav-bar">
						<ListItemButton>
							<ListItemText>Tarefas</ListItemText>
						</ListItemButton>
						<ListItemButton>
							<ListItemText>Posts</ListItemText>
						</ListItemButton>
					</List>
					: null
				}
			<div className="List" style={alignMent}>
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
		</div>
	);
};

export default App;