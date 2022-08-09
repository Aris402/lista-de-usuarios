import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState, useEffect } from 'react';

const UserTasks = (props: any) => {
    const [loading, setLoading] = useState(true);

    const [tasks, setTasks] = useState([
		{ userId: "1", title: "Ensinar React", completed: false },
		{ userId: "2", title: "Ensinar Javascrept", completed: true }
	])

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
							</ListItemButton>
						))}
					</List>
				</div>
		</div>
    )
}

export default UserTasks;