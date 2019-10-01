import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios'

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
          axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
            console.log('logging out')
            this.setState({
                redirectTo: '/'
            })
  // update the state to redirect to home
 
          }
        }).catch(error => {
            console.log('Logout error')
        
            // this.setState({
            //     redirectTo: '/'
            // })
        
        })
       
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return (
            <div>

                <header className="navbar App-header" id="nav-container">
                    <div className="col-5" >
                        {loggedIn ? (
                            <section className="navbar-section">
              
                                 
                                <Link to="/" className="btn btn-link text-secondary" >
                                <span className="text-secondary">home</span></Link>
                               
                            </section>
                        ) : (
                                <section className="navbar-section">
                                    <Link to="/" className="btn btn-link text-secondary">
                                        <span className="text-secondary">home</span>
                                        </Link>
                                        <Link to="/watcher" className="btn btn-link text-secondary">
                                    <span className="text-secondary">watcher</span>
				</Link>

                          
                                    <Link to="/login" className="btn btn-link text-secondary">
                                    <span className="text-secondary"></span>
				</Link>
                                    <Link to="/signup" className="btn btn-link">
                                    <span className="text-secondary"></span>
				</Link>
                                </section>
                            )}
                    </div>

                    <div className="col-3 col-mr-auto">
                    <div id="top-filler"></div>
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2 className="App-title">Fitness Watcher</h2>
                 
                    </div>
                    
                    <div className="col-4" align="right">
                    <Link to="/search" className="btn btn-link">
               
               <span align="right" className="text-secondary">Food Calculator</span>
              
</Link>

<Link to="/searchNews" className="btn btn-link">
               
               <span align="right" className="text-secondary">News</span>
              
</Link>

</div>
                </header>
            </div>

    
                
        );

    }
}

export default Navbar