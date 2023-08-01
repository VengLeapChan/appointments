import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
      <label for='name'>Name:</label>
      <input 
        type= 'text'
        id="name" 
        placeholder="Name"
        value = {name}
        onChange={(e) => setName(e.target.value) }/>
      <label for='email'>Email:</label>
      <input 
        type="email"
        id="email" 
        placeholder="Email"
        value= {email}
        onChange = {(e) => setEmail(e.target.value) }/>
      <label for='phone'>Phone Number: </label>
      <input 
        type='tel'
        id="phone" 
        placeholder="phone"
        pattern="[1-9][0-9]{2}-?[1-9][0-9]{2}-?[0-9]{4}"
        value = {phone}
        onChange = {(e) => setPhone(e.target.value)}  />
      
      <input value={"submit"} type="submit" />
    </form>
    </>
  );
};

