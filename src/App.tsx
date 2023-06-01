import './App.scss';
import { BlogDetailsPage } from './app/pages/BlogDetailsPage/BlogDetailsPage';
import { Footer } from './app/components/Footer/Footer';
import { Header } from './app/components/Header/Header';
import { HomePage } from './app/pages/HomePage/HomePage';
import { LoginPage } from './app/pages/LoginPage/LoginPage';
import { ProjectDetails } from "./app/pages/ProjectDetails/ProjectDetails";
import { RegisterPage } from './app/pages/RegisterPage/Registerpage';
import { Route, Routes } from 'react-router-dom';
import { ServiceSingle } from './app/pages/ServiceSingle/ServiceSingle';
import { ServicesPage } from './app/pages/ServicesPage/ServicesPage';
import React from 'react';
import { BlogPage } from './app/pages/BlogPage/BlogPage';
import { FilteredPosts } from './app/pages/FilteredPosts/FilteredPosts';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="services" element={<ServicesPage />}></Route>
          <Route path="blog/:id" element={<BlogDetailsPage />}></Route>
          <Route path="service-single" element={<ServiceSingle />}></Route>
          <Route path="project-details" element={<ProjectDetails />}></Route>
          <Route path="blog" element={<BlogPage />}></Route>
          <Route path="filter" element={<FilteredPosts />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;