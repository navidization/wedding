import { Navigate, Route, Routes } from "react-router-dom";
import InvitePage from "./routes/InvitePage";
import NotFoundPage from "./routes/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/invite/guest-001" replace />} />
      <Route path="/invite/:guestKey" element={<InvitePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
