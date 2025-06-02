import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/layout/Layout';
import HomePage from './components/page/HomePage';
import SearchPage from './components/page/SearchPage';
import { AuthProvider } from '../src/contexts/AuthContext';
import { ThemeProvider } from '../src/contexts/ThemeContext';
import { SearchProvider } from '../src/contexts/SearchContext';
import ResumePage from '../src/components/page/ResumePage';
import GameDetails from '../src/components/resume/GameDetails';
import ReleasesPage from './components/page/ReleasesPage';
import AboutPage from './components/page/AboutPage';
import ContactPage from './components/page/ContactPage';
import FAQPage from './components/page/FAQPage';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <SearchProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="resume" element={<ResumePage />} />
                <Route path="/resume/:id" element={<GameDetails />} />
                <Route path="/releases" element={<ReleasesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FAQPage />} />
              </Route>
            </Routes>
            <Analytics />
          </BrowserRouter>
        </SearchProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;