import React from "react";

function Contact({ contact: { name, mail, phone, id, fav }, deleteContact, favToggle }) {
  // console.log(contact)
  return (
    <div className="Box">
      <div>
        <div className="heading">
          <p>{name}</p>
          <div onClick={()=>{favToggle(id)}}>
            <i className={fav ? "fas fa-star" : "far fa-star"}></i>
          </div>
        </div>

        <p>{phone}</p>
        <p>{mail}</p>
        <button
          type="button"
          className="delete-button"
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Contact;
