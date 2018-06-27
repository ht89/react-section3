import React from 'react';

import './UserInput.css';

const UserInput = (props) => {
    const pStyle = {
        marginTop: 0,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333'
    };

    return (
        <div className="UserInput">
            <p style={pStyle}>Change username</p>
            <input type="text" onChange={props.changed} defaultValue={props.username} />
        </div>
    );
}

export default UserInput;