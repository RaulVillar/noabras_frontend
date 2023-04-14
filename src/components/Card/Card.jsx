import React from 'react'

function Card(props) {




    return (    
            <div key={props.id} className="card mb-3 bg-dark" style={{ width:"20vw" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.url} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-white" style={{ width: "80%" }} >
                            <h5 className="card-title ">{props.name}</h5>
                            <p className="card-text "><small className="text-body-secondary text-white">{props.location}</small></p>
                            <p className="card-text "><small className="text-body-secondary text-white">{props.theme}</small></p>
                            <p className="card-text ">{props.description}</p>
                            <div style={{display:"flex"}}>
                                <button className="btn btn-light" style={{ margin: "0.5vw" }} onClick={props.onClick1}>Editar</button>
                                <button className="btn btn-light" style={{ margin: "0.5vw" }} onClick={props.onClick2}>Borrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Card