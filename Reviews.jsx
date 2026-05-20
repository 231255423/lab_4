import { useState, useEffect } from 'react';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Варіант 29
    fetch('https://jsonplaceholder.typicode.com/posts/29/comments')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Помилка завантаження:', error));
  }, []);

  return (
    <section className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 mb-6 transition-colors">
      <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 border-b border-gray-100 dark:border-slate-700 pb-2">Reviews</h2>
      <div className="space-y-4">
        {reviews.map(review => (
          <div key={review.id} className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl border border-slate-100 dark:border-slate-600">
            <h3 className="font-bold text-slate-800 dark:text-white mb-1">{review.name}</h3>
            <p className="text-sm text-blue-500 mb-2">{review.email}</p>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{review.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;