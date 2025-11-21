import { createContext, useContext, useState } from "react";

const AccordionContext = createContext({
  openItemId: null,
  isOpen: false,
  onToogle: () => {},
  isItemOpen: () => {},
});

export const AccordionContextProvider = ({ children }) => {
  const [openItemId, setOpenItemId] = useState(null);

  const handleToggleAccordion = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  const isItemOpen = (id) => {
    return openItemId === id;
  };

  const valueAccordion = {
    openItemId,

    isItemOpen: isItemOpen,
    onToogle: handleToggleAccordion,
  };

  return (
    <AccordionContext.Provider value={valueAccordion}>
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordionContext = () => useContext(AccordionContext);
