// React Projects Component with Tailwind and Framer Motion
// This file simulates the React component structure that would be used in a React application

// Projects Data
const projectsData = [
  {
    id: "diabetes-risk",
    title: "Diabetes Risk Prediction Model",
    role: "Project Lead",
    dateRange: "Jan 2025 – Apr 2025",
    category: "ml",
    description: [
      "Developed a predictive model using tree-based machine learning on over 250K health records to assess diabetes risk.",
      "Created an interactive 'What-If' tool in R to simulate the impact of lifestyle changes on predicted outcomes.",
      "Engineered an end-to-end AI pipeline including data preprocessing, feature engineering, and hyperparameter tuning.",
      "Compiled results into a stakeholder-friendly report for non-technical healthcare partners and policy analysts."
    ],
    technologies: ["R", "caret", "ggplot2", "data preprocessing", "cross-validation", "model evaluation"]
  },
  {
    id: "enterprise-ai",
    title: "Enterprise Generative AI Agent",
    role: "LLM Fine-Tuning and Automation",
    dateRange: "Feb 2025 – Present",
    category: "ml",
    description: [
      "Fine-tuned domain-specific LLMs using enterprise data to support automated workflows and business intelligence.",
      "Built multi-step reasoning pipelines using LangChain and CrewAI for dynamic enterprise task orchestration.",
      "Evaluated model performance using BLEU, ROUGE, cosine similarity, and embedding-based metrics.",
      "Integrated outputs into consulting and operations workflows through stakeholder collaboration."
    ],
    technologies: ["Python", "Hugging Face Transformers", "LangChain", "CrewAI", "MLflow", "evaluation metrics"]
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot for Customer Support",
    role: "Project Lead",
    dateRange: "Oct 2024 – Dec 2024",
    category: "ml",
    description: [
      "Built a transformer-based chatbot to automate support ticket resolution with real-time user interaction.",
      "Integrated sentiment analysis and named entity recognition (NER) for accurate intent recognition.",
      "Used REST APIs and external services to provide contextual replies from previous conversations.",
      "Achieved 85% live query resolution accuracy, significantly reducing response time and support workload."
    ],
    technologies: ["Python", "Hugging Face", "TensorFlow", "NLP libraries", "REST APIs", "customer analytics"]
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform Enhancement",
    role: "Full-Stack Development",
    dateRange: "Jan 2025 – Apr 2025",
    category: "development",
    description: [
      "Developed REST API improvements and UI components to enhance performance and validation accuracy.",
      "Integrated Selenium and Postman into GitHub Actions to enable automated CI/CD regression testing.",
      "Worked within Agile squads to deliver features mapped to business KPIs."
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Postman", "Selenium", "GitHub Actions"]
  },
  {
    id: "aws-portal",
    title: "AWS Self-Service Portal",
    role: "Workflow Automation & Monitoring",
    dateRange: "Apr 2025 – Jun 2025",
    category: "development",
    description: [
      "Created a React-based portal for configuring and monitoring AWS Direct Connect services across regions.",
      "Integrated CloudWatch for real-time metrics and alerting; surfaced data on usage and errors via dashboards.",
      "Enabled secure, testable deployments with GitHub Actions and Lambda automation."
    ],
    technologies: ["React", "TypeScript", "AWS API Gateway", "CloudWatch", "Lambda"]
  },
  {
    id: "resume-pro",
    title: "TailorResumePro",
    role: "Resume Parsing & Job Matching App",
    dateRange: "Jun 2025 – Present",
    category: "development",
    description: [
      "Led frontend engineering for a web tool to match resumes with job descriptions using smart scoring.",
      "Developed a modular UI with Tailwind CSS and Framer Motion for dynamic user interactions.",
      "Integrated localStorage-based onboarding flow and deployed on Azure Static Web Apps."
    ],
    technologies: ["React", "Tailwind CSS", "Vite", "Framer Motion", "Azure Static Web Apps"]
  },
  {
    id: "enterprise-data-agent",
    title: "Enterprise AI Data Agent",
    role: "Retrieval-Augmented Generation",
    dateRange: "Feb 2025 – Present",
    category: "ml",
    description: [
      "Built structured retrieval pipelines for QA systems using internal corpora and enterprise APIs (SAP, Salesforce).",
      "Benchmarked output relevance using BLEU and vector similarity metrics to improve downstream transformation.",
      "Automated data ingestion and evaluation with MLflow and Hugging Face workflows."
    ],
    technologies: ["Python", "Hugging Face", "LangChain", "CrewAI", "AWS", "SAP APIs", "MLflow"]
  }
];

// Initialize Project Filtering and Animation
document.addEventListener('DOMContentLoaded', function() {
  // Project filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons and add to clicked button
      filterBtns.forEach(btn => btn.classList.remove('active'));
      btn.classList.add('active');
      
      const filterValue = btn.getAttribute('data-filter');
      
      // Filter projects
      projectCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.classList.add('show');
          }, 100);
        } else {
          card.classList.remove('show');
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Project modal functionality
  const viewButtons = document.querySelectorAll('.view-project-btn');
  const modalOverlay = document.querySelector('.modal-overlay');
  const closeButtons = document.querySelectorAll('.close-modal');
  
  // Open modal
  viewButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      const modal = document.getElementById(`modal-${projectId}`);
      
      modal.classList.add('active');
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close modal function
  function closeModal() {
    document.querySelectorAll('.project-modal').forEach(modal => {
      modal.classList.remove('active');
    });
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
  
  // Close with buttons
  closeButtons.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });
  
  // Close with overlay click
  modalOverlay.addEventListener('click', closeModal);
});
