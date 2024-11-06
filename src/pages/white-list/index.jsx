import './white-list.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const WhiteList = () => {
    return <div class="WhiteListComponent">
        <div class="container">
            <form class="form">
                <TextField id="standard-basic" label="Como quieres que te llamemos" variant="standard" />
                <TextField id="standard-basic" label="Número de telefono" variant="standard" />
                <Button variant="contained">¡Apuntarme!</Button>
            </form>
        </div>
    </div>
}

export default WhiteList;
