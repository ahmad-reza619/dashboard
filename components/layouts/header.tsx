import {
  IconBell,
  IconMenu2,
  IconMessageCircle,
  IconUser,
} from "@tabler/icons-react";

import Search from "../ui/search";

export default function Header() {
  return (
    <header className="flex justify-between gap-4 border-b-gray-500 bg-white p-4 items-center mb-6">
      <IconMenu2 className="h-6 w-6 md:hidden" />
      <Search />
      <div className="flex items-center space-x-4">
        <IconMessageCircle className="h-6 w-6" />
        <IconBell className="h-6 w-6" />
        <IconUser className="h-6 w-6" />
      </div>
    </header>
  );
}
