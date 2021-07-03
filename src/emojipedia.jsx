import React from "react";

function emojipedia(props) {
    return <dl className="emoji-card-box">
        <span className="emoji">{props.emoji}</span>
        <dt className="emoji-title">{props.name}</dt>
        <dd className="emoji-detail">
            {props.meaning}
        </dd>
    </dl>
}

export default emojipedia;