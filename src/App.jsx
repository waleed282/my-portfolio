import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
// Adding .jsx extension to resolve file path
import Layout from './components/Layout/Layout.jsx';

// Only keep the necessary import for Home4
// Adding .jsx extension to resolve file path
import Home4 from './pages/Home4.jsx';

// Only keep Page404 and BlogDetails if they are still needed for your site
// Adding .jsx extension to resolve file path
import Page404 from './components/404/Page404.jsx';
// import BlogDetails from './components/Blog/BlogDetails.jsx';

// Removed the Aos dependency and its related imports and usage due to resolution errors.
// import Aos from 'aos';
// import 'aos/dist/aos.css';

// Removed:
// import Home from './pages/Home';
// import Home2 from './pages/Home2';
// import Home3 from './pages/Home3';
// import Landing from './pages/Landing';
// import LandingLayout from './components/Layout/LandingLayout';
// import Layout2 from './components/Layout/Layout2';

function App() {
  // Removed useEffect related to Aos initialization
  /* useEffect(() => {
    Aos.init({ once: true });
  }, []);
  */

  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout Route */}
        <Route path="/" element={<Layout />}>
          {/* This is the new main page. 
            Visiting '/' will now show Home4.
          */}
          <Route index element={<Home4 />} />

          {/* Removed: <Route index element={<Home />} /> */}
          {/* Removed: <Route path="home-v3" element={<Home3 />} /> */}
          {/* Removed: <Route path="home-v4" element={<Home4 />} /> since it's now the index */}

          {/* Keep other necessary routes */}
          <Route path="*" element={<Page404 />} />
          {/* <Route path="blog/blog-details" element={<BlogDetails />} /> */}
        </Route>

        {/* Removed the entire route block for home-v2 */}
        {/* Removed the entire route block for landing */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;