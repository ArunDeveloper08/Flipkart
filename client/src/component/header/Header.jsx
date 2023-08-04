import { AppBar, Box, Toolbar, Typography, Drawer, styled, IconButton, List, ListItem } from '@mui/material';
import { Menu } from '@mui/icons-material';
import React, { useState } from 'react';
import Search from './Search';
import CustomButton from './CustomButton';



const StyledHeader = styled(AppBar)`
background:#2874f0;
height:55px;


`;
const Component = styled(Box)`
margin-left:12%;
line-height:0;
`;
const Text = styled(Typography)`
font-size:10px;
font-style:italic; 
`;

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: "none",
    }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down('md')]: {
        display: 'block;',
    }

}))






const Header = () => {
    const URL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'
    const SubUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    };

    return (

        <div>
            <StyledHeader>
                <Toolbar style={{ minHeight: 55 }}>
                    <MenuButton color="inherit" onClick={handleOpen} >
                        <Menu />
                    </MenuButton>

                    <Drawer open={open} onClose={handleClose}>
                        <Box style={{ width: 200 }} onClick={handleClose}>
                            <List>
                                <ListItem>
                                    <CustomButton />
                                </ListItem>
                            </List>
                        </Box>

                    </Drawer>


                    <Component>
                        <img src={URL} alt="img" style={{ width: 75, }} />
                        <Box sx={{ display: "flex" }}>
                            <Text>Explore <spam style={{ color: "yellow" }}>Plus</spam></Text>
                            <img src={SubUrl} style={{ width: 8, marginLeft: "4px", height: 10 }} />
                        </Box>

                    </Component>
                    <Search />
                    <CustomButtonWrapper>
                        <CustomButton />
                    </CustomButtonWrapper>
                </Toolbar>
            </StyledHeader>


        </div>
    )
}

export default Header;