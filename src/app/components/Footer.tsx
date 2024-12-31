export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-6 sm:px-8 space-y-12">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div className="col-span-1">
            <h2 className="text-2xl font-semibold text-white mb-4">About My Blog</h2>
            <p className="text-base">
              My Blog is a platform to share engaging and insightful content across various topics, from technology to lifestyle, and beyond. Join us on a journey of exploration!
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 text-lg text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-gray-100 transition duration-300">Home</a></li>
              <li><a href="/blog" className="hover:text-gray-100 transition duration-300">Blog</a></li>
              <li><a href="/about" className="hover:text-gray-100 transition duration-300">About Us</a></li>
              <li><a href="/contact" className="hover:text-gray-100 transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Categories Section */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 text-lg text-white">Categories</h3>
            <ul className="space-y-3">
              <li><a href="/category/tech" className="hover:text-gray-100 transition duration-300">Technology</a></li>
              <li><a href="/category/lifestyle" className="hover:text-gray-100 transition duration-300">Lifestyle</a></li>
              <li><a href="/category/education" className="hover:text-gray-100 transition duration-300">Education</a></li>
              <li><a href="/category/health" className="hover:text-gray-100 transition duration-300">Health</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 text-lg text-white">Follow Us</h3>
            <ul className="space-y-3">
              <li><a href="https://facebook.com" className="hover:text-gray-100 transition duration-300">Facebook</a></li>
              <li><a href="https://twitter.com" className="hover:text-gray-100 transition duration-300">Twitter</a></li>
              <li><a href="https://instagram.com" className="hover:text-gray-100 transition duration-300">Instagram</a></li>
              <li><a href="https://linkedin.com" className="hover:text-gray-100 transition duration-300">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm opacity-70">© 2024 My Blog. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
