import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from "../components/Search"

function Home() {
  return (
    
   <div className="home">


<div className="home_header">

<div className="header_left"> 
<Link to='/about'>About</Link>
<Link to='/Store'>Store</Link>

</div>

<div className="header_right">
<Link to='/gmail'>Gmail</Link>
<Link to='/images'>Images</Link>
<AppsIcon/>
<AccountCircleIcon/>
</div>

</div>

{/* body */}
<div className="home_body">
<img src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
</div>
<div className="search_container">
  
<Search /> 

</div>

   </div>
  )
}

export default Home