export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'getting-started-with-react',
    title: 'Getting Started with React: A Beginner\'s Guide',
    description: 'Learn the fundamentals of React and build your first component-based application.',
    date: '2026-03-15',
    readTime: '5 min read',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
    author: 'Avi Vishwakarma',
    content: `
# Getting Started with React: A Beginner's Guide

React has become one of the most popular JavaScript libraries for building user interfaces. If you're just starting your web development journey, React is an excellent choice to learn.

## Why React?

React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

### Component-Based Architecture

Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

## Your First Component

Let's create a simple component:

\`\`\`jsx
function Welcome() {
  return <h1>Hello, React!</h1>;
}
\`\`\`

This is a functional component - the simplest way to write components in React. It's just a JavaScript function that returns JSX.

## Understanding JSX

JSX is a syntax extension for JavaScript. It looks like HTML, but it's actually JavaScript. When you write JSX, React transforms it into regular JavaScript function calls.

## State and Props

React components can have state (data that changes over time) and props (data passed from parent components). Understanding these concepts is crucial for building React applications.

## Next Steps

1. Set up your development environment
2. Create your first React app using Vite
3. Build a few simple components
4. Learn about hooks like useState and useEffect
5. Practice, practice, practice!

React has a gentle learning curve, and with consistent practice, you'll be building amazing applications in no time. Happy coding!
    `,
  },
  {
    id: 'my-journey-into-ai',
    title: 'My Journey into AI and Machine Learning',
    description: 'Sharing my experience learning AI as a web developer and the resources that helped me.',
    date: '2026-03-10',
    readTime: '7 min read',
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    author: 'Avi Vishwakarma',
    content: `
# My Journey into AI and Machine Learning

As a web developer, diving into AI and Machine Learning felt both exciting and intimidating. Here's my journey and what I learned along the way.

## The Beginning

I started with basic Python programming, which is essential for AI/ML. Coming from JavaScript, Python's syntax was refreshing and easy to pick up.

## Key Learning Resources

### Online Courses
- **Andrew Ng's Machine Learning Course** - The gold standard for beginners
- **Fast.ai** - Practical deep learning for coders
- **Google's Machine Learning Crash Course** - Great for quick overview

### Books
- "Hands-On Machine Learning" by Aurélien Géron
- "Deep Learning" by Ian Goodfellow

## First Projects

I started small:
1. Linear regression for house price prediction
2. Image classification with pre-trained models
3. Sentiment analysis on tweets

## Challenges I Faced

The math was intimidating at first - linear algebra, calculus, and statistics. But I learned that you don't need to master everything before starting. Understanding the intuition is often enough to begin building.

## Tools and Libraries

- **NumPy** - For numerical computing
- **Pandas** - For data manipulation
- **TensorFlow/PyTorch** - For deep learning
- **Scikit-learn** - For traditional ML algorithms

## Advice for Web Developers

If you're a web developer interested in AI:
1. Start with Python basics
2. Don't get overwhelmed by the math
3. Build projects early and often
4. Join communities and learn together
5. Combine AI with web dev - there's huge potential!

The intersection of web development and AI is incredibly exciting. You can build intelligent web applications, deploy ML models, and create amazing user experiences.

Keep learning, stay curious!
    `,
  },
  {
    id: 'building-examsetu',
    title: 'Building ExamSetu: Lessons Learned',
    description: 'A deep dive into the development process and challenges of building an exam prep platform.',
    date: '2026-03-05',
    readTime: '10 min read',
    category: 'Career',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop',
    author: 'Avi Vishwakarma',
    content: `
# Building ExamSetu: Lessons Learned

ExamSetu is my passion project - an exam preparation platform designed to help students prepare more effectively. Here's the story behind it.

## The Problem

I noticed students, including myself, struggled with:
- Scattered study materials
- Lack of proper practice tests
- No way to track progress
- Limited feedback on performance

## The Solution

ExamSetu brings everything together:
- Centralized study materials
- Practice tests with instant feedback
- Performance analytics
- Personalized study plans

## Technical Stack

### Frontend
- React for the UI
- Tailwind CSS for styling
- Chart.js for analytics visualization

### Backend
- Node.js and Express
- MongoDB for database
- JWT for authentication

## Biggest Challenges

### 1. Question Bank Management
Creating a flexible system to handle different types of questions (MCQ, subjective, numerical) was complex. I ended up using a polymorphic schema design in MongoDB.

### 2. Performance Tracking
Building meaningful analytics that actually help students improve required careful thought about what metrics matter.

### 3. User Experience
Making exam practice feel less stressful while maintaining the seriousness needed for effective preparation was a delicate balance.

## Key Learnings

### Start Small
I initially wanted to build everything at once. Breaking it down into MVP features helped me ship faster and get real user feedback.

### User Feedback is Gold
Early testers pointed out issues I never would have noticed. Always get your product in front of real users quickly.

### Technical Debt is Real
Rushing certain features created problems later. Balance speed with code quality.

## Current Status

ExamSetu is live with:
- 500+ active users
- 10,000+ practice questions
- 5 different exam categories

## Future Plans

- Mobile app development
- AI-powered study recommendations
- Live doubt-solving sessions
- Collaborative study groups

## Advice for Aspiring Builders

1. **Just start** - Don't wait for the perfect idea or perfect time
2. **Solve real problems** - Build something you or others actually need
3. **Ship early** - Get feedback fast and iterate
4. **Learn in public** - Share your journey, it helps others and yourself
5. **Persist** - Building products is hard, but incredibly rewarding

Building ExamSetu has been one of the most rewarding experiences of my life. It's teaching me not just coding, but product thinking, user empathy, and entrepreneurship.

If you have an idea, start building today!
    `,
  },
  {
    id: 'mastering-tailwind-css',
    title: 'Mastering Tailwind CSS: Tips and Tricks',
    description: 'Boost your productivity with these essential Tailwind CSS techniques and best practices.',
    date: '2026-02-28',
    readTime: '6 min read',
    category: 'Tutorial',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=500&fit=crop',
    author: 'Avi Vishwakarma',
    content: `
# Mastering Tailwind CSS: Tips and Tricks

Tailwind CSS has transformed how I write CSS. Here are my favorite tips and tricks to boost your productivity.

## Why Tailwind?

Utility-first CSS means:
- No naming conventions to memorize
- No context switching between files
- Faster development
- Smaller bundle sizes (with purging)

## Essential Tips

### 1. Use @apply for Repeated Patterns

Instead of repeating utilities, extract them:

\`\`\`css
.btn-primary {
  @apply px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600;
}
\`\`\`

### 2. Leverage Arbitrary Values

Need a specific value? Use square brackets:

\`\`\`html
<div class="top-[117px] w-[347px]">
\`\`\`

### 3. Group Hover States

Create interactive parent-child effects:

\`\`\`html
<div class="group">
  <img class="group-hover:scale-110" />
</div>
\`\`\`

### 4. Responsive Design Made Easy

Mobile-first approach:

\`\`\`html
<div class="text-sm md:text-base lg:text-lg">
\`\`\`

### 5. Dark Mode

Simple theme switching:

\`\`\`html
<div class="bg-white dark:bg-gray-900">
\`\`\`

## Advanced Techniques

### Custom Configuration

Extend your theme in tailwind.config.js:

\`\`\`js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#yourcolor',
      },
    },
  },
}
\`\`\`

### Component Libraries

Combine Tailwind with:
- Headless UI for accessible components
- Radix UI for primitives
- shadcn/ui for beautiful components

## Common Pitfalls

### 1. Overusing @apply
Don't recreate traditional CSS. Use utilities in HTML.

### 2. Not Purging in Production
Always purge unused CSS for smaller bundles.

### 3. Fighting the Framework
Embrace utility-first instead of trying to make it work like traditional CSS.

## My Workflow

1. Build with utilities in HTML
2. Extract components only when truly repeated
3. Use custom CSS sparingly for unique cases
4. Let purge handle optimization

## Conclusion

Tailwind CSS is a powerful tool that rewards learning its patterns. Start small, build projects, and you'll soon wonder how you ever worked without it.

Happy styling!
    `,
  },
  {
    id: 'freelancer-guide',
    title: 'The Freelancer\'s Guide to Finding Clients',
    description: 'Practical strategies for landing your first freelance web development projects.',
    date: '2026-02-20',
    readTime: '8 min read',
    category: 'Career',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop',
    author: 'Avi Vishwakarma',
    content: `
# The Freelancer's Guide to Finding Clients

Starting freelancing is exciting but finding your first clients can be challenging. Here's what worked for me.

## Building Your Foundation

### 1. Portfolio is Everything
- Showcase 3-5 strong projects
- Include case studies explaining your process
- Make it easy to contact you

### 2. Define Your Niche
Instead of "I build websites," try:
- "I build e-commerce sites for small businesses"
- "I create landing pages for SaaS products"
- "I develop web apps for startups"

## Where to Find Clients

### Online Platforms
- **Upwork** - High competition but great for beginners
- **Freelancer** - Similar to Upwork
- **Fiverr** - Good for specific services

### Better Approaches
- **Twitter** - Build in public, share your work
- **LinkedIn** - Network and share expertise
- **Local businesses** - Often overlooked but need help
- **Referrals** - Best source once you get rolling

## My Strategy

### 1. Start Local
I reached out to:
- Local restaurants needing websites
- Small shops wanting online presence
- Friends' businesses

### 2. Content Marketing
- Write helpful articles
- Share code snippets
- Help others in communities

### 3. Cold Outreach
Yes, it works! Tips:
- Personalize every message
- Offer value upfront
- Keep it short and clear

## Pricing Your Work

### Early Stage
- Charge what feels right but not too low
- Consider value-based pricing
- Be transparent about rates

### As You Grow
- Increase rates gradually
- Package services
- Offer retainers

## Common Mistakes

### 1. Undervaluing Your Work
Your time and skills are valuable. Don't work for peanuts.

### 2. Not Having Contracts
Always use a contract. Protect yourself and your client.

### 3. Poor Communication
Set expectations early and communicate regularly.

### 4. Taking Every Project
Learn to say no to projects that don't fit.

## Building Long-Term Success

### Deliver More Than Expected
Under-promise, over-deliver.

### Ask for Testimonials
Happy clients = social proof for future clients.

### Stay in Touch
Past clients can become repeat clients.

## My Results

After 6 months:
- 12 completed projects
- 3 retainer clients
- Average $500 per project (growing)

## Final Advice

1. **Start before you're ready** - You'll learn on the job
2. **Focus on results** - Clients care about outcomes
3. **Build relationships** - Business is about people
4. **Keep learning** - Stay current with technologies
5. **Be patient** - Success takes time

Freelancing isn't easy, but it's incredibly rewarding. You control your time, choose your projects, and build something meaningful.

Start today, even if it's just updating your portfolio or reaching out to one potential client.

You've got this!
    `,
  },
  {
    id: 'javascript-async-await',
    title: 'Understanding JavaScript Promises and Async/Await',
    description: 'Master asynchronous JavaScript with clear explanations and practical examples.',
    date: '2026-02-15',
    readTime: '9 min read',
    category: 'Tutorial',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=500&fit=crop',
    author: 'Avi Vishwakarma',
    content: `
# Understanding JavaScript Promises and Async/Await

Asynchronous JavaScript can be confusing for beginners. Let's demystify Promises and async/await with clear examples.

## The Problem: Callback Hell

Before Promises, we had callbacks:

\`\`\`javascript
getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      // Callback hell!
    });
  });
});
\`\`\`

This gets messy quickly.

## Enter Promises

A Promise represents a future value. It can be:
- **Pending** - Initial state
- **Fulfilled** - Operation succeeded
- **Rejected** - Operation failed

### Basic Promise

\`\`\`javascript
const promise = new Promise((resolve, reject) => {
  // Async operation
  if (success) {
    resolve(data);
  } else {
    reject(error);
  }
});
\`\`\`

### Using Promises

\`\`\`javascript
promise
  .then(data => console.log(data))
  .catch(error => console.error(error));
\`\`\`

## Chaining Promises

Much cleaner than callbacks:

\`\`\`javascript
getData()
  .then(a => getMoreData(a))
  .then(b => getMoreData(b))
  .then(c => console.log(c))
  .catch(error => console.error(error));
\`\`\`

## Async/Await: Promises Made Easy

Async/await is syntactic sugar over Promises:

\`\`\`javascript
async function fetchData() {
  try {
    const a = await getData();
    const b = await getMoreData(a);
    const c = await getMoreData(b);
    console.log(c);
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

Much more readable!

## Key Concepts

### 1. Async Functions Always Return Promises

\`\`\`javascript
async function example() {
  return 'hello';
}
// Returns Promise that resolves to 'hello'
\`\`\`

### 2. Await Pauses Execution

\`\`\`javascript
const data = await fetchData();
// Code waits here until Promise resolves
console.log(data);
\`\`\`

### 3. Error Handling

\`\`\`javascript
try {
  const data = await fetchData();
} catch (error) {
  // Handle error
}
\`\`\`

## Real-World Example: API Call

\`\`\`javascript
async function getUser(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
}
\`\`\`

## Multiple Promises

### Sequential

\`\`\`javascript
const user = await getUser(1);
const posts = await getPosts(user.id);
\`\`\`

### Parallel

\`\`\`javascript
const [user, posts] = await Promise.all([
  getUser(1),
  getPosts(1)
]);
\`\`\`

Promise.all runs them simultaneously!

## Common Mistakes

### 1. Forgetting await

\`\`\`javascript
// Wrong
const data = fetchData();
// data is a Promise, not the actual data!

// Right
const data = await fetchData();
\`\`\`

### 2. Not Handling Errors

Always use try/catch with async/await.

### 3. Sequential When You Could Parallel

Don't wait unnecessarily:

\`\`\`javascript
// Slow
const user = await getUser();
const posts = await getPosts();

// Fast
const [user, posts] = await Promise.all([
  getUser(),
  getPosts()
]);
\`\`\`

## Best Practices

1. **Always handle errors**
2. **Use Promise.all for parallel operations**
3. **Keep async functions focused**
4. **Return early on errors**
5. **Name your functions clearly**

## Conclusion

Promises and async/await make asynchronous JavaScript manageable. Practice with real examples, and they'll become second nature.

Key takeaways:
- Promises represent future values
- Async/await makes Promises readable
- Always handle errors
- Use parallel execution when possible

Happy coding!
    `,
  },
];

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}
