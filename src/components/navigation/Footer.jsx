import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Mocco Mart. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
