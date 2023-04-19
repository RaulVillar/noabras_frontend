import React, { useEffect, useState } from 'react'
import HTTPService from '../../service/HTTPService';

function CardAdmin(props) {
    const [title, setTitle] = useState(props.name);
    const [theme, setTheme] = useState(props.theme);
    const [description, setDescription] = useState(props.description);
    const [location, setLocation] = useState(props.location);
    const [urlImg, setUrlImg] = useState(props.url);

    console.log(description);

    const editTitle = (event) => {
        setTitle(event.target.value)
    }
    const editTheme = (event) => {
        setTheme(event.target.value)
    }
    const editLocation = (event) => {
        setLocation(event.target.value)
    }
    const editDescription = (event) => {
        setDescription(event.target.value)
    }


    const handleSubmit = () => {
        const data = {
            name: title,
            theme: theme,
            description: description,
            location: location,
            url: urlImg,
        }
        HTTPService().updateData(props.id, data)
    }

useEffect(() =>{
    handleSubmit()
})





    return (
        <div key={props.id} className="card mb-3 bg-dark" style={{ width: "20vw", height: "40vh", overflow: "auto" }}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={props.url} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body text-white" style={{ width: "80%" }} >
                    <input className="card-text form-control mb-3" value={title} onChange={(name) => editTitle(name)} />
                    <input className="card-text form-control mb-3" value={location} onChange={(location) => editLocation(location)} />
                    <select className="form-select mb-3" aria-label="Default select example" onChange={(theme) => editTheme(theme)}>
                        <option selected>{theme}</option>
                        <option value='Mitos y Leyendas'>Mitos y leyendas</option>
                        <option value='Avistamientos Ovnis'>Avistamientos ovnis</option>
                        <option value='Experiencias Paranormales'>Experiencias paranormales</option>
                    </select>
                    <textarea style={{overflow:"hidden", height:"auto"}} className="card-text form-control mb-3" value={description} onChange={(description) => editDescription(description)} />
                    <div style={{ display: "flex", margin: "1vh", gap: "5px", position: "absolute", }}>
                        <button className="btn btn-light" onClick={props.onClick3}>Guardar</button>
                        <button className="btn btn-light" onClick={props.onClick2}>Borrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default CardAdmin