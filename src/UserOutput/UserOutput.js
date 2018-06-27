import React from 'react';

import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p className="UserOutput__name">{props.username}</p>
            <p className="UserOutput__desc">{props.children}</p>
        </div>
    );
}

export default UserOutput;