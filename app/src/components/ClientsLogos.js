import React, { Component } from 'react';

class ClientsLogo extends Component {

    render() {
        let array = ["coe", "uma", "lcc", "khaos", "plain"];

        let images = array.map(image => {
           return <img key={image} src={require(`../../public/assets/images/logos/${image}.png`)} alt="" className="img-responsive client-logo" style={{height: 55 + "px"}} />
        });

        return (
            <div className="col-md-12">
                { images }
            </div>
        );
    }
}

export default ClientsLogo;