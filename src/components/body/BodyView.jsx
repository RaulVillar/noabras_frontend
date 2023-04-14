import HTTPService from "../../service/HTTPService";
import React, { useState, useEffect } from "react";
import Card from '../Card/Card'
import "./BodyView.css"


function BodyView() {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [editingData, setEditingData] = useState('')
    
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
        setEditingData(dataToEdit);
    }



    return (
        // <>
        //     {editingData ? (
        //         <div>
        //             <EditForm data={editingData} onSubmit={handleEdit} onCancel={handleEdit} />
        //         </div>
        //     ) : (
        <div className="main-view">
            <div>
                <div style={{ background: "white", width: "100vw", opacity: "0.2", display: "flex", justifyContent: "center", marginBottom:"2vh", marginTop:"2vh" }}>
                    <h1>Mitos y Leyendas</h1>
                </div>
                <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr", gap:"3vw", width:"90vw", justifyItems:"center", margin:"auto"}}>
                    {data.filter((legend) => legend.theme === "Mitos y Leyendas").map((legend) =>
                        <Card
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
                <div style={{ background: "white", width: "100vw", opacity: "0.2", display: "flex", justifyContent: "center", marginBottom:"2vh", marginTop:"2vh" }}>
                    <h1>Avistamientos Ovnis</h1>
                </div>
                <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr", gap:"3vw", width:"90vw", justifyItems:"center", margin:"auto"}}>
                    {data.filter((legends) => legends.theme === "Avistamientos Ovnis").map((legend) =>
                        <Card
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
                <div style={{ background: "white", width: "100vw", opacity: "0.2", display: "flex", justifyContent: "center", marginBottom:"2vh", marginTop:"2vh" }}>
                    <h1>Experiencias Paranormales</h1>
                </div>
                <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr", gap:"3vw", width:"90vw", justifyItems:"center", margin:"auto"}}>
                    {data.filter((legends) => legends.theme === "Experiencias Paranormales").map((legend) =>
                        <Card
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
            <div className="d-grid gap-2 d-md-block">
                <a className="buttonToHome" href={"/"}>
                    <button className="btn btn-secondary" type="button">INICIO</button></a>
            </div>
        </div>
        //          )} 
        //     </>
    );
}

export default BodyView