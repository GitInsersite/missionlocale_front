import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a context
export const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}

// Step 2: Create a provider component to wrap your components
export const UserProvider = ({ children }) => {
  
  const [myValue, setMyValue] = useState('Hello')

  return (
    <UserContext.Provider value={myValue}>
      {children}
    </UserContext.Provider>
  );
};