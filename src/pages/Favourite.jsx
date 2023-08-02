import React from "react";
import Contact from "../components/Contact";

function Favourite({ contacts, deleteContact, favToggle }) {
  return (
    <div>
      {contacts.map((singleContact) => {
        return (
          singleContact.fav && (
            <Contact
              className="contacts"
              key={singleContact.id}
              deleteContact={deleteContact}
              contact={singleContact}
              favToggle={favToggle}
            />
          )
        );
      })}

      {contacts.filter((single) => single.fav).length === 0 && (
        <div className="message">No Favourite Contacts to Show</div>
      )}
    </div>
  );
}

export default Favourite;
