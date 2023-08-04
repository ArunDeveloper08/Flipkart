import React, { useState } from 'react'
import { Typography, styled, Box } from '@mui/material'
import { MenuItem } from '@mui/material'
import { Menu } from '@mui/material'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';




const Component = styled(Menu)`
margin-top:5px;

 
`;

const Logout = styled(Typography)`
font-size:14px;
cursor:pointer;
margin-left:20px;
`

const Profile = ({ account, setAccount }) => {
   

    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }
    // const handleClose=setOpen(false);
    const handleClose = () => {
        setOpen(false);
    }

    const Logout1 = () => {
        setAccount('')
        localStorage.clear()
    }


    return (
        <div>
            <Box onClick={handleClick}>  <Typography style={{ cursor: "pointer", marginTop: 2 }} >{account} </Typography> </Box>

            <Component

                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >

                <MenuItem onClick={() => { handleClose(); Logout1(); }}>
                    <Logout> <PowerSettingsNewIcon color="primary" fontSize='small' />  Logout</Logout>
                </MenuItem>
            </Component>
        </div>
    )
}

export default Profile;