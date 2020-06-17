import React from 'react';
import styles from "./Home.module.css"

class Full extends React.Component{
    constructor(props){
        super(props)

        this.state={
            url:props.match.url,
            datas:props.data
        }
    }




    render(){
        // console.log(this.props.match.url, this.props.data)
        var match_id=this.props.match.url.split("")
        match_id.shift()
        match_id.pop()
        match_id=match_id.join("")
        // console.log(match_id)

        var main_data=this.props.data
        var real={}

        for(var i=0; i<main_data.length; i++){
            if(main_data[i]["id"]===match_id){
                real=main_data[i]
            }
        }

        // console.log(real)
        var desc=document.createElement("div")
        desc.innerHTML=real["description"]

        var com_url=document.createElement("div")
        com_url.innerHTML=real["company_url"]

        var apply=document.createElement("div")
        apply.innerHTML=real["how_to_apply"]
        

        return(
            <div class="container-fluid">
                <div class="row">
                    <div class="col-2 offset-1 ">
                        <img src={real["company_logo"]} class="img-thumbnail m-5" alt="comp"/>
                    </div>
                    <div class="col-5 m-auto">
                        <h1 class="font-weight-bold mb-4">{real["company"]}</h1>
                        <h5 class="text-secondary">{real["title"]}</h5>
                        <h5 class="text-secondary">{real["location"]}</h5>
                        <h5 class="text-secondary">{real["type"]}</h5>
                        <h5><a href={com_url.innerText}>Visit company website</a></h5>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-10 text-monospace offset-1">
                        <p>
                        {desc.innerText}
                        </p>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col-12 mt-4">
                    <a href={apply.innerText}><button class="btn btn-primary">Apply</button></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Full