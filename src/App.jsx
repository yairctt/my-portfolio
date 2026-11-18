import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import NotFound from './pages/404'
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import "preline/preline";
import user_info from './data/user_info.js';
import user_info_es from './data/user_info_es.js';

export const AppContext = createContext();

function App() {
	const savedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(savedTheme || "light");

    const savedLang = localStorage.getItem("lang");
    const [lang, setLang] = useState(savedLang || "es");

	useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

	const switchTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useEffect(() => {
        document.documentElement.lang = lang;
        document.title = (lang === "es" ? user_info_es : user_info).ui.meta.title;
    }, [lang]);

    const switchLang = () => {
        const next = lang === "en" ? "es" : "en";
        setLang(next);
        localStorage.setItem("lang", next);
    };

	return (
		<AppContext.Provider value={{ theme, switchTheme, lang, switchLang }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</AppContext.Provider>
	)
}

export default App
