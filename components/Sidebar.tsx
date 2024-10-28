import React from "react";
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Sidebar = () => {
  return (
    <nav className="hidden sm:flex flex-col sticky top-0 p-3 h-screen xl:ml-20 xl:mr-10">
      <div className="relative h-full">
        <div className="py-3">
          <Image
            src={"/assets/ripple-logo.png"}
            width={48}
            height={48}
            alt="Logo"
          />
        </div>
        <ul>
          <SidebarLink text="Home" Icon={HomeIcon} />
          <SidebarLink text="Explore" Icon={HashtagIcon} />
          <SidebarLink text="Notifications" Icon={BellIcon} />
          <SidebarLink text="Messages" Icon={InboxIcon} />
          <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
          <SidebarLink text="Profile" Icon={UserIcon} />
          <SidebarLink text="More" Icon={EllipsisHorizontalCircleIcon} />
          <button className="hidden xl:block bg-[#93A4E7] w-[200px] h-[52px] rounded-full text-white font-medium cursor-pointer shadow-md mt-2">
            Ripple
          </button>
        </ul>
        <div className="absolute bottom-0">User Info</div>
      </div>
    </nav>
  );
};

export default Sidebar;

interface SidebarLinkProps {
  text: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
}

const SidebarLink = ({ text, Icon }: SidebarLinkProps) => {
  return (
    <li className="flex items-center text-xl mb-2 space-x-3 p-2.5">
      <Icon className="h-7" />
      <span className="hidden xl:block">{text}</span>
    </li>
  );
};
