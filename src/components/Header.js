import React from 'react'

function Header() {
  return (
    <div className="header">
        <div className="logo">
            <a href="#base">
                 <img src={require("../Images/name.png")} alt="Name" width="80px" height="80px"/>
                 <img src={require("../Images/choudhary.png")} alt="Name" width="200px" height="80px"/>
            </a>
        </div>
                 
             <nav>
                <a href="#me" >Me</a>
                <a href="#profile" >Profile</a>
                <a href="#skills" >Skills</a>
                <a href="#work-education" >Work & Education</a>
                <a href="#colleague" >Colleague</a>
                <a href="#contact" >Contact</a>
            </nav>    
    </div>        
)
}
export default Header
