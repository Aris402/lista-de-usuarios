import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${props.user.id}/comments`)
            .then((response) => response.json())
            .then((json) => {setComments(json); setLoading(false)});
    });
    
    const StyledPaper = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        maxWidth: 400,
        color: theme.palette.text.primary,
      }));

    const [loading, setLoading] = useState(true);

    var commentsFilter = comments.filter(comment => {return comment.postId === props.exportPostID})
      
    const idChecker = () => {
        return(commentsFilter.map((comment) => (
            <div>
                <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
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
                </Box>
            </div>
        )))
        
    }

    return(
        <div>
            <div className='backHeaders'>
            <a href='#' style={{color:'black', textDecoration:'none'}} onClick={() => props.backToPosts(props.user)}>
                <div className='backDiv'>
                    <ArrowBackIcon/>
                    <p style={{marginLeft: '5px'}}>Voltar</p>
                </div>
            </a>
                <h1>Comentários</h1>
            </div>
            {loading ? <h2>Carregando...</h2> : null}
            {idChecker()}
        </div>
    )
}
export default Comments;