import React from 'react'
import EditForm from '../../components/editForm/EditForm'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ButtonTop from "../../components/elements/ButtonTop";

function FormEdit() {
  return (
    <div>
      <Navbar />
      <EditForm />
      <Footer />
      <ButtonTop />
    </div>
  )
}

export default FormEdit