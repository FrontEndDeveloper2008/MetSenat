import {Header} from "../header";
import * as React from "react";
import {Outlet} from "react-router-dom";
export const Layout = ({children}) => {
    return (<>
        <Header/>
        <Outlet/>
    </>);
};