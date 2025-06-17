import React from 'react';
import {DocumentIcon, LockClosedIcon} from "@heroicons/react/24/outline";

interface IProps {
    title: string;
    extension: string
}

const File: React.FC<IProps> = ({title, extension}) => {
    return (
        <div className="flex items-center justify-between cursor-pointer hover:bg-gray-950 px-4 py-2">
            <div className="center gap-2">
                <DocumentIcon className="size-4 text-gray-200"/>
                {`${title}. ${extension}`}
            </div>
            <LockClosedIcon className="size-4 text-gray-400"/>
        </div>
    );
};

export default File;