import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import RegisterView from "./views/RegisterView";
import PreviewView from "./views/PreviewView";
import NotFoundView from "./views/NotFoundView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/preview" element={<PreviewView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}
