import React, { useRef, useState } from "react";
import {
  ArrowDownTrayIcon, Cog6ToothIcon, DocumentIcon, EllipsisVerticalIcon, PencilSquareIcon, TrashIcon,
} from "@heroicons/react/24/outline";
import PublicStatusIcon from "../utils/PublicStatusIcon.tsx";
import DropDownButton from "../utils/DropDownButton.tsx";

interface IProps {
  resourceId: number;
  title: string;
  extension: string;
  updatedAt: string;
  size: number;
  isNotLast?: boolean;
  isPublic: boolean;
  onDelete: () => void;
  onRename: (id: number, newTitle: string) => void;
}

const HomeFile: React.FC<IProps> = ({
                                      title, extension, size, updatedAt, isNotLast, isPublic, onDelete, onRename,
                                      resourceId,
                                    }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [renamingId, setRenamingId] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnClickSettings = () => {
    setIsClicked((prev) => !prev);
  };

  const handleOnRename = () => {
    setRenamingId(resourceId);
  };

  return (
    <div
      className={`flex items-center justify-between p-4 hover:bg-gray-950 ${isNotLast && "border-b border-gray-500"}`}>
      <div className="center gap-3">
        <DocumentIcon className="size-4 text-gray-400" />
        <div>
          {renamingId === resourceId ?
            <input defaultValue={title} autoFocus id={resourceId.toString()} ref={inputRef}
                   className="rounded border border-gray-50 py-1 px-2 font-medium"
                   onKeyDown={(e) => {
                     if (e.key === "Enter") {
                       setRenamingId(null);
                       setIsClicked(false);

                       if (inputRef.current) {
                         onRename(resourceId, inputRef.current.value);
                       }
                     }
                   }} />
            :
            <>
              <h3 className="font-medium">{title}.{extension}</h3>
              <p className="text-xs text-gray-300">Modified {updatedAt}</p>
            </>
          }
        </div>
      </div>

      <div className="center gap-4">
        <PublicStatusIcon isPublic={isPublic} />
        <p>{size} MB</p>
        <button onClick={handleOnClickSettings} className="cursor-pointer hover:bg-gray-800 p-1 rounded">
          <EllipsisVerticalIcon className="size-5 text-gray-400" />
        </button>

        {isClicked && (
          <div className="w-48 rounded-md shadow-lg shadow-gray-500 py-1 absolute z-50 bg-gray-900">
            <DropDownButton>
              <ArrowDownTrayIcon className="size-4" />Download
            </DropDownButton>

            <DropDownButton onHandleOnClick={handleOnRename}>
              <PencilSquareIcon className="size-4" />Rename
            </DropDownButton>

            <DropDownButton>
              <Cog6ToothIcon className="size-4" />Properties
            </DropDownButton>

            <DropDownButton color="text-red-600" onHandleOnClick={() => {
              onDelete();
              setIsClicked(false);
            }}>
              <TrashIcon className="size-4 text-red-600" />Delete
            </DropDownButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeFile;