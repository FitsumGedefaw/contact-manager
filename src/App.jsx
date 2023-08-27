import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout, { loadContacts } from "./layouts/RootLayout";
import ContactDetail, { loadContact } from "./pages/ContactDetail";
import AddContact, { addContactAction } from "./pages/AddContact";
import ContactsContextProvider from './contexts/ContactsContextProvider'

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout />}
        loader={loadContacts}
      >
        <Route path="add" element={<AddContact />} action={addContactAction}/>
        <Route path="contacts/:id" element={<ContactDetail />} loader={loadContact} />
      </Route>
    )
  );

  return (
    <ContactsContextProvider>
      <RouterProvider router={router} />
    </ContactsContextProvider>
  );
}

export default App;
