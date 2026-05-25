
  import { createRoot } from "react-dom/client";
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import App from "./app/App";
  import BlogPostPage from "./app/pages/BlogPostPage";
import "./styles/index.css";
import emailjs from "@emailjs/browser";
emailjs.init("vtMJoQIwB-qaHhAYX");

  createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/posts/:id" element={<BlogPostPage />} />
      </Routes>
    </BrowserRouter>
  );
  