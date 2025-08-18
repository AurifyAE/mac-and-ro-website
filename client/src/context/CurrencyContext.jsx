import { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const updateCurrency = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, updateCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
