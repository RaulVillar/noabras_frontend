import React, { useState } from "react";
import { Button, Form, TextArea } from 'semantic-ui-react';
import HTTPService from "../../service/HTTPService";
import InputPhoto from '../inputPhoto/inputPhoto';

const EditForm = ({ data, setData, onCancel }) => {
    const [editedData, setEditedData] = useState({ ...data });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedData({ ...editedData, [name]: value });

    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const updatedData = await HTTPService().updateData(data.id, editedData);
            setData(updatedData);
        } catch (error) {
            console.log(error);

        }
    };


    return (
        <div className='main-form'>
            <h2>EDITAR</h2>
            <Form className='create-form' onSubmit={handleSubmit}>
                <Form.Field>
                    <label>TÍTULO</label>
                    <input value={editedData.name} onChange={handleInputChange} type="text" id="name" name="name" />
                </Form.Field>
                <Form.Field>
                    <label>DESCRIPCIÓN</label>
                    <TextArea value={editedData.description} onChange={handleInputChange}
                        rows={7} id="description" name="description" />
                </Form.Field>
                <Form.Field label='TIPO' id="theme" control='select' onChange={handleInputChange}
                    value={editedData.theme} >
                    <label>TIPO</label>
                    <input type="text" />
                    <option value='Mitos y leyendas'>Mitos y leyendas</option>
                    <option value='Avistamientos ovnis'>Avistamientos ovnis</option>
                    <option value='Experiencias paranormales'>Experiencias paranormales</option>
                </Form.Field>
                <Form.Field>
                    <label>LOCALIZACIÓN</label>
                    <input value={editedData.location} onChange={handleInputChange} type="text" id="location" name="location" />
                </Form.Field>
                <Form.Field>
                    <label>IMAGEN</label>
                    <input value={editedData.url} onChange={handleInputChange} type="text" id="exampleFormControlInput2" name="url" />
                </Form.Field>
                <Form.Field>
                     <InputPhoto />
                </Form.Field>
                <div>
                    <Button type="submit" content='Enviar' icon='like'></Button>
                    <Button type="submit" content='Volver' icon='cancel' href='/leyendas' onClick={onCancel}></Button>
                </div>
            </Form>
        </div>
    );
};

export default EditForm;
