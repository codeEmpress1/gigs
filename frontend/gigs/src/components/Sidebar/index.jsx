import React from 'react';
import './style.css';
const sideLinks = [
    {"name": "Dashboard", "icon": "images/Icon-home-fill.svg"},
    {"name": "Gigs", "icon": "images/Icon-briefcase.svg"},
    {"name": "Company", "icon": "images/Icon-npm-fill.svg"},
    {"name": "Account", "icon": "images/Icon-person-fill.svg"}
]

const Sidebar = () => {
    return (
        <div class="bg-light border-right" id="sidebar-wrapper">
            <div className="brand pl-5 py-5">
                <img src="images/Group 493.png" alt="logo"/>
            </div>
            <div className="pl-3">
                
                   { sideLinks.map((item, index) => 
                   <a href="#" key={index} className="side-link list-group-item list-group-item-action bg-light pb-5 "><img src={item.icon} className="nav-icon pr-2" alt="icon"/>{item.name}</a>
                   )}

            </div>
        </div>
    )
}

export default Sidebar
