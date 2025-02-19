export interface Publication {
  /** First author */
  firstAuthor: boolean;

  /** Author */
  author: string;

  /** Title */
  title: string;

  /** Journal */
  journal: string;

  /** Volume */
  volume: string | number;

  /** Number */
  number?: string | number;

  /** Pages */
  pages: string;

  /** Year */
  year: string | number;

  /** Month */
  month?: string | number;

  /** Abstract */
  abstract: string;

  /** ISSN */
  issn?: string;

  /** DOI */
  doi?: string;

  /** URL */
  url: string;

  /** Publication Type */
  publicationType: string;

  /** Keywords */
  keywords?: string;

  /** Image */
  img?: string;
}

export const publicationsData: Publication[] = [
  {
    firstAuthor: true,
    author:
      "Guerra Prado, Elias Martins and de Souza Filho, Carlos Roberto and Muico Carranza, Emmanuel John",
    title:
      "Ore-Grade Estimation from Hyperspectral Data Using Convolutional Neural Networks: A Case Study at the Olympic Dam Iron Oxide Copper-Gold Deposit, Australia",
    journal: "Economic Geology",
    volume: 118,
    number: 8,
    pages: "1899-1921",
    year: 2023,
    month: 12,
    abstract:
      "Acquiring information about the spatial distribution of ore grade in the subsurface is essential for exploring and discovering mineral resources. This information is derived commonly from the geochemical analysis carried out on drill core samples, which allows the quantification of the concentration of ore elements. However, these surveys are generally time-consuming and expensive, usually leading to information at a low spatial resolution due to large sampling intervals. The use of hyperspectral systems in the mining industry to characterize and quantify minerals in drill cores is increasing due to their efficiency and fast turnaround time. Here, we propose the use of convolutional neural networks on hyperspectral data to estimate Cu concentration in drill cores at the Olympic Dam iron oxide copper-gold deposit. The Cu concentration data obtained by drill core geochemical analysis and the mean spectra between the analyzed intervals obtained from hyperspectral data were used to train the machine learning model. The trained model was then used to estimate the Cu concentration of a test drill core, which was not used to train the model. In addition, the trained model was used to extrapolate the Cu concentration, at a centimetric spatial resolution, to the drill core intervals without geochemical analysis. Qualitative and quantitative evaluations of the results demonstrate the capabilities of the proposed method, which provided a root mean squared error of 0.48 for the estimation of Cu percentage along drill cores. The results indicate that the method could be beneficial for determining the spatial distribution of ore grade by supporting the selection of zones of interest where more detailed analyses are appropriate, reducing the number of samples needed to characterize and identify the ore zones, and assisting in the estimation of the volume with commercially viable ore, thereby potentially reducing the geochemical assays needed and decreasing the data acquisition time.",
    issn: "0361-0128",
    doi: "10.5382/econgeo.5023",
    url: "https://doi.org/10.5382/econgeo.5023",
    img: "img/publications/10.5382_econgeo.5023.png",
    publicationType: "journal article",
  },
  {
    firstAuthor: false,
    author:
      "Nogueira Chiarini and Marcus Flavio and Loiane Gomes de Moraes and Elton Luiz Dantas and Reinhardt Adolfo Fuck and Elias Prado and Raphael Teixeira Corrêa and Jaime Scandolara and Antônio Frasca and Joseneusa Rodrigues and Andre Menezes Saboia",
    title:
      "Investigation of Archean Gamma-Ray Fingerprint: Methodology and Tectonic Application in Central Brazil",
    journal: "Journal of the Geological Survey of Brazil",
    volume: 7,
    number: 1,
    pages: "1-18",
    year: 2024,
    abstract:
      "Gamma-ray spectrometric responses of Archean rocks were studied in order to define a characteristic signature for these rocks. As the half-life of the most frequent Thorium isotope (232Th – half life of 14.05 Ga) is more than 3 times longer relative to the Uranium isotope (238U – half life of 4.50 Ga), a low response of radiation intensity in the spectral range of decay series of Uranium relative to that of Thorium is expected for Archean rocks. Based on this theoretical aspect, associated with gamma-ray spectrometric responses parametrically studied in several Archean areas of Brazil, gamma-ray and magnetometric structural interpretation, follow-up field studies, micropetrography, lithogeochemistry, and geochronology (U-Pb in zircon), it was possible to define and identify previously unidentified Archean rocks (2.82 Ga) tectonically imbricated amid Neoproterozoic magmatic arc terrains. This discovery has geotectonic implications regarding the magnitude of the Transbrasiliano Lineamento and its potential to fragment large Archean blocks and arrange them aligned within the Tocantins Province, Central Brazil.",
    issn: "",
    doi: "10.29396/jgsb.2024.v7.n1.1",
    url: "https://doi.org/10.29396/jgsb.2024.v7.n1.1",
    publicationType: "journal article",
    img: "img/publications/10.29396_jgsb.2024.v7.n1.1.png",
  },
  {
    firstAuthor: false,
    title:
      "Integrated assessment and prospectivity mapping of geothermal resources for EGS in Brazil",
    journal: "Geothermics",
    volume: 100,
    pages: "102321",
    year: 2022,
    issn: "0375-6505",
    doi: "10.1016/j.geothermics.2021.102321",
    url: "https://www.sciencedirect.com/science/article/pii/S0375650521002753",
    author:
      "Christian Michel Lacasse and Elias Martins Guerra Prado and Suze Nei Pereira Guimarães and Oderson Antônio de Souza Filho and Fábio Pinto Vieira",
    keywords:
      "Brazil, EGS, High heat producing granites, Prospectivity mapping, Knowledge-driven model, Fuzzy logic",
    abstract:
      "Studies in Brazil related to geothermal resources have been carried out mainly by the National Observatory. Based on the results vast areas of Brazil have been delimited with a surface heat flow of over 60 mW/m2 and an excess temperature above 100 °C at depths between 3 and 6 km. The nature of the heat source and the mode of heat dissipation in these areas are largely unknown. Geothermal resources that might be associated with these areas can occur in hot sedimentary aquifers (HSA) and units of hot dry rocks (HDR) that are hosted, respectively, in intracratonic sedimentary basins and high heat producing granites (HHPG). The focus of our study is on finding resources of high enthalpy (above 150 °C) in HHPG, which regardless of their hydrological properties (porosity, permeability) could be considered as potential targets for enhanced geothermal systems (EGS). The structural provinces of Tocantins and Borborema were chosen as pilot regions based on both the indication of HDR and the wealth of open access georeferenced information. A comprehensive database was compiled and processed under GIS that includes geology, faults, soil typology, radiogenic heat, heat flow and geothermal gradient from wells, thermal spring locations, airborne gamma-ray spectrometry and magnetic surveys, terrestrial gravimetric surveys, and earthquake locations. In parallel, various critical factors were defined primarily to identify and characterize the most promising HHPG under insulating sedimentary rocks for EGS. These critical factors were grouped into three main categories labelled as: ‘thermal source’, ‘thermal insulation’ and ‘active pathways’. In the absence of exploratory data on existing EGS in Brazil these critical factors were used in this study along three separate work streams to develop a knowledge-driven model based on fuzzy logic for improving the knowledge on the prospectivity of geothermal resources. The developed model was further tested for its validation. The selected approach is expected to be applicable to mapping areas with EGS potential in other regions with similar geology and open access georeferenced databases.",
    publicationType: "journal article",
    img: "img/publications/10.1016_j.geothermics.2021.102321.png",
  },
  {
    firstAuthor: false,
    title: "Updated mapping of terrestrial heat flow in Brazil",
    journal: "Journal of South American Earth Sciences",
    volume: 113,
    pages: "103627",
    year: 2022,
    issn: "0895-9811",
    doi: "10.1016/j.jsames.2021.103627",
    url: "https://www.sciencedirect.com/science/article/pii/S0895981121004727",
    author:
      "Suze Nei Pereira Guimarães and Elias Martins Guerra Prado and Fábio Pinto Vieira and Christian Michel Lacasse and Nina da Silva Rocha and Beatriz Lessa de Jesus and Oderson Antônio de Souza Filho",
    keywords:
      "Terrestrial heat flow, Thermal conductivity, Groundwater silica geothermometry, Brazil",
    abstract:
      "An updated geothermal database is presented by providing a new mapping of terrestrial heat flow over the entire Brazilian territory. New estimates of this geothermal parameter were obtained using an indirect method based on groundwater silica content (silica geothermometry) measured in 4949 wells. The Brazilian Geothermal Database of the Geothermal Laboratory from the National Observatory currently comprises geothermal data obtained directly from temperature-depth profiles mostly in hydrocarbon wells and from several other records in groundwater wells using indirect temperature estimates. The procedure of indirect temperature estimates used here assumes that the amount of silica dissolved in groundwaters depends on the in-situ temperatures of the host rocks or geothermal reservoirs. Following this initial calculation procedure, the heat flow, the depth of the aquifer and the temperature at the reservoir bottom were calculated using a numerical relationship that was specifically modified and adapted to the Brazilian geological context. Measurements of silica content in groundwater wells were obtained from the Groundwater Information System of the Geological Survey of Brazil. When available in the database, the lithological profiles of these wells were additionally used to calculate weighted average thermal conductivity by considering the documented lithotypes and their respective thicknesses. For wells without lithological information, their thermal conductivity was reassessed by including information from the nearest documented well lithotypes and that belong to the same geological context. The results indicate that regions encompassing a system of fractured aquifers, with a mean silica content of 40 ppm, show the highest heat flow values of the order of 70 mWm2 on average. Regions with karstic aquifers, characterized by a mean silica content of 29 ppm, display most of the lowest heat flow values ≤40mWm2. Regions with porous aquifers of mean silica content between 30 and 33 ppm present a range of intermediate heat flow values between 50 and 60 mWm2. Taking into account the different associated lithological types, the Brazilian structural provinces display values of thermal conductivity ranging between 2.1 and 2.7 WK.m. The refinement in mapping terrestrial heat flow in Brazil indicates various thermal anomalies at regional scale that can be further studied for prospecting geothermal resources of low-to-high temperature. These regional thermal anomalies are essentially found in the NW region of the Paraná Basin, N of the Tocantins Province (western portion), south-central Tocantins Province (eastern portion), north-central part of the Sáo Francisco Craton and the NE region of the Borborema Province.",
    publicationType: "journal article",
    img: "img/publications/10.1016_j.jsames.2021.103627.png",
  },
  {
    firstAuthor: true,
    title:
      "Modeling of Cu-Au prospectivity in the Carajás mineral province (Brazil) through machine learning: Dealing with imbalanced training data",
    journal: "Ore Geology Reviews",
    volume: "124",
    pages: "103611",
    year: "2020",
    issn: "0169-1368",
    doi: "10.1016/j.oregeorev.2020.103611",
    url: "https://www.sciencedirect.com/science/article/pii/S0169136819308819",
    author:
      "Elias Martins Guerra Prado and Carlos Roberto {de Souza Filho} and Emmanuel John M. Carranza and João Gabriel Motta",
    keywords:
      "Mineral prospectivity mapping, Carajás mineral province, Imbalanced training data, Synthetic minority over-sampling technique",
    abstract:
      "Machine learning (ML) is becoming an appealing tool in various fields of Earth Sciences, especially in mineral prospectivity mapping (MPM) to support mineral exploration. ML algorithms are designed to assume a relatively balanced amount of training data for the estimation of the decision boundaries between the classes of interest (i.e., in MPM: mineralized- and non-mineralized locations). However, in MPM the numbers of mineralized and non-mineralized locations are naturally imbalanced, as the number of known mineral deposit occurrences (as a proxy of mineralized or positive class) are naturally much smaller than the number of non-mineralized locations (the negative class). The use of imbalanced data leads to difficulties in the training of ML models for MPM, due to the learning bias towards the features of the predominant (i.e., negative) class. In the present study, using support vector machine for Cu-Au prospectivity modeling in the Carajás mineral province (Brazil), we evaluated the effects of Synthetic Minority Over-sampling Technique (SMOTE), which addresses the issue of imbalanced training data on the performance of MPM. The original training data for the positive (i.e., minority) class was modified by over-sampling the mineralized locations using SMOTE and by randomly under-sampling the non-mineralized locations at different proportions, producing 400 training datasets with proportions of mineralized-to-non-mineralized samples ranging from 600:30 to 30:600. Each of these individual training datasets was used to evaluate the performance of MPM under different proportions of mineralized-to-non-mineralized samples. The performance of each prospectivity model was objectively evaluated using the F1 score and the success-rate curve. The results show that SMOTE can significantly increase the performance and the spatial efficiency of MPM. The main differences between the performances of the derived prospectivity models illustrate the sensitivity of MPM to the number of samples and distribution of classes in the training data. According to the results, better performance is achieved using SMOTE when the prospectivity models are trained with an equal number of mineralized and non-mineralized samples. The best prospectivity model trained with a modified dataset with 600:600 proportion of mineralized to non-mineralized samples resulted in 100% classification of the training mineralized locations and almost 80% of the testing mineralized locations, and outlined only 7% of the study area as prospective",
    publicationType: "journal article",
    img: "img/publications/10.1016_j.oregeorev.2020.103611.png",
  },
  {
    firstAuthor: true,
    title:
      "Reflectance spectroradiometry applied to a semi-quantitative analysis of the mineralogy of the N4ws deposit, Carajás Mineral Province, Pará, Brazil",
    journal: "Ore Geology Reviews",
    volume: "78",
    pages: "101-119",
    year: "2016",
    issn: "0169-1368",
    doi: "10.1016/j.oregeorev.2016.03.007",
    url: "https://www.sciencedirect.com/science/article/pii/S0169136816301196",
    author:
      "Elias Martins Guerra Prado and Adalene Moreira Silva and Diego Fernando Ducart and Catarina Labouré Bemfica Toledo and Luciano Mozer {de Assis}",
    keywords:
      "Carajás Mineral Province, Reflectance spectroradiometry, Iron ore",
    abstract:
      "Quantifying the abundance and physicochemical properties of minerals using reflectance spectroradiometry in the visible, near infrared and shortwave infrared (400–2500nm) regions is an important tool in mineral exploration. In this study, the reflectance spectra of drill cores from the world-class N4WS iron deposit located in the Carajás Mineral Province, Brazil, were obtained. These spectra were validated using X-ray fluorescence (XRF) geochemical analyses and thin sections. The reflectance spectra were collected using a FieldSpec 3 spectroradiometer (ASD, Boulder, Colorado, USA) in 10 drill cores. The mineralogy of the deposit is mainly hematite, with lesser amounts of magnetite, goethite, quartz, kaolinite, gibbsite, smectite, talc, carbonate and chlorite. The mineralogy of the iron deposit was extracted from the spectral data using the geometry (depth and wavelength) of absorption features across the reflectance spectrum removed from the continuum. The depth of the absorption features is proportional to the mineral abundance, and the wavelength is proportional to the mineral chemical composition. The diagnostic absorption features of each mineral were used to determine the mineral abundance and composition. The final products include the abundance of iron (hydro) oxide (11.6% root-mean-square error [RMSE] Fe2O3); abundance of aluminous clays (RMSE 6% Al2O3); abundance of talc (8% RMSE MgO); identification of clay type (kaolinite, montmorillonite or gibbsite); composition of carbonate (dolomite vs. calcite); and composition of chlorite (Mg vs. Fe). The mineral abundance and composition results provided an effective characterisation of the ore, protore and host rocks and showed variations within the ore body",
    publicationType: "journal article",
    img: "img/publications/10.1016_j.oregeorev.2016.03.007.png",
  },
  {
    firstAuthor: true,
    title:
      "Ocorrência inédita de Cu-Pb em gossan e brechas hidrotermais no Grupo Nova Brasilândia, Estado de Rondônia: resultados, perspectivas e interpretações preliminares",
    journal: "SGB",
    volume: "",
    pages: "",
    year: "2016",
    url: "https://rigeo.sgb.gov.br/handle/doc/16454",
    author:
      "Elias Martins Guerra Prado and Gustavo Negrello Bergamin and Carlos Roberto de Souza Filho and Luciano Castro da Silva and Thiago Reis Rodrigues and Guilherme Iolino Troncon Guerra and Anderson Alves de Souza and Leandro Duarte Campos",
    keywords:
      "Recursos Minerais,  Metalogenia, Brecha Hidrotermal,  Gossan,  Brasil,  Rondônia,  Grupo Nova Brasilândia",
    abstract:
      "Copper- and lead-bearing breccia and gossan were found at the outskirts of Rolim de Moura, southeastern Rondonia State, during geological mapping. Gossans and hydrothermal breccia are hosted by the paragnaisses of Nova Brasilândia Group, which, at the studied area, is composed of banded iron formation, sillimanite--biotite-muscovite gneiss, metagabbro and metatonalite, deformed and metamorphosed during the Sunsás orogeny. The hydrothermal system consists of strongly oxidized massif sulfide zones (gossans), iron oxide veinlets and stockworks, silicate breccia and quartz veins. Hydrothermal alteration was mapped continuously along a 2,5 km ESE-WNW trend. ICP OES/ICP MS chemical analyses returned values up to 1668 ppm Cu and 46.9 ppm Pb in whole-rock gossan powders. Portable XRF results yielded copper, lead and zinc grades up to 800 ppm Cu, 720 ppm Pb and 150 ppm Zn in whole-rock gossan powders. Programmed petrographic, SEM, XRD and whole-rock geochemistry studies will help to better characterize the mineralization.",
    publicationType: "technical report",
    img: "img/publications/rigeo.16454.png",
  },
  {
    firstAuthor: false,
    title:
      "Análise prospectiva para elementos terra raras através da modelagem geoestatística e integração de dados aeroradioelementos no sudoeste de Rondônia",
    journal: "SBGf",
    volume: "",
    pages: "",
    year: "2017",
    url: "https://rigeo.sgb.gov.br/handle/doc/18281",
    author:
      "Carlos Eduardo Santos de Oliveira, Elias Martins Guerra Prado, Guilherme Ferreira da Silva, Anderson Alves de Souza, Edgar Romeo Herrera de Figueiredo",
    keywords: "Geoestaística,  Elementos Terra Raras,  Rondônia",
    abstract:
      "O presente trabalho trata-se de um relatório contendo dados técnicos organizados para auxiliar o planejamento e tomada de decisões para o desenvolvimento de pesquisa mineral de Elementos Terras Raras (ETR) em Rondônia. O objetivo geral deste trabalho é gerar informações prospectivas para indicação de áreas favoráveis à ocorrência de ETR no estado de Rondônia através da avaliação geoestatística, modelagem e integração de dados aerogamaespectrométricos",
    publicationType: "technical report",
    img: "img/publications/rigeo.18281.png",
  },
  {
    firstAuthor: true,
    title:
      "Carta de Interpretação e Integração Geofísica-Geológica do Projeto Províncias Metalogenéticas do Brasil: Bloco Sudeste de Rondônia",
    journal: "SGB",
    volume: "",
    pages: "",
    year: "2015",
    doi: "10.1190/sbgf2017-099",
    url: "https://rigeo.sgb.gov.br/handle/doc/21611",
    issn: "2159-6832",
    author:
      "Elias Martins Guerra Prado and Guilherme Ferreira da Silva and Carlos Eduardo Santos de Oliveira",
    keywords: "Interpretation, Magnetics, Tectonics",
    abstract:
      "A carta geofísica-geológica consiste na representação gráfica de informações geofísicas de naturezas diversas confrontadas com o conhecimento geológico da área. O método utilizado consiste na delimitação e classificação de polígonos de mesma assinatura radiométrica, cujas cores variam de acordo com o teor de radioelementos; delimitação de zonas de alto magnético e extração de lineamentos estruturais de natureza magnética. Todas estas informações são representadas no mapa em conjunto com informações planimétricas.",
    publicationType: "technical report",
    img: "img/publications/10.1190_sbgf2017-099.png",
  },
];
