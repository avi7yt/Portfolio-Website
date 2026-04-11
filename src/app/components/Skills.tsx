import { motion } from 'motion/react';
import { Code2, Wrench, Brain } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 45 },
        { name: 'JavaScript', level: 25 },
        { name: 'Tailwind CSS', level: 75 },
      ],
    },
    {
      icon: Wrench,
      title: 'Tools',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git', level: 75 },
        { name: 'Figma', level: 70 },
        { name: 'VS Code', level: 90 },
        { name: 'GitHub', level: 80 },
      ],
    },
    {
      icon: Brain,
      title: 'Learning',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'React', level: 20 },
        { name: 'Node.js', level: 10 },
        { name: 'AI/ML', level: 5 },
        { name: 'TypeScript', level: 5 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-xl border border-border bg-card"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-6`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
