import React, {type ReactNode} from 'react';
import {NavLink} from "react-router-dom";

interface IProps {
    path: string;
    children: ReactNode;
    class?: string;
}

const PrimaryLink: React.FC<IProps> = ({path, children}) => {
    return (
        <NavLink to={path} className={({isActive}) =>
            `${isActive ? "border-b border-blue-400 text-blue-400" : "hover:bg-gray-800"} 
             font-medium center gap-2 px-4 py-3`}>
            {children}
        </NavLink>
    );
};

export default PrimaryLink;