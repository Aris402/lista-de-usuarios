import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react"

const Comments = (props:any) => {
    const [comments, setComments] = useState([
		{ postId: 1, email: "minorataide2345@hotmail.com", id: 1, body: "Vocês precisam aprender React pra ganhar dinheiro" , name: "nome"},
		{ postId: 2, email: "ataideminora4523@hotmail.com", id: 2, body: "sem condições de dar aula hoje boy", name: "nome"}
	])
    
    const StyledPaper = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        maxWidth: 400,
        color: theme.palette.text.primary,
      }));

    const [loading, setLoading] = useState(true);


    /*comments.map((comment) => (
        idChecker(comment.postId)
    )*/
      
    const idChecker = () => {
        const [sameID, compareIDs] = useState(false);
        comments.map((comment) => (
            if(props.identifier == comment.postId){
                
            }
        )

    }
    
    /*<Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
            <StyledPaper
                sx={{
                my: 1,
                mx: 'auto',
                p: 2,
                }}
            >
                <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                </Grid>
                <Grid item xs>
                    <h4>{comment.email}</h4>
                    <Typography>{comment.body}</Typography>
                </Grid>
                </Grid>
            </StyledPaper>
        </Box>*/

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then((response) => response.json())
            .then((json) => {setComments(json); setLoading(false)});
    });
    return(
        <div>
            {loading ? <h2>Carregando...</h2> : null}
            <h1>eita</h1>
        </div>
    )
}
export default Comments;