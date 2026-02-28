import type { Experience, Project, Education, TechCategory, Certification, SocialLink} from '@/types';
  
  export const personalInfo = {
    name: "M'hamed Ben Youssef",
    initials: 'MB',
    title: 'Senior Software Engineer',
    tagline: 'Java · Spring · Angular · Kafka · DevOps',
    bio: "Software Engineer with 4+ years of experience designing scalable web and event-driven systems, translating complex business requirements into high-performance, production-grade solutions.",
    location: 'Morocco — Willing to relocate',
    email: 'mhamed.youssef.benyoussef@gmail.com',
    phone: '+212705348161',
    github: 'https://github.com/mrmechazilla',
    linkedin: 'https://www.linkedin.com/in/mbenyoussef/',
    resumeUrl: '/resume.pdf',
  };
  
  export const experiences: Experience[] = [
    {
      id: 1,
      company: 'Hiberus Morocco',
      role: 'Senior Software Engineer',
      type: 'Remote',
      period: 'August 2025 – Present',
      location: 'Morocco',
      current: true,
      description: [
        'Design, develop and maintain Havas Converged Hub suite using microfrontends and event-driven microservices with asynchronous messaging.',
        'Create, manage and optimize GitLab CI/CD pipelines to streamline development workflows and ensure smooth application delivery.',
        'Ensure high code quality through peer reviews, best practices, and by facilitating a weekly Technical Sync meeting.',
        'Lead daily Scrum and sprint refinement sessions, estimated user stories, and challenged acceptance criteria to drive Agile delivery.',
        'Conduct demos of new features to clients and stakeholders, highlighting technical implementations and business impact.',
      ],
      stack: [
        'Java 17', 'Angular 16/20', 'Spring 3', 'Oracle 19c',
        'RabbitMQ', 'GitLab CI', 'SonarQube', 'OpenTelemetry', 'Jaeger'
      ],
    },
    {
      id: 2,
      company: 'Orange Business Services',
      role: 'Software Engineer',
      type: 'Hybrid',
      period: 'May 2024 – August 2025',
      location: 'Casablanca, Morocco',
      description: [
        'Integrated, maintained, and deployed 3 microfrontend remote applications dynamically into a host application using Webpack and Module Federation.',
        'Implemented unit tests using JUnit/Mockito for Spring Boot and Jest for Angular, increasing SonarQube coverage from 53% to 88%.',
        'Led daily stand-ups and contributed to on-call support within an Agile/SAFe environment.',
        'Designed and developed responsive user interfaces using Stencil and Storybook.',
        'Implemented and tested Proof of Concepts to assess performance and integration of new features in a microfrontend architecture.',
      ],
      stack: [
        'Java 17', 'Angular 17/20', 'Spring 3', 'Stencil',
        'Storybook', 'GitLab', 'Docker', 'Kubernetes', 'SonarQube'
      ],
    },
    {
      id: 3,
      company: 'Capgemini Technology Services',
      role: 'Software Engineer',
      type: 'Hybrid',
      period: 'February 2023 – May 2024',
      location: 'Casablanca, Morocco',
      description: [
        'Developed and maintained a Java-based event-driven data pipeline using Apache Kafka, reliably processing thousands of events across a 3-broker production cluster.',
        'Implemented security with Keycloak server and OAuth 2.0 protocol for multiple microservices through the Spring Cloud Gateway.',
        'Designed and developed user interfaces with Figma and Angular.',
        'Created a real-time interactive admin dashboard in Kibana to collect insights and user behavior.',
      ],
      stack: [
        'Java 17', 'Angular 16', 'Spring', 'Apache Kafka',
        'PostgreSQL', 'Elasticsearch', 'Docker', 'Kubernetes',
        'Keycloak', 'GitLab'
      ],
    },
    {
      id: 4,
      company: 'ECS Informatique',
      role: 'Software Engineer',
      type: 'Onsite',
      period: 'March 2022 – September 2022',
      location: 'Rabat, Morocco',
      description: [
        'Built a Spring Boot backend application for GPS coordinate geolocalization captured by GPS trackers.',
        'Ingested data from different GPS sensors metadata and integrated them into an internal Oracle database.',
        'Created a frontend application with React to consume the REST APIs to display maps of tracked vehicles with an internal admin dashboard.',
      ],
      stack: [
        'Java', 'Angular 15', 'Spring Boot', 'Oracle',
        'React', 'Angular Material', 'Figma', 'Docker'
      ],
    },
  ];
  
  export const projects: Project[] = [
    {
      id: 1,
      name: 'Havas Converged Hub',
      description: 'Enterprise microfrontend suite with event-driven microservices and asynchronous messaging for a major media group.',
      stack: ['Java 17', 'Angular 20', 'Spring 3', 'RabbitMQ', 'Oracle 19c', 'OpenTelemetry'],
      company: 'Hiberus / Havas',
    },
    {
      id: 2,
      name: 'Microfrontend Platform',
      description: 'Dynamic microfrontend host/remote architecture using Webpack Module Federation, with 88% test coverage.',
      stack: ['Angular 20', 'Webpack', 'Module Federation', 'Stencil', 'Storybook', 'Kubernetes'],
      company: 'Orange Business Services',
    },
    {
      id: 3,
      name: 'Event-Driven Data Pipeline',
      description: 'High-throughput Kafka pipeline processing thousands of events across a 3-broker production cluster with real-time Kibana dashboard.',
      stack: ['Java 17', 'Apache Kafka', 'Spring Cloud Gateway', 'Keycloak', 'Elasticsearch', 'Kibana'],
      company: 'Capgemini',
    },
    {
      id: 4,
      name: 'Vehicle Geolocation Tracker',
      description: 'Real-time GPS vehicle tracking system with Spring Boot backend ingesting GPS sensor data into Oracle and React frontend map dashboard.',
      stack: ['Spring Boot', 'Oracle', 'React', 'Angular Material', 'Docker'],
      company: 'ECS Informatique',
    },
  ];
  
  export const techCategories: TechCategory[] = [
    {
      id: 1,
      name: 'Backend',
      color: '#00d4ff',
      glow: 'rgba(0,212,255,0.3)',
      items: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Quarkus', 'Apache Kafka', 'RabbitMQ', 'Hibernate', 'JPA'],
    },
    {
      id: 2,
      name: 'Frontend',
      color: '#a78bfa',
      glow: 'rgba(167,139,250,0.3)',
      items: ['Angular', 'React', 'TypeScript', 'JavaScript', 'Stencil', 'Storybook', 'Tailwind CSS'],
    },
    {
      id: 3,
      name: 'Databases',
      color: '#ffd166',
      glow: 'rgba(255,209,102,0.3)',
      items: ['Oracle 19c', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'Liquibase'],
    },
    {
      id: 4,
      name: 'DevOps & Cloud',
      color: '#00f5a0',
      glow: 'rgba(0,245,160,0.3)',
      items: ['Docker', 'Kubernetes', 'GitLab CI', 'Jenkins', 'SonarQube', 'Linux', 'Vercel'],
    },
    {
      id: 5,
      name: 'Security & APIs',
      color: '#ff6b35',
      glow: 'rgba(255,107,53,0.3)',
      items: ['Keycloak', 'OAuth 2.0', 'JWT', 'Spring Security', 'REST', 'GraphQL', 'OpenAPI'],
    },
    {
      id: 6,
      name: 'Observability',
      color: '#ff4757',
      glow: 'rgba(255,71,87,0.3)',
      items: ['OpenTelemetry', 'Jaeger', 'Prometheus', 'Grafana', 'Kibana', 'ELK Stack'],
    },
    {
      id: 7,
      name: 'Microservices',
      color: '#06d6a0',
      glow: 'rgba(6,214,160,0.3)',
      items: ['Module Federation', 'API Gateway', 'Circuit Breaker', 'Saga Pattern', 'Consul', 'OpenFeign'],
    },
    {
      id: 8,
      name: 'AI & Automation',
      color: '#f72585',
      glow: 'rgba(247,37,133,0.3)',
      items: ['Spring AI', 'LLM API integrations', 'n8n Workflow Automation'],
    },
  ];
  
  export const education: Education[] = [
    {
      id: 1,
      institution: 'Faculty of Science and Technology (FST)',
      degree: 'Software Engineer',
      field: 'Mathematics and Computer Science',
      period: '2019 – 2022',
      location: 'Mohammedia, Morocco',
      courses: [
        'JEE', 'Spring Boot', 'Java', 'Python',
        'Angular', 'Algorithms', 'Data Structures',
        'OOP', 'Algorithm Analysis', 'Oracle DB',
        'Cryptography', 'Machine Learning', 'Optimization'
      ],
    },
  ];
  
  export const certifications: Certification[] = [
    { name: 'SAFe® 6 Certified Practitioner', status: 'obtained' },
    { name: 'Certified Kubernetes Application Developer (CKAD)', status: 'in-progress' },
  ];
  
  export const socialLinks: SocialLink[] = [
    { label: 'GitHub', url: 'https://github.com/mrmechazilla', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mbenyoussef/', icon: 'linkedin' },
    { label: 'Email', url: 'mailto:mhamed.youssef.benyoussef@gmail.com', icon: 'mail' },
  ];