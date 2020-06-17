import React from 'react';

function Contact(){
    return (
        <>
            <div style={{margin: "80px 0px 70px 0px"}}>
                <h1 class="offset-4 col my-5 font-weight-bolder">CONTACT US</h1>

                <div class="offset-4 col my-5 " style={{width:"500px"}}>
                    <form class="bg-warning p-5 rounded-lg">
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Subject</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                            <option>Select a Subject</option>
                            <option>Experience</option>
                            <option>Technical Problem</option>
                            <option>Fraud</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary mb-2">Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

// no changes

export default Contact