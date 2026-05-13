require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');
const Sprint = require('./models/Sprint');

const seedDB = async () => {
  const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/project_management_db';
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await Project.deleteMany({});
  await Sprint.deleteMany({});

  // Project 1: Website Redesign
  const project1 = new Project({
    projectName: 'Website Redesign',
    description: 'Redesign the company website for better UX and modern aesthetics.',
    tasks: [
      { taskName: 'Design mockups', taskDescription: 'Create high-fidelity mockups for the new website.', assignedTo: 'user@example.com', status: 'Backlog', dueDate: new Date('2025-07-15'), priority: 'High' },
      { taskName: 'Develop front-end', taskDescription: 'Implement the front-end using React and Tailwind CSS.', assignedTo: 'Jane Smith', status: 'In Progress', dueDate: new Date('2025-07-15'), priority: 'Critical' },
      { taskName: 'Develop back-end API', taskDescription: 'Build RESTful APIs for data management.', assignedTo: 'Peter Jones', status: 'Backlog', dueDate: new Date('2025-07-15'), priority: 'High' },
      { taskName: 'Database setup', taskDescription: 'Configure and optimize the database for the new website.', assignedTo: 'Peter Jones', status: 'Done', dueDate: new Date('2025-07-15'), priority: 'Medium' },
      { taskName: 'User testing', taskDescription: 'Conduct user acceptance testing and gather feedback.', assignedTo: 'user@example.com', status: 'Review', dueDate: new Date('2025-07-15'), priority: 'Low' },
      { taskName: 'SEO Optimization', taskDescription: 'Optimize website for search engines.', assignedTo: 'John Doe', status: 'Backlog', dueDate: new Date('2025-07-15'), priority: 'Medium' },
      { taskName: 'Content Creation', taskDescription: 'Develop new content for the website.', assignedTo: 'Jane Smith', status: 'In Progress', dueDate: new Date('2025-07-15'), priority: 'High' },
      { taskName: 'Accessibility Audit', taskDescription: 'Ensure website is accessible to all users.', assignedTo: 'Peter Jones', status: 'Backlog', dueDate: new Date('2025-07-15'), priority: 'High' },
      { taskName: 'Performance Testing', taskDescription: 'Test website loading speed and responsiveness.', assignedTo: 'John Doe', status: 'Review', dueDate: new Date('2025-07-15'), priority: 'Critical' },
      { taskName: 'Deployment Planning', taskDescription: 'Plan the deployment strategy for the new website.', assignedTo: 'Jane Smith', status: 'Done', dueDate: new Date('2025-07-15'), priority: 'High'},
      { taskName: 'Post-launch Monitoring', taskDescription: 'Monitor website performance after launch.', assignedTo: 'Peter Jones', status: 'Backlog', dueDate: new Date('2025-07-15'), priority: 'Low' },
      { taskName: 'Feedback Integration', taskDescription: 'Integrate user feedback into future iterations.', assignedTo: 'user@example.com', status: 'In Progress', dueDate: new Date('2025-07-15'), priority: 'Medium' },
      { taskName: 'Security Enhancements', taskDescription: 'Implement additional security measures.', assignedTo: 'John Doe', status: 'Backlog', dueDate: new Date('2025-07-15'), priority: 'High' },
      { taskName: 'Analytics Setup', taskDescription: 'Set up analytics to track user behavior.', assignedTo: 'Jane Smith', status: 'Review', dueDate: new Date('2025-07-15'), priority: 'Medium' },
      { taskName: 'Documentation', taskDescription: 'Create comprehensive documentation for the website.', assignedTo: 'Peter Jones', status: 'Done', dueDate: new Date('2025-07-15'), priority: 'Low' }
    ]
  });
  await project1.save();

  // Project 2: Mobile App Development
  const project2 = new Project({
    projectName: 'Mobile App Development',
    description: 'Develop a new mobile application for iOS and Android.',
    tasks: [
      { taskName: 'Plan app features', taskDescription: 'Define core features and user stories for the mobile app.', assignedTo: 'Alice Brown', status: 'In Progress', dueDate: new Date('2025-07-15'), priority: 'High' },
      { taskName: 'Design UI/UX', taskDescription: 'Create wireframes and high-fidelity designs for the mobile app.', assignedTo: 'Bob White', status: 'Backlog', dueDate: new Date('2025-07-15'), priority: 'High' },
      { taskName: 'Develop iOS app', taskDescription: 'Implement the iOS version of the mobile app.', assignedTo: 'Alice Brown', status: 'Backlog', dueDate: new Date('2025-07-15'), priority: 'Critical' },
      { taskName: 'Develop Android app', taskDescription: 'Implement the Android version of the mobile app.', assignedTo: 'Charlie Green', status: 'Backlog', dueDate: new Date('2025-07-15'), priority: 'Critical' },
      { taskName: 'API integration', taskDescription: 'Integrate mobile app with existing backend APIs.', assignedTo: 'Charlie Green', status: 'In Progress', dueDate: new Date('2025-07-15'), priority: 'Medium'},
      { taskName: 'Testing Phase 1', taskDescription: 'Conduct initial testing of core functionalities.', assignedTo: 'Alice Brown', status: 'Review', dueDate: new Date('2025-07-15'), priority: 'High' },
      { taskName: 'Bug Fixing Round 1', taskDescription: 'Address bugs found during initial testing.', assignedTo: 'Bob White', status: 'In Progress', dueDate: new Date('2025-07-15'), priority: 'High' },
      { taskName: 'User Acceptance Testing (UAT)', taskDescription: 'Perform UAT with target users.', assignedTo: 'user@example.com', status: 'Backlog', dueDate: new Date('2025-07-15'), priority: 'Critical' },
      { taskName: 'Performance Optimization', taskDescription: 'Optimize app for speed and responsiveness.', assignedTo: 'Charlie Green', status: 'Backlog', dueDate: new Date('2025-07-15'), priority: 'High' },
      { taskName: 'App Store Submission', taskDescription: 'Prepare and submit app to app stores.', assignedTo: 'Alice Brown', status: 'Done', dueDate: new Date('2025-07-15'), priority: 'Critical' },
      { taskName: 'Marketing Material Creation', taskDescription: 'Develop promotional materials for the app.', assignedTo: 'Bob White', status: 'Backlog', dueDate: new Date('2025-07-15'), priority: 'Medium' },
      { taskName: 'Post-launch Support', taskDescription: 'Provide support after app launch.', assignedTo: 'Charlie Green', status: 'In Progress', dueDate: new Date('2025-07-15'), priority: 'Low' },
      { taskName: 'Feature Iteration Planning', taskDescription: 'Plan for future app features based on feedback.', assignedTo: 'Alice Brown', status: 'Backlog', dueDate: new Date('2025-07-15'), priority: 'High' },
      { taskName: 'Security Review', taskDescription: 'Conduct a thorough security review of the app.', assignedTo: 'Bob White', status: 'Review', dueDate: new Date('2025-07-15'), priority: 'High' },
      { taskName: 'Analytics Integration', taskDescription: 'Integrate analytics tools to track app usage.', assignedTo: 'Charlie Green', status: 'Done', dueDate: new Date('2025-07-15'), priority: 'Medium'}
    ]
  });
  await project2.save();

  // Project 3: Internal Tooling
  const project3 = new Project({
    projectName: 'Internal Tooling',
    description: 'Build internal tools to automate various business processes.',
    tasks: [
      { taskName: 'Requirements gathering', taskDescription: 'Gather requirements from different departments for internal tools.', assignedTo: 'David Black', status: 'Done', dueDate: new Date('2025-07-15'), priority: 'Medium' },
      { taskName: 'Develop reporting module', taskDescription: 'Create a module for generating various business reports.', assignedTo: 'Eve Red', status: 'In Progress', dueDate: new Date('2025-07-15'), priority: 'High' },
      { taskName: 'Develop admin dashboard', taskDescription: 'Build an intuitive admin dashboard for managing users and data.', assignedTo: 'Frank Blue', status: 'Backlog', dueDate: new Date('2025-07-15'), priority: 'Critical' },
      { taskName: 'Automate data import', taskDescription: 'Implement a system to automate data import from external sources.', assignedTo: 'Eve Red', status: 'Backlog', dueDate: new Date('2025-07-15'), priority: 'High' },
      { taskName: 'Security audit', taskDescription: 'Conduct a security audit of the internal tools.', assignedTo: 'Frank Blue', status: 'Review', dueDate: new Date('2025-07-15'), priority: 'Medium' },
      { taskName: 'User Management Module', taskDescription: 'Develop module for managing user roles and permissions.', assignedTo: 'David Black', status: 'In Progress', dueDate: new Date('2025-07-15'), priority: 'High' },
      { taskName: 'Integration with HR System', taskDescription: 'Integrate tool with existing HR system.', assignedTo: 'Eve Red', status: 'Backlog', dueDate: new Date('2025-07-15'), priority: 'Critical' },
      { taskName: 'Performance Monitoring', taskDescription: 'Set up monitoring for tool performance.', assignedTo: 'Frank Blue', status: 'Review', dueDate: new Date('2025-07-15'), priority: 'Medium' },
      { taskName: 'Training Material Creation', taskDescription: 'Create training materials for internal users.', assignedTo: 'user@example.com', status: 'Backlog', dueDate: new Date('2025-07-15'), priority: 'Low' },
      { taskName: 'Deployment to Staging', taskDescription: 'Deploy the tool to a staging environment.', assignedTo: 'David Black', status: 'Done', dueDate: new Date('2025-07-15'), priority: 'High'},
      { taskName: 'Feedback Collection', taskDescription: 'Collect feedback from initial users.', assignedTo: 'Eve Red', status: 'In Progress', dueDate: new Date('2024-10-05'), priority: 'Medium' },
      { taskName: 'Bug Fixing Round 2', taskDescription: 'Address bugs reported by users.', assignedTo: 'Frank Blue', status: 'Backlog', dueDate: new Date('2024-10-10'), priority: 'High' },
      { taskName: 'Documentation Update', taskDescription: 'Update documentation based on changes and feedback.', assignedTo: 'David Black', status: 'Review', dueDate: new Date('2024-10-15'), priority: 'Low' },
      { taskName: 'Scalability Planning', taskDescription: 'Plan for future scalability of the tool.', assignedTo: 'Eve Red', status: 'Backlog', dueDate: new Date('2024-10-20'), priority: 'Critical' },
      { taskName: 'Final User Training', taskDescription: 'Conduct final training sessions for all users.', assignedTo: 'Frank Blue', status: 'Done', dueDate: new Date('2024-07-20'), priority: 'Medium' }
    ]
  });
  await project3.save();

  // Project 4: Cloud Migration
  const project4 = new Project({
    projectName: 'Cloud Migration',
    description: 'Migrate existing on-premise infrastructure to a cloud provider.',
    tasks: [
      { taskName: 'Cloud provider selection', taskDescription: 'Evaluate and select the most suitable cloud provider.', assignedTo: 'Grace Yellow', status: 'Done', dueDate: new Date('2024-07-01'), priority: 'High' },
      { taskName: 'Network configuration', taskDescription: 'Set up virtual networks and subnets in the cloud.', assignedTo: 'Heidi Purple', status: 'In Progress', dueDate: new Date('2024-08-05'), priority: 'Critical' },
      { taskName: 'Data migration strategy', taskDescription: 'Develop a strategy for migrating large datasets to the cloud.', assignedTo: 'Ivan Orange', status: 'Backlog', dueDate: new Date('2024-08-15'), priority: 'High' },
      { taskName: 'Application deployment', taskDescription: 'Deploy existing applications to the new cloud environment.', assignedTo: 'Heidi Purple', status: 'Backlog', dueDate: new Date('2024-09-01'), priority: 'Critical' },
      { taskName: 'Security Group Configuration', taskDescription: 'Configure security groups and network ACLs.', assignedTo: 'Ivan Orange', status: 'Review', dueDate: new Date('2024-09-10'), priority: 'High' },
      { taskName: 'Database Migration', taskDescription: 'Migrate databases to cloud-managed services.', assignedTo: 'Grace Yellow', status: 'In Progress', dueDate: new Date('2024-09-15'), priority: 'Critical' },
      { taskName: 'Load Balancer Setup', taskDescription: 'Set up load balancers for application scalability.', assignedTo: 'Heidi Purple', status: 'Backlog', dueDate: new Date('2024-09-20'), priority: 'High' },
      { taskName: 'Monitoring and Alerting', taskDescription: 'Implement cloud monitoring and alerting solutions.', assignedTo: 'Ivan Orange', status: 'Review', dueDate: new Date('2024-09-25'), priority: 'Medium' },
      { taskName: 'Cost Optimization Review', taskDescription: 'Review and optimize cloud resource costs.', assignedTo: 'user@example.com', status: 'Backlog', dueDate: new Date('2024-10-01'), priority: 'Low' },
      { taskName: 'Disaster Recovery Planning', taskDescription: 'Develop and test disaster recovery plans.', assignedTo: 'Grace Yellow', status: 'Done', dueDate: new Date('2024-07-05'), priority: 'High' },
      { taskName: 'Compliance Audit', taskDescription: 'Conduct an audit to ensure cloud compliance.', assignedTo: 'Heidi Purple', status: 'In Progress', dueDate: new Date('2024-10-05'), priority: 'Medium' },
      { taskName: 'Documentation of Cloud Architecture', taskDescription: 'Document the new cloud infrastructure.', assignedTo: 'Ivan Orange', status: 'Backlog', dueDate: new Date('2024-10-10'), priority: 'High' },
      { taskName: 'Team Training on Cloud', taskDescription: 'Train team members on managing cloud resources.', assignedTo: 'Grace Yellow', status: 'Review', dueDate: new Date('2024-10-15'), priority: 'Medium' },
      { taskName: 'Legacy System Decommissioning', taskDescription: 'Decommission old on-premise systems.', assignedTo: 'Heidi Purple', status: 'Backlog', dueDate: new Date('2024-10-20'), priority: 'Critical' },
      { taskName: 'Final Migration Review', taskDescription: 'Conduct a final review of the migration process.', assignedTo: 'Ivan Orange', status: 'Done', dueDate: new Date('2024-07-10'), priority: 'High' }
    ]
  });
  await project4.save();

  // Project 5: Backend System Development
  const project5 = new Project({
    projectName: 'Backend System Development',
    description: 'Develop and optimize backend systems and APIs.',
    tasks: [
      { taskName: 'API Development', taskDescription: 'Develop new APIs for external partners.', assignedTo: 'user@example.com', status: 'Backlog', dueDate: new Date('2024-08-01'), priority: 'High' },
      { taskName: 'Database Optimization', taskDescription: 'Optimize database queries and schema.', assignedTo: 'Liam White', status: 'In Progress', dueDate: new Date('2024-08-15'), priority: 'Critical' },
      { taskName: 'Microservices Refactoring', taskDescription: 'Refactor monolithic application into microservices.', assignedTo: 'Mia Green', status: 'Backlog', dueDate: new Date('2024-08-20'), priority: 'High' },
      { taskName: 'Containerization', taskDescription: 'Containerize applications using Docker.', assignedTo: 'Noah Black', status: 'Done', dueDate: new Date('2024-07-25'), priority: 'Medium' },
      { taskName: 'CI/CD Pipeline Setup', taskDescription: 'Set up continuous integration and deployment pipelines.', assignedTo: 'user@example.com', status: 'Review', dueDate: new Date('2024-09-01'), priority: 'Low' },
      { taskName: 'Load Testing', taskDescription: 'Perform load testing to ensure system stability.', assignedTo: 'Olivia Blue', status: 'Backlog', dueDate: new Date('2024-09-10'), priority: 'Medium' },
      { taskName: 'Logging and Monitoring', taskDescription: 'Implement centralized logging and monitoring.', assignedTo: 'Liam White', status: 'In Progress', dueDate: new Date('2024-09-15'), priority: 'High' },
      { taskName: 'Authentication Module', taskDescription: 'Develop a robust authentication and authorization module.', assignedTo: 'Mia Green', status: 'Backlog', dueDate: new Date('2024-09-20'), priority: 'High' },
      { taskName: 'Payment Gateway Integration', taskDescription: 'Integrate with various payment gateways.', assignedTo: 'Noah Black', status: 'Review', dueDate: new Date('2024-09-25'), priority: 'Critical' },
      { taskName: 'Third-Party API Integration', taskDescription: 'Integrate with external third-party APIs.', assignedTo: 'Olivia Blue', status: 'Done', dueDate: new Date('2024-08-05'), priority: 'High' },
      { taskName: 'Error Handling Improvement', taskDescription: 'Improve error handling and reporting mechanisms.', assignedTo: 'Liam White', status: 'Backlog', dueDate: new Date('2024-10-01'), priority: 'Low' },
      { taskName: 'Caching Implementation', taskDescription: 'Implement caching strategies for performance.', assignedTo: 'Mia Green', status: 'In Progress', dueDate: new Date('2024-10-05'), priority: 'Medium' },
      { taskName: 'Data Backup and Recovery', taskDescription: 'Set up automated data backup and recovery procedures.', assignedTo: 'Noah Black', status: 'Backlog', dueDate: new Date('2024-10-10'), priority: 'High' },
      { taskName: 'Code Review Process', taskDescription: 'Establish and enforce a code review process.', assignedTo: 'Olivia Blue', status: 'Review', dueDate: new Date('2024-10-15'), priority: 'Medium' },
      { taskName: 'System Documentation', taskDescription: 'Create comprehensive system documentation.', assignedTo: 'Liam White', status: 'Done', dueDate: new Date('2024-08-10'), priority: 'Low' }
    ]
  });
  await project5.save();

  console.log('Database seeded with projects and tasks!');
};

seedDB().catch(err => {
  console.error('Error seeding database:', err);
  process.exit(1);
});

module.exports = seedDB;