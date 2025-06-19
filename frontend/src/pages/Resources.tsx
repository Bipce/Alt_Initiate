import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Folder from "../components/resource/Folder.tsx";
import File from "../components/resource/File.tsx";
import type { IResource } from "../models/IResource.ts";
import { getResources } from "../services/getPublicData.ts";
import HomeFile from "../components/resource/HomeFile.tsx";

const Resources = () => {
  const [isItemSelected, setIsItemSelected] = useState(false);
  const [resources, setResources] = useState<IResource[]>();

  useEffect(() => {
    (async () => {
      setResources(await getResources());
    })();
  }, []);

  const extractedExtension = (mimeType: string) => {
    return mimeType.split("/")[1];
  };

  const formatSize = (sizeInBytes: number) => {
    const sizeInMB = sizeInBytes / (1024 * 1024);
    console.log(Number(sizeInMB.toFixed(1)));
    return parseFloat(sizeInMB.toFixed(1));
  };

  if (!resources) return null;

  return (
    <div className="flex gap-6 p-6 max-w-[1536px] mx-auto">
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
            className="size-4" /> Back
          </button>
        </div>
        <div>
          <Folder title="Documents" />
          <Folder title="Images" />
          <Folder title="project Files" />
          {resources.map(r =>
            <File key={r.id} title={r.title} extension={`.${extractedExtension(r.mime_type)}`}
                  isPublic={r.is_public} />)}
        </div>
      </div>

      <div className="bg-gray-900 flex-1 shadow shadow-gray-500 rounded-lg">
        <h2 className="p-4 border-b border-gray-500">Home</h2>
        <div>
          {resources.map((r, i) => <HomeFile key={i} title={r.title} size={formatSize(r.size)} updatedAt="2025-19-06"
                                             extension={`.${extractedExtension(r.mime_type)}`}
                                             isNotLast={i != resources.length - 1} isPublic={r.is_public} />)}
        </div>
      </div>
    </div>
  );
};

export default Resources;