import PrimaryLink from "./utils/PrimaryLink.tsx";
import {BellIcon, CalendarIcon, FolderOpenIcon} from "@heroicons/react/24/outline";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 px-10 shadow-sm shadow-gray-500 mb-6">
            <div className="flex gap-3 max-w-[1536px] mx-auto">
                <PrimaryLink path="/"><FolderOpenIcon className="size-5"/> Manage Resources</PrimaryLink>
                <PrimaryLink path="/events"><CalendarIcon className="size-5"/> Manage Events</PrimaryLink>
                <PrimaryLink path="/notifications"><BellIcon className="size-5"/> Notifications</PrimaryLink>
            </div>
        </nav>
    );
};

export default Navbar;