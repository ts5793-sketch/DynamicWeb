import React from "react";
import {NavLink} from 'react-router-dom';
import Panel from './Panel';

const baseClass = 'text-blue-500'
const activeClass = 'text-blue-500 border-l-4'

const NavBar = () => {
    return(
        <Panel className = 'sticky top-0 h-screen overflow-y-scroll flex flex-col item-start gap-1 p-2'>
           <NavLink to = '/' end className = {({ isActive }) => (isActive ? activeClass : baseClass)}>
                Button
           </NavLink>

            <NavLink to = '/accordion' className = {({ isActive }) => (isActive ? activeClass : baseClass)}>
                Accordion
           </NavLink>

            <NavLink to = '/dropdown' className = {({ isActive }) => (isActive ? activeClass : baseClass)}>
                Dropdown
           </NavLink>
        </Panel>
    );
}

export default NavBar