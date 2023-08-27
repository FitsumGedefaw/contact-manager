import React from "react";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";

const RootLayout: React.FC = () => {
  const contacts: any = useLoaderData();
  return (
    <div className="flex py-4">
      <div className="flex-none w-1/4">
        <div className="flex justify-between items-center sticky top-0 bg-white py-2 px-4">
          <h2 className="text-xl font-bold">Contacts</h2>
          <Link className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" to="add">
            New
          </Link>
        </div>
        <div className="flex flex-col bg-gray-300 px-4 overflow-y-auto h-screen">
          {contacts.users.map((contact: any) => (
            <NavLink
              className={({ isActive }) =>
              isActive ? "bg-gray-400 p-2 my-1 rounded" : "bg-gray-200 p-2 my-1 rounded hover:bg-gray-500"
            } 
              to={`contacts/${contact.id}`}
              key={contact.id}

            >
              <span>{contact.firstName}</span> <span>{contact.lastName}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <div id="contact-detail" className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export const loadContacts = async () => {
  const contacts = await fetch("https://dummyjson.com/users");
  return contacts.json();
};

export default RootLayout;