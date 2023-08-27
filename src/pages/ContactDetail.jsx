import React from 'react';
import './ContactCard.css'; // Import the CSS file
import { useLoaderData } from 'react-router-dom';

export const loadContact = async({params}) => {
  const { id } = params;
  console.log(id);
  
  const res = await fetch('https://dummyjson.com/users/' + id.toString())
  return res.json()
}



const ContactCard = () => {
  const contact = useLoaderData();
  
  return (
    <div className="contact-card">
      <div className="contact-info">
        <div className="contact-photo">
          <img src={contact.image} alt={contact.firstName} />
        </div>
        <div className="contact-details">
          <h3>{contact.firstName} {contact.lastName}</h3>
          <p>{contact.phone}</p>
        </div>
      </div>
      <div className="contact-actions">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ContactCard;