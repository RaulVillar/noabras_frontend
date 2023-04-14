import HTTPService from "../../service/HTTPService";
import React, { useState, useEffect } from "react";
import Card from '../Card/Card'
import "./BodyView.css"


function BodyView() {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [editingData, setEditingData] = useState('')
console.log(data)

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
            {data.map((legend) =>
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