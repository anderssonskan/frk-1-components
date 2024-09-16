import React from "react";

const Password = ({ setPassword }) => {
    const onPasswordChange =(e) => {
        setPassword(e.target.value);
    }
    return(
        <div>
            <label>Password</label>
            <input 
                placeholder="Password" 
                type="password" 
                onChange={ onPasswordChange } 
            />
        </div>
    )
}

export default Password;