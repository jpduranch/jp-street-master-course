import { Link, useNavigate } from "react-router-dom";
import Icon from "../shared/Icon";
import { useAuth } from "../../context/AuthContext";

const navItems = [
  { icon: "dashboard", label: "Dashboard", active: false },
  { icon: "school", label: "Master Course", active: true },
  { icon: "view_module", label: "Modules", active: false },
  { icon: "query_stats", label: "Progress", active: false },
  { icon: "folder_open", label: "Resources", active: false },
  { icon: "groups", label: "Community", active: false },
];

const bottomItems = [
  { icon: "settings", label: "Settings" },
  { icon: "help_outline", label: "Support" },
];

export default function Sidebar({ membershipStatus }) {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();

  const displayName = profile?.full_name ?? profile?.email ?? "Usuario";
  const planLabel =
    membershipStatus === "vip" ? "VIP Member" : "Free Member";

  async function handleSignOut() {
    await signOut();
    navigate("/", { replace: true });
  }

  return (
    <aside className="hidden md:flex flex-col h-screen w-64 border-r border-surface-container-highest/20 bg-surface py-6 px-4 fixed left-0 top-0 z-50">
      <Link to="/" className="mb-10 px-2 block">
        <h1 className="text-lg font-bold text-primary font-headline tracking-tighter">
          JP Street
        </h1>
        <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-medium">
          Elite Education
        </p>
      </Link>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium ${
              item.active
                ? "bg-surface-container-highest text-primary"
                : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
            }`}
          >
            <Icon name={item.icon} />
            {item.label}
          </a>
        ))}
      </nav>

      <div className="mt-auto pt-6 space-y-1">
        {bottomItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low hover:text-primary rounded-lg transition-all text-sm font-medium"
          >
            <Icon name={item.icon} />
            {item.label}
          </a>
        ))}

        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-error/10 hover:text-error rounded-lg transition-all text-sm font-medium"
        >
          <Icon name="logout" />
          Cerrar sesión
        </button>

        <div className="mt-4 flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-full border border-primary/20 bg-gradient-to-br from-primary/20 to-primary-dim/20 flex items-center justify-center shrink-0">
            <span className="text-primary font-bold text-sm">
              {displayName.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-bold truncate">{displayName}</p>
            <p className="text-xs text-on-surface-variant truncate capitalize">
              {planLabel}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
