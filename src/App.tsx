import { Suspense, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Loader from './components/Loader';
import PageTransition from './components/PageTransition';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ResumePage from './pages/ResumePage';
import EducationPage from './pages/EducationPage';
import ContactPage from './pages/ContactPage';
import ArticlesPage from './pages/ArticlesPage';
import CodingProfilesPage from './pages/CodingProfilesPage';
import ExperiencePage from './pages/ExperiencePage';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsFirstLoad(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading && isFirstLoad) {
    return <Loader />;
  }

  return (
    <div className="relative z-0 bg-background-primary">
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <Suspense fallback={<PageTransition />}>
                <HomePage />
              </Suspense>
            } 
          />
          <Route 
            path="/about" 
            element={
              <Suspense fallback={<PageTransition />}>
                <AboutPage />
              </Suspense>
            } 
          />
          <Route 
            path="/projects" 
            element={
              <Suspense fallback={<PageTransition />}>
                <ProjectsPage />
              </Suspense>
            } 
          />
          <Route 
            path="/experience" 
            element={
              <Suspense fallback={<PageTransition />}>
                <ExperiencePage />
              </Suspense>
            } 
          />
          <Route 
            path="/education" 
            element={
              <Suspense fallback={<PageTransition />}>
                <EducationPage />
              </Suspense>
            } 
          />
          <Route 
            path="/skills" 
            element={
              <Suspense fallback={<PageTransition />}>
                <SkillsPage />
              </Suspense>
            } 
          />
          <Route 
            path="/resume" 
            element={
              <Suspense fallback={<PageTransition />}>
                <ResumePage />
              </Suspense>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <Suspense fallback={<PageTransition />}>
                <ContactPage />
              </Suspense>
            } 
          />
          <Route 
            path="/articles" 
            element={
              <Suspense fallback={<PageTransition />}>
                <ArticlesPage />
              </Suspense>
            } 
          />
          <Route 
            path="/coding-profiles" 
            element={
              <Suspense fallback={<PageTransition />}>
                <CodingProfilesPage />
              </Suspense>
            } 
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;