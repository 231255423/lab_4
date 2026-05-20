function Profile() {
  return (
    <section className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 mb-6 text-center md:text-left transition-colors">
      <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 text-center border-b border-gray-100 dark:border-slate-700 pb-2">Profile</h2>
      <p className="text-gray-600 dark:text-slate-300 leading-relaxed mb-6">
        Студент Національного університету «Львівська політехніка». Активно вивчаю вебтехнології, маю глибокий інтерес до комп'ютерного заліза, налаштування систем під високу продуктивність, а також створення 3D-графіки і моушен-дизайну.
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        <span className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-200 px-4 py-1.5 rounded-full text-xs font-semibold">After Effects</span>
        <span className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-200 px-4 py-1.5 rounded-full text-xs font-semibold">Cinema 4D</span>
        <span className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-200 px-4 py-1.5 rounded-full text-xs font-semibold">Motion Design</span>
        <span className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-200 px-4 py-1.5 rounded-full text-xs font-semibold">PC Hardware</span>
      </div>
    </section>
  );
}
export default Profile;