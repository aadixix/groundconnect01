"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NavMenu = ({ pathname, categories = [] }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const allNavLinks = categories
    .filter((category) => category.ShowOnMenu && category.IsActive)
    .sort((a, b) => (a.MenuOrder || 999) - (b.MenuOrder || 999))
    .map((category) => ({
      label: category.CategoryName,
      href: `/category/${category.Slug}`,
      id: category.Id,
    }));

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-nav-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubmenu = (linkId) => {
    setOpenSubmenu(openSubmenu === linkId ? null : linkId);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-8 lg:text-[20px] font-semibold items-center">
        {allNavLinks.map((link, idx) => {
          const isActive = pathname === link.href;

          if (link.submenu) {
            return (
              <div key={link.id || idx} className="relative group inline-block">
                <div className="dynamic-green-color font-semibold relative inline-block cursor-pointer">
                  <span className="dynamic-green-hover transition-colors duration-300">
                    {link.label}
                  </span>
                </div>
                <div
                  className="
                    absolute top-full -left-20 mt-0 w-[180px]
                    opacity-0 scale-95 translate-y-2 pointer-events-none
                    group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                    transition-all duration-300 ease-out
                    rounded-xl border border-gray-200 bg-white/90 backdrop-blur-md shadow-2xl z-50
                  "
                >
                  {link.submenu.map((sublink, i) => {
                    const isSubActive = pathname === sublink.href;
                    return (
                      <Link
                        key={i}
                        href={sublink.href}
                        className={`relative block px-5 py-3 text-[17px] font-medium text-gray-800 tracking-wide
                          dynamic-submenu-hover transition-all duration-200 rounded-md
                          ${isSubActive
                            ? "dynamic-submenu-active font-semibold"
                            : ""
                          }
                        `}
                      >
                        <span>{sublink.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          } else {
            return (
              <Link
                key={link.id || idx}
                href={link.href}
                className={`dynamic-green-color font-semibold relative inline-block dynamic-active-underline ${isActive ? "active-underline" : ""
                  }`}
              >
                <span>{link.label}</span>
                <span className="dynamic-underline-line"></span>
              </Link>
            );
          }
        })}
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden mobile-nav-container">
        {/* Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
              }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
          ></span>
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Menu</h3>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close mobile menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-80px)]">
            {allNavLinks.map((link, idx) => {
              const isActive = pathname === link.href;

              if (link.submenu) {
                return (
                  <div key={link.id || idx} className="border-b border-gray-100 last:border-b-0">
                    <button
                      onClick={() => toggleSubmenu(link.id || idx)}
                      className="w-full flex justify-between items-center py-3 px-2 text-left font-medium text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <span className="dynamic-green-color">{link.label}</span>
                      <svg
                        className={`w-4 h-4 transform transition-transform duration-200 ${openSubmenu === (link.id || idx) ? 'rotate-180' : ''
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Submenu Items */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${openSubmenu === (link.id || idx) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                      <div className="pl-4 pb-2 space-y-1">
                        {link.submenu.map((sublink, i) => {
                          const isSubActive = pathname === sublink.href;
                          return (
                            <Link
                              key={i}
                              href={sublink.href}
                              className={`block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded-md transition-colors ${isSubActive ? 'dynamic-submenu-active font-semibold' : ''
                                }`}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {sublink.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <Link
                    key={link.id || idx}
                    href={link.href}
                    className={`block py-3 px-2 font-medium rounded-lg transition-colors hover:bg-gray-50 ${isActive ? 'dynamic-green-color font-semibold' : 'text-gray-800'
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
