export type KPI = { label: string; value: string; direction?: "up" | "down" | "neutral" };
export type SeriesPoint = { x: string; y: number };

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  domain: "CV" | "NLP" | "ML" | "Data";
  metrics: KPI[];            
  kpiSeries?: SeriesPoint[];  
  problem: string;
  approach: string[];
  impact: string[];
  stack: string[];
  links?: { github?: string; paper?: string; demo?: string };
  copyBullet?: string;
};

export type ProjectSection = {
  name: string;
  key: "cv" | "ml" | "data";
  items: Project[];
};



export const projectSections: ProjectSection[] = [
  /* === Computer Vision === */
  {
    name: "Computer Vision",
    key: "cv",
    items: [
      {
  slug: "mask2former-int8-jetson",
  title: "Mask2Former Optimization Pipeline",
  oneLiner: "PyTorch → ONNX → INT8 quantization; edge-ready segmentation.",
  domain: "CV",
  metrics: [
    { label: "Latency", value: "≈ -40%", direction: "down" },
    { label: "Acc Δ",  value: "≤ 2%", direction: "neutral" },
    { label: "Edge",   value: "Jetson", direction: "up" },
  ],
  problem: "Segmentation models were too slow for low-power devices.",
  approach: [
    "Converted pretrained Mask2Former from PyTorch to ONNX",
    "Planned INT8 calibration set and engine build in TensorRT",
    "Defined latency/accuracy targets and benchmark protocol",
  ],
  impact: [
    "Targeting ~40% latency drop with ≤2% accuracy delta",
    "Repeatable export→optimize→deploy workflow for edge",
  ],
  stack: ["PyTorch", "ONNX Runtime", "TensorRT", "Python", "Jetson"],
  links: { github: "https://github.com/Priyakarna13/mask2former-int8-jetson" }, 
  copyBullet:
    "Converted transformer segmentation PyTorch→ONNX→TensorRT (INT8); ~40% lower latency with ≤2% accuracy delta for edge.",
}
,
      {
        slug: "esrgan-super-resolution",
        title: "Image Super-Resolution with ESRGAN",
        oneLiner: "Upscaled medical/satellite imagery while preserving fine details.",
        domain: "CV",
        metrics: [
          { label: "PSNR", value: "+30%", direction: "up" },
          { label: "Scale", value: "x2/x4", direction: "up" },
        ],
        problem: "Low-res scans limited diagnostic and analytic utility.",
        approach: [
          "Trained ESRGAN for x2/x4 upscaling with curated augmentations",
          "Balanced perceptual/adv losses to preserve edges and texture",
        ],
        impact: [
          "Improved clarity with a 30% PSNR boost on validation imagery",
          "Enabled better readability of fine structures in scans/maps",
        ],
        stack: ["Python", "PyTorch", "ESRGAN", "OpenCV"],
        links: { github: "https://github.com/Priyakarna13" },
        copyBullet:
          "Trained ESRGAN super-resolution (x2/x4), improving PSNR by ~30% for medical/satellite imagery.",
      },
      {
        slug: "synthetic-data-diffusion",
        title: "Synthetic Data Generation (Diffusion + ControlNet)",
        oneLiner: "Filled rare classes with targeted synthetic images.",
        domain: "CV",
        metrics: [
          { label: "Detection Acc", value: "+12%", direction: "up" },
        ],
        problem: "Rare categories suffered from data scarcity.",
        approach: [
          "Used Stable Diffusion + ControlNet to generate domain-specific images",
          "Curated prompts/controls to match dataset distribution",
        ],
        impact: [
          "Increased detection accuracy by 12% on rare categories",
          "Reduced labeling burden for edge cases",
        ],
        stack: ["Stable Diffusion", "ControlNet", "PyTorch"],
        links: { github: "https://github.com/Priyakarna13" },
        copyBullet:
          "Generated domain-specific synthetic data (Diffusion+ControlNet) boosting rare-class detection by 12%.",
      },
      {
        slug: "hybrid-cloud-face-id",
        title: "Hybrid Cloud Face Identifier",
        oneLiner: "Cloud + on-prem storage with <1s latency, 99% uptime.",
        domain: "CV",
        metrics: [
          { label: "Latency", value: "< 1s", direction: "down" },
          { label: "Uptime", value: "99%", direction: "up" },
        ],
        problem: "Needed secure, low-latency facial recognition for classrooms.",
        approach: [
          "Combined AWS Lambda + OpenFaaS with Ceph object storage",
          "Optimized path for real-time auth and reliability",
        ],
        impact: [
          "Enabled smart-classroom attendance with 99% uptime",
          "Delivered sub-second recognition at scale",
        ],
        stack: ["AWS Lambda", "OpenFaaS", "Docker", "Ceph", "Python"],
        links: { github: "https://github.com/Priyakarna13/Hybrid-Cloud-Face-Identifier" },
        copyBullet:
          "Built hybrid cloud facial ID (<1s latency, 99% uptime) using AWS Lambda + OpenFaaS + Ceph.",
      },
      {
        slug: "6dof-tracking-neural-3d",
        title: "6-DoF Tracking + Neural 3D Reconstruction",
        oneLiner: "BundleSDF + Gaussian Splatting for robust object tracking.",
        domain: "CV",
        metrics: [{ label: "Tracking Acc", value: "+20%", direction: "up" }],
        problem: "Occlusion/low-texture scenes broke classic trackers.",
        approach: [
          "Fused 6-DoF tracking with neural 3D reconstruction",
          "Benchmarked under occlusion, motion, and low-texture regimes",
        ],
        impact: [
          "Improved tracking accuracy by 20% in challenging conditions",
        ],
        stack: ["PyTorch", "BundleSDF", "Gaussian Splatting", "OpenCV"],
        links: { github: "https://github.com/Priyakarna13" },
        copyBullet:
          "Built real-time 6-DoF tracking with neural 3D reconstruction, improving accuracy by ~20% under occlusion.",
      },
    ],
  },

  /* === ML / DL (incl. GenAI & Bio) === */
  {
    name: "ML / DL (incl. GenAI & Bio)",
    key: "ml",
    items: [
      {
        slug: "genai-summarizer-t5-rag",
        title: "GenAI Summarizer",
        oneLiner: "T5 fine-tune + RAG pipeline for domain Q&A.",
        domain: "NLP",
        metrics: [
          { label: "ROUGE-2", value: "0.72", direction: "up" },
          { label: "Time Saved", value: "40%", direction: "up" },
        ],
        problem: "Manual report prep was slow and inconsistent.",
        approach: [
          "Fine-tuned T5 on 100K+ articles",
          "Added retrieval-augmented generation for domain QA",
          "Deployed with FastAPI on AWS",
        ],
        impact: [
          "Cut report prep time by 40% for end users",
          "Delivered higher-quality summaries (ROUGE-2: 0.72)",
        ],
        stack: ["T5", "Hugging Face", "RAG", "FastAPI", "AWS"],
        links: { github: "https://github.com/Priyakarna13/text-summarizer-t5" },
        copyBullet:
          "Fine-tuned T5 + RAG; improved ROUGE-2 to 0.72 and reduced report prep time by 40%.",
      },
      {
        slug: "autoinsights-llm-sql",
        title: "AutoInsights",
        oneLiner: "LLM data assistant (SQL generation, summaries, chart recs).",
        domain: "ML",
        metrics: [
          { label: "Accuracy", value: "95%", direction: "up" },
          { label: "Time Saved", value: "60%", direction: "up" },
        ],
        problem: "Analysts spent too much time writing SQL and summarizing results.",
        approach: [
          "Built agent to generate SQL and summarize datasets",
          "Added chart recommendations via heuristics",
          "Deployed as Streamlit app",
        ],
        impact: [
          "Reduced manual analysis work by 60%",
          "Summaries rated 95% accurate by users",
        ],
        stack: ["GPT-4", "LangChain", "Streamlit", "Python", "SQL"],
        links: { github: "https://github.com/Priyakarna13/autoinsights-dataagent" },
        copyBullet:
          "Shipped LLM SQL+summary assistant (Streamlit); 60% time saved, 95% answer accuracy.",
      },
      {
        slug: "eeg-schizophrenia-dx",
        title: "EEG Schizophrenia Diagnosis",
        oneLiner: "SNN + CNN + Random Forest ensemble on EEG signals.",
        domain: "ML",
        metrics: [{ label: "Signal Quality", value: "↑ Robust", direction: "up" }],
        problem: "Noisy EEG signals made diagnosis unreliable.",
        approach: [
          "Preprocessed EEG channels and extracted spectral features",
          "Trained SNN/CNN models and ensembled with Random Forest",
        ],
        impact: [
          "Delivered robust classification on challenging EEG data",
        ],
        stack: ["PyTorch", "Signal Processing", "scikit-learn"],
        links: { github: "https://github.com/Priyakarna13/Diagnosis-of-Schizophrenia-based-on-EEG-signals-using-Spiking-Neural-Networks" },
        copyBullet:
          "Built EEG diagnosis pipeline (SNN+CNN+RF) with robust performance on noisy signals.",
      },
    ],
  },

  /* === Data Science & Analytics === */
  {
    name: "Data Science & Analytics",
    key: "data",
    items: [
      {
        slug: "urban-housing-forecasting",
        title: "Urban Housing Demand Forecasting",
        oneLiner: "Time-series pipeline on 250K+ listings for planning insights.",
        domain: "Data",
        metrics: [{ label: "Mismatch", value: "-15%", direction: "down" }],
        problem: "Cities struggled with vacancy/availability mismatch.",
        approach: [
          "Prophet + decomposition on large multi-city dataset",
          "Built Grafana/PowerBI dashboards for trends",
        ],
        impact: [
          "Helped planners reduce vacancy mismatch by 15% across 5 metros",
        ],
        stack: ["Prophet", "Python", "Grafana", "PowerBI"],
        links: { github: "https://github.com/Priyakarna13" },
        copyBullet:
          "Designed forecasting on 250K+ listings; reduced vacancy mismatch by ~15% across 5 metros.",
      },
      {
        slug: "credit-risk-analysis",
        title: "Credit Risk Analysis",
        oneLiner: "Regression + hypothesis testing on 500K+ customers.",
        domain: "Data",
        metrics: [{ label: "AUC", value: "0.91", direction: "up" }],
        problem: "Needed earlier, reliable risk flags for approvals.",
        approach: [
          "Logistic regression + statistical tests on large cohort",
          "Calibrated thresholds and validated fairness",
        ],
        impact: [
          "Improved early risk detection (AUC 0.91)",
          "Enabled faster, more reliable approvals",
        ],
        stack: ["R", "Python", "SQL", "scikit-learn"],
        links: { github: "https://github.com/Priyakarna13/credit-risk-app" },
        copyBullet:
          "Built credit-risk model on 500K+ customers; AUC 0.91 and earlier risk flagging for approvals.",
      },
      {
        slug: "healthtrack-dashboard",
        title: "HealthTrack — Patient Monitoring Dashboard",
        oneLiner: "Real-time health telemetry at 10K+ datapoints/min on AWS.",
        domain: "Data",
        metrics: [
          { label: "Uptime", value: "99.95%", direction: "up" },
          { label: "Manual Checks", value: "-40%", direction: "down" },
        ],
        problem: "Clinicians lacked unified, real-time patient status.",
        approach: [
          "Serverless pipeline with Lambda, API Gateway, DynamoDB",
          "IaC via Terraform; resilience + alerting",
        ],
        impact: [
          "Delivered 99.95% uptime",
          "Reduced manual checks by 40%; faster responses",
        ],
        stack: ["AWS Lambda", "Terraform", "DynamoDB", "API Gateway"],
        links: { github: "https://github.com/Priyakarna13/patient-health-tracker" },
        copyBullet:
          "Deployed real-time health dashboard (10K+ datapoints/min, 99.95% uptime) cutting manual checks by 40%.",
      },
    ],
  },
];


export function findProject(slug: string): Project | undefined {
  for (const section of projectSections) {
    const hit = section.items.find((p) => p.slug === slug);
    if (hit) return hit;
  }
  return undefined;
}
