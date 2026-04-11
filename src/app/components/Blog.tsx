import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Web Development', 'AI/ML', 'Career', 'Tutorial'];

  const blogPosts = [
    {
      title: 'Getting Started with React: A Beginner\'s Guide',
      description: 'Learn the fundamentals of React and build your first component-based application.',
      date: '2026-03-15',
      readTime: '5 min read',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
    },
    {
      title: 'My Journey into AI and Machine Learning',
      description: 'Sharing my experience learning AI as a web developer and the resources that helped me.',
      date: '2026-03-10',
      readTime: '7 min read',
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    },
    {
      title: 'Building ExamSetu: Lessons Learned',
      description: 'A deep dive into the development process and challenges of building an exam prep platform.',
      date: '2026-03-05',
      readTime: '10 min read',
      category: 'Career',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop',
    },
    {
      title: 'Mastering Tailwind CSS: Tips and Tricks',
      description: 'Boost your productivity with these essential Tailwind CSS techniques and best practices.',
      date: '2026-02-28',
      readTime: '6 min read',
      category: 'Tutorial',
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=500&fit=crop',
    },
    {
      title: 'The Freelancer\'s Guide to Finding Clients',
      description: 'Practical strategies for landing your first freelance web development projects.',
      date: '2026-02-20',
      readTime: '8 min read',
      category: 'Career',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop',
    },
    {
      title: 'Understanding JavaScript Promises and Async/Await',
      description: 'Master asynchronous JavaScript with clear explanations and practical examples.',
      date: '2026-02-15',
      readTime: '9 min read',
      category: 'Tutorial',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=500&fit=crop',
    },
  ];

  return (
    <section id="blog" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Blog & Insights</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Sharing my learning journey, tutorials, and thoughts on web development
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
        </motion.div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              className="px-4 py-2 rounded-full bg-card border border-border hover:border-foreground/20 transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-xl border border-border bg-card overflow-hidden cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-500 text-white">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-lg mb-2 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {post.description}
                </p>
                <motion.div
                  className="flex items-center gap-2 text-sm text-blue-500"
                  whileHover={{ x: 4 }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
