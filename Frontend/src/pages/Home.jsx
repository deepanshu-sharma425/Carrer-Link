import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Career Link
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your gateway to finding the perfect job or the perfect candidate
            </p>
            {!isAuthenticated && (
              <div className="flex justify-center space-x-4">
                <Link
                  to="/signup"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-200"
                >
                  Get Started
                </Link>
                <Link
                  to="/signin"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-200"
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {isAuthenticated ? (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Welcome back, {user?.name}!
            </h2>
            <p className="text-gray-600 mb-4">
              You are logged in as{' '}
              <span className="font-semibold">
                {user?.role === 'issuer' ? 'Job Issuer' : 'Applicant'}
              </span>
            </p>
            <p className="text-gray-500">
              {user?.role === 'issuer'
                ? 'Start posting jobs and find the perfect candidates for your company.'
                : 'Browse available jobs and apply to positions that match your skills.'}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">👤</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                For Job Seekers
              </h3>
              <p className="text-gray-600 mb-4">
                Create your profile, browse thousands of job listings, and apply
                to positions that match your skills and interests.
              </p>
              <Link
                to="/signup"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Sign up as Applicant →
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-blue-600 text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                For Employers
              </h3>
              <p className="text-gray-600 mb-4">
                Post job openings, manage applications, and find the perfect
                candidates for your team.
              </p>
              <Link
                to="/signup"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Sign up as Job Issuer →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

