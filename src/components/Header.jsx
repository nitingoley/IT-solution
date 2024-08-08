import React from 'react'
import {HashLink} from 'react-router-hash-link';
const Header = () => {
  return (
   <nav>
    <h1>IT Solution</h1>
    <main>
      <HashLink to={'/#home'}>Home </HashLink>
      <HashLink to={'/contacts'}>Contacts </HashLink>
      <HashLink to={'/#about'}>About</HashLink>
      <HashLink to={'/services'}>Services</HashLink>
      <HashLink to={'/#brand'}>Brands</HashLink>
      {/* <Link to={'/'}>Home </Link> */}
    </main>
   </nav>

  )
}

export default Header
