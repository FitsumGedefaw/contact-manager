import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export const loadContact = async (passedObj: any) => {
  const { id } = passedObj.params;

  const res = await fetch("https://dummyjson.com/users/" + id.toString());
  return res.json();
};

const ContactCard: React.FC = () => {
  const contact: any = useLoaderData();
  console.log(contact);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Contact Details
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-40 h-40 mb-4 md:mb-0">
            <img
              src={contact.image}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="md:ml-8">
            <ul className="mb-4">
              <li className="mb-2">
                <p className="text-sm font-semibold text-gray-600">
                  First Name:
                </p>
                <p className="text-lg text-gray-800">{contact.firstName}</p>
              </li>
              <li className="mb-2">
                <p className="text-sm font-semibold text-gray-600">
                  Last Name:
                </p>
                <p className="text-lg text-gray-800">{contact.lastName}</p>
              </li>
              <li className="mb-2">
                <p className="text-sm font-semibold text-gray-600">Phone:</p>
                <p className="text-lg text-gray-800">{contact.phone}</p>
              </li>
            </ul>
            <Link
              to={`/edit/${contact.id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
