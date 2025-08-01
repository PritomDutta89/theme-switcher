import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SidebarLayout from "./components/SidebarLayout";

const LayoutRouter = () => {
  const { theme } = useTheme();

  const MainRoutes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );

  // theme 2 layout with sidebar
  if (theme === "theme2") {
    return (
      <div className="md:flex h-screen transition-colors duration-500 ease-in-out">
        <SidebarLayout />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-900 text-white">
          {MainRoutes}
        </main>
      </div>
    );
  }

  // theme 1 & 3 layout with header
  return (
    <>
      <Header />
      <main className="pt-20 px-4 transition-colors duration-500 ease-in-out">
        {MainRoutes}
      </main>
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <LayoutRouter />
      </Router>
    </ThemeProvider>
  );
}

export default App;
