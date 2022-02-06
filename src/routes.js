import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { AuthProvider } from "./context/useUser";
import { ErrorPage } from "./pages/error";

export function RouterAplication() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AuthProvider>
  );
}
