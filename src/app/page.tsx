"use client"
import React from 'react';


import Link from 'next/link';


export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-blue-500 -mt-3 py-16 sm:py-24 md:py-32 text-center text-white">
        <div className="container mx-auto px-6 sm:px-8 md:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Step into the World of Enlightening Ideas
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mt-6">
            At ThoughtSphere, we curate captivating and thought-provoking content. From cutting-edge tech to enriching lifestyle tips, we bring you ideas that spark inspiration and foster growth.
          </p>
          <p className="text-sm sm:text-lg md:text-xl mt-4">
            Explore the articles that will elevate your knowledge and broaden your perspectives on various fascinating topics.
          </p>
          <Link
            href="/blog"
            className="bg-green-600 text-white px-8 py-4 mt-8 inline-block rounded-md text-lg sm:text-xl md:text-2xl hover:bg-green-500 transition duration-300"
          >
            Explore Our Wisdom
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className=" -mt-16 py-16 sm:py-24 md:py-32 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6">
            Our Exceptional Services
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
            Explore our range of services designed to enhance your experience and foster growth. From insightful articles to engaging blog strategies, we&apos;ve got you covered.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-2s">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Content Creation</h4>
              <p className="text-gray-600">
                We provide top-quality content creation services to help you deliver value-packed articles, stories, and engaging blog posts that resonate with your audience.
              </p>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-3s">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">SEO Optimization</h4>
              <p className="text-gray-600">
                Our SEO experts can help your blog rank higher on search engines, driving organic traffic and increasing your visibility across the web.
              </p>
            </div>
            
            {/* Service Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-4s">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Blog Strategy Consultation</h4>
              <p className="text-gray-600">
                We offer expert consultation on how to craft a solid blog strategy, ensuring your content is engaging, optimized, and reaches the right audience.
              </p>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
}
