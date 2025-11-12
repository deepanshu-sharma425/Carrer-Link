import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200"
          >
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl font-bold text-xl shadow-md">
              CL
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Career Link
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-50">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-700">
                      Welcome, <span className="font-semibold text-gray-900">{user?.name}</span>
                    </span>
                    <span className="text-xs text-gray-500">
                      {user?.role === 'issuer' ? 'Job Issuer' : 'Applicant'}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="text-gray-700 hover:text-blue-600 px-5 py-2.5 rounded-lg transition-all duration-200 font-medium hover:bg-blue-50"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg font-medium"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

