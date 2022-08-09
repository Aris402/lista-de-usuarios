import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {
  ThemeProvider,
  createTheme,
  experimental_sx as sx,
} from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Check from '@mui/icons-material/Check';
import { useState, useEffect } from 'react';

const UserTasks = (props: any) => {
		const [loading, setLoading] = useState(true);
		var taskColor = ""
		var status = ""

    const [tasks, setTasks] = useState([
		{ userId: "1", title: "Ensinar React", completed: false },
		{ userId: "2", title: "Ensinar Javascrept", completed: true }
	])
	const finalTheme = createTheme({
		components: {
			MuiChip: {
				styleOverrides: {
					root: sx({
						// https://mui.com/system/getting-started/the-sx-prop/#spacing
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

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${props.user.id}/todos`)
            .then((response) => response.json())
            .then((json) => {setTasks(json); setLoading(false)});
    });

    return (
        <div className="alignMent">
				<h1>Lista de tarefas de {props.user.name}</h1>
				<div className="tasks">
					{loading ? <h2>Carregando...</h2> : null}
					<List className="tasksList">
						{tasks.map((task) => (
							<ListItemButton>
								<ListItemText primary={task.title}></ListItemText>
								{task.completed ? 
									taskColor = "success"
									:
									taskColor = "error"
								}
								<ThemeProvider theme={finalTheme}>
									<Chip
										color={taskColor}
										label={
											<span>
												 Completed
											</span>
										}
										icon={<Check fontSize="small" />}
									/>
								</ThemeProvider>
							</ListItemButton>
						))}
					</List>
				</div>
		</div>
    )
}

export default UserTasks;