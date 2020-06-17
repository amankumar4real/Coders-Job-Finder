import React from 'react';
// import styles from "./Home.module.css"
import Results from "./Results.jsx"
import axios from "axios"
import Full from "./Full.jsx"
import {Route, Link} from "react-router-dom";


class Home extends React.Component{

    constructor(props){
        super(props)

        this.state={
            location:"",
            skills:"",
            data:[],
            flag:false
        }
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
          });
    }

     handleSubmit=(event)=>{
        event.preventDefault()

        axios.get("https://jobs.github.com/positions.json?",{
            params:{
                description:this.state.skills.toLowerCase(),
                location:this.state.location.toLowerCase()
            }
        })
        .then((response)=>{
            this.setState({
                flag:true,
                data:response.data,
                // flag:true
            })
            // console.log(this.state.data)
        })
        .catch(error=>{
            console.log(error)
        })
        .finally(()=>{
            this.props.fun(this.state.data)
        })

        
    }

    render(){
        if(!this.state.flag){
            return (
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div class="col-10 offset-1">

                            <form className="mt-5" onSubmit={this.handleSubmit}>
                                <h1 className=" font-weight-bold mb-4">Million Offers Waiting for you ! </h1>
                                <h6>Each month, more than 7 million jobseekers turn to website in their search for work, making over</h6>
                                <h6 className="mb-4">16,000 applications every day.</h6>
                                <div class="row">
                                    <div class="col-6">
                                        <input name="skills" value={this.state.skills} onChange={this.handleChange} class="form-control" placeholder="Job Profile/ Key Skills"/>
                                        <small id="emailHelp" class="form-text text-muted">Get started here</small>
                                    </div>

                                    <div class="col-3">
                                        <input name="location" value={this.state.location} onChange={this.handleChange} class="form-control" placeholder="Location"/>
                                    </div>

                                    <div class="col-3">
                                        <input type="submit" to="/searches" value="Search" className="btn btn-primary"></input>
                                    </div>
                                </div>
                            </form>

                        </div>

                    </div>

                    <div class="row ml-3 mt-4">
                        
                        <div class="offset-1 col-11 mt-5">
                            <img src="ClipartKey_498066.png" class="img-fluid" alt="joo"/>
                        </div>

                    </div >
   
                </div>
            )
        }
        else{
            return (
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div class="col-10 offset-1">

                            <form className="mt-3" onSubmit={this.handleSubmit}>
                                <h1 className=" font-weight-bold mb-4">Search here</h1>
                                <div class="row">
                                    <div class="col-6">
                                        <input name="skills" value={this.state.skills} onChange={this.handleChange} class="form-control" placeholder="Job Profile/ Key Skills"/>
                                        <small id="emailHelp" class="form-text text-muted">Get started here</small>
                                    </div>

                                    <div class="col-3">
                                        <input name="location" value={this.state.location} onChange={this.handleChange} class="form-control" placeholder="Location"/>
                                    </div>

                                    <div class="col-3">
                                        <input type="submit" to="/searches" value="Search" className="btn btn-primary"></input>
                                    </div>
                                </div>
                            </form>

                        </div>
                            
                        <div className="col-12 mt-5" >
                            <div class="row">
                                <Results data={this.state.data}/>
                                <div class="col-10 ">
                                    {/* <Route path="/:id" component={Full}/> */}
                                </div>
                            </div>
                        </div>

                        
                    </div>    
                </div>
            )
        }
    }
}

export default Home;