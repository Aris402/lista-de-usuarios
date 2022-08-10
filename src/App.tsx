import { useState, useEffect } from "react";
import UserTasks from "./screens/UsersTasks";
import UsersPage from "./screens/UsersPage";
import NavigationBar from "./screens/NavBar";
import './css/styles.css';


const App = (props: any) => {
	const [user, setUser] = useState({id: 2, name: "Ervin Howell"});
	
	const [pages, setPages] = useState(0);

	const onClickUser = (user: any) => {
		setUser(user)
		setPages(2)
	}

	const changePages = () => {
		
		if(pages == 1 || pages == 0){
			return (
					<UsersPage onChange={onClickUser}/>
				)
		}
		else if(pages == 2){
			return( 
				<UserTasks user={ user }/>
			)
		}
	}
	
	return (
		<div className="App" id="App">
				<NavigationBar/>
			{changePages()}
		</div>
	);
};

export default App;