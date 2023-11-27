import Button from "@/reuseables/Button";
import Link from "next/link";
const Header = () => {
  return (
    <header className="block sm:flex justify-center sm:justify-between items-center pt-4 m-4">
      <h1 className="text-[200%] flex justify-center font-bold bg-gradient-to-r from-orange-300 via-orange-600 text-transparent bg-clip-text">
        Gleephoria
      </h1>
      <div className="hidden sm:flex gap-4 text-sm">
        <Link href="/about-us">About us</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="hidden sm:flex rounded-3xl px-14">
      <Button />
      </div>
    </header>
  );
};
export default Header;
