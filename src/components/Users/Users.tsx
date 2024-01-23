import React, { useState } from 'react';
import UserCard from './UserCard';
import { User } from '../../types';
import Modal from '../Modal/Modal';

interface Props {
    users: User[];
}

const Users: React.FC<Props> = ({ users }) => {
    const [showModal, setShowModal] = useState(false);

    const cancel = () => setShowModal(false)

    return (
        <>
            <h4>Players</h4>
            <button className="w-100 btn btn-primary mt-2" onClick={() => setShowModal(true)}>
                Modal
            </button>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
            <Modal
                show={showModal} title="Order"
                onClose={cancel}>
                <div className="modal-body">content</div>
                <div className="modal-footer">
                    <button
                        className="btn btn-danger"
                        onClick={cancel}>
                        Close
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default Users;
