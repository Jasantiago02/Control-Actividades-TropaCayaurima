import { useState } from "react";
import "./login.css";


const Login = () => {

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const isDisabled = !password || !username;

    const handleLogin = (e:any) => {
        e.preventDefault();
        console.log(password, username);
        const data = {
            username: username,
            password: password
        }
        fetch
    }
    return (
    <div className="login-container">
        <div className="login-logo">
        <img src="imagenes/azimut.png" alt="Logo" width={200}/>
        </div>
      <div className="login-card">
        <h2 className="login-title">Iniciar sesión</h2>
        <p className="text-center">Accede a tu panel de evaluacion scout</p>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label>Correo electronico *</label>
            <input type="email" placeholder="    tu@email.com" minLength={16} maxLength={50} value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} required
            />
          </div>
          <div className="form-group">
            <label>Contraseña *</label>
            <input type="password" placeholder="    **********" minLength={8} maxLength={16} value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)} required
            />
          </div>
          <div className="form-options">
              <div>
                <input type="checkbox" id="remember" />
                <label id="remember">Recordarme</label>
              </div>
            <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
          </div>
          <button type="submit" className="login-button" disabled={isDisabled}>
            Iniciar sesión
          </button>
          <div className="form-footer">
            <p>¿No tienes una cuenta? <a href="#">Contactar administrador</a></p>
          </div>
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
    </div>
  );
}
export default Login;