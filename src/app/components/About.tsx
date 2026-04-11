import { motion } from 'motion/react';
import { GraduationCap, Code2, Rocket, Target } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Student at LPU',
      description: 'Pursuing my degree while building real-world projects',
    },
    {
      icon: Code2,
      title: 'Web Developer',
      description: 'Creating responsive and modern web applications',
    },
    {
      icon: Rocket,
      title: 'Learning AI',
      description: 'Exploring artificial intelligence and machine learning',
    },
    {
      icon: Target,
      title: 'Building Products',
      description: 'Working on ExamSetu and other innovative solutions',
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground mb-6">
              I'm Avi Vishwakarma, a passionate web developer and student at Lovely Professional University.
              I believe in building in public and sharing my learning journey with the community.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Currently, I'm focused on mastering web development technologies while exploring the exciting
              world of artificial intelligence. My goal is to combine these skills to create innovative
              solutions that solve real problems.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you'll find me working on ExamSetu, learning new technologies,
              or planning my next freelance project. I'm always open to collaboration and new opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors"
              >
                <item.icon className="w-8 h-8 mb-4 text-blue-500" />
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
