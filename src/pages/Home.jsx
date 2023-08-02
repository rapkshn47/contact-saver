import React from 'react'
import Form from '../components/Form'
import Contact from '../components/Contact'

function Home({formSubb, contacts, deleteContact, favToggle}) {
  // console.log(contacts)
  return (
    <div>
        <Form formSubc = {formSubb}/>
        {contacts.map((singleContact)=>{
          return <Contact className="contacts" key={singleContact.id} deleteContact={deleteContact} contact={singleContact} favToggle={favToggle} />
        })  } 

        {contacts.length===0 && <div className='message'>
          No Contacts to Show</div>}
    </div>
  )
}

export default Home