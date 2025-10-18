import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { newsItems } from '../data/news';

const NewsDetail = () => {
  const { slug } = useParams();
  const article = newsItems.find(n => n.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold">Article not found</h1>
            <Link to="/news" className="mt-6 inline-block text-[#DCBC7C] hover:text-[#C4A76A] font-semibold">Back to News</Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-[#F1F0E8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-[#DCBC7C] text-black text-sm font-semibold rounded-full">{article.category}</span>
            <span className="text-sm text-gray-600">{article.date}</span>
          </div>
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight font-playfair">{article.title}</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg max-w-none whitespace-pre-line text-gray-800">
            {article.content}
          </div>
          {Array.isArray(article.bullets) && article.bullets.length > 0 && (
            <ul className="list-disc pl-6 my-4 text-gray-800">
              {article.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
          {article.postContent && (
            <div className="prose prose-lg max-w-none whitespace-pre-line text-gray-800">
              {article.postContent}
            </div>
          )}
          <div className="mt-10">
            <Link to="/news" className="text-[#DCBC7C] hover:text-[#C4A76A] font-semibold">← Back to all news</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;


