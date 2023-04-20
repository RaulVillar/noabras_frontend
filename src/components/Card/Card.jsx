import React, { useContext, useEffect, useState } from 'react'
import { RoleValue } from '../RoleValue/RoleValue';


function Card(props) {

    const [authorization, setAuthorization] = useState({ display:"none" });
    const loginRol = useContext(RoleValue);

useEffect(()=>{
    if(loginRol.rol === "admin"){
            setAuthorization({ display: "block", margin: "0.5vw" })
        }
})

    return (
        <div key={props.id} className="card mb-3 bg-dark" style={{ width: "20vw", height: "40vh", overflow: "auto" }}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={props.url} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body text-white" style={{ width: "80%" }} >
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.location}</p>
                    <p className="card-text">{props.theme}</p>
                    <p className="card-text">{props.description}</p>
                    <div style={{ display: "flex" }}>
                        <button className="btn btn-light" style={authorization} onClick={props.onClick1}>Editar</button>
                        <button className="btn btn-light" style={authorization} onClick={props.onClick2}>Borrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    )
}

export default Card