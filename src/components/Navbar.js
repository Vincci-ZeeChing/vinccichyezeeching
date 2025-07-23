import React from 'react';

const Navbar = ({navigateTo}) => (
  <div>
    <div className="navbar">
      <div onClick={() => navigateTo('/')} >Home</div>
      <div onClick={() => navigateTo('/about')} >About</div>
      <div onClick={() => navigateTo('/skill')}>Skills</div>
      <div onClick={() => navigateTo('/services')} >Services</div>
      <div onClick={() => navigateTo('/contact')}>Contact</div>
    </div>
  </div>
)

export default Navbar;