import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [dupe, setDupe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dupe) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 useEffect (() => {
  const isDupe = contacts.some((cont) => {
    return cont.name === name;
  });
  setDupe(isDupe);
 }, [name, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
        name = {name}
        phone = {phone}
        email = {email} 
        setName = {setName}
        setPhone={setPhone}
        setEmail={setEmail}
        dupe={dupe}
        setDupe={setDupe}
        handleSubmit={handleSubmit}/> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
        tiles = {contacts} />
      </section>
    </div>
  );
};
