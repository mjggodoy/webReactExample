import React, { Component } from 'react';

class Research extends Component {

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
            <h1 className="my-4">Projects in which we have been involved to:</h1>
            <ul className="list-group">
                <li className="list-group-item"><strong>Project name:</strong> <a href= "http://khaos.uma.es/es/percepcion" target="_blank">"Perception: Semantics in a Platform for Big Data Analysis"</a>
                    <p><strong>Principal Researcher:</strong> José F. Aldana Montes <br/> 
                    <strong>Start Date:</strong>03/2013<br/> 
                    <strong>End Date:</strong> 03/2017<br/> 
                    <strong>Reference code:</strong> TIC-7529</p>
                </li>
                <li className="list-group-item"><strong>Project name:</strong> <a href= "http://khaos.uma.es/es/BigData" target="_blank">"A Collaborative Platform for Big Data Aanalysis"</a>
                    <p><strong>Principal Researcher:</strong> José F. Aldana Montes <br/> 
                    <strong>Start Date:</strong> 03/2013<br/> 
                    <strong>End Date:</strong> 03/2017<br/> 
                    <strong>Reference code:</strong> P12-TIC-1519</p>
                </li>
                <li className="list-group-item"><strong>Project name:</strong> <a href= "http://khaos.uma.es/es/TIC-7529" target="_blank">"Towards a Platform for Exploiting and Analyzing Linked Data in the Context of Biology Systems"</a>
                    <p><strong>Principal Researcher:</strong> José F. Aldana Montes <br/> 
                    <strong>Start Date:</strong> 03/2013<br/> 
                    <strong>End Date:</strong> 03/2017<br/> 
                    <strong>Reference code:</strong> TIC-7529</p>
                </li>
                <li className="list-group-item"><strong>Project name:</strong> <a href= "http://khaos.uma.es/es/Bioledge" target="_blank">"Bio Knowledge Extractor and Modeller for Protein Production"</a>
                    <p><strong>Principal Researcher:</strong> José F. Aldana Montes <br/> 
                    <strong>Start Date:</strong> 10/2011<br/> 
                    <strong>End Date:</strong> 10/2015<br/> 
                    <strong>Reference code:</strong> 289126 (KBBE.2011.3.6-01)</p>
                </li>
                <li className="list-group-item"><strong>Project name:</strong> <a href= "http://www.aelid.es/" target="_blank">"Aelid: Spanish Association for Open Linked Data"</a>
                    <p><strong>Principal Researcher:</strong> José F. Aldana Montes <br/> 
                    <strong>Start Date:</strong> 10/2011<br/> 
                    <strong>End Date:</strong> 10/2018</p>
                </li>  
            </ul>
            <h1 className="my-4">Latest Publications:</h1>

        </div>
    );
}




export default Research;
