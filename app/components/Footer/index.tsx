import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#430F00] border-t border-white/20 py-3 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
                    <div className="flex items-center space-x-6 text-sm text-gray-100">
                        <Link 
                            href="/terms" 
                            className="px-3 py-1 rounded hover:bg-white/20 hover:text-white transition-all duration-300"
                        >
                            Terms of Service
                        </Link>
                        <span className="text-gray-300">|</span>
                        <Link 
                            href="/privacy" 
                            className="px-3 py-1 rounded hover:bg-white/20 hover:text-white transition-all duration-300"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                    <div className="text-sm text-gray-200">
                        © {new Date().getFullYear()} UAE Property Guide. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
