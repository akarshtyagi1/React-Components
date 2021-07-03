import React from 'react';
// import Card from './card';
import Emoji from './emojipedia';
import Details from "./emojidetails"
// import Contacts from "./contacts"

// function createCard(contact) {
//     return <Card
//         key={contact.id}
//         name={contact.name}
//         img={contact.imgURL}
//         tel={contact.phone}
//         email={contact.email}
//     />
// }

function emoji(detail) {
    return <Emoji
        emoji={detail.emoji}
        name={detail.name}
        meaning={detail.meaning}
    />
}


function App() {
    return <div className="heading-box">
        <div>
            <h1 className="emoji-heading">
                <span>emojipedia</span>
            </h1>
        </div>
        <div className="emoji-container">{Details.map(emoji)}</div>
    </div>
}

export default App;