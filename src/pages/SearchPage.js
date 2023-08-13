import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../components/StateProvider';
import Search from '../components/Search'
import useGoogleSearch from '../useGoogleSearch';
import {Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function SearchPage() {
const [{term},dispatch] = useStateValue();
// live api call
const {data} = useGoogleSearch(term);

console.log(data);
  return (
    <div className="searchPage">

       <div className="searchPage__header">
<Link to="/">
    <img className='searchPage__logo' src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
</Link>

<div className='searchBox_container'>
       <div className="searchPage__headerBody">
<Search hideButtons />
        </div>


        <div className="option__main">
<div className="options_left">
<div className="searchPage__options">
<SearchIcon/>
<Link to="/all">All</Link>

</div>


<div className="searchPage__options">
<DescriptionIcon/>
<Link to="/news">News</Link>

</div>
<div className="searchPage__options">
<ImageIcon/>
<Link to="/images">Images</Link>

</div>
<div className="searchPage__options">
<LocalOfferIcon/>
<Link to="/shopping">shopping</Link>

</div>

<div className="searchPage__options">
<LocationOnIcon/>
<Link to="/maps">maps</Link>

</div>
<div className="searchPage__options">
<MoreVertIcon/>
<Link to="/more">more</Link>

</div>
</div>

<div className="options_right">
<div className="searchPage__options">

<Link to="/settings">Settings</Link>

</div>
<div className="searchPage__options">

<Link to="/tools">Tools</Link>

</div>
</div>

</div>

</div>
       </div>
{term &&(
       <div className="searchPage__results">
<p className="searchPage__resultCount">
    About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
</p>

{data?.items.map(item=>(

    <div className="searchPage__result">
        <a href={item.link}>
{item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
    <img className='searchPage_resultImage' src={item.pagemap?.cse_image[0]?.src} alt="" />
)}

        {item.displayLink}
        </a>
    <a href={item.link} className="searchPage__resultTitle">
<h2>{item.title}</h2>
 
    </a>  
    <p className="searchPage__resultSnippet">
        {item.snippet}
    </p>
    </div>

))}



       </div>
    )}
    </div>

  )
}

export default SearchPage

