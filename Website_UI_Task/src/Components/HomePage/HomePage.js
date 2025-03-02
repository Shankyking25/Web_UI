import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Avatar, Stack, Button, Typography,  IconButton, List, ListItem, ListItemText, Card, CardContent, CardMedia,  InputBase,  Box } from "@mui/material";
import { Home, Notifications, ShoppingCart, Chat, AccountBalanceWallet, Subscriptions, AccountCircle, Settings } from "@mui/icons-material";
import { Search, Menu, MoreVert, Logout,FavoriteBorder, Comment, Share } from "@mui/icons-material";
import img3 from "../../Imgs/img3.jpg"
import img4 from "../../Imgs/img4.jpg"
import img6 from "../../Imgs/girl5.jpg"
import img7 from "../../Imgs/girl2.jpg"




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function HomePage(props) {



    const [selected, setSelected] = useState("Home");

    const menuItems = [
        { text: "Home", icon: <Home /> },
        { text: "Notifications", icon: <Notifications /> },
        { text: "Shop", icon: <ShoppingCart /> },
        { text: "Conversation", icon: <Chat /> },
        { text: "Wallet", icon: <AccountBalanceWallet /> },
        { text: "Subscription", icon: <Subscriptions /> },
        { text: "My Profile", icon: <AccountCircle /> },
        { text: "Settings", icon: <Settings /> }
    ];






    return (
        <>     
        <Grid style={{backgroundColor:"#F5F5F5"}}>

            
            <Box sx={{ flexGrow: 1 ,pt:2}} >
                <Grid container spacing={3} alignItems="center"  >
                <Grid size={{ xs: 1, md: 2, lg: 3 }}  style={{ backgroundColor:"white",borderRadius: "10px" }}>
                    <Item sx={{ pl: 3 ,border:"none",background: "transparent", boxShadow: "none"}}>
                     <Typography variant="h4" sx={{ textAlign: "left",color:"black",fontWeight:"bold",fontFamily: "Mongolian Baiti, sans-serif" }}>
                         LOGO</Typography>
                    </Item>
                </Grid>

                    <Grid size={{ xs: 10, md: 8, lg:6, }}  style={{background:"white",borderRadius: "10px"}}>
                        <Item sx={{background: "transparent", boxShadow: "none", display: "flex", justifyContent: "space-between", alignItems: "center", p: 1 }}>
                            <Box sx={{ pl: 1,display: "flex", alignItems: "center", flexGrow: 1 }}>
                                <Search />
                                <InputBase placeholder="Search here..." sx={{ ml: 1, flex: 1 }} />
                            </Box>
                            <IconButton edge="end" color="inherit" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Menu fontSize="medium" /> 
                                <Typography variant="body2" sx={{mr:2}} >Filters</Typography>
                                
                            </IconButton>
                        </Item>
                    </Grid>
                    
                    <Grid 
                      size={{ xs: 1, md: 2, lg: 3 }} 
                      style={{
                          background: "#88C2BB",
                          borderRadius: "10px",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "fit-content",
                        }}>
                        <Item  sx={{background: "transparent", boxShadow: "none"}}>
                           <Typography variant="body2" align="center" sx={{color:"white"}}>Become a Seller</Typography>
                        </Item>
    
                    </Grid>


                </Grid>
            </Box> 



<br/>


            <Box sx={{ flexGrow: 1 }}   >
               
               
                <Grid container spacing={3}  style={{height: "100vh", overflowY: "auto"}}>
               
               
                    <Grid size={{ xs: 1, md: 2, lg:3 }}   style={{backgroundColor:"white",borderRadius: "10px" ,display: "flex", flexDirection: "column"}}>
                   
                    
            
                    <List>
                      {menuItems.map(({ text, icon }) => (
                      <ListItem 
                        button 
                        key={text} 
                        onClick={() => setSelected(text)}
                        sx={{ 
                        
                        display: "flex", 
                        gap: 2, 
                        color:selected === text ? "black" : "gray",
                        borderLeft: selected === text ? "4px solid #88C2BB" : "4px solid transparent",
                        "&:hover": {
                            backgroundColor: "rgba(173, 216, 230, 0.2)"
                        }
                        }}
                       >
                       {icon}
                    <ListItemText 
                        primary={text} 
                        sx={{color:selected === text ? "black" : "gray"}}
                        primaryTypographyProps={{ fontWeight: selected === text ? "bold" : "normal" }} // ✅ Correct way to make text bold
                    />
                </ListItem>
            ))}
        </List>
        <Box sx={{ mt: "auto", p: 2, display: "flex", justifyContent: "flex-start" }}>
    <Button 
        fullWidth 
        color="success" 
        startIcon={<Logout sx={{ fontSize: "2rem" }} />} 
        sx={{ justifyContent: "flex-start", pl: 2,textTransform: "none", fontSize: "1.2rem",  }} 
    >
        Log out
    </Button>
</Box>
              
 </Grid>




  <Grid 
    container 
    size={{ xs: 10, md: 8, lg: 6 }} 
    spacing={4} 
    sx={{
        backgroundColor: "#F5F5F5",
        borderRadius: "10px",
        maxHeight: "100vh", 
        overflowY: "auto",  
        scrollbarWidth: "none", 
        "&::-webkit-scrollbar": { display: "none" } 
    }}
>
    {[...Array(3)].map((_, index) => (
        <Grid item xs={12} key={index}>
            <Card sx={{p:1, borderRadius: "10px", position: "relative", overflow: "hidden" }}>
                <CardContent>
                    <Box  display="flex" alignItems="center" justifyContent="space-between">
                        <Box display="flex" alignItems="center">
                            <Avatar src={img7} sx={{ mr: 2, borderRadius: "8px", width: 48, height: 48, border: "2px solid gray" }} />
                            <Box>
                                <Typography variant="h6">Lara Leones</Typography>
                                <Typography variant="body2" color="textSecondary">@thewallart</Typography>
                            </Box>
                        </Box>
                        <IconButton><MoreVert /></IconButton>
                    </Box>
                    <Typography sx={{ mt: 2, color: "black" }} variant="body1" color="textSecondary">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        <Typography component="span" sx={{ color: "#FF5E8A", cursor: "pointer" }}>
                            Read More
                        </Typography>
                    </Typography>
                    <Card sx={{ mb: 3, borderRadius: "12px", position: "relative" }}>
                       
                        {/* Heart Icon on Top Right Inside Card */}
                        <Box 
                            sx={{ 
                                position: "absolute", 
                                top: 26, 
                                right: 14, 
                                borderRadius: "50%", 
                                p: 0.5,
                                zIndex: 2 
                            }}
                        >
                            <IconButton sx={{ p: 0.5 }}>
                                <FavoriteBorder sx={{ color: "white", fontSize: "1.8rem" }} />
                            </IconButton>
                        </Box>

                        {/* Card Image */}
                        <CardMedia 
                            component="img" 
                            height="300" 
                            image={img4} 
                            sx={{ mt: 2, borderRadius: "12px" }} 
                        />
                    </Card>

                    <hr />
                    <Box display="flex" justifyContent="flex-start" gap={1} sx={{ mt: 2 }}>
                        <IconButton sx={{ gap: 1 }}>
                            <FavoriteBorder sx={{ fontSize: "1.8rem", color: "black" }} />
                            <Typography sx={{ fontSize: "0.95rem", fontWeight: "bold", color: "black" }}>9.8k</Typography>
                        </IconButton>
                        <IconButton sx={{ gap: 1 }}>
                            <Comment sx={{ fontSize: "1.8rem", color: "black" }} />
                            <Typography sx={{ fontSize: "0.95rem", fontWeight: "bold", color: "black" }}>8.6k</Typography>
                        </IconButton>
                        <IconButton sx={{ gap: 1 }}>
                            <Share sx={{ fontSize: "1.8rem", color: "black" }} />
                            <Typography sx={{ fontSize: "0.95rem", fontWeight: "bold", color: "black" }}>7.2k</Typography>
                        </IconButton>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    ))}
</Grid>




                
                 
<Grid 
    size={{ xs: 1, md: 2, lg: 3 }}   
    sx={{ 
        textAlign: "center", 
        padding: "10px", 
        backgroundColor: "#F5F5F5",
        overflowY: "auto",  
        maxHeight: "100vh", 
        scrollbarWidth: "none",  
        "&::-webkit-scrollbar": { display: "none" } 
    }}
>
    <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Typography variant="body1" sx={{ cursor: "pointer", p: 1, fontWeight: "bold" }}>Artists</Typography>
        <Typography variant="body1" sx={{ cursor: "pointer", p: 1, color: "gray" }}>Photographers</Typography>
    </Box>

    <Grid sx={{ mt: 3 }}>
        <Stack spacing={4}>
            {[...Array(6)].map((_, index) => (
                <Box key={index} sx={{ position: "relative", width: "100%" }}>
                    <Box 
                        component="img"
                        src={img3}
                        alt={`Card ${index + 1}`}
                        sx={{ width: "100%", height: "150px", borderRadius: "12px", objectFit: "cover" }}
                    />
                    <Box 
                        sx={{ 
                            position: "absolute", 
                            bottom: 0, 
                            left: 0, 
                            width: "100%", 
                            color: "white", 
                            p: 1, 
                            borderBottomLeftRadius: "12px", 
                            borderBottomRightRadius: "12px"
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ position: "relative", display: "inline-block" }}>
                                <Avatar  
                                    src={img6} 
                                    sx={{ mb: 1, width: 48, height: 48, borderRadius: "8px", border: "2px solid white" }} 
                                />
                                <Box 
                                    sx={{ 
                                        width: 8, 
                                        height: 8, 
                                        bgcolor: "#0EC297", 
                                        borderRadius: "50%", 
                                        position: "absolute", 
                                        top: -2,  
                                        right: 1, 
                                        border: "2px solid white" 
                                    }} 
                                />
                            </Box>
                            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" sx={{ ml: 1 }}>
                                <Typography variant="body1" sx={{ fontSize: "1rem" }}>Thomas Edward</Typography>
                                <Typography variant="caption">@thewildwithyou</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Stack>
    </Grid>
</Grid>

</Grid>
</Box> 
</Grid>
</> 
    );
}

export default HomePage;
