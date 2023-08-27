import React, { useContext, useEffect } from "react";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { contactContext } from "../contexts/ContactsContextProvider";

export const loadContacts = async() => {
  console.log("loader");
  const contacts = await fetch('https://dummyjson.com/users');
  return contacts.json()
  }

const RootLayout = () => {
  console.log("root");
  const {contacts, setContacts} = useContext(contactContext)
  const data = useLoaderData().users
  useEffect(() => {
    console.log("use-effect");
    setContacts(data) 
  }, [])
  
  console.log("state: ", contacts);

  return (
    <div className="root-layout">
      <div className="sidebar">
        <div className="contacts-header">
        <h2>Contacts</h2>
        <Link to="add">New</Link>
        </div>
        <div className="contacts">
          {contacts.map((contact) => (
            <NavLink to={`contacts/${contact.id}`} key={contact.id}>
                <span>{contact.firstName}</span> {" "}
                <span>{contact.lastName}</span> 
            </NavLink>
          ))}
        </div>
      </div>
      <div id="contact-detail">
        <Outlet />
      </div>
    </div>
  );
};





export default RootLayout;
