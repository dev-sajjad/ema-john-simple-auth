
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Inventory = () => {

    const {user} = useContext(AuthContext)
    
    return (
        <div>
            <h3>This is inventory page for {user.displayName}</h3>
        </div>
    );
};

export default Inventory;