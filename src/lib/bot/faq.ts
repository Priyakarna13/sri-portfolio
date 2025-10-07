export const faq = [
  {
    q: /resume|cv/i,
    a: "You can view/download my resume here: /resume . For a fast overview, check the TL;DR at the top.",
  },
  {
    q: /github/i,
    a: "My GitHub is https://github.com/Priyakarna13 . I keep active work in CV/ML, data engineering and demos.",
  },
  {
    q: /linkedin|contact/i,
    a: "Happy to connect: https://www.linkedin.com/in/sri-lakshmi-priya-d/ — or use the /contact page.",
  },
  {
    q: /(mask2former|int8|tensorrt|jetson)/i,
    a: "Edge-Ready Segmentation case study: PyTorch → ONNX → INT8 TensorRT with ≤2% accuracy delta and ~40% latency reduction. See /work/mask2former-int8-jetson.",
  },
  {
    q: /(credit\s*risk|autoinsights|summarizer)/i,
    a: "Playground apps were moved off the site. Ask me for links or see GitHub for live demos/repos.",
  },
  {
    q: /(who|about).*(sri|you)|journey|story/i,
    a: "I’m Sri — MS in Robotics & Autonomous Systems (AI) at ASU (May 2026). I work across AI/ML, Computer Vision, Genomics, and all things DATA. Read the long version at /about.",
  },
];

export function localAnswer(user: string): string | null {
  for (const f of faq) if (f.q.test(user)) return f.a;
  return null;
}
