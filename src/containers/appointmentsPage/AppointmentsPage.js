import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, addApt, contacts}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    addApt(name, contact, date, time);
    setName('');
    setDate('');
    setTime('');
    setContact('');
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          contacts = {contacts}
          name ={name}
          contact = {contact}
          date = {date}
          time ={time}
          setTime = {setTime}
          setName = {setName}
          setDate = {setDate}
          setContact = {setContact} 
          handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList 
        tiles = {appointments} />
      </section>
    </div>
  );
};