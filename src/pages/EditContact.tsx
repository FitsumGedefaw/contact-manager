import { useState } from "react";
import { Form, useActionData, useLoaderData } from "react-router-dom";

export const editContactAction = async (obj: any) => {
  const data = await obj.request.formData();
  const { id } = obj.params;

  const submission = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    phone: data.get("phone"),
    image: data.get("image"),
  };

  if (submission) {
    const res = await fetch("https://dummyjson.com/users/" + id.toString(), {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission),
    });

    return res.json();
  }
};

const EditContact: React.FC = () => {
  const updatedContact: any = useActionData();
  const contact: any = useLoaderData();

  const [firstName, setFirstName] = useState<string>(contact.firstName);
  const [lastName, setLastName] = useState<string>(contact.lastName);
  const [phone, setPhone] = useState<string>(contact.phone);
  const [image, setImage] = useState<string>(contact.image);

  if (updatedContact) {
    //console.log(updatedContact);

    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Contact updated succesfully!
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-40 h-40 mb-4 md:mb-0">
              <img
                src={updatedContact.image}
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
                  <p className="text-lg text-gray-800">
                    {updatedContact.firstName}
                  </p>
                </li>
                <li className="mb-2">
                  <p className="text-sm font-semibold text-gray-600">
                    Last Name:
                  </p>
                  <p className="text-lg text-gray-800">
                    {updatedContact.lastName}
                  </p>
                </li>
                <li className="mb-2">
                  <p className="text-sm font-semibold text-gray-600">Phone:</p>
                  <p className="text-lg text-gray-800">
                    {updatedContact.phone}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Form method="put" action={`/edit/${contact.id}`}>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Edit Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold">First Name:</label>
              <input
                name="firstName"
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-semibold">Last Name:</label>
              <input
                name="lastName"
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="col-span-2">
              <label className="text-sm font-semibold">Phone:</label>
              <input
                name="phone"
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="col-span-2">
              <label className="text-sm font-semibold">Image URL:</label>
              <input
                name="image"
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-4">
            Save
          </button>
        </div>
      </div>
    </Form>
  );
};

export default EditContact;
