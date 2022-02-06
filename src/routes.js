import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { AuthProvider } from "./context/useUser";
import { ErrorPage } from "./pages/error";
import { Home } from "./pages/Home";
import { Modal } from "./components/Modal";
export function RouterAplication() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Modal />
    </AuthProvider>
  );
}
