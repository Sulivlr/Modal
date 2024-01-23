import React, {useState} from 'react';
import {User, UserForm} from "../types";
import {Roles} from "../constant";


interface Props {
    onSubmit: (user: User) => void;
}


const UserForm: React.FC<Props> = ({onSubmit}) => {

    const [user, setUser] = useState<UserForm>({
        name: '',
        description: '',
        age: 0,
        role: '',
        isActive: false,
    });

    const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setUser(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const changeIsActive = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(prevState => ({
            ...prevState,
            [e.target.name]: e.target.checked,
        }));
    };

    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            id: Math.random().toString(),
            ...user,
            age: parseInt(String(user.age)),
        });
    };

    return (
        <form onSubmit={formSubmit}>
            <h4>Add new player!</h4>
            <div className="form-group">
                <label htmlFor="name">Nickname</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={user.name}
                    onChange={changeUser}
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
                    className="form-control"
                    value={user.description}
                    onChange={changeUser}
                />
            </div>

            <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    name="age"
                    id="age"
                    className="form-control"
                    value={user.age}
                    onChange={changeUser}
                />
            </div>

            <div className="form-group">
                <label htmlFor="Role">Role</label>
                <select
                    required
                    name="role"
                    id="role"
                    className="form-select"
                    value={user.role}
                    onChange={changeUser}
                >
                    <option value="">Select a role</option>
                    {Roles.map(role => (
                        <option key={role.value} value={role.value}>{role.label}</option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="age">Is Active?</label><br/>
                <input
                    type="checkbox"
                    name="isActive"
                    id="isActive"
                    className="form-check-input"
                    checked={user.isActive}
                    onChange={changeIsActive}
                />
            </div>

            <button type="submit" className="btn btn-primary mt-3">Add</button>


        </form>
    );
};

export default UserForm;