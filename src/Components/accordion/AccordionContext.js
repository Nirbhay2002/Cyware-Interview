import React, { createContext, useState } from 'react';

// Create the context
const AccordionContext = createContext();

// Create a provider component
const AccordionProvider = ({ children }) => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (itemKey) => {
    setOpenItem((prevKey) => (prevKey === itemKey ? null : itemKey));
  };

  return (
    <AccordionContext.Provider value={{ openItem, toggleItem }}>
      {children}
    </AccordionContext.Provider>
  );
};

export {AccordionContext, AccordionProvider}
