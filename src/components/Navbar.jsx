import { usePathname } from "next/navigation";

const Navbar = () => {
  const location = usePathname();

  return (
    <nav className="space-x-8 text-xl absolute top-4 w-full flex items-center justify-center">
      <a
        href="/"
        className={`${
          location === "/"
            ? "underline underline-offset-2 decoration-gray-800 decoration-[0.1rem]"
            : null
        }`}
      >
        Home
      </a>
      <a
        href="/about"
        className={`${
          location === "/about"
            ? "underline underline-offset-2 decoration-gray-800 decoration-[0.1rem]"
            : null
        }`}
      >
        About
      </a>
    </nav>
  );
};

export default Navbar;
