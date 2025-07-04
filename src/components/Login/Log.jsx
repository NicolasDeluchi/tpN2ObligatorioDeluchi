import { useState } from "react";

function Log() {
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");

    const clearForm = () => {
        setEmail("");
        setPass("");
    };

return (
<>
    <div className="registro-container">
        <form action="">

            <input
            name="email"
            placeholder="Correo"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <input
            name="password"
            placeholder="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPass(e.target.value)}
            />

            <button type="button"
            onClick={clearForm}>
            Ingresar
            </button>
        </form>
    </div>
</>
);
}

export default Log;
