import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={appNameStyle}>
                    Covid19 Stats
                </Typography>
                
                <Button color="inherit" component={Link} to='/'>Summary</Button>
                <Button color="inherit" component={Link} to='/detailed'>Details</Button>
                
            </Toolbar>
        </AppBar>
    )
}

export default Header;

const appNameStyle = {
    flexGrow: 1
}
