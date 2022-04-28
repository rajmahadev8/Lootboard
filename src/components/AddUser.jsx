import React from 'react';
import { Fab, Container, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { CardContent,CardActions,Card,Typography,IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'

function AddUser() {
    var old_ids = JSON.parse(localStorage.getItem('ids'))
    const [ids, setIds] = useState(old_ids);
    const [userId, setUserId] = useState();
    const [name, setName] = useState()

    const getTokens = async () => {
        if (ids === null) {
            old_ids = [];
        }
        const url = `https://api.tatsu.gg/v1/guilds/780066247601291285/members/${userId}/points`;
        const tokens = await fetch(url, {
            method: 'GET',

            headers: {
                'Content-Type': 'application/json',
                'Authorization': '3Ipct0uKyQ-84EqBMeAbzIe5xzEhCmwol'
            }
        });
        const points = await tokens.json();
        console.log("data = ", points);
        console.log(ids);
        old_ids.push({ name: name, id: userId, points: points.points });
        setIds(old_ids);
        localStorage.setItem("ids", JSON.stringify(old_ids));
        setName("");
        setUserId("");

    }
    const deleteId = (id)=>{
        old_ids = old_ids.filter((e)=>{return (e.id !== id)})
        setIds(old_ids);
        console.log(old_ids);
        localStorage.setItem("ids", JSON.stringify(old_ids));
    }

    return (
        <>
            <Container maxWidth="sm" sx={{ height: "300px", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
                <TextField fullWidth label="Username" id="fullWidth" value={name} onChange={(e) => { setName(e.target.value)  }} />
                <TextField fullWidth label="UserId" id="fullWidth" value={userId} onChange={(e) => { setUserId(e.target.value)}} />
                <Fab color="primary" aria-label="add" onClick={getTokens} disabled={userId<1 || name<1}>
                    <AddIcon />
                </Fab>
            </Container>
                
            <Container sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", height:"auto" }}>
                {!ids || ids.length===0 ? (
                    <h1 >Add up Users.</h1>
                ) : (
                    
                    ids.map((ele, i ) => { return <Container maxWidth="sm" sx={{width:"auto", height: "300px", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                         
                            <Typography variant="h5" component="div">
                                {ele.name}
                            </Typography>
                            <Typography variant='h6' color="text.secondary">
                                {ele.points} 
                            </Typography>
                           
                        </CardContent>
                        <CardActions>
                        <IconButton aria-label="delete" size="large" onClick={()=>{deleteId(ele.id)}}>
                            <DeleteIcon />
                        </IconButton>
                        </CardActions>
    
                    </Card>
                </Container>})
                )}
            </Container>
        </>
    )
}

export default AddUser