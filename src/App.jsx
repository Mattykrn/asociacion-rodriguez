import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Courses from './pages/Courses'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/admin/ProtectedRoute'
import AdminLayout from './components/admin/AdminLayout'
import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import CoursesList from './pages/admin/CoursesList'
import CourseForm from './pages/admin/CourseForm'
import ProductsList from './pages/admin/ProductsList'
import TestimonialsList from './pages/admin/TestimonialsList'
import NewsList from './pages/admin/NewsList'
import DocumentsList from './pages/admin/DocumentsList'

export default function App() {
  return (
    <Routes>
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin" element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<CoursesList />} />
          <Route path="courses/new" element={<CourseForm />} />
          <Route path="courses/:id/edit" element={<CourseForm />} />
          <Route path="products" element={<ProductsList />} />
          <Route path="testimonials" element={<TestimonialsList />} />
          <Route path="news" element={<NewsList />} />
          <Route path="documents" element={<DocumentsList />} />
        </Route>
      </Route>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
