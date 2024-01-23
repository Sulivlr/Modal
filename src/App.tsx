import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import {useState} from "react";
import {User} from "../src/components/types";


function App() {

    const [users, setUsers] = useState<User[]>([]);

    const addUser = (user: User) => {
        setUsers(prevState => [...prevState, user])
    };

    return (
        <>
            <main className="container-fluid">
                <div className="row mt-2">
                    <div className="col-4">
                        <UserForm onSubmit={addUser}/>
                    </div>
                    <div className="col-4">
                        <Users users={users}/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
