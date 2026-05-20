import React from 'react';

// Компонент Шапки (Header)
function Header() {
  return (
    <header className="bg-[#004080] text-white p-8 text-center shadow-md">
      <h1 className="text-4xl font-bold tracking-wide">Іван</h1>
      <p className="text-lg italic mt-2 opacity-90">Студент | 3D Graphics, Motion Design & PC Hardware</p>
    </header>
  );
}

// Компонент Контактів
function Contacts() {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center">
      <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b-2 border-[#004080] pb-2 inline-block px-4">Contacts</h2>
      <ul className="text-sm text-gray-700 space-y-3 mt-4 text-left pl-4">
        <li><strong className="text-gray-900">Email:</strong><br/>ivan@lpnu.ua</li>
        <li><strong className="text-gray-900">GitHub:</strong><br/><a href="https://github.com/username" className="text-blue-600 hover:underline">github.com/username</a></li>
      </ul>
    </section>
  );
}

// Компонент Навичок (Skills)
function Skills() {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-[#004080] pb-2 inline-block px-4">Skills</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
          <h3 className="font-bold text-xs text-gray-800">HTML5 / CSS3</h3>
          <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2"><div className="bg-yellow-500 h-1.5 rounded-full w-1/3"></div></div>
          <span className="text-[10px] text-gray-400 block mt-1 uppercase font-semibold">Amateur</span>
        </div>
        <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
          <h3 className="font-bold text-xs text-gray-800">After Effects</h3>
          <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2"><div className="bg-green-500 h-1.5 rounded-full w-2/3"></div></div>
          <span className="text-[10px] text-gray-400 block mt-1 uppercase font-semibold">Competent</span>
        </div>
        <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
          <h3 className="font-bold text-xs text-gray-800">Cinema 4D</h3>
          <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2"><div className="bg-green-500 h-1.5 rounded-full w-2/3"></div></div>
          <span className="text-[10px] text-gray-400 block mt-1 uppercase font-semibold">Competent</span>
        </div>
        <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
          <h3 className="font-bold text-xs text-gray-800">PC Hardware</h3>
          <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2"><div className="bg-blue-600 h-1.5 rounded-full w-11/12"></div></div>
          <span className="text-[10px] text-gray-400 block mt-1 uppercase font-semibold">Expert</span>
        </div>
      </div>
    </section>
  );
}

// Компонент Про себе (Profile)
function Profile() {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Про себе</h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        Студент Національного університету «Львівська політехніка». Активно вивчаю вебтехнології, маю глибокий інтерес до комп'ютерного заліза, налаштування систем під високу продуктивність, а також створення 3D-графіки і моушен-дизайну. У вільний час цікавлюсь автомобільною культурою.
      </p>
    </section>
  );
}

// Компонент Освіти (Education)
function Education() {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-gray-100 pb-2 text-center">Education</h2>
      <div className="border-l-4 border-blue-500 pl-4 py-2 text-left">
        <h3 className="text-lg font-bold text-gray-800">Національний університет «Львівська політехніка»</h3>
        <time className="text-sm text-gray-400 block my-1">2023 – 2027</time>
        <p className="text-gray-600 text-sm">Здобуваю вищу освіту на кафедрі захисту інформації (Кібербезпека).</p>
      </div>
    </section>
  );
}

// Головний компонент програми
export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] text-gray-800 pb-12 font-sans">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* Ліва колонка: Контакти та Навички */}
        <div className="md:col-span-1 flex flex-col gap-6">
          <Contacts />
          <Skills />
        </div>
        
        {/* Права колонка: Про себе та Освіта */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <Profile />
          <Education />
        </div>
      </main>
    </div>
  );
}