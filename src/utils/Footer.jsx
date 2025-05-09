import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">cosyerp</h2>
          <p className="text-sm">
            cosyerp is India’s leading GST billing and accounting software trusted by small businesses across industries. Simplify invoicing, inventory, and more with Vyapar.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>Email: support@cosyerp.in</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Bengaluru, Karnataka, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} cosyerp. All rights reserved.
      </div>
    </footer>
  );
}
