import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({
  title,
  excerpt,
  category,
  date,
  author,
  to,
  image
}) => {
  const Wrapper = to ? Link : 'div';

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
      {image && (
        <div className="mb-4 overflow-hidden rounded-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 bg-[#DCBC7C] text-black text-sm font-semibold rounded-full">
          {category || 'Blog'}
        </span>
        {(date || author) && (
          <span className="text-sm text-gray-500">
            {[date, author].filter(Boolean).join(' • ')}
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">
        {title}
      </h3>

      {excerpt && (
        <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
          {excerpt}
        </p>
      )}

      {to && (
        <Wrapper
          to={to}
          className="text-[#DCBC7C] hover:text-[#C4A76A] font-semibold transition-colors"
        >
          Read More →
        </Wrapper>
      )}
    </div>
  );
};

export default BlogCard;
