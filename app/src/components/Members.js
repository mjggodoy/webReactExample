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
        <h1 className="my-4">About Us</h1>
        <h5>  Contact information about the group's members</h5>
     
    <div className="row">
        <div className="col-lg-12">
        <h2 className="my-4">Our Team: </h2>
        <h5 className="my-4">For more information click on the Khaos's web group: <a href="http://khaos.uma.es/">Khaos Website</a><br/></h5>

    </div>
   
    <div className="col-lg-4 col-sm-6 text-center mb-4">
      <img className="rounded-circle img-fluid d-block mx-auto" src="/assets/images/membersGroup/JFAM.jpg" alt="Jose Aldana Montes"></img>
      <h3>José F. Aldana Montes, PhD <br/>
        <small>Full Professor</small>
      </h3>
      <p>He is a professor belonging of the department of Conputer Languages and Computer Sciences from the University of Malaga. 
          He has more than 20 years of experience in researching and teaching about the databases field. 
          His particular fields of interests are Semantic Middleware, Semantic Web, Semantic Data and Application Integation 
          and Database Extension usign formal semantics.<br/>
          <strong>Email:</strong>  <a href="mailto:jfam@lcc.uma.es">jfam@lcc.uma.es</a><br/>
          <strong>Phone:</strong>  +34952132813 <br/>
          <strong>Postal address:</strong> Room 3.2.5 - E.T.S.I (Málaga) <br/>
    </p>
    </div> 
    <div className="col-lg-4 col-sm-6 text-center mb-4">
      <img className="rounded-circle img-fluid d-block mx-auto" src="/assets/images/membersGroup/Antonio.J.Nebro.png" alt="Antonio J. Nebro" style = {ImageProfile}></img>
      <h3>Antonio J. Nebro Urbaneja, PhD <br/>
        <small>Full Professor</small>
      </h3>
      <p>
          He is a professor belonging of the department of Computer Languages and Computer Sciences from the University of Malaga. 
          He has more than 20 years of experience in researching metaheuristics applied to solve problems in different fields. 
          His main contribution has been jMetal, which is a framework that integrates mono- and multi-objective metaheuristics.<br/>
          <strong>Email:</strong>  <a href="mailto:antonio@lcc.uma.es">antonio@lcc.uma.es</a><br/>
          <strong>Phone:</strong>  +952133310 <br/>
          <strong>Postal address:</strong> Room 3.2.15 - E.T.S.I (Málaga) <br/>
    </p>
    </div>
    <div className="col-lg-4 col-sm-6 text-center mb-4">
      <img className="rounded-circle img-fluid d-block mx-auto" src="/assets/images/membersGroup/Ismael.jpg" alt="Ismael Navas Delgado" style = {ImageProfileIsma}></img>
      <h3>Ismael Navas Delgado, PhD<br/>
        <small>Full Professor</small>
      </h3>
      <p>
          He is a professor belonging of the department of Computer Languages and Computer Sciences from the University of Malaga. He obtained his PhD in 2009 and has two masters' degrees in computer science and molecular and cellular biology.
          His main research lines are Web Semantics and Data Integration applied to fields such as Life Sciences.<br/>
          <strong>Email:</strong><a href="mailto:ismael@lcc.uma.es"> ismael@lcc.uma.es</a><br/>
          <strong>Phone:</strong>  +951952921 <br/>
          <strong>Postal address:</strong> A.2.1 Ada Byron Research Building (Ampliación de la Universidad, Teatinos, Málaga)<br/>
    </p>
    </div>
    <div className="col-lg-4 col-sm-6 text-center mb-4">
      <img className="rounded-circle img-fluid d-block mx-auto" src="/assets/images/membersGroup/MMar.jpg" alt="María del Mar Roldán" style = {ImageProfileIsma}></img>
      <h3>María del Mar Roldán García, PhD<br/>
        <small>Associate Professor</small>
      </h3>
      <p>
          She is a professor belonging of the department of Computer Languages and Computer Sciences from the University of Malaga. 
          She has currently different reseatch lines based on ontology modelling, OWL reasoning and Bioinformatics<br/>
          <strong>Email:</strong><a href="mailto:mmar@lcc.uma.es"> mmar@lcc.uma.es</a><br/>
          <strong>Phone:</strong> 951952922 <br/>
          <strong>Postal address:</strong> A.2.1 Ada Byron Research Building (Ampliación de la Universidad, Teatinos, Málaga)<br/>
    </p>
    </div>
    <div className="col-lg-4 col-md-20 text-center mb-4">
      <img className="rounded-circle img-fluid d-block mx-auto" src="/assets/images/membersGroup/JoseManuel.png" alt="" style = {ImageProfile}></img>
      <h3>José Manuel García Nieto, PhD<br/>
        <small>Researcher</small>
      </h3>
      <p>
          He is a senior researcher at the deartment of Computer Languages and Computer Sciences from the University of Malaga.<br/>
          He has a very wide experience in applying metaheuristics to solve problems in different fields such as the problem of traffic in cites or the molecular docking problem. <br/>
          <strong>Email:</strong><a href="mailto:jnieto@lcc.uma.es"> jnieto@lcc.uma.es</a><br/>
          <strong>Phone:</strong> 951952924 <br/>
          <strong>Postal address:</strong> A.2.1 Ada Byron Research Building (Ampliación de la Universidad, Teatinos, Málaga)<br/>
    </p>
    </div>
  </div>
</div>

  );
}

const ImageProfile = {
    width: "100px",
}

const ImageProfileIsma = {
    width: "130px",
}
  

export default Members;
