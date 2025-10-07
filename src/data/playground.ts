export type PlaygroundApp = {
  key: string;
  title: string;
  description: string;
  link: string;
};

export const playgroundApps: PlaygroundApp[] = [
  {
    key: "summarizer",
    title: "Text Summarizer (T5)",
    description: "A text summarization demo powered by T5. Try it live.",
    link: "https://text-summarizer-t5.streamlit.app/",
  },
  {
    key: "credit-risk",
    title: "Credit Risk Prediction",
    description: "A Shiny/Streamlit app for credit risk scoring with explainable ML.",
    link: "https://priyakarna.shinyapps.io/credit-risk-ml-finbench/", 
  },
  {
    key: "autoinsights",
    title: "AutoInsights",
    description: "Interactive data assistant: auto-SQL, visualization, insights powered by LLMs.",
    link: "https://autoinsights-dataagent.streamlit.app/", 
  },
];
