import React from 'react';


function Card(props) {

    // var imgSrc = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg";

    return <div className="card">
        <div className="title">
            <h1 className="name">{props.name}</h1>
            <img src={props.img} alt="img" className="card-img" />
        </div>
        <div className="content">
            <p> {props.tel}</p>
            <p>{props.email}</p>
        </div>
    </div>
}

export default Card;