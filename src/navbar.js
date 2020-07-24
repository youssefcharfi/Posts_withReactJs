import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './posts/post.css'

class Navbar extends Component {
    render() {
        return (
            <div id='nav'>
                <nav  className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a  className="navbar-brand" href="#">Posts<span style={{color: '#FFA233'}}>L7ub</span></a>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#posts">Posts</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#addPost">Add Post</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar