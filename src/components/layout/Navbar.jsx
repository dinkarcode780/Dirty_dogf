// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import logo from "../../assets/logo.png";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     {
//       name: "Services",
//       path: "/services",
//       dropdown: true,
//     },
//     { name: "Gallery", path: "/gallery" },
//     { name: "Quotes", path: "/quotes" },
//     { name: "Financing", path: "/financing" },
//     { name: "Giving Back", path: "/giving-back" },
//   ];

//   const serviceLinks = [
//     { name: "Horse Arenas", path: "/services/horse-arenas" },
//     { name: "Horse Arena Footing", path: "/services/horse-arena-footing" },
//     { name: "Barn & Building Pads", path: "/services/barn-building-pads" },
//     { name: "Laser Leveling", path: "/services/laser-leveling" },
//     { name: "Driveways", path: "/services/driveways" },
//     { name: "Finish Grade", path: "/services/finish-grade" },
//     { name: "Foundations", path: "/services/foundations" },
//     { name: "Road Base", path: "/services/road-base" },
//     { name: "Road Grading", path: "/services/road-grading" },
//     { name: "Trenching", path: "/services/trenching" },
//     { name: "Earth Moving", path: "/services/earth-moving" },
//     { name: "Erosion Matting", path: "/services/erosion-matting" },
//     { name: "Dust Control", path: "/services/dust-control" },
//   ];

//   return (
//     <header className="border-b bg-white flex items-center justify-between p-3 px-4 md:px-10">
//       <img src={logo} alt="Logo" className="h-30 object-contain" />

//       <div className="flex flex-col justify-evenly gap-4">
//         {/* Top Contact Row */}
//         <div className="text-sm text-gray-700 mb-2 hidden md:flex">
//           <div className="flex gap-6">
//             <p><strong>📞 Phone:</strong> (303) 435-4774</p>
//             <p><strong>📠 Fax:</strong> (303) 646-5438</p>
//             <p><strong>📧 E-mail us:</strong> garr@dirtdogsexcavating.com</p>
//           </div>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden flex justify-end mb-2">
//           <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 ">
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <nav
//           className={`${menuOpen ? "block" : "hidden"
//             } md:flex md:justify-end md:items-center md:gap-6 text-sm font-semibold text-red-700`}
//         >
//           {navLinks.map((link) =>
//             link.dropdown ? (
//               <div key={link.name} className="relative group">
//                 <NavLink to={link.path} className="hover:underline focus:outline-none">
//                   {link.name} ▾
//                 </NavLink>
//                 {/* Dropdown */}
//                 <div className="absolute -left-4 hidden group-hover:block bg-white border shadow-md  z-20 min-w-max">
//                   <ul className="py-2 px-4 space-y-1 text-gray-700 text-sm whitespace-nowrap">
//                     {serviceLinks.map((service) => (
//                       <li key={service.name}>
//                         <NavLink
//                           to={service.path}
//                           className="block hover:text-red-700 hover:scale-105 transition-transform duration-75 "
//                         >
//                           {service.name}
//                         </NavLink>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ) : (
//               <NavLink
//                 key={link.name}
//                 to={link.path}
//                 className={({ isActive }) =>
//                   isActive ? "border px-2 py-1 border-red-700" : "hover:border-b hover:border-red-700 px-2 py-1 "
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             )
//           )}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


//---------------------------------------------------------------------------------------------------------------


import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, User, Phone, Mail, FileText } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      dropdown: true,
    },
    { name: "Gallery", path: "/gallery" },
    { name: "Quotes", path: "/quotes" },
    { name: "Financing", path: "/financing" },
    { name: "Giving Back", path: "/giving-back" },
  ];

  const serviceLinks = [
    { name: "Horse Arenas", path: "/services/horse-arenas" },
    { name: "Horse Arena Footing", path: "/services/horse-arena-footing" },
    { name: "Barn & Building Pads", path: "/services/barn-building-pads" },
    { name: "Laser Leveling", path: "/services/laser-leveling" },
    { name: "Driveways", path: "/services/driveways" },
    { name: "Finish Grade", path: "/services/finish-grade" },
    { name: "Foundations", path: "/services/foundations" },
    { name: "Road Base", path: "/services/road-base" },
    { name: "Road Grading", path: "/services/road-grading" },
    { name: "Trenching", path: "/services/trenching" },
    { name: "Earth Moving", path: "/services/earth-moving" },
    { name: "Erosion Matting", path: "/services/erosion-matting" },
    { name: "Dust Control", path: "/services/dust-control" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-gray-200/50 shadow-lg transition-all duration-500 ease-in-out ${isScrolled ? 'py-2' : 'py-0'
        }`}
    >
      {/* Contact Info Bar - Hidden when scrolled */}
      <div
        className={`bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 transition-all duration-500 ease-in-out overflow-hidden ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-16 opacity-100'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-2 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-2 hover:text-red-600 transition-colors duration-200">
              <Phone size={14} className="text-red-500 sm:w-4 sm:h-4" />
              <span className="font-medium">(303) 435-4774</span>
            </div>
            <div className="flex items-center gap-2 hover:text-red-600 transition-colors duration-200">
              <FileText size={14} className="text-red-500 sm:w-4 sm:h-4" />
              <span className="font-medium">(303) 646-5438</span>
            </div>
            <div className="flex items-center gap-2 hover:text-red-600 transition-colors duration-200">
              <Mail size={14} className="text-red-500 sm:w-4 sm:h-4" />
              <span className="font-medium">garr@dirtdogsexcavating.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <img src={logo} alt="Logo" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-xl font-bold text-gray-800">Dirt Dogs</h1>
                <p className="text-xs sm:text-sm text-gray-600">Excavating</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group ">
                  <NavLink
                    to={link.path}
                    className="flex items-center gap-1 px-2 sm:px-3 py-2 font-mono font-bold text-black  hover:text-red-600 rounded-lg transition-all duration-200 relative group"
                  >
                    {link.name}
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:rotate-180"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="absolute inset-x-0 bottom-0 h-0.5  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </NavLink>

                  {/* Dropdown Menu */}
                  <div className="absolute right-0 top-full mt-2 w-60 sm:w-64 bg-white border border-gray-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2 sm:py-3">
                      {serviceLinks.map((service, index) => (
                        <NavLink
                          key={service.name}
                          to={service.path}
                          className="block px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded transition-colors duration-200 border-l-3 border-transparent hover:border-red-500"
                          onClick={() => setMenuOpen(false)}
                          style={{ animationDelay: `${index * 30}ms` }}
                        >
                          {service.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-2 sm:px-3 py-2 text-l font-bold font-mono text-gray-950  hover:tex-white rounded-lg transition-all duration-200 relative group`
                  }
                >
                  {link.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </NavLink>
              )
            )}
          </nav>

          {/* Profile Icon and Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Profile Icon */}
            <Link
              to="/admin-login"
              className="relative group p-1.5 sm:p-2 bg-gray-100 hover:bg-red-50 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              <User
                size={18}
                className="text-gray-600 group-hover:text-red-600 transition-colors duration-200 sm:w-5 sm:h-5"
              />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-gray-700 hover:text-red-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${menuOpen
          ? 'max-h-screen opacity-100 visible'
          : 'max-h-0 opacity-0 invisible overflow-hidden'
          }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="space-y-1">
                <div className="px-3 sm:px-4 py-2 sm:py-3 text-sm font-semibold text-gray-900 bg-gray-50 rounded-lg">
                  {link.name}
                </div>
                <div className="pl-4 sm:pl-6 space-y-1">
                  {serviceLinks.map((service) => (
                    <NavLink
                      key={service.name}
                      to={service.path}
                      className="block px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                      onClick={() => setMenuOpen(false)}
                    >
                      {service.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block px-3 sm:px-4 py-2 sm:py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${isActive
                    ? "text-red-600 bg-red-50 border-l-4 border-red-500"
                    : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;