import { useState } from "react";

function Registro() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPass] = useState("");
    const [confPass, setConfPass] = useState("");

    const clearForm = () => {
        setName("");
        setSurname("");
        setEmail("");
        setPhone("");
        setPass("");
        setConfPass("");
    };

return (
<>
    <div className="registro-container">
        <form action="">

            <input
            name="name"
            placeholder="Nombre"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <input
            name="surname"
            placeholder="Apellido"
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            />

            <input
            name="email"
            placeholder="Correo"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <input
            name="phone"
            placeholder="Telefono"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />

            <input
            name="password"
            placeholder="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPass(e.target.value)}
            />

            <input
            name="confPass"
            placeholder="Confirmar Contraseña"
            type="password"
            value={confPass}
            onChange={(e) => setConfPass(e.target.value)}
            />

            <button type="button"
            onClick={clearForm}>
            Limpiar Form
            </button>
        </form>
    </div>
</>
);
}

export default Registro;
