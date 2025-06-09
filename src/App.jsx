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
import LvlupNewsPage from './components/page/LvlupNewsPage';
import AdminPage from './components/page/AdminPage';
import AdminLogin from './components/layout/AdminLogin';
import NewsArticlePage from './components/page/NewsArticlePage';
import AdminLoginGuard from './components/layout/AdminLoginGuard';
import PrivacyPolicyPage from './components/page/PrivacyPolicyPage';
import TermsOfServicePage from './components/page/TermsOfServicePage';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <SearchProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="resume" element={<ResumePage />} />
                <Route path="/resume/:id" element={<GameDetails />} />
                <Route path="/releases" element={<ReleasesPage />} />
                <Route path="/lvlup-news" element={<LvlupNewsPage />} />
                <Route path="/news/:id" element={<NewsArticlePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsOfServicePage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/admin-login" element={
                  <AdminLoginGuard>
                    <AdminLogin />
                  </AdminLoginGuard>
                } />
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