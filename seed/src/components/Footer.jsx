import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-400 border-t border-red-600 body-font mt-12">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="text-3xl bg-gradient-to-r from-red-500 to-red-900 text-transparent bg-clip-text">
              FilmFinder
            </span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Discover Your Silver Screen Adventures with Film Finder
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              ABOUT US
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">About</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Our Mission</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Team</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Careers</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              CONTACT US
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">
                  Contact Information
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Customer Support</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Sales Team</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Feedback</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              TOOLS & GUIDE
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">Getting Started</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">User Guide</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Tips and Tricks</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Troubleshooting</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              USEFUL LINKS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">FAQs</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Terms of Service</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Help Center</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
