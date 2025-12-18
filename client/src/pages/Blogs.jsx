import React from 'react';
import BlogCard from '../components/blogs/BlogCard';
import { blogItems } from '../data/blogs';

const Blogs = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-10 md:py-16 bg-[#F1F0E8]">
        <div className="max-w-6xl mx-auto px-4 text-left">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight font-playfair">
            Blogs
          </h1>
          <p className="text-sm md:text-base sm:text-base text-gray-600 mx-auto leading-relaxed">
            Stay informed about the latest developments at Mac & Ro, market insights, 
            and industry updates from the world of precious metals investment.
          </p>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogItems.map((blog, idx) => (
              <BlogCard
                key={idx}
                title={blog.title}
                excerpt={blog.excerpt}
                category={blog.category}
                date={blog.date}
                author={blog.author}
                to={`/blogs/${blog.slug}`}
                image={blog.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;