import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const contactFormServer = await fetchContacts();
      setContacts(contactFormServer);
    };
    getContacts();
  });

  const formSuba = async (data) => {
    // api call
    const res = await fetch("http://localhost:3004/contacts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newData = await res.json();

    // console.log(data);
    if(res.ok){
      setContacts([...contacts, newData]);
    }  
    // ...contact means already existing  contact
    // which means we're adding to already existing contacts.
    // '...' --> is called spread operator
  };

  const fetchContacts = async () => {
    const res = await fetch("http://localhost:3004/contacts");
    const data = await res.json();

    return data;
  };

  // In the delete phase, we'll pass the
  // id of the contact to be deleted and then
  // we'll make a new array excluding the contact
  // with the passed id and return it.
  const deleteContact = async (id) => {
    const res = await fetch(`http://localhost:3004/contacts/${id}`, {
      method: "DELETE",
    });
    // if res.status ==200 the data will be deleted from the server, so we've to validate that first
    if (res.status === 200) {
      let newContact = contacts.filter((singleContact) => {
        return singleContact.id !== id;
      });
      setContacts(newContact);
    }
  };

  // get single contact
  const getCon = async (id) => {
    const res = await fetch(`http://localhost:3004/contacts/${id}`);
    const data = await res.json();
    return data;
  };

  // Favourite contact function
  const favToggle = async (id) => {
    const singleCon = await getCon(id);

    const updateTask = { ...singleCon, fav: !singleCon.fav };

    const res = await fetch(`http://localhost:3004/contacts/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });
    //THe above code is executed  successfully == 200
    if (res.status === 200) {
      let updatedContact = contacts.map((singleContact) => {
        return singleContact.id === id
          ? { ...singleContact, fav: !singleContact.fav }
          : singleContact;
      });
      setContacts(updatedContact);
    }
  };

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home
            formSubb={formSuba}
            contacts={contacts}
            deleteContact={deleteContact}
            favToggle={favToggle}
          />
          {/* formSub is a variable used for storing and passing the contents of formSuba
          We can also use same names */}
        </Route>
        <Route path="/favourite">
          <Favourite
            formSubb={formSuba}
            contacts={contacts}
            deleteContact={deleteContact}
            favToggle={favToggle}
          />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
