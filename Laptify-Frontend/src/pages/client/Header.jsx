import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Search, Heart, ShoppingCart, Menu } from "lucide-react";
import UserMenuDropdown from "./components/UserMenuDropdown";
import MobileMenu from "./components/MobileMenu";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(
        `/products/search?keyword=${encodeURIComponent(searchQuery.trim())}`,
      );
    }
  };

  const navItems = [
    { label: "Trang chủ", path: "/" },
    { label: "Liên hệ", path: "/contact" },
    { label: "Về chúng tôi", path: "/about" },
    { label: "Đăng ký", path: "/register" },
  ];

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(
        `/products/search?keyword=${encodeURIComponent(searchQuery.trim())}`,
      );
      setSearchQuery("");
    }
  };

  return (
    <header className="w-full">
      {/* Announcement Bar */}
      <div className="bg-black py-2 text-center text-sm text-white">
        <p>
          Ưu đãi hè: Giảm 50% tất cả chuột ASUS & Miễn phí giao hàng hỏi tốc!{" "}
          <Link
            to="/shop"
            className="ml-1 font-semibold underline underline-offset-2 hover:opacity-80"
          >
            Mua ngay
          </Link>
        </p>
      </div>

      {/* Main Header */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* Hamburger Menu Button - Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden items-center justify-center rounded-md p-2 text-foreground hover:bg-accent"
            aria-label="Toggle menu"
          >
            <Menu className="size-5" />
          </button>

          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-foreground">
            Laptify
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Search and Icons */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Bạn đang tìm kiếm sản phẩm gì?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                className="h-10 w-64 rounded-md border border-input bg-background px-4 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring lg:w-80"
              />
              <Search className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            </div>

            {/* Authenticated User - Icons and Menu */}
            {isAuthenticated ? (
              <>
                {/* Wishlist Icon */}
                <Link
                  to="/wish-list"
                  className="flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-accent"
                  aria-label="Yêu thích"
                >
                  <Heart className="size-5" />
                </Link>

                {/* Cart Icon */}
                <Link
                  to="/cart"
                  className="flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-accent"
                  aria-label="Giỏ hàng"
                >
                  <ShoppingCart className="size-5" />
                </Link>

                {/* User Menu Dropdown */}
                <UserMenuDropdown user={user} />
              </>
            ) : (
              /* Login Button - for unauthenticated users */
              <Link
                to="/login"
                className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
              >
                Đăng nhập
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </header>
  );
};

export default Header;
