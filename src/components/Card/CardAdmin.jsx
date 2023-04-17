import React, { useState } from 'react'

function CardAdmin(props) {
    const [title, setTitle] = useState('');
    const [theme, setTheme] = useState(props.theme);
    const [description, setDescription] = useState(props.description);
    const [location, setLocation] = useState(props.location);
    const [urlImg, setUrlImg] = useState("");

    const editCard = (event) => {
        setDescription(event.target.value);
    }

  return (
    <div key={props.id} className="card mb-3 bg-dark" style={{ width: "20vw", height:"40vh" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.url} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body text-white" style={{ width: "80%" }} >
                        <h5 className="card-title ">{props.name}</h5>
                        <input className="card-text " value={location}/>
                        <input className="card-text "value={theme}/>
                        <textarea className="card-text " value={description} onChange={(event)=>editCard(event)}/>
                        <div style={{ display: "flex", margin:"1vh", gap:"5px", position:"absolute",  }}>
                            <button className="btn btn-light"  onClick={props.onClick1}>Editar</button>
                            <button className="btn btn-light"  onClick={props.onClick2}>Borrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CardAdmin