import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { session, profile, signOut } = useAuth();
  const navigate = useNavigate();

  async function handleSignOut() {
    await signOut();
    navigate("/", { replace: true });
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#09090f]/75 backdrop-blur-2xl border-b border-primary/[0.06] shadow-[0_4px_40px_rgba(124,58,237,0.08)]">
      <div className="flex justify-between items-center px-6 md:px-10 py-5 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-tighter text-primary font-headline">
          JP Street
        </div>

        {/* Center nav links */}
        <div className="hidden md:flex items-center gap-1 bg-surface-container/60 border border-outline-variant/20 rounded-2xl px-2 py-1.5">
          <a href="#home" className="text-primary bg-primary/10 px-5 py-2 rounded-xl font-headline font-bold tracking-tight text-sm transition-all">
            Home
          </a>
          <a href="#modules" className="text-on-surface-variant hover:text-primary hover:bg-primary/5 px-5 py-2 rounded-xl font-headline font-bold tracking-tight text-sm transition-all">
            Programa
          </a>
          <a href="#pricing" className="text-on-surface-variant hover:text-primary hover:bg-primary/5 px-5 py-2 rounded-xl font-headline font-bold tracking-tight text-sm transition-all">
            Planes
          </a>
          <a href="#benefits" className="text-on-surface-variant hover:text-primary hover:bg-primary/5 px-5 py-2 rounded-xl font-headline font-bold tracking-tight text-sm transition-all">
            Beneficios
          </a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {session ? (
            <>
              <span className="hidden sm:inline-flex items-center text-sm font-semibold font-headline px-4 py-2 rounded-xl bg-[#2e1a5e]/60 text-[#c4b5fd] border border-[#7c3aed]/20 truncate max-w-[160px]">
                {profile?.full_name ?? profile?.email ?? ""}
              </span>
              <button
                onClick={handleSignOut}
                className="hidden sm:inline-flex text-on-surface-variant hover:text-primary transition-colors font-headline font-bold text-sm px-4 py-2.5"
              >
                Salir
              </button>
              <Link
                to="/dashboard"
                className="bg-gradient-to-br from-primary to-primary-dim hover:opacity-90 transition-opacity text-on-primary-fixed font-headline font-bold px-6 py-3 rounded-xl active:scale-95 transition-transform text-sm btn-primary-glow"
              >
                Master Course
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hidden sm:inline-flex text-on-surface-variant hover:text-primary transition-colors font-headline font-bold text-sm px-4 py-2.5"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hidden sm:inline-flex border border-primary/30 text-primary hover:bg-primary/10 transition-colors font-headline font-bold text-sm px-5 py-3 rounded-xl"
              >
                Register
              </Link>
              <Link
                to="/register"
                className="bg-gradient-to-br from-primary to-primary-dim hover:opacity-90 transition-opacity text-on-primary-fixed font-headline font-bold px-6 py-3 rounded-xl active:scale-95 transition-transform text-sm btn-primary-glow"
              >
                Master Course
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
