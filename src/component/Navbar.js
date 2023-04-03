import React from 'react'


const Navbar = () => {

  return (    

    <div>
      <nav className="navbar navbar-custom navbar-expand-lg  py-3">
  <div className="container-fluid mx-30">
    <img src="https://sdlms.deepthought.education/assets/uploads/files/system/site-logo.svg"  alt=""/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2 bgicon">
        <i className="fa-solid fa-house "></i>  
        </li>

        <li className="nav-item mx-2 bgicon">
        <i className="fa-solid fa-binoculars"></i>
        </li>
      
        <li className="nav-item mx-2 bgicon">
        <i className="fa-solid fa-screwdriver-wrench "></i>
        </li>

        <li className="nav-item mx-2 bgicon">
      <i className="fa-regular fa-bell "></i>
        </li>


      </ul>  
      </div>

  </div>
</nav>
    </div>
  )
}

export default Navbar
