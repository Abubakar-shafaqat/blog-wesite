import Container from '@/app/components/Container';

export default function About() {
  return (
    <Container>
      {/* Main Page Heading */}
      <div className="text-center my-10 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
          About InsightSphere
        </h1>
        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* About Content Section */}
      <div className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-between p-4 sm:p-6 bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105">
              <h2 className="text-2xl sm:text-3xl font-semibold text-blue-500 mb-4">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                InsightSphere began as a platform driven by our passion for writing and sharing insightful content. Over the years, we have grown into a trusted source for knowledge, providing our readers with valuable insights on a variety of topics.
              </p>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Our mission is to inform, inspire, and engage readers through well-researched blogs that add value to their lives. By consistently posting high-quality content, we aim to create a space where readers can gain the knowledge they need to succeed.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="p-4 sm:p-6 bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105">
              <img
                src="/about.jpeg"
                alt="Our Journey"
                className="w-full h-auto object-cover rounded-lg shadow-lg lg:h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center py-8 sm:py-16 px-4 bg-teal-500 text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Let’s Create Something Incredible Together
        </h2>
        <p className="text-sm sm:text-lg mb-6">
          Whether you&apos;re here to explore insightful blogs or to take advantage of our services, InsightSphere is dedicated to helping you grow.
        </p>
        <a
          href="/contact"
          className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-2 px-4 sm:py-2 sm:px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition"
        >
          Contact Us
        </a>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-4 sm:py-6">
        <div className="container mx-auto px-4 sm:px-6 text-center text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} InsightSphere. All Rights Reserved.</p>
        </div>
      </footer>
    </Container>
  );
}
