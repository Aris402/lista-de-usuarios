import { useState, useEffect } from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './css/styles.css';
import { ThemeProvider, createTheme, experimental_sx as sx, } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Check from '@mui/icons-material/Check';


const App = (props: any) => {
	const alignMent = {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		marginTop: '30px',
	}
	const navBar = {
		bgcolor: 'rgb(18, 18, 18)',
		color: 'white',
	}
	const [users, setUsers] = useState([
		{ id: 1, name: "Minora" },
		{ id: 2, name: "Ataide" },
	]);

	const [tasks, setTasks] = useState([
		{ userId: "1", title: "Ensinar React", completed: false },
		{ userId: "2", title: "Ensinar Javascrept", completed: true }
	])

	const [loading, setLoading] = useState(true);

	useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then((response) => response.json())
            .then((json) => {setUsers(json); setLoading(false)});
	});
	useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1/todos")
            .then((response) => response.json())
            .then((json) => {setTasks(json); setLoading(false)});
	});

	const [open, setOpen] = useState(false);
	
	const isOpen = () => {
		setOpen(true);
	};
	
	const isClosed = () => {
		setOpen(false);
	};
	
	const [pages, setPages] = useState(0);

	const changePages = () => {
		if(pages == 1 || pages == 0){
			return (<div className="List" style={alignMent}>
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
	else if(pages == 2){
		return( 
		<div style={alignMent}>
			<h1>Lista de tarefas</h1>
			<div className="tasks">
				{loading ? <h2>Carregando...</h2> : null}
				<List>
					{tasks.map((task) => (
						<ListItemButton>
							<ListItemText primary={task.title}></ListItemText>
						</ListItemButton>
					))}
				</List>
			</div>
		</div>
		)
	}
	}

	const finalTheme = createTheme({
		components: {
		  MuiChip: {
			styleOverrides: {
			  root: sx({
				// https://mui.com/system/the-sx-prop/#spacing
				px: 1,
				py: 0.25,
				// https://mui.com/system/borders/#border-radius
				borderRadius: 1, // 4px as default.
			  }),
			  label: {
				padding: 'initial',
			  },
			  icon: sx({
				mr: 0.5,
				ml: '-2px',
			  }),
			},
		  },
		},
	  });

	const userTasks = () => {
		return (
			<div style={alignMent}>
			<h1>Lista de tarefas</h1>
			<div className="tasks">
				{loading ? <h2>Carregando...</h2> : null}
				<List className="tasksList">
					{tasks.map((task) => (
						<ListItemButton>
							<ListItemText primary={task.title}></ListItemText>
						</ListItemButton>
					))}

					{
						tasks.map((task) => (
							task.completed ? <ThemeProvider theme={finalTheme}>
							<Chip
							  color="success"
							  label={
								<span>
								  <b>Status:</b> Completed
								</span>
							  }
							  icon={<Check fontSize="small" />}
							/>
						  </ThemeProvider> :
							
						  <ThemeProvider theme={finalTheme}>
							<Chip
							  color="error"
							  label={
								<span>
								  <b>Status:</b> Incomplete
								</span>
							  }
							  icon={<Check fontSize="small" />}
							/>
						  </ThemeProvider>
	
						)
					}

				}
				</List>
			</div>
		</div>
		)
	}
	return (
		<div className="App" id="App">
				<Toolbar sx={navBar}>
					<IconButton onClick={open ? isClosed : isOpen} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
						Navegação
					</Typography>
				</Toolbar>
				{open ? 
					<List className="nav-bar">
						<ListItemButton onClick={() => setPages(1)}>
							<ListItemText>Usuários</ListItemText>
						</ListItemButton>
						<hr></hr>
						<ListItemButton onClick={() => setPages(2)}>
							<ListItemText>Tarefas</ListItemText>
						</ListItemButton>
						<hr></hr>
						<ListItemButton onClick={() => setPages(3)}>
							<ListItemText>Posts</ListItemText>
						</ListItemButton>
					</List>
					: null
				}
			{changePages()}
		</div>
	);
};

export default App;