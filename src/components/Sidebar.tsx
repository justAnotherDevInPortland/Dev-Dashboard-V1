import { NavLink } from "react-router-dom";
import { LayoutDashboard, Activity, Target, Settings } from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Activity, label: "Activity", path: "/activity" },
  { icon: Target, label: "Goals", path: "/goals" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white">
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
