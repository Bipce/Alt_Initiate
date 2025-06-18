import React from 'react';
import {ChevronRightIcon, FolderIcon, LockClosedIcon} from "@heroicons/react/24/outline";

interface IProps {
    title: string;
}

const Folder: React.FC<IProps> = ({title}) => {
    return (
        <div className="flex items-center justify-between cursor-pointer hover:bg-gray-950 px-4 py-2">
            <div className="center gap-2">
                <FolderIcon className="size-4 text-blue-400"/>
                {title}
            </div>
            <div className="center gap-1 text-gray-400">
                <LockClosedIcon className="size-4"/>
                <ChevronRightIcon className="size-4"/>
            </div>
        </div>
    );
};

export default Folder;