import React from "react";
import Details from "./emojidetails";


function Emojipedia(props) {
    return <dl className="emoji-card-box">
        <span className="emoji">{props.emoji}</span>
        <dt className="emoji-title">{props.name}</dt>
        <dd className="emoji-detail">
            {props.meaning}
        </dd>
    </dl>
}

function emoji(detail) {
    return <Emojipedia
        emoji={detail.emoji}
        name={detail.name}
        meaning={detail.meaning}
    />
}


function emojiApp() {
    return <div className="heading-box">
        <div>
            <h1 className="emoji-heading">
                <span>emojipedia</span>
            </h1>
        </div>
        <div className="emoji-container">{Details.map(emoji)}</div>
    </div>
}


export default emojiApp;