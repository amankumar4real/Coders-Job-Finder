import React, { Component } from 'react';

class LogPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
                <div style={{margin: "80px 0px 120px 0px"}}>

                    <h1 class="offset-4 col my-5 font-weight-bolder">LOGIN:</h1>

                    <div class="offset-4 bg-warning p-5 rounded-lg col my-5" style={{width:"400px"}}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>

                    </div>
                </div>
                )
    }
}

export default LogPage