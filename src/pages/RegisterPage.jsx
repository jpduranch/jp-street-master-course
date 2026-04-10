import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RegisterPage() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    setLoading(true);
    const { data, error } = await signUp({ email, password, fullName });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else if (data?.session) {
      navigate("/dashboard", { replace: true });
    } else {
      setSuccess(true);
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-sm text-center">
          <Link to="/" className="flex flex-col items-center mb-10">
            <span className="text-3xl font-extrabold tracking-tighter text-primary font-headline">
              JP Street
            </span>
          </Link>
          <div className="bg-surface-container rounded-2xl p-8 border border-tertiary/20 premium-glow">
            <div className="w-14 h-14 rounded-full bg-tertiary/10 flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-tertiary text-3xl">mark_email_read</span>
            </div>
            <h2 className="text-xl font-headline font-bold mb-2">¡Revisa tu email!</h2>
            <p className="text-sm text-on-surface-variant">
              Te enviamos un enlace de confirmación a{" "}
              <span className="text-primary font-bold">{email}</span>.
              Confirma tu cuenta para continuar.
            </p>
            <Link
              to="/login"
              className="mt-6 block text-sm text-primary font-bold hover:opacity-80 transition-opacity"
            >
              Ir a iniciar sesión →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center mb-10">
          <span className="text-3xl font-extrabold tracking-tighter text-primary font-headline">
            JP Street
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant mt-1">
            Elite Education
          </span>
        </Link>

        {/* Card */}
        <div className="bg-surface-container rounded-2xl p-8 border border-surface-container-highest/40 premium-glow">
          <h1 className="text-xl font-headline font-bold mb-1">Crea tu cuenta</h1>
          <p className="text-sm text-on-surface-variant mb-6">
            Empieza gratis. Sin tarjeta requerida.
          </p>

          {error && (
            <div className="mb-4 px-4 py-3 rounded-xl bg-error/10 border border-error/20 text-error text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider">
                Nombre completo
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                placeholder="Tu nombre"
                className="w-full bg-surface-container-highest border border-outline-variant/40 rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="tu@email.com"
                className="w-full bg-surface-container-highest border border-outline-variant/40 rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Mínimo 6 caracteres"
                className="w-full bg-surface-container-highest border border-outline-variant/40 rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed font-headline font-bold py-3.5 rounded-xl transition-all btn-primary-glow hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {loading ? "Creando cuenta..." : "Crear Cuenta Gratis"}
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-on-surface-variant mt-6">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="text-primary font-bold hover:opacity-80 transition-opacity">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
