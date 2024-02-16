"use client";
import {
  IconArrowLeft,
  IconCat,
  IconQuestionMark,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";

import { SUBMENU, MAIN_MENU } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  return (
    <aside className="hidden md:block bg-gray-200 p-4 rounded shadow">
      <div className="flex gap-4 items-center justify-between  space-x-4 mb-4">
        <div className="flex gap-4 items-center">
          <IconCat className="text-indigo-600 h-8 w-8" />
          <h1 className="text-indigo-600 font-bold">Azia</h1>
        </div>
        <div>
          <IconArrowLeft className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
      <nav className="space-y-2">
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              {MAIN_MENU.map((item) => (
                <item.icon
                  className={`h-8 w-8 ${item.active ? "text-indigo-600" : ""}`}
                />
              ))}
            </div>
            <div className="mt-8">
              <IconQuestionMark className="h-8 w-8 my-4" />
              <IconUser className="h-8 w-8 my-4" />
            </div>
          </div>
          <div>
            <div className="mb-4">
              <h4 className="text-xl font-bold">Dashboard</h4>
              <small className="text-gray-400 text-xs">
                Choose between different layouts to experience different look
                and feel for your projects
              </small>
            </div>
            <div className="border-l-gray-400/50 border-l-2 pl-4">
              {SUBMENU.map((item, index) => (
                <Link
                  key={item.label}
                  className={cn("block py-2 border-b-gray-400/25", {
                    "text-indigo-600": item.active,
                    "border-b": index !== SUBMENU.length - 1,
                  })}
                  href={item.url}
                >
                  {item.label}{" "}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
