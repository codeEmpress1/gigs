import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import './styles.css';

const Layout = (props) => {
        const [toggle, setToggle]= useState(true);

        return (
            <div className={`d-flex ${toggle? "" : "toggled"}`} id="wrapper">
              <Sidebar/>
              <div id="page-content-wrapper">
           
              <nav class="navbar navbar-expand-lg gig-nav">
                  <button class="btn btn-primary" id="menu-toggle" onClick={() => setToggle(!toggle)}>Menu</button>

                  <div className="search-group">
                      <span className="search-icon pr-1 pl-1"><i className="fa fa-search"></i></span>
                      <input className="search-input" type="search" placeholder="Search" name="search"/>
                  </div>

                  <button style={{border: "1px solid red"}} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span  className="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav ml-auto mt-2 mt-lg-0 nav-icons">
                          <li class="nav-item">        
                              <a className="nav-link" href="#"><img src="images/group 140.svg" alt=""/></a>
                          </li>
                        <li class="nav-item">
                            <a className="nav-link" href=""><img src="images/Icon-settings.svg" alt=""/></a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href=""><img src="images/Icon-email.svg" alt=""/></a>
                        </li>
                        <li class="nav-item">
                            <img src="images/Rectangle-13.png" alt=""/>
                        </li>
                    </ul>
                  </div>
              </nav>

              {props.children}
</div>
</div>
)}

export default Layout
