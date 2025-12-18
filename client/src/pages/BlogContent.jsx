import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogItems } from '../data/blogs';

const BlogContent = () => {
  const { slug } = useParams();
  const article = blogItems.find((b) => b.slug === slug);

  const renderBlogText = (text) => {
    if (!text) return null;

    const lines = text.split('\n');

    const isTitleLine = (line, idx) => idx === 0 && !!line;
    const isSubtitleLine = (line, idx) => idx === 1 && /^\(.*\)$/.test(line);
    const isSectionHeading = (line) => {
      if (!line) return false;
      if (/^[0-9]+\.\s+/.test(line)) return false; // numbered items are not headings
      if (line.length > 60) return false;
      if (/[.?!:]$/.test(line)) return false;
      // "Title case-ish" headings like: Introduction / Conclusion / Key Considerations Before You Start
      return /^[A-Za-z0-9][A-Za-z0-9&’'(),\- ]+$/.test(line);
    };

    return lines.map((raw, idx) => {
      const line = raw.trim();

      if (!line) return <div key={idx} className="h-3" />;

      // Top title/subtitle inside content
      if (isTitleLine(line, idx)) {
        return (
          <h2 key={idx} className="mt-0 mb-2 text-2xl md:text-3xl font-bold text-gray-900 font-playfair">
            {line}
          </h2>
        );
      }

      if (isSubtitleLine(line, idx)) {
        return (
          <p key={idx} className="mt-0 mb-6 text-sm md:text-base text-gray-700 italic">
            {line.replace(/^\(|\)$/g, '')}
          </p>
        );
      }

      // Bullet lines written as "- ..."
      if (line.startsWith('- ')) {
        return (
          <ul key={idx} className="list-disc pl-6 my-2 text-sm md:text-base text-gray-800">
            <li>{line.slice(2)}</li>
          </ul>
        );
      }

      // Section headings
      if (isSectionHeading(line)) {
        return (
          <h3 key={idx} className="mt-6 mb-2 text-lg md:text-xl font-semibold text-gray-900">
            {line}
          </h3>
        );
      }

      // Numbered subheadings like "1. Traditional vs digital gold"
      if (/^[0-9]+\.\s+/.test(line) && line.length < 80 && !/[.?!:]$/.test(line)) {
        return (
          <h4 key={idx} className="mt-4 mb-2 text-base md:text-lg font-semibold text-gray-900">
            {line}
          </h4>
        );
      }

      return (
        <p key={idx} className="mb-3 text-sm md:text-base text-gray-800 leading-relaxed">
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
            <Link to="/blogs" className="mt-6 inline-block text-[#DCBC7C] hover:text-[#C4A76A] font-semibold">
              Back to Blogs
            </Link>
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
            <span className="text-sm text-gray-600">{[article.date, article.author].filter(Boolean).join(' • ')}</span>
          </div>
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight font-playfair">
            {article.title}
          </h1>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            {renderBlogText(article.content)}
          </div>
          <div className="mt-10">
            <Link to="/blogs" className="text-[#DCBC7C] hover:text-[#C4A76A] font-semibold">
              ← Back to all blogs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogContent;

