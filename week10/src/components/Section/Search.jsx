import React from 'react'
import SearchIcon from '../../assets/img/Search/ic_search.svg'
import Close from '../../assets/img/Menu/ic_close.svg'

const Search = ({ onClose }) => {
  return (
    <div className='Search_wrap'>
      <div className="search_content">
        <div className="search_top">
            <img src={SearchIcon} alt="SearchIcon" />
            <input className='search_bar' type="text" placeholder='Search items' />
            <img src={Close} alt="Close" onClick={onClose} />
        </div>
        <p>Popular search terms</p>
        <div className="search_term_list">
            <div>Trend</div>
            <div>Dress</div>
            <div>Bag</div>
            <div>Tshirt</div>
            <div>Beauty</div>
            <div>Accessories</div>
        </div>
      </div>
    </div>
  )
}

export default Search
