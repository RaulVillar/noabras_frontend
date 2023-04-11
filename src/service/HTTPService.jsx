import axios from 'axios';

const HTTPService = () => {

  const url = 'http://localhost:8080/model';

  const getAllData = async () => {
    const response = await axios.get(`${url}`);
    return response.data;
  };

  const getDataById = async (id) => {
    const response = await axios.get(`${url}/${id}`);
    return response.data;

  };

  const createData = async (data) => {
    console.log(data);
    
    const response = await axios.post(`${url}`, data,{headers:{"Content-Type" : "application/json"}});
    return response.data;

  };

  const updateData = async (id, data) => {
    const response = await axios.put(`${url}/${id}`, data);
    return response.data;

  };

  const deleteData = async (id) => {
    const response = await axios.delete(`${url}/${id}`);
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