export default function Footer() {
  return (
    <footer className="w-full border-t border-surface-container-highest/20 bg-surface-container-lowest">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-8 py-12 max-w-7xl mx-auto gap-6">
        <div className="space-y-4 text-center md:text-left">
          <div className="text-lg font-bold text-primary font-headline">
            JP Street
          </div>
          <p className="text-sm text-on-surface-variant max-w-xs">
            &copy; 2025 JP Street. Elite Trading Education. Formación avanzada
            para mercados volátiles.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {["Privacy Policy", "Terms of Service", "Newsletter", "Discord", "LinkedIn"].map(
            (link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                {link}
              </a>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
