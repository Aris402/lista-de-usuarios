import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react"

const Comments = () => {
    const [comments, setComments] = useState([
		{ postId: "1", email: "minorataide2345@hotmail.com", id: '1', body: "Vocês precisam aprender React pra ganhar dinheiro" , name: "nome"},
		{ postId: "2", email: "ataideminora4523@hotmail.com", id: '2', body: "sem condições de dar aula hoje boy", name: "nome"}
	])
    
    const StyledPaper = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        maxWidth: 400,
        color: theme.palette.text.primary,
      }));

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then((response) => response.json())
            .then((json) => {setComments(json); setLoading(false)});
    });
    return(
        <div>
            <div></div>
        </div>
    )
}
export default Comments;