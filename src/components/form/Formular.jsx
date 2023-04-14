import React, { useState } from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react';
import HTTPService from '../../service/HTTPService';
import "./formular.css";
import InputPhoto from '../inputPhoto/inputPhoto';
import { Link } from "react-router-dom";

const Formular = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [urlImg, setUrlImg] = useState("");


    const handleSubmit = (event) => {
        const data = {
            name: title,
            theme: category,
            description: description,
            location: location,
            urlImg: urlImg

        }

        HTTPService().createData(data)
    }

    return (
        <div className='main-form'>
            <h2>COMPARTE TU EXPERIENCIA</h2>
            <Form className='create-form'>
                <Form.Field>
                    <label>TÍTULO</label>
                    <input onChange={(event) => { setTitle(event.target.value) }}
                        placeholder='Título experiencia' type="text" autoFocus />
                </Form.Field>
                <Form.Field>
                    <label>DESCRIPCIÓN</label>
                    <TextArea onChange={(event) => { setDescription(event.target.value) }}
                        rows={7} placeholder="Cuéntanos tu experiencia..." />
                </Form.Field>
                <Form.Field label='TIPO' control='select' onChange={(event) => { setCategory(event.target.value) }} >
                    <label>TIPO</label>
                    <input placeholder='Tipo experiencia' type="text" />
                    <option value='Mitos y Leyendas'>Mitos y leyendas</option>
                    <option value='Avistamientos Ovnis'>Avistamientos ovnis</option>
                    <option value='Experiencias Paranormales'>Experiencias paranormales</option>
                </Form.Field>
                <Form.Field>
                    <label>LOCALIZACIÓN</label>
                    <input onChange={(event) => { setLocation(event.target.value) }}
                        placeholder='Localización experiencia' type="text" />
                </Form.Field>
                <Form.Field>
                    <InputPhoto setUrlImg={setUrlImg} />
                </Form.Field>
                <Link to="/leyendas">
                    <Button onClick={() => handleSubmit()} type="submit" content='Enviar' icon='like'></Button>
                </Link>
                <Button type="submit" content='Cancelar' icon='cancel' href='/'></Button>
            </Form>
        </div>

    )
}

export default Formular





