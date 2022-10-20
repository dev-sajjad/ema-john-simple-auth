import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const UserContext = ({children}) => {
//  const user = {displayName: 'Mamun here!!'}
    const [user, setUser] = useState(null);


    const createUser = () => {
        
    }


    const authInfo = {user};

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;