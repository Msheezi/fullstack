import React from 'react'
import { Link } from "react-router-dom";

export default class Dropdown extends React.Component{
    constructor(props){
        super(props)
        this.state = ({visible: false})

        this.renderLinks = this.renderLinks.bind(this)
    }


renderLinks() {
 return (
     <div id="dropdown">
        <h3 className="header-name">Hi, {this.props.header.first_name}!</h3>
         <ul>
             <li><Link to='/post/manager'>Photo Manager</Link></li>
             <li><Link to={`/users/${this.props.header.id}`}> Profile</Link></li>
         </ul>
     </div>
 )
}


    render(){
debugger 
return (
     <div id="dropdown">
            <h3 className="header-name">Hi, {this.props.header.first_name}!</h3>
            <ul>
                <li><Link to='/post/manager'>Photo Manager</Link></li>
                <li><Link to={`/users/${this.props.header.id}`}> Profile</Link></li>
            </ul>
        </div>
)

       

    }
}