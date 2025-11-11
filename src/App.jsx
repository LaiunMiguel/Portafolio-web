import { Routes, Route } from 'react-router-dom';
import Home from './page/Home.jsx'
import Contact from './page/Contact.jsx'
import Projects from './page/Project.jsx'
import Navbar from './component/Navbar.jsx'
import Footer from './component/Footer.jsx'
import ProjectDetail from './page/ProjectDetail.jsx';



function App() {


  return (
    <div className="min-h-screen flex flex-col justify-between font-sans bg-background">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail  />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
