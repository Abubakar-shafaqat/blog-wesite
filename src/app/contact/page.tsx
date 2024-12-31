'use client'
import React, { useState } from 'react';
import Container from '@/app/components/Container';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "37a29be9-b9eb-4416-a159-366b2f690398");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        console.log("Message sent successfully:", result);
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 5000); // Revert back to form after 5 seconds
      } else {
        console.error("Message submission failed:", result);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  return (
    <div className="bg-gradient-to-r from-teal-500 to-blue-500 bg-cover min-h-screen overflow-hidden">
      {/* Page Heading */}
      <h1 className="font-extrabold text-center text-white sm:mb-8 text-3xl sm:text-4xl p-6 sm:p-10">
        Get in Touch
      </h1>
      <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto -mt-6 mb-8 rounded-full"></div>

      <div className="flex justify-center items-center px-4 sm:px-8">
        <Container>
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border border-gray-300 w-full max-w-md sm:max-w-xl mx-auto">
            {formSubmitted ? (
              // Thank You Message
              <div className="text-center text-gray-800">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">
                  Thank You!
                </h2>
                <p className="text-sm sm:text-lg mb-4">
                  Your message has been sent successfully. We’ll get back to you soon!
                </p>
              </div>
            ) : (
              // Contact Form Section
              <>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 text-center">
                  We&apos;d Love to Hear From You!
                </h2>
                <form onSubmit={handleSubmit} method="POST">
                  <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 text-sm font-medium"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-4 focus:ring-blue-400 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm font-medium"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-4 focus:ring-blue-400 focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 text-sm font-medium"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-4 focus:ring-blue-400 focus:outline-none"
                      required
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      aria-label="Send your message"
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* Contact Information Section */}
            <div className="mt-8 text-center text-gray-800">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                How to Reach Us
              </h2>
              <p className="text-sm sm:text-lg mb-4">
                We’re here to help! Whether you have questions, feedback, or just
                want to chat, feel free to reach out.
              </p>
              <div className="space-y-2 sm:space-y-4 mb-6">
                <p>
                  <strong>Email:</strong> contact@insightsphere.com
                </p>
                <p>
                  <strong>Phone:</strong> +92 3021260393
                </p>
                <p>
                  <strong>Location:</strong> 123 Insight Lane, Insight City, IN
                  12345
                </p>
              </div>

              {/* Social Media Links */}
              <div className="mt-6 flex justify-center space-x-4 sm:space-x-6 text-gray-800">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-all duration-300"
                >
                  <FaFacebook size={24} className="hover:text-blue-600" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-all duration-300"
                >
                  <FaTwitter size={24} className="hover:text-blue-400" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-all duration-300"
                >
                  <FaInstagram size={24} className="hover:text-pink-600" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-all duration-300"
                >
                  <FaLinkedin size={24} className="hover:text-blue-700" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
