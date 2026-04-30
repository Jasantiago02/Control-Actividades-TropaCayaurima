import { useEffect, useState } from "react";
import "./userlist.css";

const UserList = () => {
    interface User {
        id: number;
        nombre: string;
        user: string;
        cargo: string;
        estado: string;
    }
    
    const [usuarios, setUsuarios] = useState<User[]>([]);
    const token = localStorage.getItem("token");
    useEffect(() => {
    const llamarUsuarios = async () => {
            const response = await fetch("http://localhost:3000/api/v1/listarUsuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({})
            });
        
        const data = await response.json();
        if(data){
            console.log("Usuarios obtenidos:", data);
            setUsuarios(data);
            response.status === 200 ? console.log("Usuarios obtenidos exitosamente") : console.error("Error al obtener usuarios, estado:", response.status);
        }
        else{
            console.error("Error al obtener usuarios:", data);
        }
    }
    
        llamarUsuarios();
    }, []);
    return (
        <div className="container-userlist">
            <h1>Lista de Usuarios</h1>
            <button>Agregar Usuario</button>
            <table>
                <thead> 
                    <tr>
                        <th>id</th>
                        <th>Nombre</th>
                        <th>Usuario</th>
                        <th>Cargo</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.nombre}</td>
                            <td>{user.user}</td>
                            <td>{user.cargo}</td>
                            <td>{user.estado}</td>
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