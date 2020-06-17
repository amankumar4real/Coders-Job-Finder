import React from 'react';
import {Route, Link} from "react-router-dom";
import Home from "./components/routes/Home.jsx";
import About from "./components/routes/about_us.jsx";
import Contact from "./components/routes/contact.jsx";
import Full from "./components/routes/Full.jsx";
import LogPage from "./components/routes/Login.jsx";
import styles from './App.module.css';
import Register from "./components/routes/Register"


class App extends React.Component{
  constructor(props){
    super(props)

    this.state={
      dat:[]
    }
  }

  handleData=(lo)=>{
    this.setState({
      dat:lo
    })
  }

  render(){
  return (
    <div className="App container-fluid ">

      <div className="row mt-4 m-2">
        <div className="col-7">
          <img className="img-fluid float-left" style={{maxWidth: "5rem"}} src="developers.png" alt="logo"/>
          <h2 className="card-title text-center font-weight-bold mt-4 float-left ml-4">Job4Coders</h2>
        </div>

        <div className="col-5 my-3 text-right">
          <Link to="/Login"><button type="button"  class="btn btn-success mx-2">Login</button></Link>
          <Link to="/register"><button type="button" class="btn btn-danger mx-2">Sign Up!</button></Link>
        </div>
      </div>

      <div className="row bg-light rounded-lg mt-2 mx-2">
        <div className="col-12 py-3 text-center my-auto">
          <Link className="mx-4" to="/">Home</Link>
          <Link className="mx-4" to="/about_us">About Us</Link>
          <Link className="mx-4" to="/contact">Contact</Link>
        </div>
      </div>

      <div className="row ">
        <div className="col-10 offset-1 mt-3">
        <switch>
            <Route path="/" exact render={()=><Home fun={this.handleData}/>}/>
            <Route path="/about_us" exact strict render={()=><About />}/>
            <Route path="/contact" exact strict component={Contact}/>
            <Route path="/Login" exact strict component={LogPage}/>
            <Route path="/register" exact strict component={Register}/>
          </switch>
        </div>
        <div>
          <Route path="/:id/" exact strict render={({match})=><Full data={this.state.dat} match={match}/>}/>
        </div>
      </div>

      <div class="row mt-5">
        <div className={styles.footer}>
            <div class="mt-2 text-center">
            <Link className="mx-2" to="/">Home</Link>
            <Link className="mx-2" to="/about_us">About Us</Link>
            <Link className="mx-2" to="/contact">Contact</Link>
            </div>
            <div class="text-center mt-1">
            <img src="174848.svg" className="img-fluid ml-3" style={{maxWidth: "2rem"}} alt="fb"/>
            <img src="174855.svg" className="img-fluid ml-3" style={{maxWidth: "2rem"}} alt="insta"/>
            <img src="174876.svg" className="img-fluid ml-3" style={{maxWidth: "2rem"}} alt="twitter"/>
            </div>
            <div class="footer-copyright text-center py-3 text-secondary">
                © 2020 Copyright:
            </div>
        </div>
    </div>


    </div>
  );
  }
}

export default App;