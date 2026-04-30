import { useState } from "react";
import "./login.css";
// Función para decodificar el JWT y obtener su contenido
const parseJwt = (token: string | undefined | null) => {
  try {
    // Si el token es null, undefined o una cadena vacía, salimos
    if (!token || typeof token !== 'string') return null;

    const parts = token.split('.');
    if (parts.length < 2) return null; // Un JWT siempre debe tener 3 partes (header.payload.signature)

    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    
    const jsonPayload = decodeURIComponent(
      window.atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Error al decodificar el token:", error);
    return null;
  }
};
// Funcion del login, se encarga de enviar la solicitud al backend y manejar la respuesta
const Login = () => {

    const [password, setPassword] = useState("");
    const [usuario, setusuario] = useState("");
    const isDisabled = !password || !usuario;

    const handleLogin = (e:any) => {
        e.preventDefault();
        console.log(password, usuario);
        const data = {
            usuario: usuario,
            password: password
        }
        fetch("http://localhost:3000/api/v1/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          }).then(res => res.json())
            .then(result=>{
              if(result.status ==='200' && result.token){
                const payload = parseJwt(result.token);
                console.log("Token decodificado:", payload);
              }else{
                console.error("No se recibió un token válido o el estado no es 200:", result);
              }
              
          }).catch(error=>{
              console.error("Error:", error);
          })}
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
            <input type="email" placeholder="    tu@email.com" minLength={16} maxLength={50} value={usuario}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setusuario(e.target.value)} required
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