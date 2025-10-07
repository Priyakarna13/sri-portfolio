export const samples = [
  {
    id: "cv-int8",
    label: "Case study: CV INT8 (short)",
    text: `We built a pipeline to deploy segmentation on Jetson devices. The FP32 model was accurate but slow. After exporting to ONNX and applying INT8 calibration, we reduced latency by around 40% while keeping accuracy within 2% of the baseline. Future work includes mixed precision for sensitive ops and device telemetry for drift.`,
  },
  {
    id: "research-genomics",
    label: "Research: Genomics (short)",
    text: `Our lab explored deep learning for mutation prediction on genomic sequences. We compared CNNs, graph neural networks, and transformer architectures. Results show the transformer variant improves rare-class recall. We plan to optimize data augmentation and add uncertainty calibration.`,
  },
  {
    id: "generic-article",
    label: "Generic article (longer)",
    text: `Modern organizations accumulate vast unstructured data: emails, tickets, documents. Manual summarization is slow and inconsistent. We evaluated automatic summarization approaches: extractive (TextRank, frequency-based) and abstractive (sequence-to-sequence). Extractive summarization is fast and transparent but can be choppy. Abstractive models produce fluent text, but may hallucinate. For internal knowledge bases, a hybrid approach works well: first retrieve key sentences, then paraphrase with a small model, while preserving citations.`,
  },
];
