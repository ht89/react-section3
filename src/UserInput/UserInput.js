import React from 'react';

const UserInput = (props) => {
    return <input type="text" onChange={props.changed} defaultValue={props.username}/>;
}

export default UserInput;