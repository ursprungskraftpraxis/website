import Home from "./routes/Home";
import Impressum from "./routes/Impressum";
import NotFound from "./routes/NotFound";
import Layout from "./Layout";
import { Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/de" replace />} />

      <Route element={<Layout />}>
        <Route path="/de">
          <Route index element={<Home />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/en">
          <Route index element={<Home />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
