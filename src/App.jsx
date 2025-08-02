import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './home/components/context/LanguageContext'
import Home from './home/view/Homeview'
import About from './home/view/AboutView'
import Projects from './home/view/ProjectView'
import Contact from './home/view/ContactView'
import ProjectTruckers from './projects/View/TruckersView'
import ProjectMensajeria from './projects/View/MensajeriaView'
import ProjectSelenita from './projects/View/PasteleriaView'
import ProjectJava from './projects/ProjectJAVA'
import ScrollToTop from './projects/ScrollToTop';


function App() {
  return (
    <LanguageProvider>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/projects/truckers-talent" element={<ProjectTruckers />} />
        <Route path="/projects/mensajeria-segura" element={<ProjectMensajeria />} />
        <Route path="/projects/pasteleria-selenita" element={<ProjectSelenita />} />
        <Route path="/projects/java" element={<ProjectJava />} />
        
      </Routes>
    </Router>
    </LanguageProvider>
  )
}

export default App
