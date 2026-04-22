import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "@/feature/auth/authSlice.js";
import { User, Mail, LogOut, ArrowLeft } from "lucide-react";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="mx-auto max-w-2xl px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-foreground hover:text-muted-foreground mb-6"
        >
          <ArrowLeft className="size-5" />
          Quay lại
        </button>

        {/* Profile Card */}
        <div className="rounded-lg border border-input bg-background shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-foreground to-foreground/80 px-6 py-8">
            <div className="flex items-center gap-4">
              <div className="flex size-16 items-center justify-center rounded-full bg-background">
                <User className="size-8 text-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-background">{user?.name || "User"}</h1>
                <p className="text-background/80">{user?.email || "user@example.com"}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-8">
            {/* User Information */}
            <div className="mb-8">
              <h2 className="mb-6 text-lg font-semibold text-foreground">Thông tin cá nhân</h2>
              <div className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <User className="mr-2 inline-block size-4" />
                    Tên
                  </label>
                  <input
                    type="text"
                    value={user?.name || ""}
                    disabled
                    className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground disabled:opacity-50"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Mail className="mr-2 inline-block size-4" />
                    Email
                  </label>
                  <input
                    type="email"
                    value={user?.email || ""}
                    disabled
                    className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground disabled:opacity-50"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="border-t border-input pt-8">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-md bg-red-600 px-6 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <LogOut className="size-4" />
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
