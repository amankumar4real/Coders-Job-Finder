import React, { Component } from 'react';

class LogPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
                <div style={{margin: "80px 0px 70px 0px"}}>

                    <h1 class="offset-4 col my-5 font-weight-bolder">Sign Up:</h1>

                    <div class="offset-4 col my-5 bg-warning p-5 rounded-lg" style={{width:"400px"}}>

                        <div class="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Email</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Mobile</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" class="btn btn-danger">Sign Up</button>
                    </div>
                </div>
                )
    }
}

export default LogPage