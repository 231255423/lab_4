import { useState } from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Education from './components/Education';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-slate-900 text-gray-900 dark:text-slate-100 transition-colors duration-300 pb-12">
      <button 
        onClick={toggleTheme} 
        className="fixed top-6 right-6 bg-slate-800 dark:bg-yellow-400 text-white dark:text-slate-900 px-4 py-2 rounded-full font-bold shadow-lg z-50 hover:scale-105 transition-transform"
      >
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </button>

      <div className="max-w-6xl mx-auto px-4 pt-16">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-1 flex flex-col gap-6">
            <section className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 transition-colors text-center">
              <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 border-b border-gray-100 dark:border-slate-700 pb-2">Contacts</h2>
              <ul className="text-sm text-gray-600 dark:text-slate-300 space-y-3 text-left">
                <li><strong className="text-gray-800 dark:text-white">Email:</strong><br/>ivan@lpnu.ua</li>
                <li><strong className="text-gray-800 dark:text-white">GitHub:</strong><br/><a href="#" className="text-blue-500">github.com/username</a></li>
              </ul>
            </section>
            <Skills />
          </div>
          <div className="md:col-span-2 flex flex-col gap-6">
            <Profile />
            <Education />
            <Reviews />
          </div>
        </div>
      </div>
      <Footer />
      <ContactForm />
    </div>
  );
}

export default App;