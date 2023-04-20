import axios from 'axios';
import authHeader from '../service/Auth-Header';

const HTTPService = () => {

  const url = 'http://localhost:8080/model';

  const getAllData = async () => {
    const response = await axios.get(`${url}`);
    return response.data;
  };

  const getDataById = async (id) => {
    const response = await axios.get(`${url}/${id}`, { headers: authHeader() });
    return response.data;

  };

  const createData = async (data) => {
    console.log(authHeader());
    
    const response = await axios.post(`${url}`, data, {headers:{"Content-Type" : "application/json",  "Authorization": 'Bearer ' + authHeader() }});
    return response.data;

  };

  const updateData = async (id, data) => {
    const response = await axios.put(`${url}/${id}`, data, { headers: authHeader() });
    return response.data;

  };

  const deleteData = async (id) => {
    const response = await axios.delete(`${url}/${id}`, { headers: authHeader() });
    return response.data;

  };

  return {
    getAllData,
    getDataById,
    createData,
    updateData,
    deleteData,
    url

  };
};

export default HTTPService;