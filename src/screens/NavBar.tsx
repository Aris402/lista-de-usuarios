import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import UserTasks from "./UsersTasks";
import UsersPage from "./UsersPage";
import AllTasks from './AllTasks';
import { useState } from "react";
import UserPosts from './UsersPosts';
import Login from './Login';


const NavigationBar = (props:any) => {
    const navBar = {
        bgcolor: 'rgb(18, 18, 18)',
        color: 'white',
    }
    const [open, setOpen] = useState(false);
        
    const isOpen = () => {
        setOpen(true);
    };
    
    const isClosed = () => {
        setOpen(false);
    };
    const [user, setUser] = useState({id: 2, name: "Ervin Howell"});
	
    const [pages, setPages] = useState(0);
    
    const [isLogged, setLogin] = useState(false);

	const onClickTask = (user: any) => {
		setUser(user)
		setPages(2)
	}
    
    const onClickPost = (user: any) => {
        setUser(user)
        setPages(3)
    }

    const loginChecker = () => {
        setLogin(true);
        setPages(1);
    }

    const navDisplay = () => {
        return(
            <div>
                <Toolbar sx={navBar} className='nav-Bar'>
                    <IconButton onClick={open ? isClosed : isOpen} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
                            Navegação
                    </Typography>
                </Toolbar>
                {open ? 
                    <List className="nav-list">
                        <ListItemButton onClick={() => setPages(1)}>
                            <ListItemText>Usuários</ListItemText>
                        </ListItemButton>
                        <hr></hr>
                        <ListItemButton onClick={() => setPages(4)}>
                            <ListItemText>Tarefas</ListItemText>
                        </ListItemButton>
                        <hr></hr>
                        <ListItemButton onClick={() => setPages(3)}>
                            <ListItemText>Posts</ListItemText>
                        </ListItemButton>
                    </List>
                    : null
                }
            </div>
        )
    }

	const changePages = () => {
		
		if(pages == 1){
			return (
                <div>
                    {navDisplay()}
					<UsersPage changeToTasks={onClickTask} changeToPosts={onClickPost}/>
                </div>
				)
        }
        else if(pages == 0){
            return(
                <Login logIn={loginChecker}/>
            )
        }
        else if(pages == 2){
            return(
                <div>
                    {navDisplay()}
                    <UserTasks user={ user }/>
                </div>
            )
        }
        else if(pages == 3){
            return (
                <div>
                    {navDisplay()}
                    <UserPosts user={user} userName={user.name}/>
                </div>
            )
        }
        else if(pages == 4){
			return( 
                <div>
                    {navDisplay()}
				<AllTasks userName={user.name}/>
                </div>
			)
		}
	}
    return(
        <div>
        {changePages()}
        </div>
    )
}

export default NavigationBar;