import AdminPage from "@/pages/admin/index.jsx";
import ProductManagementPage from "@/pages/admin/product-page/index.jsx";
import RootPage from "@/pages/client/index.jsx";
import { createBrowserRouter } from "react-router-dom";

// Placeholder pages for client routes
const HomePage = () => <div className="mx-auto max-w-7xl px-4 py-8">Trang chủ</div>;
const ContactPage = () => <div className="mx-auto max-w-7xl px-4 py-8">Liên hệ</div>;
const AboutPage = () => <div className="mx-auto max-w-7xl px-4 py-8">Về chúng tôi</div>;
const RegisterPage = () => <div className="mx-auto max-w-7xl px-4 py-8">Đăng ký</div>;
const LoginPage = () => <div className="mx-auto max-w-7xl px-4 py-8">Đăng nhập</div>;
const SearchPage = () => <div className="mx-auto max-w-7xl px-4 py-8">Tìm kiếm</div>;
const WishlistPage = () => <div className="mx-auto max-w-7xl px-4 py-8">Yêu thích</div>;
const CartPage = () => <div className="mx-auto max-w-7xl px-4 py-8">Giỏ hàng</div>;
const ProfilePage = () => <div className="mx-auto max-w-7xl px-4 py-8">Tài khoản của tôi</div>;

export const router = createBrowserRouter([
    // Client routes
    {
        path: "/",
        element: <RootPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "contact",
                element: <ContactPage />
            },
            {
                path: "about",
                element: <AboutPage />
            },
            {
                path: "register",
                element: <RegisterPage />
            },
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: "search",
                element: <SearchPage />
            },
            {
                path: "wishlist",
                element: <WishlistPage />
            },
            {
                path: "cart",
                element: <CartPage />
            },
            {
                path: "profile",
                element: <ProfilePage />
            }
        ]
    },
    // Admin routes
    {
        path: "/admin",
        element: <AdminPage />,
        children: [
            {
                index: true,
                element: <ProductManagementPage />
            }
        ]
    }
])
