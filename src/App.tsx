import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./pages/Index"
import ProjectDetail from "./pages/ProjectDetail"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App