import React from "react";

const ReadOnlyRow = ({ fleur, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{fleur.ref}</td>
      <td>{fleur.name}</td>
      <td>{fleur.color}</td>
      <td>{fleur.price}</td>
      <td>{fleur.stock}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, fleur)}
        >
          Modifier
        </button>
        <button type="button" onClick={() => handleDeleteClick(fleur.ref)}>
          Effacer
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;