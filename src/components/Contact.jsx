import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({email: "",message: ""});
    // const [formData, setFormData] = useState({name: "",email: "",message: ""});

    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Correo: ${formData.email}, Descripción: ${formData.message}`
        // alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
};

    return (
        <form onSubmit={handleSubmit}>
            <div className="row g-3 mb-3 align-items-center container-lg">
                {/* <label htmlFor="name">Nombre:</label>
                <input className="form-label" type="text" id="name" name="name" value={formData.name} onChange={handleChange}/> */}

                <label htmlFor="email">Correo:</label>
                <input className="form-label" type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

                <label htmlFor="message">Descripción:</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>

                <button className="btn btn-danger" type="submit">Submit</button>

            </div>
        </form>
    );
}
