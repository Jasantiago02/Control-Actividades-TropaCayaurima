import { useState } from "react";
import "./userlist.css";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const token = localStorage.getItem("token");
    

    return (
        <div className="container-userlist">
            <h1>Lista de Usuarios</h1>
            <table>
                <thead> 
                    <tr>
                        <th>Usuario</th>
                        <th>Email</th>
                        <th>Cargo</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{user.status}</td>
                            <td>
                                <button>Editar</button>
                                <button>Borrar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}