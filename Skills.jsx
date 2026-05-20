function Skills() {
  return (
    <section className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 text-center transition-colors">
      <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 border-b border-gray-100 dark:border-slate-700 pb-2">Skills</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* HTML5 / CSS3 */}
        <div className="border border-gray-100 dark:border-slate-700 p-3 rounded-xl">
          <p className="text-sm font-bold text-gray-800 dark:text-white">HTML5 / CSS3</p>
          <div className="w-full bg-gray-200 dark:bg-slate-700 h-1.5 rounded-full mt-2">
            <div className="bg-yellow-400 h-1.5 rounded-full w-1/2"></div>
          </div>
          <span className="text-[10px] text-gray-400 dark:text-slate-500 uppercase mt-1 block">Amateur</span>
        </div>
        
        {/* After Effects */}
        <div className="border border-gray-100 dark:border-slate-700 p-3 rounded-xl">
          <p className="text-sm font-bold text-gray-800 dark:text-white">After Effects</p>
          <div className="w-full bg-gray-200 dark:bg-slate-700 h-1.5 rounded-full mt-2">
            <div className="bg-green-500 h-1.5 rounded-full w-4/5"></div>
          </div>
          <span className="text-[10px] text-gray-400 dark:text-slate-500 uppercase mt-1 block">Competent</span>
        </div>
        
        {/* Cinema 4D */}
        <div className="border border-gray-100 dark:border-slate-700 p-3 rounded-xl">
          <p className="text-sm font-bold text-gray-800 dark:text-white">Cinema 4D</p>
          <div className="w-full bg-gray-200 dark:bg-slate-700 h-1.5 rounded-full mt-2">
            <div className="bg-green-500 h-1.5 rounded-full w-4/5"></div>
          </div>
          <span className="text-[10px] text-gray-400 dark:text-slate-500 uppercase mt-1 block">Competent</span>
        </div>
        
        {/* PC Hardware */}
        <div className="border border-gray-100 dark:border-slate-700 p-3 rounded-xl">
          <p className="text-sm font-bold text-gray-800 dark:text-white">PC Hardware</p>
          <div className="w-full bg-gray-200 dark:bg-slate-700 h-1.5 rounded-full mt-2">
            <div className="bg-blue-600 h-1.5 rounded-full w-full"></div>
          </div>
          <span className="text-[10px] text-gray-400 dark:text-slate-500 uppercase mt-1 block">Expert</span>
        </div>
      </div>
    </section>
  );
}
export default Skills;