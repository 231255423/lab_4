import { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000); 

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-2xl w-full max-w-md relative transition-colors">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white text-xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">Contact Me</h2>
        
       <form action="https://formspree.io/f/mbdbggzv" method="POST" className="space-y-4">
          <input type="text" name="name" placeholder="Ім'я" required className="w-full p-3 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-xl focus:outline-none focus:border-blue-500" />
          <input type="email" name="email" placeholder="Email" required className="w-full p-3 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-xl focus:outline-none focus:border-blue-500" />
          <input type="tel" name="phone" placeholder="Номер телефону" className="w-full p-3 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-xl focus:outline-none focus:border-blue-500" />
          <textarea name="message" placeholder="Ваше повідомлення" required rows="4" className="w-full p-3 border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-xl focus:outline-none focus:border-blue-500 resize-none"></textarea>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors shadow-md">
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;