import React from "react";

const User = ({ setUser }) => {
    const onUserComplete = (e) => {
        setUser(e.target.value);
    }
    return(
        <div>
            <label>User</label>
            <input 
                placeholder='Username' 
                type="text" 
                onBlur={onUserComplete} 
            />
        </div>
    )
}

export default User;