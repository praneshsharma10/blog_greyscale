

// // export const categories = [
// //     { name: "AWS for Beginners", count: 12, slug: "aws-for-beginners" },
// //     { name: "Git & Version Control", count: 8, slug: "git-and-version-control" },
// //     { name: "Software Development Basics", count: 15, slug: "software-development-basics" },
// //     { name: "DevOps & CI/CD", count: 10, slug: "devops-and-cicd" },
// //     { name: "Programming Tutorials", count: 20, slug: "programming-tutorials" },
// //   ]

// export const blogs = [
//     {
//       title: 'Getting Started with AWS',
//       description: 'Learn the basics of AWS and how to set up your first cloud infrastructure.',
//       author: 'Pranesh Sharma',
//       date: '2024-01-09',
//       category: "aws",
//       tags: ['AWS', 'Cloud'],
//     },
  
//     {
//       title: 'Git Fundamentals',
//       description: 'Master the essential Git commands and workflows for version control.',
//       author: 'pranesh' ,
//       date :'10' ,
//       category: "git",
//       tags: ['Git', 'Version Control'],
//     },
//     {
//       title: 'CI/CD Pipeline Setup',
//       description: 'Build and deploy your applications automatically with CI/CD pipelines.',
//       author: 'pranesh' ,
//       date :'12' ,
//       category:'devops',
//       tags: ['DevOps', 'CI/CD'],
//     },
//     {
//       title: "Understanding RESTful APIs",
//       description: "Learn about RESTful API design principles and best practices.",
//       author: "Pranesh Sharma",
//       date: "2024-01-13",
//       tags: ["API", "REST"],
//     },
//     {
//       title: "Containerization with Docker",
//       description: "Explore how Docker can simplify your application deployment process.",
//       author: "Pranesh Sharma",
//       date: "2024-01-14",
//       tags: ["Docker", "Containerization"],
//     },
//     {
//       title: "JavaScript ES6+ Features",
//       description: "Discover the powerful features introduced in modern JavaScript.",
//       author: "Pranesh Sharma",
//       date: "2024-01-15",
//       tags: ["JavaScript", "ES6"],
//     },
//     {
//       title: "Git Branching",
//       description: "Learn different Git branching models to improve your team's workflow.",
//       author: "Pranesh Sharma",
//       date: "2024-01-18",
//       tags: ["Git", "Workflow"],
//     },
//     {
//       title: "Introduction to AWS Lambda",
//       description: "Get started with serverless computing using AWS Lambda functions.",
//       author: "Pranesh Sharma",
//       date: "2024-01-10",
//       tags: ["AWS", "Serverless"],
//     },
  
  
//   ]







// export const categories = [
//   { name: "AWS for Beginners", count: 12, slug: "aws-for-beginners" },
//   { name: "Git & Version Control", count: 8, slug: "git-and-version-control" },
//   { name: "Software Development Basics", count: 15, slug: "software-development-basics" },
//   { name: "DevOps & CI/CD", count: 10, slug: "devops-and-cicd" },
//   { name: "Programming Tutorials", count: 20, slug: "programming-tutorials" },
// ]

// export const blogs = [
//   {
//     title: "Getting Started with AWS",
//     description: "Learn the basics of AWS and how to set up your first cloud infrastructure.",
//     author: "Pranesh Sharma",
//     date: "2024-01-09",
//     tags: ["AWS", "Cloud"],
//     category: "AWS for Beginners",
//   },
//   {
//     title: "Git Fundamentals",
//     description: "Master the essential Git commands and workflows for version control.",
//     author: "Pranesh Sharma",
//     date: "2024-01-10",
//     tags: ["Git", "Version Control"],
//     category: "Git & Version Control",
//   },
//   {
//     title: "Introduction to DevOps",
//     description: "Understand the principles of DevOps and how it can improve your development process.",
//     author: "Pranesh Sharma",
//     date: "2024-01-11",
//     tags: ["DevOps", "CI/CD"],
//     category: "DevOps & CI/CD",
//   },
//   {
//     title: "Python for Beginners",
//     description: "Start your programming journey with Python, a versatile and beginner-friendly language.",
//     author: "Pranesh Sharma",
//     date: "2024-01-12",
//     tags: ["Python", "Programming"],
//     category: "Programming Tutorials",
//   },
//   {
//     title: "Understanding RESTful APIs",
//     description: "Learn about RESTful API design principles and best practices.",
//     author: "Pranesh Sharma",
//     date: "2024-01-13",
//     tags: ["API", "REST"],
//     category: "Software Development Basics",
//   },
//   // ... Add more blog posts with their respective categories
// ]




