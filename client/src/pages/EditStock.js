import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "../EditStock.css";
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditableRow";


const App = () => {
  function getFleurs() {

    const request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:8080/v1/flowers', false);  // `false` makes the request synchronous
    request.send(null);

    return JSON.parse(request.responseText)

    // let response = await fetch('http://localhost:8080/v1/flowers')
    // let data =  response.json()
    // return data;
 }   

  const [fleurs, setFleurs] = useState(getFleurs());

  const [addFormData, setAddFormData] = useState({
    ref: "",
    name: "",
    color: "",
    price: "",
    stock: "",
  });

  const [editFormData, setEditFormData] = useState({
    ref: "",
    name: "",
    color: "",
    price: "",
    stock: "",
  });
  
  const [editFleurId, setEditFleurId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newFleur = {
      ref: addFormData.ref,
      name: addFormData.name,
      color: addFormData.color,
      price: addFormData.price,
      stock: addFormData.stock,
    };

    const newFleurs = [...fleurs, newFleur];
    setFleurs(newFleurs);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedFleur = {
      ref: editFormData.ref,
      name: editFormData.name,
      color: editFormData.color,
      price: editFormData.price,
      stock: editFormData.stock,
    };

    const newFleurs = [...fleurs];

    const index = fleurs.findIndex((fleur) => fleur.ref === editFleurId);

    newFleurs[index] = editedFleur;

    setFleurs(newFleurs);
    setEditFleurId(null);
  };

  const handleEditClick = (event, fleur) => {
    event.preventDefault();
    setEditFleurId(fleur.ref);

    const formValues = {
      ref : fleur.ref,
      name: fleur.name,
      color: fleur.color,
      price: fleur.price,
      stock: fleur.stock,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditFleurId(null);
  };

  const handleDeleteClick = (fleurId) => {
    const newFleurs = [...fleurs];

    const index = fleurs.findIndex((fleur) => fleur.ref === fleurId);

    newFleurs.splice(index, 1);

    setFleurs(newFleurs);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>REF</th>
              <th>Nom</th>
              <th>Couleur</th>
              <th>Prix</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fleurs.map((fleur) => (
              <Fragment>
                {editFleurId === fleur.ref ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    fleur={fleur}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Modifier tableau</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
            type="text"
            name="ref"
            required="required"
            placeholder="ref"
            onChange={handleAddFormChange}
          />
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Nom"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="color"
          required="required"
          placeholder="Couleur"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="price"
          required="required"
          placeholder="Prix"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="stock"
          required="required"
          placeholder="Stock"
          onChange={handleAddFormChange}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default App;