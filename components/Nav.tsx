"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { Home, Croissant, Paperclip, Info, Map } from "lucide-react";


export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full py-4 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="text-3xl font-bold text-brown-700 p-2">
                    <span>Lumière</span>
                </Link>

                {/* PCメニュー */}
                <div className="hidden md:flex gap-6 items-center">
                    <Link href="/" className="flex items-center gap-2 hover:text-brown-600">
                        <Home className="w-5 h-5" />
                        Home
                    </Link>
                    <Link href="#about" className="flex items-center gap-2 hover:text-brown-600">
                        <Paperclip />
                        About
                    </Link>
                    <Link href="#topics" className="flex items-center gap-2 hover:text-brown-600">
                        <Info />
                        Topics
                    </Link>
                    <Link href="#products" className="flex items-center gap-2 hover:text-brown-600">
                        <Croissant />
                        Products
                    </Link>
                    <Link href="#access" className="flex items-center gap-2 hover:text-brown-600">
                        <Map />
                        Access & Hours
                    </Link>
                </div>

                {/* モバイルメニュー切り替え */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                </button>
            </div>

            {/* モバイルメニュー */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4">
                    <Link href="#products" className="block py-2">パン</Link>
                    <Link href="#about" className="block py-2">私たちについて</Link>
                    <Link href="#access" className="block py-2">アクセス</Link>
                </div>
            )}
        </nav>
    );
}