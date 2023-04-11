import HTTPService from "../../service/HTTPService";
import React, { useState, useEffect } from "react";
import EditForm from "../editForm/EditForm";
import "./BodyView.css"


function BodyView({ searchTerm }) {
    const [data, setData] = useState([]);
    const [editingData, setEditingData] = useState(null);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        HTTPService().getAllData()
            .then(response => {
                setData(response);

            })
            .catch(error => {
                console.log(error);

            });
    }, []);

    useEffect(() => {
        if (searchTerm) {
            const filtered = data.filter(item => {
                return item.theme.toLowerCase().includes(searchTerm.toLowerCase());
            });
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    }, [searchTerm, data]);





    const handleDelete = (id) => {
        if (window.confirm("¿Está seguro de que desea eliminar este elemento?")) {
            HTTPService().deleteData(id)
                .then(() => {
                    HTTPService().getAllData()
                        .then(response => {
                            setData(response);
                        })
                        .catch(error => {
                            console.log(error);
                        });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
    const handleEdit = (id) => {
        const dataToEdit = data.find(d => d.id === id);
        setEditingData(dataToEdit);
    }

    return (
        <>
            {editingData ? (
                <div>
                    <EditForm data={editingData} onSubmit={handleEdit} onCancel={handleEdit} />
                </div>
            ) : (
                <div className="main-view">
                    {filteredData.map((legend) => (
                        <div key={legend.id} className="card mb-3 bg-dark" style={{ maxwidth: "100px" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={legend.urlImg} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-white" style={{ width: "80%" }} >
                                        <h5 className="card-title ">{legend.name}</h5>
                                        <p className="card-text "><small className="text-body-secondary text-white">{legend.location}</small></p>
                                        <p className="card-text "><small className="text-body-secondary text-white">{legend.theme}</small></p>
                                        <p className="card-text ">{legend.description}</p>

                                        <button className="btn btn-light" style={{ margin: "15px" }} onClick={() => handleEdit(legend.id)}>Editar</button>
                                        <button className="btn btn-light" onClick={() => handleDelete(legend.id)}>Borrar</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="d-grid gap-2 d-md-block">
                        <a className="buttonToHome" href={"/"}>
                            <button className="btn btn-secondary" type="button">INICIO</button></a>
                    </div>
                </div>
            )}
        </>
    );
}

export default BodyView