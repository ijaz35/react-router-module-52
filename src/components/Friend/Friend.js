import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, username } = props.friend;
    const navigate = useNavigate();
    const showFriendDetail = () => {
        const path = `/friend/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h2>{name}</h2>
            <Link to={'/friend/' + id}>show details</Link>
            <button onClick={showFriendDetail}>{username} : id:{id}</button>
        </div>
    );
};

export default Friend;