import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import './Home.css'
import Search from './Search';


function Home() {
    return (
        <div className='home' >
            <div className='home__header'>
                    <p> Gmail</p>
                    <p > Images </p>
                    <IconButton style={{'marginLeft': '20px'}}>
                        <AppsIcon/>
                    </IconButton>
                    <IconButton style={{'marginLeft': '10px'}} >
                        <Avatar style={{ 'height': '34px','width': '34px'}}/>
                    </IconButton>
                
            </div>
            <div className='home_body'>
                <img style={{'paddingBottom':'20px'}} src='https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' />
                <div className='home_searchInput'>
                    <Search/>
                </div>
            </div>


            <div className='footer' >
                <div className='footer1'>
                    <p style={{'fontSize': '15px'}}>India</p>   
                </div>
                <div className='footer2'>
                    <div className='footer2_left'>
                        <p style={{'fontSize': '15px'}}>About</p>
                        <p style={{'fontSize': '15px'}}>Advertising</p>
                        <p style={{'fontSize': '15px'}}>Bussines</p>
                        <p style={{'fontSize': '15px'}}>How search works</p>
                    </div>
                    <div className='footer2_right'>
                        <p style={{'fontSize': '15px'}}>Privacy</p>
                        <p style={{'fontSize': '15px'}}>Terms</p>
                        <p style={{'fontSize': '15px'}}>Settings</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home