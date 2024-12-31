import Container from '@/app/components/Container';
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
}
const posts:BlogPost[] = [
  { 
    id: 1, 
    title: 'Exploring Next.js 15', 
    slug: 'mastering-Next.js', 
    description: 'Exploring Next.js 15: Whats New and Exciting.',
    content: `Next.js, the popular React framework, has been evolving rapidly with new features that simplify development and enhance performance.With the release of Next.js 15, developers can now take advantage of several new capabilities that make building modern web applications even more efficient and seamless. Let’s dive into the key features and updates in Next.js 15.

`,
  },
  { 
    id: 2, 
    title: 'Understanding Generative AI', 
    slug: 'understanding-AI', 
    description: 'Understanding Generative AI: A Revolution in Creativity and Innovation',
    content: `Generative AI is a groundbreaking field that has transformed how we think about machines and creativity. Unlike traditional AI, which focuses on recognizing patterns and making decisions based on data, generative AI goes a step further. It can create new content—whether it’s images, music, text, or even videos—by learning from existing data and generating outputs that are often indistinguishable from what a human could create.

`,
  },
  { 
    id: 3, 
    title: 'Tailwind CSS in Web Development', 
    slug: 'Tailwind-CSS-in-Web-Development', 
    description: 'Tailwind CSS in Web Development: A Game Changer for Developers',
    content: `In the ever-evolving world of web development, Tailwind CSS has emerged as a revolutionary tool, simplifying the process of building responsive and visually stunning websites. Unlike traditional CSS frameworks, which come with pre-defined styles and components, Tailwind CSS takes a utility-first approach. This allows developers to create custom designs without writing custom CSS. In this blog, we'll explore the key features of Tailwind CSS and how it’s changing the way developers approach web design.`,
  },
];

export default function BlogPost() {
  return (
    <Container>
      {/* Main Page Heading */}
      <div className="text-center my-10">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Explore Our Blogs
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Blog Cards Section */}
      <div className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="relative bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105"
              >
                {/* Card Content */}
                <div className="p-6 h-[400px] flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.description}
                    </p>
                    <p className="text-gray-500 text-sm line-clamp-6">
                      {post.content}
                    </p>
                  </div>
                  {/* Read More Button */}
                  <div className="mt-4">
                    <a
                      href={`/blog/id?id=${post.id}`}
                      className="block text-center bg-gradient-to-r from-teal-500 to-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
