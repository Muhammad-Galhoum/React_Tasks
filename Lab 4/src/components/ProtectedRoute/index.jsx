import { Redirect, Route } from "react-router";

export const ProtectedRoute = (props)=> {
    const isLoggedIn = localStorage.getItem("token") === "12345";
    return isLoggedIn ? (<Route path={props.path}>
    {props.children}
  </Route>) : (<Route path="/">
      <Redirect to="/login"/>
      </Route>)
}