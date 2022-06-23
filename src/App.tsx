//import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AlertProvider } from './contexts/alertContext';
import { GlobalStyle } from "./style/reset";
import Header from './components/Header';
import { Suspense, lazy } from "react";
import { CssBaseline } from "@mui/material";
import Alert from "./components/Alert";
import Load from "./components/Load";
import Footer from "./components/Footer";

const Loading = () => (
	<Load />
);

const LazyWrapper = (Component: any) => (props: any) => (
	<Suspense fallback={<Loading />}>
		<Component {...props} />
	</Suspense>
);

const IntroPage = LazyWrapper(lazy(() => import("./pages/IntroPage")));
const AboutMePage = LazyWrapper(lazy(() => import("./pages/AboutMePage")));
const ProjectPage = LazyWrapper(lazy(() => import("./pages/ProjectPage")));
const ContactPage = LazyWrapper(lazy(() => import("./pages/ContactPage")));
const NotFoundPage = LazyWrapper(lazy(() => import("./pages/NotFoundPage")));

function App() {

	return (
		<>
			<GlobalStyle />
			<CssBaseline />
			<AlertProvider>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<IntroPage />} />
						<Route path="/about-me" element={<AboutMePage />} />
						<Route path="/projects" element={<ProjectPage />} />
						<Route path="/contact" element={<ContactPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
					<Footer />
				</BrowserRouter>
				<Alert />
			</AlertProvider>
		</>
	);
}

export default App;
