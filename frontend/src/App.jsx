import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Generate from './pages/Generate'
import Preview from './pages/Preview'
import Download from './pages/Download'
import LearnRTI from './pages/LearnRTI'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generate" element={<Generate />} />
            <Route path="/preview" element={<Preview />} />
            <Route path="/download" element={<Download />} />
            <Route path="/learn" element={<LearnRTI />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App