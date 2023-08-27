import React, { SetStateAction, createContext, useState } from "react";

export const contactContext = createContext({
    contacts: [],
    setContacts: () => {}
})

const ContactsContextProvider = ({children}) => {
    const [contacts, setContacts] = useState([]);

    return(
        <contactContext.Provider value={{contacts, setContacts}}>
            {children}
        </contactContext.Provider>
    )
}

export default ContactsContextProvider;