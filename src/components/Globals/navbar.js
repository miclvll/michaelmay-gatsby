import React, { Component } from 'react'

import {Link} from 'gatsby'

import logo from '../../images/mmalogo.png'

import {FaCartArrowDown} from "react-icons/fa"

export default class navbar extends Component {

state = {

navbarOpen:false,

css: 'collapse navbar-collapse',

links :[
    {id:1,
    path:'/',
    text:'home' },

    {id:2,
    path:'/about',
    text:'about' },

    {id:3,
    path:'/Daihatsu',
    text:'Daihatsu' },

]

}
navbarHandler =()=> {

this.state.navbarOpen? this.state({navbarOpen:false, css:"collapse navbar-collapse"})
:this.setState({navbarOpen:true,css:"collapse navbar-collapse"})

}   
    render() {
        return

        <nav 
        
        className
  ="navbar navbar-expand-sm bg-light navbar-light">

  <Link to="/" className="navbar-brand">

  <img src= {logo} alt="logo"/>



  </Link>

<button  className="navar-toggler" type="button" onClick={this.navbarHandler}>

<span>className="navbar-toggler-icon"</span>


</button>

<div className ={this.state.css}>

<ul className="navbar-nav mx-auto">
{
 this.state.links.map(link =>
 {
     return(

         <li  key={link.id} className="nav-item">
             <Link to={link.path} className="nav-link text-capitalise">{link.text}</Link>


         </li>

     )


 }

<li className="nav-item ml-sm-5"><FaCartArrowDown>



</li>




</ul>






</div>

        </nav>
    }
}



