import {ArrowLeftIcon, PlusIcon, LockClosedIcon, ChevronRightIcon, FolderIcon} from "@heroicons/react/24/outline";
import {useState} from "react";
import Folder from "../components/resource/Folder.tsx";
import File from "../components/resource/File.tsx";

const Resources = () => {
    const [isItemSelected, setIsItemSelected] = useState(false)

    return (
        <div className="flex gap-3 p-6 max-w-[1536px] mx-auto">
            <div className="bg-gray-900 shadow shadow-gray-500 w-64 rounded-lg">
                <div className="border-b border-gray-500 p-4">
                    <button
                        className="w-full mx-auto bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-medium
                                   center gap-2 cursor-pointer">
                        <PlusIcon className="size-4"/> New Resource
                    </button>
                </div>

                <div className="border-b border-gray-500 p-4">
                    <button className={`${isItemSelected && "text-gray-400"} center gap-2 text-base`}><ArrowLeftIcon
                        className="size-4"/> Back
                    </button>
                </div>

                <div>
                    <Folder title="Documents"/>
                    <Folder title="Images"/>
                    <Folder title="project Files"/>
                    <File title="Documents" extension="docx"/>
                    <File title="Test" extension="txt"/>
                </div>
                <div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Resources;