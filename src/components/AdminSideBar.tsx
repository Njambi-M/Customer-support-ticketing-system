"use client";
import { Link } from "react-router-dom";

export default function AdminSideBar() {
  return (
    <div>
      <aside className="hidden md:block w-64 bg-white text-black h-screen p-6 border-r border-gray-200">
        <div className="mb-8 text-sm">
          <h2 className="font-semibold mb-4">Hello: </h2>
          <nav className="flex flex-col space-y-2">
            <Link
              to="#"
              className="flex items-center gap-5 text-base text-muted-foreground transition-colors hover:text-primary p-2"
            >
              View all tickets
            </Link>
            <Link
              to="#"
              className="flex items-center gap-5 text-base text-muted-foreground transition-colors hover:text-primary p-2"
            >
              Solved tickets
            </Link>
            <Link
              to="#"
              className="flex items-center gap-5 text-base text-muted-foreground transition-colors hover:text-primary p-2"
            >
              Unsolved tickets
            </Link>
          </nav>
        </div>
      </aside>
    </div>
  );
}
