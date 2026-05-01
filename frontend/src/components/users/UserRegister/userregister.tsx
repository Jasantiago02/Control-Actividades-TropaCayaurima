import { useState } from "react";
import "./userregister.css";

const UserRegister = () => {
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [genero, setGenero] = useState("");
    const [telefono, setTelefono] = useState("");
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const isDisabled = !nombre || !usuario || !password ||  !genero || !telefono || !apellido || !id;

    const handleRegister = (e:any) => {
        e.preventDefault();
        console.log(id, nombre, apellido, genero, telefono, usuario, password);
    }
    return (<div className="login-container">
        <div className="login-logo">
        <img src="imagenes/azimut.png" alt="Logo" width={200}/>
        </div>
      <div className="login-card">
        <h2 className="login-title">Iniciar sesión</h2>
        <p className="text-center">Accede a tu panel de evaluacion scout</p>
        <form className="login-form" onSubmit={handleRegister}>
          <div className="form-group">
            <label>Nombre *</label>
            <input type="text" placeholder="    Juan" minLength={3} maxLength={100} value={nombre}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNombre(e.target.value)} required
            />
          </div>
          <div className="form-group">
            <label>Apellido *</label>
            <input type="text" placeholder="    Rodriges" minLength={3} maxLength={100} value={apellido}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setApellido(e.target.value)} required
            />
          </div>
          <div className="form-group">
            <label>Correo *</label>
            <input type="email" placeholder="   tu@email.com" minLength={8} maxLength={16} value={usuario}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUsuario(e.target.value)} required
            />
          </div> 
          <div className="form-group">
            <label>Cedula *</label>
            <input type="int" placeholder="  Ejem: 28131890" minLength={8} maxLength={10} value={id}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setId(e.target.value)} required
            />
          </div>
           <div className="form-group">
                <label>Telefono *</label>
                <input type="int" placeholder=" Ejem: 04262524964" minLength={8} maxLength={13} value={telefono}
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTelefono(e.target.value)} required
            />
          </div>
          <div className="form-group">
                <label>Contraseña *</label>
                <input type="password" placeholder="   ******" minLength={8} maxLength={16} value={password}
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)} required
            />
          </div>
         <div className="form-group">
            <label>Genero *</label>
           <select name="genero" id="genero" value={genero}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setGenero(e.target.value)} required>
              <option value="">Seleccionar género</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
              <option value="O">Otro</option>
            </select>
          </div>
            
          <button type="submit" className="login-button" disabled={isDisabled}>
            Registrar Usuario
          </button>
        </form>
      </div>
      <footer className="login-footer">
        <p>© 2026 Azimut Scout Pro System. All rights reserved.</p>
        <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Support</li>
        </ul>
      </footer>
    </div>)
}

export default UserRegister;