import React from "react";
import AuthLayout from '../_authLayout/layout';
import Input from '../../../_components/input'
const Login =()=>{
    return(
        <>
            <AuthLayout>
                <Input required label="Email Address" type="email" placeholder="Enter your email address" />
                <Input required label="Password" type="password" placeholder="Enter your password" />
            </AuthLayout>
        </>
    )
}
export default Login;