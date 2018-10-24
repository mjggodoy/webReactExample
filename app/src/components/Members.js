import React, { Component } from 'react';

class Members extends Component {

    render() {
        return (
            <React.Fragment>
              <Body />
            </React.Fragment>
        );
      } 
}

const Body = () => {
   
    return (
  
      <div className="container">
        <h1 class="my-4">About Us</h1>
        <h2>  Contact information about the group's members</h2>
     
     <div class="row">
        <div class="col-lg-12">
            <h2 class="my-4">Our Team</h2>
        </div>
    </div>
    <div class="col-lg-4 col-sm-6 text-center mb-4">
        <img class="rounded-circle img-fluid d-block mx-auto" src="http://placehold.it/200x200" alt=""></img>
        <h3>José F. Aldana Montes <br/>
            <small> Full Professor</small>
        </h3>
        <p>Jose is the leader of the Khaos Group. He obtained his PhD</p>
    </div>
    </div>

  );
}

export default Members;
