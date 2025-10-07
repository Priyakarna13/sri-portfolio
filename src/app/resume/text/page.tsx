export const metadata = { title: "Resume — Text Version" };

export default function ResumeText() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-12">
      <h1>Sri Lakshmi Priya Dwarakanath — Resume (Text)</h1>

      <h2>Experience</h2>
      <p><strong>Arizona State University — Jiang Lab</strong> | Research Assistant (AI/Genomics) | Sep 2024 – Present</p>
      <ul>
        <li>Deep learning models for mutation prediction; 92% F1 on target classes.</li>
        <li>Compared Swin/ESM-2/diffusion vs CNN/RNN; improved rare-class recall.</li>
        <li>SageMaker pipelines serving 5K+ preds/day; −30% latency with CI/CD.</li>
      </ul>

      <p><strong>ASU Technology Enterprise</strong> | AI Creative Specialist | Jun 2025 – Present</p>
      <ul>
        <li>Agentic assistants reduced reporting workload by 35%.</li>
        <li>RAG over Salesforce/ASU sources; +25% support accuracy.</li>
        <li>Deployed Streamlit/PowerBI dashboards to 200+ staff.</li>
      </ul>

      <p><strong>ANZ Operations & Technology</strong> | Data/AI Analyst | Dec 2022 – Jul 2024</p>
      <ul>
        <li>Credit/home-loan models improved targeting 30%; churn −23%.</li>
        <li>EDA on 1M+ records; 35% engagement lift.</li>
        <li>Airflow+PySpark ETL (99.9% uptime) with CI/CD; saved 10+ hrs/week.</li>
      </ul>

      <h2>Education</h2>
      <p><strong>Arizona State University</strong> — M.S. Robotics & Autonomous Systems (AI), GPA 3.83 — Expected May 2026</p>
      <p><strong>BMS Institute of Technology (VTU)</strong> — B.E. AI & ML (Honors), GPA 3.89 — May 2023</p>

      <h2>Skills</h2>
      <p>Python, C++, PyTorch, TensorFlow, Transformers/HF, ONNX/TensorRT, OpenCV, LangChain/RAG, SQL, Airflow/PySpark, AWS/GCP/Azure, Docker, FastAPI, CI/CD (GitHub Actions)</p>
    </article>
  );
}
