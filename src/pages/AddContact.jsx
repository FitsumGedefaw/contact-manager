import React, { useContext } from "react";
import { Form, Navigate, redirect, useActionData } from "react-router-dom";
import { contactContext } from "../contexts/ContactsContextProvider";

export const addContactAction = async (obj) => {
  const data = await obj.request.formData();
  const submission = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    phone: data.get("phone"),
    image: "https://robohash.org/doloremquesintcorrupti.png",
  };

  if (submission) {
    const res = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission),
    })

    return res.json()
     
    }
    //return redirect('/')
};

const AddContact = () => {
  const {setContacts} = useContext(contactContext);
  const newContact = useActionData();
  if(newContact){
    setContacts((prev) => [newContact, ...prev])
  }
  return (
    <div className="">
      <h3>Add new contact</h3>
      <Form method="post" action="/add">
        <label>
          <span>First Name:</span>
          <input type="text" name="firstName" required />
        </label>
        <label>
          <span>Last Name:</span>
          <input type="text" name="lastName" required />
        </label>
        <label>
          <span>Phone</span>
          <input type="tel" name="phone" required />
        </label>
        <button>Submit</button>
      </Form>
    </div>
  );
};

export default AddContact;