export const categories = [
    { name: "AWS for Beginners", count: 12, slug: "aws-for-beginners" },
    { name: "Git & Version Control", count: 8, slug: "git-and-version-control" },
    { name: "Software Development Basics", count: 15, slug: "software-development-basics" },
    { name: "DevOps & CI/CD", count: 10, slug: "devops-and-cicd" },
    { name: "Programming Tutorials", count: 20, slug: "programming-tutorials" },
  ]
  
  export const blogs = [
    {
      title: "Getting Started with AWS",
      description: "Learn the basics of AWS and how to set up your first cloud infrastructure.",
      author: "Pranesh Sharma",
      date: "2024-01-09",
      tags: ["AWS", "Cloud"],
      category: "AWS for Beginners",
      slug: "getting-started-with-aws",
      content: [
        {
          type: "paragraph",
          content:
            "Amazon Web Services (AWS) is a comprehensive and widely used cloud platform that offers a vast array of services. In this guide, we'll walk you through the basics of AWS and help you set up your first cloud infrastructure.",
        },
        {
          type: "heading",
          content: "What is AWS?",
        },
        {
          type: "paragraph",
          content:
            "AWS provides on-demand cloud computing platforms and APIs to individuals, companies, and governments on a pay-as-you-go basis. These cloud computing web services provide distributed computing processing capacity and software tools via AWS server farms.",
        },
        {
          type: "heading",
          content: "Setting Up Your First EC2 Instance",
        },
        {
          type: "paragraph",
          content:
            "Let's start by setting up an EC2 (Elastic Compute Cloud) instance, which is a virtual server in the cloud. Here's a simple script to launch an EC2 instance using the AWS CLI:",
        },
        {
          type: "code",
          language: "bash",
          content: `# Ensure you have configured your AWS CLI
  aws configure
  
  # Launch an EC2 instance
  aws ec2 run-instances
      --image-id ami-xxxxxxxx
      --count 1
      --instance-type t2.micro
      --key-name MyKeyPair
      --security-group-ids sg-xxxxxxxx
      --subnet-id subnet-xxxxxxxx`,
        },
        {
          type: "paragraph",
          content:
            "Remember to replace the placeholder values (xxx) with your actual AWS resource IDs. This command will launch a single t2.micro instance using the specified AMI, key pair, security group, and subnet.",
        },
      ],
    },
    {
      title: "Git Fundamentals",
      description: "Master the essential Git commands and workflows for version control.",
      author: "Pranesh Sharma",
      date: "2024-01-10",
      tags: ["Git", "Version Control"],
      category: "Git & Version Control",
      slug: "git-fundamentals",
      content: [
        {
          type: "paragraph",
          content:
            "Git is a distributed version control system that helps you track changes in your code and collaborate with other developers. In this guide, we'll cover the fundamental Git commands and workflows that every developer should know.",
        },
        {
          type: "heading",
          content: "Basic Git Commands",
        },
        {
          type: "paragraph",
          content: "Here are some essential Git commands to get you started:",
        },
        {
          type: "code",
          language: "bash",
          content: `# Initialize a new Git repository
  git init
  
  # Add files to the staging area
  git add <file>
  
  # Commit changes
  git commit -m "Your commit message"
  
  # Check the status of your repository
  git status
  
  # View commit history
  git log`,
        },
        {
          type: "heading",
          content: "Branching and Merging",
        },
        {
          type: "paragraph",
          content:
            "Branching is a powerful feature in Git that allows you to work on different versions of your project simultaneously. Here are some commands for working with branches:",
        },
        {
          type: "code",
          language: "bash",
          content: `# Create a new branch
  git branch <branch-name>
  
  # Switch to a branch
  git checkout <branch-name>
  
  # Create and switch to a new branch in one command
  git checkout -b <branch-name>
  
  # Merge a branch into the current branch
  git merge <branch-name>`,
        },
        {
          type: "paragraph",
          content:
            "These commands will help you get started with Git. Remember to practice and explore more advanced features as you become comfortable with the basics.",
        },
      ],
    },
    // Add more blog posts with their respective content...



    {
      title: "CI/CD Pipeline Setup",
      description: "Build and deploy your applications automatically with CI/CD pipelines.",
      author: "Pranesh Sharma",
      date: "2024-01-12",
      category: "DevOps & CI/CD",
      tags: ["DevOps", "CI/CD"],
      slug: "cicd-pipeline-setup",
      content: [
      {
      type: "paragraph",
      content:
      "Learn how to set up a CI/CD pipeline to automate your build, test, and deployment processes. This post outlines the basics and tools you might use for integrating automated workflows.",
      },
      ],
      },
      {
      title: "Understanding RESTful APIs",
      description: "Learn about RESTful API design principles and best practices.",
      author: "Pranesh Sharma",
      date: "2024-01-13",
      category: "Programming Tutorials",
      tags: ["API", "REST"],
      slug: "understanding-restful-apis",
      content: [
      {
      type: "paragraph",
      content:
      "Discover the key principles behind RESTful APIs and how to design scalable and maintainable web services. We discuss HTTP methods, status codes, and resource modeling.",
      },
      ],
      },
      {
      title: "Containerization with Docker",
      description: "Explore how Docker can simplify your application deployment process.",
      author: "Pranesh Sharma",
      date: "2024-01-14",
      category: "DevOps & CI/CD",
      tags: ["Docker", "Containerization"],
      slug: "containerization-with-docker",
      content: [
      {
      type: "paragraph",
      content:
      "Docker allows you to package your applications in containers for consistent execution across different environments. This post introduces containerization and provides a basic Docker workflow.",
      },
      ],
      },
      {
      title: "JavaScript ES6+ Features",
      description: "Discover the powerful features introduced in modern JavaScript.",
      author: "Pranesh Sharma",
      date: "2024-01-15",
      category: "Programming Tutorials",
      tags: ["JavaScript", "ES6"],
      slug: "javascript-es6-features",
      content: [
      {
      type: "paragraph",
      content:
      "Modern JavaScript (ES6 and beyond) offers many exciting features like arrow functions, classes, template literals, and destructuring. Learn how these features can simplify your code.",
      },
      ],
      },
      {
      title: "Git Branching",
      description: "Learn different Git branching models to improve your team's workflow.",
      author: "Pranesh Sharma",
      date: "2024-01-18",
      category: "Git & Version Control",
      tags: ["Git", "Workflow"],
      slug: "git-branching",
      content: [
      {
      type: "paragraph",
      content:
      "Effective branching strategies are essential for managing features and bug fixes. Explore different models like Git Flow, GitHub Flow, and trunk-based development.",
      },
      ],
      },
      {
      title: "Introduction to AWS Lambda",
      description: "Get started with serverless computing using AWS Lambda functions.",
      author: "Pranesh Sharma",
      date: "2024-01-10",
      category: "AWS for Beginners",
      tags: ["AWS", "Serverless"],
      slug: "introduction-to-aws-lambda",
      content: [
      {
      type: "paragraph",
      content:
      "AWS Lambda lets you run your code without provisioning or managing servers. This post explains the basics of serverless computing and how to deploy your first Lambda function.",
      },
      ],
      },
      {
      title: "Node.js Crash Course",
      description:
      "Quickly get up and running with Node.js and learn how to build scalable network applications.",
      author: "Pranesh Sharma",
      date: "2024-01-20",
      category: "Programming Tutorials",
      tags: ["Node.js", "JavaScript", "Backend"],
      slug: "nodejs-crash-course",
      content: [
      {
      type: "paragraph",
      content:
      "This crash course covers the fundamentals of Node.js, including event-driven architecture and asynchronous programming. You'll learn how to set up a basic server and work with packages using npm.",
      },
    ],
  },
];
  


export const featuredVideos = [
  {
    title: "Introduction to AWS",
    description: "Learn the basics of Amazon Web Services",
    youtubeId: "3hLmDS179YE",
  },
  {
    title: "Git & GitHub Crash Course",
    description: "Master the essentials of version control",
    youtubeId: "RGOj5yH7evk",
  },
  {
    title: "DevOps CI/CD Explained",
    description: "Understanding Continuous Integration and Deployment",
    youtubeId: "scEDHsr3APg",
  },
  {
    title: "Docker for Beginners",
    description: "Getting started with containerization",
    youtubeId: "fqMOX6JJhGo",
  },
  {
    title: "RESTful API Design",
    description: "Best practices for designing web APIs",
    youtubeId: "7YcW25PHnAA",
  },
  {
    title: "Agile Scrum in 10 minutes",
    description: "Quick overview of Agile project management",
    youtubeId: "XU0llRltyFM",
  },
]