export type Pub = {
  key: string;                
  title: string;
  authors: string;         
  venue: string;             
  year: string;          
  links?: {
    pdf?: string;        
    doi?: string;
    arxiv?: string;
    code?: string;           
  };
  abstract?: string;
  bibtex?: string;          
  apa?: string;          
};

export const publications: Pub[] = [
  {
  key: "malakreddy2023-alzheimer-ml",
  title: "A Comparative Study for Early Diagnosis of Alzheimer’s Disease Using Machine Learning Techniques",
  authors: "A. Bharathi Malakreddy, D. Sri Lakshmi Priya, V. Madhumitha & Aryan Tiwari",
  venue: "International Conference on Innovative Computing and Communications (ICICC 2023), Lecture Notes in Networks and Systems, vol. 731",
  year: "2023",
  abstract:
    "This paper analyzes features from demented and non-demented cases and trains multiple ML models to detect early Alzheimer’s disease, aiming to generalize classification in early stages.",
  links: {
    pdf: undefined, 
    doi: "https://doi.org/10.1007/978-981-99-4071-4_16",
    arxiv: undefined,
    code: undefined,
  },
  apa:
    "Malakreddy, A. B., Priya, D. S. L., Madhumitha, V., & Tiwari, A. (2023). A Comparative Study for Early Diagnosis of Alzheimer’s Disease Using Machine Learning Techniques. In *International Conference on Innovative Computing and Communications (ICICC 2023)*, Lecture Notes in Networks and Systems, Vol. 731. Springer. https://doi.org/10.1007/978-981-99-4071-4_16",
  bibtex: `@inproceedings{malakreddy2023-alzheimer-ml,
  title={A Comparative Study for Early Diagnosis of Alzheimer’s Disease Using Machine Learning Techniques},
  author={Malakreddy, A. Bharathi and Priya, D. Sri Lakshmi and Madhumitha, V. and Tiwari, Aryan},
  booktitle={International Conference on Innovative Computing and Communications (ICICC 2023), Lecture Notes in Networks and Systems, Vol. 731},
  year={2023},
  doi={10.1007/978-981-99-4071-4_16}

}`,
  },
];

