import React from 'react';
import { Link } from 'react-router-dom';

function Results(props){
    console.log(props.data)
    if(props.data.length===0){
        return <h1 className="col-10 offset-1 mt-4">No Data Found!</h1>
    }
    else{
        return (
                props.data.map((a,b)=>(
                <div class="card mb-3 col-6 m-2" style={{maxWidth: "500px"}}>
                    <div class="row no-gutters">
                        <div class="col-md-4 m-auto">
                            <img src={a["company_logo"]} class="card-img" alt="wha"/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <Link to={`/${a.id}/`}><h4 class="font-weight-bold">{a["company"]}</h4></Link>
                            <h6>{a["title"]}</h6>
                            <h6>Location- {a["location"]}</h6>
                            <h6>{a["type"]}</h6>
                            <small class="text-secondary">Posted- {a["created_at"]}</small>
                        </div>
                        </div>
                    </div>
                </div>
            ))       
        )
    }
}

export default Results