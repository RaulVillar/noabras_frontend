import React from 'react';

export const RoleValue = React.createContext({
  rol: '',
});

export const AuthProvider = ({ children }) => {
  return (
    <RoleValue.Provider value={{ rol: 'admin' }}>
      {children}
    </RoleValue.Provider>
  );
};
