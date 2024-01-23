import React from 'react';
import {User} from "../types";


interface Props {
    user: User;
}
const UserCard: React.FC<Props> = ({user}) => {
    return (
        <div className="card mb-2">
            <div className="row">
                <div className="col-sm-8">
                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text small">{user.description}</p>
                        <p className="card-text">{user.age}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserCard;