import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blogs from './components/blogs/Blogs'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import Layout from './components/Layout/Layout'
import NoPage from './components/noPage/NoPage'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Work from './components/work/Work'
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="work" element={<Work />} />
					<Route path="projects" element={<Projects />} />
					<Route path="blogs" element={<Blogs />} />
					<Route path="skills" element={<Skills />} />
					<Route path="contact" element={<Contact />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
