"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full py-4 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="#top" className="text-3xl font-bold text-brown-700 p-2">
                    🥐 Lumière
                </Link>

                {/* PCメニュー */}
                <div className="hidden md:flex gap-6">
                    <Link href="#products" className="hover:text-brown-600">おすすめのパン</Link>
                    <Link href="#about" className="hover:text-brown-600">Lumière について</Link>
                    <Link href="#access" className="hover:text-brown-600">アクセス</Link>
                </div>

                {/* モバイルメニュー切り替え */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
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
