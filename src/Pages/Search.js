import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import { Mic } from '@mui/icons-material';
import CenterFocusWeakOutlinedIcon from '@mui/icons-material/CenterFocusWeakOutlined';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { StateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({ hideButtons }) {
  const [{}, dispatch] = StateValue();
  const Navigate = useNavigate();
  const [input, setInput] = useState("");

  const Search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.set_Search_Term,
      term: input
    })
    Navigate("/search");
  }

  return (
    <div>
      <form className='search'>
        <div className='search_input'>
          <IconButton style={{ 'fontSize': '12px', 'color': 'gray' }}>
            <SearchIcon />
          </IconButton >
          <input value={input} onChange={e => setInput(e.target.value)} type='text' placeholder='Search' />
          <IconButton style={{ 'fontSize': '12px', 'color': 'gray' }}>
            <Mic />
          </IconButton>
          <IconButton style={{ 'fontSize': '12px', 'color': 'gray' }}>
            <CenterFocusWeakOutlinedIcon />
          </IconButton>

        </div>
        {
          !hideButtons ? (
            <div className='buttons' style={{ 'display': 'flex', 'alignItems': 'center', 'marginTop': '40px' }}>
              <button type='submit' onClick={Search} style={{ 'padding': '10px 15px 10px 15px', 'fontSize': '14px', 'backgroundColor': '#F8F9FA', 'border': 'none', 'marginLeft': '160px' }} >
                Google Search
              </button>
              <button style={{ 'padding': '10px 15px 10px 15px', 'fontSize': '14px', 'backgroundColor': '#F8F9FA', 'border': 'none', 'marginLeft': '20px' }} >
                I'm feeling lucky
              </button>
            </div>
          ) : (
            <div className='buttons'  style={{ display: 'none', 'alignItems': 'center', 'marginTop': '40px' }}>
              <button onClick={Search} style={{ 'padding': '10px 15px 10px 15px', 'fontSize': '14px', 'backgroundColor': '#F8F9FA', 'border': 'none', 'marginLeft': '160px' }} >
                Google Search
              </button>
            </div>
          )
        }

      </form>
    </div>
  )
}

export default Search