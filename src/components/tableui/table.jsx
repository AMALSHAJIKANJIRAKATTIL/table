import React from 'react'
import './table.css'
import side from './side.svg'
import logout from './logout.svg'
import topbar from './topbar.svg'
import filter from './filter.svg'

import deleteBtn from './deleteBtn.svg'
import importBtn from './importBtn.svg'
import exportBtn from './exportBtn.svg'


function Table() {
  return (
    <div className='parent'>
    <div className='container'>
        <div ><img src={side} className='logo'  alt='icon'></img></div>
        
        {/*Logout button click logic need to be implemented here */}
        
        <div className='logout'>
            <img src={logout}  alt='icon'></img>
            </div>
    </div>
<div className='leftcontainer'>

    <div className='topbar'>
        <img src={topbar} className='topimage' alt='icon'></img>

        {/* Search logic should be implemented here */}

        <input type={"email"} className='input-field' placeholder='Search by EmailId...'></input>
    </div>
    <div className='filter'>
    <img src={filter} className='filterimgstick' alt='icon'></img>
    {/* {Individual buttons} */}
    <div className='individualBtndiv'>
    <img src={deleteBtn} className='filterimg' alt='icon'></img>
    <img src={importBtn} className='filterimg' alt='icon'></img>
    <img src={exportBtn} className='filterimg' alt='icon'></img>
    </div>

    
    </div>
    
    
    {/* Write in this div the table view code */}


    </div>


    </div>
  )
}

export default Table