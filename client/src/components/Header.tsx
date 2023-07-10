import logo from "../assets/logo.png";

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-1">
      <div className="container mx-auto">
        <a className="navbar-brand" href="/">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="mr-2 min-w-[70px]" />
            <div className="text-2xl font-[500]">Projects Mangement</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
