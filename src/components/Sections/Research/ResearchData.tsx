export interface ResearchPartner {
  id: number;
  name: string;
  logo: string;
  url: string;
}

export const researchPartners: ResearchPartner[] = [
  {
    id: -1,
    name: "Geological Survey of Brazil (SGB)",
    logo: "img/partners/sgb.webp",
    url: "https://www.sgb.gov.br/",
  },
  {
    id: 0,
    name: "Center for Applied Geociences (CGA)",
    logo: "img/partners/CGA_k.webp",
    url: "https://www.sgb.gov.br/",
  },
  {
    id: 1,
    name: "Oman Chromite Company",
    logo: "img/partners/occ.webp",
    url: "https://www.omanchromite.com/",
  },
  {
    id: 2,
    name: "Petrobras",
    logo: "img/partners/petrobras.webp",
    url: "https://petrobras.com.br/",
  },
  {
    id: 3,
    name: "Universidade Federal de Santa Catarina (UFSC)",
    logo: "img/partners/ufsc.webp",
    url: "https://ufsc.br/",
  },
  {
    id: 4,
    name: "Grupo de Análise de Bacias e Reservatórios (ANBA)",
    logo: "img/partners/anba.webp",
    url: "https://anba.ufsc.br/",
  },
  {
    id: 5,
    name: "Vale",
    logo: "img/partners/vale.webp",
    url: "https://vale.com/",
  },
  {
    id: 6,
    name: "University du Quebec à Chicoutimi",
    logo: "img/partners/uaqc.webp",
    url: "https://www.uqac.ca/",
  },
  {
    id: 7,
    name: "Observatório Nacional (ON)",
    logo: "img/partners/on.webp",
    url: "https://www.gov.br/observatorio/pt-br",
  },
  {
    id: 8,
    name: "Institute for Enviromental Analytics (IEA)",
    logo: "img/partners/IEA.webp",
    url: "https://www.the-iea.org/",
  },
  {
    id: 9,
    name: "University of Campinas (Unicamp)",
    logo: "img/partners/UNICAMP.webp",
    url: "https://unicamp.br/",
  },
];

export interface ResearchData {
  title: string;
  partners: number[];
  description: string;
  topic: string;
  startDate: string;
  endDate: string;
  img: string;
  url?: string;
}

export const researchData: ResearchData[] = [
  {
    title:
      "Identification and quantification of hydrothermal alterations and magmatic zonation as vectors of chromitite mineralization in the Samail Ophiolite, Oman",
    partners: [1, 0, -1],
    description:
      "In partnership with Oman Chromite, a leading public-private company in the extraction and exploration of chromite in Oman, we propose to implement advanced machine learning and data integration techniques to identify new chromitite targets in the Oman Ophiolite. This approach will enhance our understanding of the magmatic and hydrothermal processes associated with chromitite formation through sophisticated pattern recognition and predictive modeling of geological data.",
    topic: "Mineral Exploration",
    startDate: "03/2024",
    endDate: "",
    img: "img/research/OCC_p1.webp",
  },
  {
    title:
      "Machine learning techniques for pattern recognition of turbidite systems",
    partners: [2, 3, 4, 0, -1],
    description:
      "Apply Machine Learning techniques to identify and analyze sedimentary patterns and stratigraphic signatures within turbidite systems of the Itararé Group, as well as analogous depositional environments across other sedimentary basins. This approach will leverage advanced pattern recognition algorithms to characterize turbidite facies, flow architectures, and depositional sequences, enabling a more comprehensive understanding of deep-water sedimentary systems.",
    topic: "Oil & Gas",
    startDate: "10/2024",
    endDate: "03/2025",
    img: "img/research/MLTurb.webp",
  },
  {
    title:
      "Quantification of Lithological Alterations and Prospective Vectoring for IOCG",
    partners: [5, 6, 0, -1],
    description:
      "This project aims to enhance the characterization and quantification of hydrothermal alterations in Archean metavolcanic rocks within the Carajás Mineral Province, focusing on Iron Oxide-Copper-Gold (IOCG) deposit exploration. Through advanced analytical techniques, we will develop a comprehensive framework to identify and map distinctive hydrothermal signatures associated with IOCG mineralization, ultimately improving the targeting efficiency and understanding of these economically significant deposits in one of Brazil's premier metallogenic provinces.",
    topic: "Mineral Exploration",
    startDate: "03/2021",
    endDate: "09/2021",
    img: "img/research/vale_p1.webp",
  },
  {
    title:
      "Integrated assessment and prospectivity mapping of geothermal resources for EGS in Brazil",
    partners: [7, 8, 0, -1],
    description:
      "Develop a pioneering integrated assessment methodology for Enhanced Geothermal Systems (EGS) resources in Brazil, implementing an innovative scientific approach that combines geological, geophysical, and thermal modeling techniques. This comprehensive framework will establish the first standardized evaluation protocol for EGS potential in Brazilian geological settings, creating a scalable and adaptable methodology that can be applied to similar geological contexts worldwide. The research will address critical parameters including heat flow characteristics, reservoir properties, and structural controls, ultimately contributing to the global advancement of geothermal energy development.",
    topic: "Geothermal Energy",
    startDate: "04/2020",
    endDate: "10/2021",
    img: "img/research/EGS_p1.webp",
  },
  {
    title:
      "RockPlot: A new tool for geochemical data visualization and interpretation",
    partners: [0, -1],
    description:
      "RockPlot is a application developed by researcher from the Centre of Applied Geociences (CGA) of the Geological Survey of Brazil (SGB) for the evaluation and interpretation of whole rock geochemical data. In addition to providing the classic univariate and multivariate statistical analysis tools, the app also makes it easy to use modern machine learning algorithms for geochemical data analysis. RockPlot includes the most used plots for chemical and geotectonic classification of igneous rocks.",
    topic: "Software",
    startDate: "01/2022",
    endDate: "",
    img: "img/research/rockplot.webp",
    url: "https://eliasmgprado.github.io/RockPlot",
  },
  {
    title:
      "Evaluation of machine learning methods for prospectivity modeling and vectoring of IOCG mineralizations",
    partners: [9, 0, -1],
    description:
      "The development of mineral exploration focused on increasing the availability of mineral resources and reducing environmental impact is crucial for a solid and sustainable socio-economic development of society. Society is currently experiencing rapid growth in the extraction and consumption of mineral resources due to an increasing human population, increasing levels of economic activity, and transition to new technologies. Artificial intelligence techniques, big data analysis, and other Industry 4.0 technologies are promising solutions to circumvent many of these problems. This work presents new approaches to mineral exploration targeting that incorporates state-of-the-art methods focused on the applicability of machine learning algorithms for mineral prospectivity mapping and estimation of ore grade by means of spectral data.",
    topic: "Mineral Exploration",
    startDate: "12/2023",
    endDate: "",
    img: "img/research/doc.webp",
  },
];
