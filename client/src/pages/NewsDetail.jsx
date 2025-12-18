import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { newsItems } from '../data/news';

const NewsDetail = () => {
  const { slug } = useParams();
  const article = newsItems.find(n => n.slug === slug);

  const renderStructuredText = (text) => {
    if (!text) return null;

    const lines = text.split('\n');

    const isHeadingLine = (trimmedLine) => {
      if (!trimmedLine) return false;

      // Don't treat quotes or obvious sentences as headings
      if (trimmedLine.startsWith('“') || trimmedLine.startsWith('"') || trimmedLine.startsWith("'")) return false;

      // If it ends with typical sentence punctuation, assume it's a paragraph line
      if (/[.?!:]$/.test(trimmedLine)) return false;

      // Keep headings reasonably short
      const wordCount = trimmedLine.split(/\s+/).filter(Boolean).length;
      if (wordCount > 12) return false;

      // Must look like a title (letters/numbers/spaces/common punctuation)
      return /^[A-Za-z0-9][A-Za-z0-9&’'(),\- ]+$/.test(trimmedLine);
    };

    return lines.map((rawLine, idx) => {
      const line = rawLine.trim();

      if (!line) {
        return <div key={idx} className="h-3" />;
      }

      const semibold = isHeadingLine(line);

      return (
        <p
          key={idx}
          className={`mb-3 text-sm md:text-base text-gray-800 ${semibold ? 'font-semibold' : ''}`}
        >
          {line}
        </p>
      );
    });
  };

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
          <div className="prose prose-lg max-w-none">
            {renderStructuredText(article.content)}
          </div>
          {Array.isArray(article.bullets) && article.bullets.length > 0 && (
            <ul className="list-disc pl-6 my-4 text-sm md:text-base text-gray-800">
              {article.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
          {article.postContent && (
            <div className="prose prose-lg max-w-none">
              {renderStructuredText(article.postContent)}
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


