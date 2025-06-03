
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  slideDeckUrl?: string;
  fullDescription?: string;
  images?: string[];
  challenges?: string[];
  outcomes?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Mobile App Redesign",
    category: "School Project",
    description: "Led a complete redesign of a mobile shopping app to improve user experience and increase conversion rates.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500&h=300&fit=crop",
    tags: ["Product Strategy", "UX Research", "Mobile Design", "A/B Testing"],
    slideDeckUrl: "https://example.com/slides1",
    fullDescription: "This project involved conducting extensive user research to identify pain points in the existing mobile shopping experience. Through user interviews, surveys, and analytics analysis, we discovered that users were dropping off during the checkout process due to a complex navigation structure. I led a cross-functional team to redesign the entire user flow, implementing a simplified checkout process and improving product discovery features.",
    images: [
      "https://images.unsplash.com/photo-1586312198406-aa67b98c4c9d?w=400&h=200&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop"
    ],
    challenges: [
      "Complex existing navigation structure causing user confusion",
      "High cart abandonment rate of 68%",
      "Limited mobile screen real estate for product information",
      "Integration with legacy backend systems"
    ],
    outcomes: [
      "Reduced checkout process from 7 steps to 3 steps",
      "Increased conversion rate by 32%",
      "Improved user satisfaction score from 3.2 to 4.6",
      "Decreased support tickets related to navigation by 45%"
    ]
  },
  {
    id: "2",
    title: "SaaS Analytics Dashboard",
    category: "Internship Project",
    description: "Developed a comprehensive analytics dashboard for internal stakeholders to track key business metrics and user behavior.",
    image: "https://images.unsplash.com/photo-1586312198406-aa67b98c4c9d?w=500&h=300&fit=crop",
    tags: ["Data Analytics", "Dashboard Design", "KPI Tracking", "Stakeholder Management"],
    slideDeckUrl: "https://example.com/slides2",
    fullDescription: "During my internship at a growing SaaS company, I identified the need for better data visibility across different departments. I worked closely with engineering, sales, and marketing teams to understand their data needs and designed a centralized dashboard that provided real-time insights into user engagement, revenue metrics, and product usage patterns.",
    images: [
      "https://images.unsplash.com/photo-1586312198406-aa67b98c4c9d?w=400&h=200&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop"
    ],
    challenges: [
      "Data scattered across multiple systems and tools",
      "Different departments had conflicting data requirements",
      "Real-time data processing limitations",
      "Ensuring data accuracy and consistency"
    ],
    outcomes: [
      "Consolidated data from 8 different sources into one dashboard",
      "Reduced time spent on manual reporting by 75%",
      "Enabled data-driven decision making across all departments",
      "Improved monthly business review efficiency by 50%"
    ]
  },
  {
    id: "3",
    title: "Fintech Payment Flow Optimization",
    category: "School Project",
    description: "Analyzed and optimized the payment flow for a fintech startup to reduce transaction failures and improve user trust.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
    tags: ["Fintech", "Payment Systems", "User Journey", "Risk Management"],
    slideDeckUrl: "https://example.com/slides3",
    fullDescription: "This capstone project focused on improving the payment experience for a fintech startup that was experiencing high transaction failure rates. I conducted a thorough analysis of the existing payment flow, identified bottlenecks, and proposed solutions that balanced user experience with security requirements.",
    images: [
      "https://images.unsplash.com/photo-1586312198406-aa67b98c4c9d?w=400&h=200&fit=crop"
    ],
    challenges: [
      "High transaction failure rate of 15%",
      "Complex regulatory compliance requirements",
      "Balancing security measures with user experience",
      "Integration with multiple payment processors"
    ],
    outcomes: [
      "Reduced transaction failure rate to 3%",
      "Improved payment completion time by 40%",
      "Increased user trust scores by 28%",
      "Achieved PCI DSS compliance certification"
    ]
  },
  {
    id: "4",
    title: "Customer Onboarding Optimization",
    category: "Internship Project",
    description: "Redesigned the customer onboarding process to reduce time-to-value and increase user activation rates.",
    image: "https://images.unsplash.com/photo-1586312198406-aa67b98c4c9d?w=500&h=300&fit=crop",
    tags: ["User Onboarding", "Customer Success", "Product Adoption", "Behavioral Analytics"],
    slideDeckUrl: "https://example.com/slides4",
    fullDescription: "Tasked with improving user activation rates, I analyzed the existing onboarding flow and identified several friction points that were preventing new users from reaching their first 'aha moment'. I redesigned the onboarding process with a focus on progressive disclosure and value demonstration.",
    challenges: [
      "Low user activation rate of 35%",
      "High user drop-off during initial setup",
      "Complex product requiring extensive configuration",
      "Varied user personas with different needs"
    ],
    outcomes: [
      "Increased user activation rate to 62%",
      "Reduced time-to-first-value from 7 days to 2 days",
      "Improved 30-day retention rate by 45%",
      "Decreased support tickets from new users by 38%"
    ]
  },
  {
    id: "5",
    title: "AI-Powered Recommendation Engine",
    category: "School Project",
    description: "Designed product requirements for an AI-powered recommendation system to personalize user experiences.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
    tags: ["AI/ML", "Personalization", "Product Requirements", "Algorithm Design"],
    fullDescription: "This project involved researching and designing the product requirements for an AI-powered recommendation engine. I worked with data scientists to understand the technical constraints and collaborated with designers to ensure the recommendations would be presented in an intuitive way.",
    challenges: [
      "Cold start problem for new users",
      "Balancing relevance with diversity in recommendations",
      "Privacy concerns with user data collection",
      "Real-time processing requirements"
    ],
    outcomes: [
      "Defined comprehensive PRD for ML recommendation system",
      "Increased user engagement by 55% in prototype testing",
      "Improved content discovery metrics by 40%",
      "Established privacy-first data collection framework"
    ]
  },
  {
    id: "6",
    title: "Supply Chain Visibility Platform",
    category: "Internship Project",
    description: "Developed requirements for a supply chain tracking platform to improve transparency and reduce operational delays.",
    image: "https://images.unsplash.com/photo-1586312198406-aa67b98c4c9d?w=500&h=300&fit=crop",
    tags: ["Supply Chain", "Enterprise Software", "IoT Integration", "Process Optimization"],
    fullDescription: "Working with a logistics company, I identified the need for better supply chain visibility. I led the requirements gathering process for a new platform that would integrate with IoT sensors and provide real-time tracking capabilities for shipments and inventory.",
    challenges: [
      "Integration with legacy systems and multiple vendors",
      "Real-time data synchronization across global operations",
      "Complex stakeholder requirements from different regions",
      "Ensuring data accuracy in harsh environmental conditions"
    ],
    outcomes: [
      "Delivered comprehensive technical and business requirements",
      "Reduced average delivery delays by 25%",
      "Improved customer satisfaction scores by 30%",
      "Enabled proactive issue resolution for 80% of potential delays"
    ]
  }
];
