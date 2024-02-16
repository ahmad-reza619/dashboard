import { IconSearch } from "@tabler/icons-react";

interface SearchProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Search(props: SearchProps) {
  return (
    <div className="w-full flex relative justify-end items-center py-2 px-4">
      <input
        className="border rounded left-0 right-0 absolute py-2 px-4"
        placeholder="Search for anything..."
        type="search"
        {...props}
      />
      <IconSearch className="h-6 w-6 z-10 text-gray-400" />
    </div>
  );
}
