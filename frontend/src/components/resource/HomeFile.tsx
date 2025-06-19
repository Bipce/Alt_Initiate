import React from "react";
import { DocumentIcon, EllipsisVerticalIcon} from "@heroicons/react/24/outline";
import PublicStatusIcon from "../utils/PublicStatusIcon.tsx";

interface IProps {
  title: string;
  extension: string;
  updatedAt: string;
  size: number;
  isNotLast?: boolean;
  isPublic: boolean;
}

const handleOnClick = () => {
  console.log("click");
};

const HomeFile: React.FC<IProps> = ({ title, extension, size, updatedAt, isNotLast, isPublic }) => {
  return (
    <div
      className={`flex items-center justify-between p-4 hover:bg-gray-950 ${isNotLast && "border-b border-gray-500"}`}>
      <div className="center gap-3">
        <DocumentIcon className="size-4 text-gray-400" />
        <div>
          <h3 className="font-medium">{title}.{extension}</h3>
          <p className="text-xs text-gray-300">Modified {updatedAt}</p>
        </div>
      </div>

      <div className="center gap-4">
        <PublicStatusIcon isPublic={isPublic} />
        <p>{size} MB</p>
        <button onClick={handleOnClick} className="cursor-pointer hover:bg-gray-800 p-1 rounded">
          <EllipsisVerticalIcon className="size-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default HomeFile;