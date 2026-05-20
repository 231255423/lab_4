import { useState, useEffect } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState({ platform: '', userAgent: '' });

  useEffect(() => {
    const info = {
      platform: navigator.platform,
      userAgent: navigator.userAgent,
    };
    localStorage.setItem('browserInfo', JSON.stringify(info));
    const savedInfo = JSON.parse(localStorage.getItem('browserInfo'));
    if (savedInfo) {
      setSysInfo(savedInfo);
    }
  }, []);

  return (
    <footer className="bg-slate-800 text-slate-300 text-center py-6 mt-8 rounded-3xl mx-4 shadow-inner text-sm">
      <p>&copy; 2026 Іван. All rights reserved.</p>
      <div className="mt-4 pt-4 border-t border-slate-700 max-w-3xl mx-auto text-xs text-slate-400 break-words px-4">
        <p><strong>Platform:</strong> {sysInfo.platform}</p>
        <p><strong>User Agent:</strong> {sysInfo.userAgent}</p>
      </div>
    </footer>
  );
}

export default Footer;