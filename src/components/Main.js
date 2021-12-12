import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import "../assets/styles/components/main.scss";

export const Main = () => {
    return (
        <div className="main">
            <Sidebar />
            <Content />
        </div>
    );
};
