export type QA = { q: string; a: string; tags?: string[] };

export const faq: QA[] = [
  {
    q: "Who are you?",
    a: "Hi, I am Sri — MS student in Robotics and Autonomous Systems (AI) at Arizona State University. I build intelligent systems at the intersection of computer vision, deep learning, and data engineering.",
    tags: ["about", "bio", "intro"],
  },
  {
    q: "Where are you studying?",
    a: "I am pursuing my Master's in Robotics and Autonomous Systems — Artificial Intelligence track at Arizona State University (graduating May 2026).",
    tags: ["education", "university", "asu"],
  },
  {
    q: "What motivated you to study AI and robotics?",
    a: "I've always been fascinated by how machines learn and perceive the world. My journey began with computer vision and deep learning, and evolved into building end-to-end systems that bridge software, data, and real-world robotics.",
    tags: ["motivation", "ai", "robotics"],
  },
  {
  q: "What is your work experience?",
  a: "I have professional experience across both research and industry. Currently, I work as a Research Assistant at the Jiang Lab (Biodesign Center for Mechanisms of Evolution, ASU) and as an AI Specialist at the ASU Tech Hub. Previously, I was a full-time Data Analyst at ANZ Operations & Technology for nearly two years, where I specialized in automating reporting pipelines and driving data-based decisions.",
  tags: ["experience", "career", "work", "jobs", "industry", "research"],
},

{
  q: "Where have you worked before?",
  a: "Before moving to the U.S., I worked at ANZ Operations & Technology as a Data Analyst for almost two years. There, I developed predictive models for Credit cards and Home Loan products, built ETL pipelines, automated dashboards, and optimized reporting workflows across business domains. At ASU, I’ve continued working part-time as a Research Assistant and AI Specialist, combining machine learning and automation for real-world problem solving.",
  tags: ["work", "career", "anz", "asu", "experience"],
},

{
  q: "What do you do as a Research Assistant?",
  a: "At Jiang Lab (ASU Biodesign Center), I work on genomic mutation prediction using deep learning — training neural networks to learn protein sequence-function relationships from experimental datasets. My role involves building and optimizing models, data preprocessing, and analyzing mutation impact with PyTorch and statistical methods.",
  tags: ["research", "assistant", "genomics", "deep learning", "asu"],
},

{
  q: "What do you do as an AI Specialist?",
  a: "At ASU Tech Hub, I design and deploy AI-driven automations for student support systems — such as chatbots that answer course, admission, and technical questions. My work focuses on building conversational models, integrating APIs, and improving accessibility through AI tools.",
  tags: ["ai specialist", "asu", "automation", "chatbot", "nlp"],
},

{
  q: "What skills have you learned from your work experience?",
  a: "From my time at ANZ, I developed strong data engineering and analytics skills — SQL, ETL design, Power BI, predictive models and automation with Python. My Research Assistant role sharpened my PyTorch, deep learning, and genomics expertise. As an AI Specialist, I’ve focused on LangChain, OpenAI APIs, and deploying LLM-powered tools in real settings.",
  tags: ["skills", "learning", "experience", "ai", "data", "ml"],
},

{
  q: "What technologies do you use in your work?",
  a: "Across my roles, I use Python, PyTorch, ONNX, TensorRT, OpenCV, LangChain, FastAPI, SQL, and cloud platforms like AWS and GCP. For dashboards and automation, I’ve also worked with Streamlit, Grafana, and Power BI.",
  tags: ["technology", "stack", "tools", "work", "ai", "data"],
},

  {
    q: "What's your philosophy on learning?",
    a: "Keep learning, keep evolving. The tech world changes fast — I see curiosity and adaptability as superpowers.",
    tags: ["learning", "philosophy", "mindset"],
  },

  {
    q: "What are your top projects?",
    a: "Some highlights: 1. Edge Segmentation (PyTorch → ONNX → TensorRT INT8 with 40% latency drop), 2. AutoInsights (LLM-powered SQL and data assistant), 3. Urban Housing Forecasting (real-time dashboards using Prophet + Grafana).",
    tags: ["projects", "work", "cv", "portfolio"],
  },
  {
    q: "Can you tell me about your Edge Segmentation project?",
    a: "Yes — I optimized a transformer-based segmentation model from PyTorch to TensorRT INT8, achieving ~40% lower latency with <2% accuracy drop, targeting Jetson devices for edge deployment.",
    tags: ["mask2former", "onnx", "tensorrt", "cv"],
  },
  {
    q: "What is AutoInsights?",
    a: "AutoInsights is my AI data assistant that generates SQL queries, summarizes datasets, and suggests visualizations using LangChain, GPT-4, and Streamlit. It helps analysts understand data faster.",
    tags: ["autoinsights", "llm", "langchain", "streamlit"],
  },
  {
    q: "Tell me about your Credit Risk Analysis project.",
    a: "It's a statistical ML pipeline in R using logistic regression, Random Forest, and XGBoost, with SMOTE handling, SHAP-based interpretability, and a dark-themed Shiny UI for predictions.",
    tags: ["credit", "finance", "xgboost", "r", "ml"],
  },
  {
    q: "What's your Urban Housing Forecasting project?",
    a: "A time-series forecasting system for housing demand using Prophet, Streamlit dashboards, PostgreSQL, and Grafana for real-time monitoring and visualization.",
    tags: ["forecasting", "prophet", "grafana", "streamlit"],
  },
  {
    q: "Have you worked on any research projects?",
    a: "Yes — at Jiang Lab (Biodesign Center for Mechanisms of Evolution, ASU), I work on genomic data using deep learning models to predict mutation impact and protein sequence-function relationships.",
    tags: ["research", "genomics", "deep learning", "biology"],
  },
  {
    q: "What's your most challenging project?",
    a: "The Jetson INT8 optimization pipeline — converting Mask2Former to ONNX, calibrating INT8 precision, and maintaining accuracy under edge hardware constraints. It taught me a lot about model optimization and deployment.",
    tags: ["onnx", "tensorrt", "optimization", "edge"],
  },

  {
    q: "What's your technical stack?",
    a: "Core skills: Python, PyTorch, ONNX, TensorRT, OpenCV, FastAPI, LangChain, SQL, Docker, AWS, GCP, and Next.js (TypeScript).",
    tags: ["stack", "skills", "tech"],
  },
  {
    q: "Are you comfortable with cloud platforms?",
    a: "Yes — I've deployed and optimized workloads on AWS, GCP, and Azure. I enjoy working with cloud-native ML pipelines and dashboards.",
    tags: ["cloud", "aws", "gcp", "azure"],
  },
  {
    q: "Do you do full-stack or just ML?",
    a: "I'm an end-to-end engineer — from data pipelines to deployment. I design APIs, dashboards, and frontend UIs to make models actually usable.",
    tags: ["fullstack", "deployment", "integration"],
  },
  {
    q: "Which frameworks do you use most?",
    a: "PyTorch, OpenCV, HuggingFace Transformers, LangChain, Streamlit, and FastAPI are my daily drivers.",
    tags: ["frameworks", "libraries", "pytorch", "huggingface"],
  },
  {
    q: "Do you work with large models (LLMs)?",
    a: "Yes — I've built RAG pipelines using LangChain and OpenAI APIs, primarily for summarization and insight-generation tasks.",
    tags: ["llm", "rag", "langchain", "openai"],
  },
  {
    q: "What courses have you taken?",
    a: "At ASU: Computer Vision for Robotics, Statistical ML, Data Mining, Computational Genomics. At BMSIT: Deep Learning, Computer Vision, and AI Fundamentals.",
    tags: ["courses", "education", "asu", "bmsit"],
  },
  {
    q: "When do you graduate?",
    a: "May 2026.",
    tags: ["graduation", "timeline", "asu"],
  },
  {
    q: "What's your GPA?",
    a: "Currently 3.83/4.0.",
    tags: ["gpa", "grades"],
  },


  {
    q: "What kind of roles are you looking for?",
    a: "AI/ML Engineer, Computer Vision Engineer, or Data Engineer roles — where I can build intelligent, deployable systems with measurable impact.",
    tags: ["career", "roles", "goals"],
  },
  {
    q: "What's your long-term vision?",
    a: "To bridge AI research and practical engineering — building scalable, explainable, and responsible AI systems that solve real-world problems.",
    tags: ["vision", "future", "goals"],
  },
  {
    q: "What industries interest you most?",
    a: "AI for healthcare, robotics, finance, and smart infrastructure — anywhere I can apply ML to make decisions more intelligent.",
    tags: ["industry", "interests"],
  },
  {
    q: "Would you like to work at NVIDIA?",
    a: "Who wouldn't? I admire their research and engineering culture — I've already replicated Jetson/TensorRT-level optimization pipelines inspired by their work.",
    tags: ["nvidia", "companies", "interest"],
  },
  {
    q: "Do you prefer startups or big companies?",
    a: "Startups for creativity and speed, big companies for scale and systems learning. Ideally, a balance between both worlds.",
    tags: ["career", "preferences"],
  },

  {
    q: "Where do you do your research?",
    a: "At Jiang Lab, Biodesign Center for Mechanisms of Evolution (ASU), focusing on deep learning for genomic mutation analysis.",
    tags: ["research", "lab", "jiang lab"],
  },
  {
    q: "What's your publication?",
    a: "I co-authored a Springer chapter on AI in agriculture, exploring ML-based irrigation and crop prediction. DOI: https://doi.org/10.1007/978-981-99-4071-4_16",
    tags: ["publication", "paper", "springer"],
  },

  {
    q: "Do you ever sleep?",
    a: "Barely. Coffee exists for a reason ☕.",
    tags: ["fun", "personality"],
  },
  {
    q: "Favorite quote?",
    a: "“We are in the middle of the tech revolution — learn fast, adapt faster.”",
    tags: ["quote", "motto", "values"],
  },
  {
    q: "What are your hobbies?",
    a: "Photography, travel, reading, and building creative tech projects. Check the Hobbies page for photos and stories.",
    tags: ["hobbies", "interests", "photos"],
  },
  {
    q: "How can I contact you?",
    a: "Email: srilakshmipriyadwarakanath@asu.edu or connect via LinkedIn.",
    tags: ["contact", "email", "linkedin"],
  },
  {
    q: "Where are you based?",
    a: "Tempe, Arizona — but I'm open to remote and hybrid opportunities anywhere.",
    tags: ["location", "city", "availability"],
  },
  {
    q: "Can I collaborate with you?",
    a: "Absolutely — I love building meaningful side projects and open-source tools. Reach out via email or LinkedIn.",
    tags: ["collaboration", "contact"],
  },
  {
    q: "Are you open for internships or full-time roles?",
    a: "Yes — currently seeking Spring 2026 internships and full-time AI/ML Engineer roles post-graduation (May 2026).",
    tags: ["internship", "availability", "roles"],
  },
  {
    q: "Do you build personal projects?",
    a: "All the time — it's how I learn. I build, break, and rebuild things until they work beautifully.",
    tags: ["projects", "learning", "growth"],
  },
];
