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
            <ul className="list-group">
                <li className="list-group-item">Cristóbal Barba-Gonzaléz, José García-Nieto, Antonio J. Nebro and José F. Aldana-Montes <br />
		            <strong>Multi-objective Big Data Optimization with jMetal and Spark</strong><br /><cite>EMO 2017 9th International Conference on Evolutionary Multi-Criterion Optimization Münster, Germany</cite> 16--30 (2017)<br/>
                    <a href="http://dx.doi.org/10.1007/978-3-319-54157-0_2" target="_blank"> doi:10.1007/978-3-319-54157-0_2</a>
                </li>
                <li className="list-group-item">María Jesús García Godoy, Esteban López-Camacho, José García-Nieto, Antonio J. Nebro and José F. Aldana-Montes: <br />
		            <strong>Molecular Docking Optimization in the Context of Multi-Drug Resistant and Sensitive EGFR Mutants</strong><br /> <cite>Molecules</cite> 21(11): 1575 (2016) <br/>
                    <a href="http://www.mdpi.com/1420-3049/21/11/1575" target="_blank"> doi:10.3390/molecules21111575</a>
                </li>
                <li className="list-group-item">María Jesús García Godoy, Esteban López-Camacho, Ismael Navas-Delgado and José F. Aldana-Montes: <br />
		            <strong>Re-constructing Hidden Semantic Data Models by Querying SPARQL Endpoints</strong><br /><cite>Database and Expert Systems Applications: 27th International Conference, DEXA 2016, Porto, Portugal, September 5-8, 2016, Proceedings, Part I</cite> 405--415 (2016)<br/>
                    <a href="http://dx.doi.org/10.1007/978-3-319-44403-1_25" target="_blank">doi:10.1007/978-3-319-44403-1_25</a>
                 </li>
                <li className="list-group-item"> Cristóbal Barba-González, José García-Nieto, María del Mar Roldán-García, Ismael Navas-Delgado, Antonio J. Nebro and José F. Aldana-Montes<br />
		            <strong>BIGOWL: Knowledge centered Big Data analytics</strong><br/><cite>Expert Systems with Applications</cite> 115: 543 - 556 (2018)<br/>
                    <a href="https://doi.org/10.1016/j.eswa.2018.08.026" target="_blank">doi:10.1016/j.eswa.2018.08.026</a>
                </li>
                <li className="list-group-item">José García-Nieto, Esteban López-Camacho, María Jesús García-Godoy, Antonio J. Nebro and José F. Aldana-Montes <br />
		            <strong>Multi-objective ligand-protein docking with particle swarm optimizers</strong><br/><cite>Swarm and Evolutionary Computation </cite>(2018)<br/>
                    <a href="https://doi.org/10.1016/j.swevo.2018.05.007" target="_blank">doi:10.1016/j.swevo.2018.05.007</a>
                 </li>
            </ul>
        </div>
    );
}




export default Research;
