import React from "react";
import User from "./User";
import Password from "./Password";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    return(
        <>
            <User setUser={setUser} />
            <Password setPassword={setPassword} />
        </>
    )
}

export default Login;