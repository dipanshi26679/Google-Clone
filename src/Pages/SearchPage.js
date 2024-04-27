import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import './SearchPage.css'
import { Apps } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import { StateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch'


function SearchPage() {


    const [{term}] = StateValue();

    const {data}  = useGoogleSearch(term);


    return (
        <div>
            <div className='search_header'>
                <Link to='/'>
                    <img 
                        style={{ 'height': '40px', 'marginRight': '50px' }}
                        src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
                    />
                </Link>
                <Search hideButtons />
                <div className='avatar'>
                    <IconButton>
                        <Apps />
                    </IconButton>
                    <Avatar style={{ 'height': '34px', 'width': '34px', 'marginLeft': '10px' }} />
                </div>

            </div>
            <div className='search_options_left'>
                <Link style={{ 'border': '1px solid lightgray', 'color': 'black', 'borderRadius': '20px', 'padding': '5px 18px 5px 18px', 'fontSize': '15px', 'textDecoration': 'none', 'marginLeft': '210px' }} to={'/all'}>All</Link>
                <Link style={{ 'border': '1px solid lightgray', 'color': 'black', 'borderRadius': '20px', 'padding': '5px 18px 5px 18px', 'fontSize': '15px', 'textDecoration': 'none', 'marginLeft': '8px' }} to={'/Images'}> Images</Link>
                <Link style={{ 'border': '1px solid lightgray', 'color': 'black', 'borderRadius': '20px', 'padding': '5px 18px 5px 18px', 'fontSize': '15px', 'textDecoration': 'none', 'marginLeft': '8px' }} to={'/News'}> News</Link>
                <Link style={{ 'border': '1px solid lightgray', 'color': 'black', 'borderRadius': '20px', 'padding': '5px 18px 5px 18px', 'fontSize': '15px', 'textDecoration': 'none', 'marginLeft': '8px' }} to={'/Shopping'}> Shopping</Link>
                <Link style={{ 'border': '1px solid lightgray', 'color': 'black', 'borderRadius': '20px', 'padding': '5px 18px 5px 18px', 'fontSize': '15px', 'textDecoration': 'none', 'marginLeft': '8px' }} to={'/Maps'}>Maps</Link>
                <Link style={{ 'border': '1px solid lightgray', 'color': 'black', 'borderRadius': '20px', 'padding': '5px 18px 5px 18px', 'fontSize': '15px', 'textDecoration': 'none', 'marginLeft': '8px' }} to={'/Videos'}> Videos</Link>
                <Link style={{ 'border': '1px solid lightgray', 'color': 'black', 'borderRadius': '20px', 'padding': '5px 18px 5px 18px', 'fontSize': '15px', 'textDecoration': 'none', 'marginLeft': '8px' }} to={'/Example'}> Example</Link>
                <p>Settings       Tools</p>
            </div>
            {
        term && (
            <div>
            <div>
                <p style={{ 'marginLeft': '210px', 'color': 'gray', 'fontSize': '15px' }} >About {data?.searchInformation?.formattedTotalResults} results ({data?.searchInformation?.formattedSearchTime} seconds) </p>
            </div>
            
            


            


            {
  data?.items && data.items.map(item => (
    <div className='search_result'>
      <a className='search_result_Link' href={item.link}>
        {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
            <img  src={item.pagemap?.cse_image[0].src} alt=''/>
        )}
           {item.displayLink}
      </a>
      <a  className='search_result_title' href={item.link} >
        <h2>{item.title}</h2>
      </a>
      <p className='search_result_desc'>{item.snippet}</p>
    </div>
  ))
}
          
          
            
                    </div>
                )}

        </div>

    )
}

export default SearchPage