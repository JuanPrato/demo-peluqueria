import { Nav } from "../Nav";

export function Header() {
  return (
    <header className="flex justify-between items-center sticky top-0 bg-primary-content shadow-lg min-h-[60px] z-50">
      <h1 className="p-3 text-2xl font-semibold w-1/4 cursor-pointer whitespace-nowrap">Palacio Israel</h1>
      <Nav />
    </header>
  );
}