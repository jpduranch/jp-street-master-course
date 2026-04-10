import Icon from "../shared/Icon";

const items = [
  { icon: "dashboard", label: "Dash", active: false },
  { icon: "school", label: "Cursos", active: true },
  { icon: "groups", label: "Social", active: false },
  { icon: "settings", label: "Ajustes", active: false },
];

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface-container-low/90 backdrop-blur-xl border-t border-surface-container-highest/20 py-4 px-6 flex justify-around items-center z-50">
      {items.map((item) => (
        <a
          key={item.label}
          href="#"
          className={`flex flex-col items-center gap-1 ${
            item.active ? "text-primary" : "text-on-surface-variant"
          }`}
        >
          <Icon name={item.icon} filled={item.active} />
          <span className="text-[10px]">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
