import HTTPService from "../../service/HTTPService";
import React, { useState, useEffect } from "react";
import Card from '../Card/Card'
import "./BodyView.css"
import CardAdmin from "../Card/CardAdmin";

function BodyView() {
    const [cardEdit, setCardEdit] = useState('')
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [editingData, setEditingData] = useState('');
    const [styleSectionMyths, setStyleSectionMyths] = useState({ background: "white", width: "100vw", opacity: "0.2", display: "flex", justifyContent: "center", marginBottom: "2vh", marginTop: "2vh" });
    const [styleSectionSightings, setStyleSectionSightings] = useState({ background: "white", width: "100vw", opacity: "0.2", display: "flex", justifyContent: "center", marginBottom: "2vh", marginTop: "2vh" });
    const [styleSectionExperiences, setStyleSectionExperiencies] = useState({ background: "white", width: "100vw", opacity: "0.2", display: "flex", justifyContent: "center", marginBottom: "2vh", marginTop: "2vh" });

    useEffect(() => {
        function handleTextChange(event) {
            setEditingData(event.detail);
        }
        document.addEventListener('textChanged', handleTextChange);
        return () => {
            document.removeEventListener('textChanged', handleTextChange);
        };
    }, []);
    
    useEffect(() => {
        var result = filteredData.filter((item) => {
            if (item.name.toString().toLowerCase().includes(editingData.toLowerCase())
            || item.location.toString().toLowerCase().includes(editingData.toLowerCase())) {
                return item
            }
        });
        setData(result);        
    }, [editingData])

    useEffect(() => {
    const myths = data.filter((legend) => legend.theme === "Mitos y Leyendas");

    myths.length === 0 
    ? setStyleSectionMyths({ display: "none" }) 
    : setStyleSectionMyths({ background: "white", width: "100vw", opacity: "0.2", display: "flex", justifyContent: "center", marginBottom: "2vh", marginTop: "2vh" })
    
    const experiencies = data.filter((legend) => legend.theme === "Experiencias Paranormales");
    experiencies.length === 0 
    ? setStyleSectionExperiencies({ display: "none" }) 
    : setStyleSectionExperiencies({ background: "white", width: "100vw", opacity: "0.2", display: "flex", justifyContent: "center", marginBottom: "2vh", marginTop: "2vh" })
    
    const sightings = data.filter((legend) => legend.theme === "Avistamientos Ovnis");
    sightings.length === 0 
    ? setStyleSectionSightings({ display: "none" }) 
    : setStyleSectionSightings({ background: "white", width: "100vw", opacity: "0.2", display: "flex", justifyContent: "center", marginBottom: "2vh", marginTop: "2vh" })
    });

    useEffect(() => {
        HTTPService().getAllData()
            .then(response => {
                setData(response);
                setFilteredData(response);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

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
        setCardEdit(dataToEdit);
    }



    return (
        <>
            {/* {editingData ? (
                <div>
                    <EditForm data={editingData} onSubmit={handleEdit} onCancel={handleEdit}/>
                </div>
            ) : ( */}
            <div className="main-view">
                <div>
                    <div style={styleSectionMyths}>
                        <h1>Mitos y Leyendas</h1>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr", gap: "3vw", width: "90vw", justifyItems: "center", margin: "auto" }}>
                        {data.filter((legend) => legend.theme === "Mitos y Leyendas").map((legend) =>
                            <CardAdmin
                                legend={legend}
                                id={legend.id}
                                name={legend.name}
                                description={legend.description}
                                location={legend.location}
                                theme={legend.theme}
                                url={legend.url}
                                onClick1={() => handleEdit(legend.id)}
                                onClick2={() => handleDelete(legend.id)}
                            />
                        )}
                    </div>
                </div>
                <div>
                    <div style={styleSectionSightings}>
                        <h1>Avistamientos Ovnis</h1>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr", gap: "3vw", width: "90vw", justifyItems: "center", margin: "auto" }}>
                        {data.filter((legends) => legends.theme === "Avistamientos Ovnis").map((legend) =>
                            <Card
                                legend={legend}
                                id={legend.id}
                                name={legend.name}
                                description={legend.description}
                                location={legend.location}
                                theme={legend.theme}
                                url={legend.url}
                                // onClick1={() => handleEdit(legend.id)}
                                onClick2={() => handleDelete(legend.id)}
                            />
                        )}
                    </div>
                </div>
                <div>
                    <div style={styleSectionExperiences}>
                        <h1>Experiencias Paranormales</h1>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr", gap: "3vw", width: "90vw", justifyItems: "center", margin: "auto" }}>
                        {data.filter((legends) => legends.theme === "Experiencias Paranormales").map((legend) =>
                            <Card
                                legend={legend}
                                id={legend.id}
                                name={legend.name}
                                description={legend.description}
                                location={legend.location}
                                theme={legend.theme}
                                url={legend.url}
                                // onClick1={() => handleEdit(legend.id)}
                                onClick2={() => handleDelete(legend.id)}
                            />
                        )}
                    </div>
                </div>
                {/* <div className="d-grid gap-2 d-md-block">
                    <a className="buttonToHome" href={"/"}>
                        <button className="btn btn-secondary" type="button">INICIO</button></a>
                </div> */}
            </div>
            {/* )}  */}
        </>
    );
}

export default BodyView