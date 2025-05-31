import { useState } from "react";
import type { NavItemType } from "../constants/navigation.constants";

type NavBarProps = {
  items: NavItemType[];
};

export const NavBar = ({ items }: NavBarProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header className="md:bg-primary h-15 flex items-center justify-between relative">
      <nav
        className="hidden md:flex items-center px-4"
        role="navigation"
        aria-label="メインナビゲーション"
      >
        <ul className="flex items-center space-x-6">
          {items.map((item, index) => (
            <li key={index} className="">
              <a
                href={item.path}
                className="text-white hover:underline underline-offset-2 decoration-red-600"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden md:flex items-center px-4">
        <ul className="flex items-center space-x-4">
          <li className="hover:bg-blue-300">
            <a
              href=""
              className="text-white px-3 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
            >
              ログイン
            </a>
          </li>
          <li className="text-blue-600 px-3 py-2 bg-white rounded hover:bg-blue-600 hover:text-white transition-colors duration-200">
            <a href="">新規登録</a>
          </li>
        </ul>
      </div>
      <div className="md:hidden bg-primary h-15 w-full flex items-center">
        <button
          onClick={toggleMenu}
          className="text-white p-2 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-label="ナビゲーションメニューを開閉する"
          aria-expanded={isMenuOpen}
          aria-controls="menu-panel"
        >
          {isMenuOpen ? (
            // heroiconsを使用
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
      {/* ハンバーガーメニューを開いたときに表示されるコンポーネント */}
      {isMenuOpen && (
        <div
          id="menu-panel"
          className="md:hidden border-t border-white absolute top-full left-0 right-0 bg-primary z-50 shadow-lg"
        >
          <ul className="flex flex-col items-stretch text-center py-2">
            {items.map((item, index) => (
              <li key={index} className="border-b border-white">
                <a
                  href={item.path}
                  className="block py-3 text-white hover:bg-blue-600 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="border-b border-white">
              <a
                href=""
                className="block text-white py-3 hover:bg-blue-600 transition-colors duration-200"
              >
                ログイン
              </a>
            </li>
            <li>
              <a
                href=""
                className="block text-white py-3 hover:bg-blue-600 transition-colors duration-200"
              >
                新規登録
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
