import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import App from "./App.tsx";
import { Navbar } from "./components/common/navbar.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import { Analytics } from "./pages/analytics.tsx";
import { MyCollection } from "./pages/my-collection.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Toaster />
    <Navbar />
    <main className="bg-white border-gray-200 dark:bg-gray-900 min-h-screen">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/my-collection" element={<MyCollection />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </main>
  </BrowserRouter>,
);
