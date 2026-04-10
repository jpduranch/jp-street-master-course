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
    <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e]/60 backdrop-blur-xl shadow-[0_0_40px_rgba(139,92,246,0.08)]">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-extrabold tracking-tighter text-primary font-headline">
          JP Street
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-primary border-b-2 border-primary pb-1 font-headline font-bold tracking-tight text-sm">
            Home
          </a>
          <a href="#modules" className="text-on-surface-variant hover:text-primary transition-colors font-headline font-bold tracking-tight text-sm">
            Programa
          </a>
          <a href="#pricing" className="text-on-surface-variant hover:text-primary transition-colors font-headline font-bold tracking-tight text-sm">
            Planes
          </a>
          <a href="#benefits" className="text-on-surface-variant hover:text-primary transition-colors font-headline font-bold tracking-tight text-sm">
            Beneficios
          </a>
        </div>
        <div className="flex items-center gap-3">
          {session ? (
            <>
              <span className="hidden sm:inline text-sm text-on-surface-variant font-medium truncate max-w-[140px]">
                {profile?.full_name ?? profile?.email ?? ""}
              </span>
              <button
                onClick={handleSignOut}
                className="hidden sm:inline-flex text-on-surface-variant hover:text-primary transition-colors font-headline font-bold text-sm px-4 py-2"
              >
                Salir
              </button>
              <Link
                to="/dashboard"
                className="bg-primary hover:opacity-90 transition-opacity text-on-primary-fixed font-headline font-bold px-5 py-2.5 rounded-xl active:scale-95 transition-transform text-sm"
              >
                Master Course
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hidden sm:inline-flex text-on-surface-variant hover:text-primary transition-colors font-headline font-bold text-sm px-4 py-2"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hidden sm:inline-flex border border-primary/30 text-primary hover:bg-primary/10 transition-colors font-headline font-bold text-sm px-4 py-2.5 rounded-xl"
              >
                Register
              </Link>
              <Link
                to="/register"
                className="bg-primary hover:opacity-90 transition-opacity text-on-primary-fixed font-headline font-bold px-5 py-2.5 rounded-xl active:scale-95 transition-transform text-sm"
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
