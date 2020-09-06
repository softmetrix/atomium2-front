import  React from  "react";
import { Route, Redirect } from  "react-router-dom";

const  PrivateRoute = ({ component, path, render, ...rest }) => {
    const atomiumUser = localStorage.getItem('atomium-user');
    const atomiumPassword = localStorage.getItem('atomium-password');
    let condition = false;
    if(atomiumUser && atomiumPassword) {
        condition = true;
    }


    return  condition ? (<Route  path={path}  render={render} />) :
        (<Redirect  to="/auth/login"  />);
};
export  default  PrivateRoute;