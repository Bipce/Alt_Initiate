import React from "react";
import { GlobeAltIcon, LockClosedIcon } from "@heroicons/react/24/outline";

interface IProps {
  isPublic: boolean;
}

const PublicStatusIcon: React.FC<IProps> = ({ isPublic }) => {
  return (
    <>
      {!isPublic ?
        <LockClosedIcon className="size-4 text-gray-400" />
        :
        <GlobeAltIcon className="size-4 text-gray-400" />
      }
    </>
  );
};

export default PublicStatusIcon;