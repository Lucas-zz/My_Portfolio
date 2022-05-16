//import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AlertProvider } from './contexts/alertContext';
import { GlobalStyle } from "./style/reset";
import { IntroPage, AboutMePage, ProjectPage, ContactPage } from './pages';
import Header from './components/Header';

function App() {
	return (
		<>
			<GlobalStyle />
			<AlertProvider>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<IntroPage />} />
						<Route path="/about-me" element={<AboutMePage />} />
						<Route path="/projects" element={<ProjectPage />} />
						<Route path="/contact" element={<ContactPage />} />
					</Routes>
				</BrowserRouter>
			</AlertProvider>
		</>
	);
}

export default App;
