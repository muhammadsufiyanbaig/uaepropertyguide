import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-700 py-4 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
                    <div className="flex items-center space-x-4 text-xs text-gray-300">
                        <Link 
                            href="/terms" 
                            className="hover:text-white transition-colors duration-200"
                        >
                            Terms of Service
                        </Link>
                        <span className="text-gray-600">|</span>
                        <Link 
                            href="/privacy" 
                            className="hover:text-white transition-colors duration-200"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                    <div className="text-xs text-gray-400">
                        © {new Date().getFullYear()} UAE Property Guide. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;