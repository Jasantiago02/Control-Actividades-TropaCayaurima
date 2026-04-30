import { useState } from "react";
import "./userlist.css";

const UserList = async () => {
    interface User {
        id: number;
        name: string;
        email: string;
        role: string;
        status: string;
    }
    const [usuarios, setUsuarios] = useState<User[]>([]);
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ token })
      });
    
    const data = await response.json();
    setUsuarios(data.users);

    return (
        <div className="container-userlist">
            <h1>Lista de Usuarios</h1>
            <table>
                <thead> 
                    <tr>
                        <th>id</th>
                        <th>Email</th>
                        <th>Cargo</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((user) => (
                        <tr>
                            <td>{user.id}</td>
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