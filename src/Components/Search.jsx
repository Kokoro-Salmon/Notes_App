import React from 'react'
import { MdSearch } from 'react-icons/md';
export const Search = ({handleSearchNote}) => {
  return (
    <div className="Search">
        <MdSearch className='searchIcon' size='1.3em' />
        <input type="text" placeholder='Search Here' onChange={(event)=>handleSearchNote(event.target.value)} />
    </div>
  )
}
