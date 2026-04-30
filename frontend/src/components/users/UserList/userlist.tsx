import { useState } from "react";
import "./userlist.css";

const UserList = () => {
    interface User {
        id: number;
        name: string;
        email: string;
        role: string;
        status: string;
    }
    const [usuarios, setUsuarios] = useState<User[]>([]);
    const token = localStorage.getItem("token");
    const llamarUsuarios = async () => {
            const response = await fetch("http://localhost:3000/api/v1/listarUsuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({})
            });
        
        const data = await response.json();
        if(data.status === 200){
            console.log("Usuarios obtenidos:", data.users);
            setUsuarios(data.users);
        }
    }
    llamarUsuarios();
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

export default UserList;