import { Question } from '../../types';
import { v4 as uuidv4 } from 'uuid';

export const hardQuestions: Question[] = [

  {
      id: uuidv4(),
      text: "Which quantum phenomenon describes the ability of a particle to exist in multiple states simultaneously?",
      options: ["Wave-particle duality", "Quantum superposition", "Quantum entanglement", "Quantum tunneling"],
      correctAnswer: 1,
      explanation: "Quantum superposition describes a fundamental principle where a particle can exist in multiple states simultaneously until observed.",
      topic: "science",
      difficulty: "hard",
      ageGroups: ["adults"]
    },
    {
      id: uuidv4(),
      text: "What is the Krebs cycle?",
      options: [
        "A political voting system",
        "A cellular energy production process",
        "A planetary orbit pattern",
        "A mathematical theorem"
      ],
      correctAnswer: 1,
      explanation: "The Krebs cycle is a series of chemical reactions in cells that generate energy through the oxidation of acetyl-CoA derived from carbohydrates, fats, and proteins.",
      topic: "science",
      difficulty: "hard",
      ageGroups: ["adults"]
    },
    {
    id: uuidv4(),
    text: "What is the name of the principle that states it is impossible to simultaneously know both the position and momentum of a particle precisely?",
    options: [
      "Pauli Exclusion Principle",
      "Heisenberg Uncertainty Principle",
      "Schrödinger Equation",
      "Planck's Constant"
    ],
    correctAnswer: 1,
    explanation: "The Heisenberg Uncertainty Principle states that the position and momentum of a particle cannot both be precisely known at the same time.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In computer science, what does the term 'NP-complete' refer to?",
    options: [
      "Problems that can be solved in polynomial time",
      "Problems whose solution can be verified in polynomial time",
      "Problems that are unsolvable",
      "Problems that require exponential time to solve"
    ],
    correctAnswer: 1,
    explanation: "'NP-complete' problems are those for which a proposed solution can be verified in polynomial time, but no known algorithm can solve all instances efficiently.",
    topic: "computer science",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which molecule acts as the primary energy currency in cellular processes?",
    options: ["DNA", "RNA", "ATP", "Glucose"],
    correctAnswer: 2,
    explanation: "ATP (adenosine triphosphate) stores and transfers energy in cells.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What does the Schrödinger equation describe in quantum mechanics?",
    options: [
      "The position of a particle",
      "The evolution of a particle's wavefunction over time",
      "The spin of an electron",
      "The speed of light in a vacuum"
    ],
    correctAnswer: 1,
    explanation: "The Schrödinger equation describes how the quantum state (wavefunction) of a system evolves over time.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the main purpose of the Krebs cycle in cellular respiration?",
    options: [
      "Produce glucose",
      "Generate ATP through substrate-level phosphorylation",
      "Break down pyruvate to carbon dioxide and transfer electrons to NADH and FADH2",
      "Store energy as fat"
    ],
    correctAnswer: 2,
    explanation: "The Krebs cycle breaks down pyruvate, producing CO2 and transferring electrons to NADH and FADH2 for the electron transport chain.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In cryptography, what does RSA stand for?",
    options: [
      "Rivest-Shamir-Adleman",
      "Random Symmetric Algorithm",
      "Reliable Secure Access",
      "Rapid Security Application"
    ],
    correctAnswer: 0,
    explanation: "RSA is a widely used public-key cryptosystem named after its inventors Rivest, Shamir, and Adleman.",
    topic: "technology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What does the term 'black hole' describe in astrophysics?",
    options: [
      "A massive star in its early stage",
      "A region of space with gravitational pull so strong that nothing can escape",
      "A bright star cluster",
      "A large asteroid"
    ],
    correctAnswer: 1,
    explanation: "A black hole is a region in space where gravity is so intense that nothing, not even light, can escape.",
    topic: "astronomy",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which branch of mathematics studies rates of change and slopes of curves?",
    options: ["Algebra", "Calculus", "Geometry", "Statistics"],
    correctAnswer: 1,
    explanation: "Calculus deals with derivatives, integrals, and the study of change.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the name of the force that opposes motion between two surfaces in contact?",
    options: ["Gravity", "Friction", "Magnetism", "Tension"],
    correctAnswer: 1,
    explanation: "Friction is the resistive force acting opposite to the relative motion of two surfaces in contact.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which law explains why the planets orbit the Sun in elliptical paths?",
    options: [
      "Newton's First Law",
      "Kepler's First Law",
      "Law of Universal Gravitation",
      "Einstein's General Relativity"
    ],
    correctAnswer: 1,
    explanation: "Kepler's First Law states that planets orbit the Sun in ellipses with the Sun at one focus.",
    topic: "astronomy",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In economics, what term describes a market structure with a single seller?",
    options: ["Oligopoly", "Monopoly", "Perfect competition", "Monopsony"],
    correctAnswer: 1,
    explanation: "A monopoly is a market dominated by a single seller.",
    topic: "economics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the SI unit of electric capacitance?",
    options: ["Ohm", "Farad", "Tesla", "Henry"],
    correctAnswer: 1,
    explanation: "The farad (F) is the SI unit of capacitance.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which programming paradigm focuses on objects containing data and methods?",
    options: [
      "Procedural Programming",
      "Functional Programming",
      "Object-Oriented Programming",
      "Logic Programming"
    ],
    correctAnswer: 2,
    explanation: "Object-Oriented Programming (OOP) organizes code around objects that contain data and behaviors.",
    topic: "computer science",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the role of ribosomes in a cell?",
    options: [
      "Energy production",
      "Protein synthesis",
      "DNA replication",
      "Lipid storage"
    ],
    correctAnswer: 1,
    explanation: "Ribosomes synthesize proteins by translating messenger RNA.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which process converts atmospheric nitrogen into a form usable by plants?",
    options: [
      "Photosynthesis",
      "Nitrogen fixation",
      "Respiration",
      "Transpiration"
    ],
    correctAnswer: 1,
    explanation: "Nitrogen fixation converts nitrogen gas into ammonia or related compounds plants can absorb.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What phenomenon explains the bending of light as it passes from one medium to another?",
    options: ["Reflection", "Refraction", "Diffraction", "Dispersion"],
    correctAnswer: 1,
    explanation: "Refraction is the bending of light when it passes between media of different densities.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which scientist developed the laws of planetary motion?",
    options: [
      "Isaac Newton",
      "Galileo Galilei",
      "Johannes Kepler",
      "Albert Einstein"
    ],
    correctAnswer: 2,
    explanation: "Johannes Kepler formulated the three laws of planetary motion.",
    topic: "astronomy",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which device converts mechanical energy into electrical energy?",
    options: ["Motor", "Generator", "Transformer", "Capacitor"],
    correctAnswer: 1,
    explanation: "A generator converts mechanical energy into electrical energy.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the primary function of mitochondria in cells?",
    options: [
      "Protein synthesis",
      "Energy production",
      "Cell division",
      "Transport of molecules"
    ],
    correctAnswer: 1,
    explanation: "Mitochondria generate ATP through cellular respiration, supplying energy to the cell.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
    {
    id: uuidv4(),
    text: "What type of bond involves the sharing of electron pairs between atoms?",
    options: ["Ionic bond", "Covalent bond", "Hydrogen bond", "Metallic bond"],
    correctAnswer: 1,
    explanation: "A covalent bond involves sharing electron pairs between atoms.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which data structure uses the FIFO (First In, First Out) principle?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    correctAnswer: 1,
    explanation: "Queue operates on a First In, First Out principle.",
    topic: "computer science",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In genetics, what is the term for an organism's observable traits?",
    options: ["Genotype", "Phenotype", "Allele", "Chromosome"],
    correctAnswer: 1,
    explanation: "Phenotype refers to the observable physical or biochemical characteristics of an organism.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which programming paradigm is based on the concept of 'objects'?",
    options: ["Procedural Programming", "Functional Programming", "Object-Oriented Programming", "Logic Programming"],
    correctAnswer: 2,
    explanation: "Object-Oriented Programming uses objects containing data and methods.",
    topic: "computer science",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the integral of sin(x) dx?",
    options: ["-cos(x) + C", "cos(x) + C", "-sin(x) + C", "sin(x) + C"],
    correctAnswer: 0,
    explanation: "The integral of sin(x) is -cos(x) plus the constant of integration.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What type of electromagnetic radiation has the shortest wavelength?",
    options: ["Gamma rays", "X-rays", "Ultraviolet", "Radio waves"],
    correctAnswer: 0,
    explanation: "Gamma rays have the shortest wavelength and highest energy in the electromagnetic spectrum.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the primary function of ribosomes in a cell?",
    options: [
      "DNA replication",
      "Protein synthesis",
      "Energy production",
      "Cell division"
    ],
    correctAnswer: 1,
    explanation: "Ribosomes are responsible for synthesizing proteins from amino acids.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which algorithm is commonly used for finding the shortest path in a graph?",
    options: ["Merge Sort", "Dijkstra's Algorithm", "Quick Sort", "Binary Search"],
    correctAnswer: 1,
    explanation: "Dijkstra's Algorithm efficiently finds the shortest path between nodes in a weighted graph.",
    topic: "computer science",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In economics, what does GDP stand for?",
    options: [
      "Gross Domestic Product",
      "General Development Plan",
      "Government Debt Percentage",
      "Global Debt Position"
    ],
    correctAnswer: 0,
    explanation: "GDP is the total monetary value of all goods and services produced in a country over a period.",
    topic: "economics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the chemical formula for table salt?",
    options: ["NaCl", "KCl", "CaCl2", "MgCl2"],
    correctAnswer: 0,
    explanation: "Table salt is chemically known as sodium chloride, NaCl.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which law states that the total pressure exerted by a gas mixture is equal to the sum of the partial pressures of each individual gas?",
    options: ["Boyle's Law", "Dalton's Law", "Charles's Law", "Avogadro's Law"],
    correctAnswer: 1,
    explanation: "Dalton's Law of Partial Pressures states that the total pressure is the sum of the partial pressures.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In the theory of relativity, what does E=mc² represent?",
    options: [
      "Energy equals mass times speed of light squared",
      "Energy equals mass times velocity",
      "Energy equals momentum times speed of light",
      "Energy equals momentum times velocity squared"
    ],
    correctAnswer: 0,
    explanation: "E=mc² means mass can be converted into energy; energy equals mass times speed of light squared.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the name of the enzyme responsible for DNA replication?",
    options: ["DNA polymerase", "RNA polymerase", "Helicase", "Ligase"],
    correctAnswer: 0,
    explanation: "DNA polymerase synthesizes new DNA strands during replication.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which data structure allows access to elements in constant time by using keys?",
    options: ["Array", "Linked List", "Hash Table", "Stack"],
    correctAnswer: 2,
    explanation: "Hash Tables use keys to provide average constant time lookup.",
    topic: "computer science",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which element is most abundant in the Earth's crust?",
    options: ["Oxygen", "Silicon", "Aluminum", "Iron"],
    correctAnswer: 0,
    explanation: "Oxygen makes up about 46% of the Earth's crust by weight.",
    topic: "earth science",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the derivative of e^x with respect to x?",
    options: ["e^x", "xe^(x-1)", "x*e^x", "1"],
    correctAnswer: 0,
    explanation: "The derivative of e^x is e^x.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which organelle is responsible for photosynthesis in plant cells?",
    options: ["Mitochondria", "Chloroplast", "Nucleus", "Golgi apparatus"],
    correctAnswer: 1,
    explanation: "Chloroplasts convert sunlight into chemical energy via photosynthesis.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In linear algebra, what is the determinant of an identity matrix?",
    options: ["0", "1", "-1", "Depends on the size"],
    correctAnswer: 1,
    explanation: "The determinant of an identity matrix is always 1.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which planet has the longest day in our solar system?",
    options: ["Venus", "Mercury", "Jupiter", "Saturn"],
    correctAnswer: 0,
    explanation: "Venus takes about 243 Earth days to complete one rotation, longer than its orbital period.",
    topic: "astronomy",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the process of converting atmospheric nitrogen into a form usable by plants called?",
    options: ["Nitrogen fixation", "Denitrification", "Nitrification", "Ammonification"],
    correctAnswer: 0,
    explanation: "Nitrogen fixation converts nitrogen gas into ammonia or related compounds.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which cryptographic method is considered asymmetric encryption?",
    options: ["AES", "RSA", "DES", "3DES"],
    correctAnswer: 1,
    explanation: "RSA uses a pair of public and private keys, making it asymmetric.",
    topic: "technology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What does the term 'Big O notation' describe in computer science?",
    options: [
      "Algorithm correctness",
      "Algorithm efficiency and complexity",
      "Data storage size",
      "Programming language type"
    ],
    correctAnswer: 1,
    explanation: "Big O notation describes the upper bound of an algorithm's running time or space requirements.",
    topic: "computer science",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In physics, what does the term 'entropy' represent?",
    options: [
      "Energy stored in a system",
      "Disorder or randomness in a system",
      "Work done by a system",
      "Pressure exerted by a gas"
    ],
    correctAnswer: 1,
    explanation: "Entropy measures the disorder or randomness within a system.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which organ is responsible for filtering blood and producing urine?",
    options: ["Liver", "Kidneys", "Pancreas", "Spleen"],
    correctAnswer: 1,
    explanation: "Kidneys filter waste products from blood to form urine.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which theory explains the behavior of subatomic particles as both waves and particles?",
    options: [
      "Quantum Entanglement",
      "Wave-Particle Duality",
      "Theory of Relativity",
      "String Theory"
    ],
    correctAnswer: 1,
    explanation: "Wave-particle duality is the concept that every particle exhibits both wave and particle properties.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In machine learning, what is 'overfitting'?",
    options: [
      "Model performs well on new data",
      "Model performs poorly on training data",
      "Model is too complex and fits noise in training data",
      "Model is too simple and underperforms"
    ],
    correctAnswer: 2,
    explanation: "Overfitting occurs when a model learns noise from training data and fails to generalize.",
    topic: "technology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which physical constant represents the speed of light in a vacuum?",
    options: [
      "3.00 x 10^8 m/s",
      "6.67 x 10^-11 N m²/kg²",
      "1.38 x 10^-23 J/K",
      "9.81 m/s²"
    ],
    correctAnswer: 0,
    explanation: "The speed of light in vacuum is approximately 3.00 x 10^8 meters per second.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the fundamental building block of proteins?",
    options: ["Fatty acids", "Nucleotides", "Amino acids", "Monosaccharides"],
    correctAnswer: 2,
    explanation: "Amino acids are the monomers that make up proteins.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In networking, what does the acronym DNS stand for?",
    options: [
      "Data Network System",
      "Domain Name System",
      "Digital Number Service",
      "Direct Node Server"
    ],
    correctAnswer: 1,
    explanation: "DNS translates domain names into IP addresses.",
    topic: "technology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
    correctAnswer: 1,
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere.",
    topic: "earth science",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What mathematical field studies properties of space that are preserved under continuous transformations?",
    options: ["Topology", "Geometry", "Algebra", "Calculus"],
    correctAnswer: 0,
    explanation: "Topology studies properties preserved through stretching and bending but not tearing.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the name of the process by which green plants make their own food?",
    options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
    correctAnswer: 1,
    explanation: "Photosynthesis uses sunlight to convert carbon dioxide and water into glucose and oxygen.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the boiling point of water at standard atmospheric pressure?",
    options: ["100°C", "90°C", "110°C", "95°C"],
    correctAnswer: 0,
    explanation: "Water boils at 100 degrees Celsius at standard atmospheric pressure.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which scientist proposed the three laws of motion?",
    options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"],
    correctAnswer: 1,
    explanation: "Isaac Newton formulated the three fundamental laws of motion.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In software development, what does 'API' stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Instruction",
      "Automated Process Integration",
      "Application Process Interface"
    ],
    correctAnswer: 0,
    explanation: "API is a set of protocols allowing communication between software components.",
    topic: "technology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which type of wave requires a medium to travel?",
    options: ["Light waves", "Radio waves", "Sound waves", "X-rays"],
    correctAnswer: 2,
    explanation: "Sound waves are mechanical waves and need a medium like air or water to travel.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the value of Pi (π) up to two decimal places?",
    options: ["3.12", "3.14", "3.16", "3.18"],
    correctAnswer: 1,
    explanation: "Pi is approximately 3.14.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which organelle is known as the 'powerhouse of the cell'?",
    options: ["Ribosome", "Nucleus", "Mitochondria", "Endoplasmic Reticulum"],
    correctAnswer: 2,
    explanation: "Mitochondria produce energy (ATP) through cellular respiration.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Gd", "Ga"],
    correctAnswer: 1,
    explanation: "Gold's chemical symbol is Au.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which law explains the relationship between voltage, current, and resistance?",
    options: ["Ohm's Law", "Faraday's Law", "Coulomb's Law", "Newton's Law"],
    correctAnswer: 0,
    explanation: "Ohm's Law states V=IR, relating voltage, current, and resistance.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
      {
    id: uuidv4(),
    text: "Which ancient civilization built the Machu Picchu complex?",
    options: ["Aztec", "Maya", "Inca", "Olmec"],
    correctAnswer: 2,
    explanation: "Machu Picchu was built by the Inca civilization in Peru.",
    topic: "history",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the primary gas responsible for the greenhouse effect?",
    options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Argon"],
    correctAnswer: 2,
    explanation: "Carbon dioxide traps heat in the atmosphere, causing the greenhouse effect.",
    topic: "environment",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In computer networking, what does the term 'ping' measure?",
    options: [
      "Data transfer speed",
      "Round-trip time for packets",
      "Number of connected devices",
      "IP address availability"
    ],
    correctAnswer: 1,
    explanation: "Ping measures the latency or round-trip time between two networked devices.",
    topic: "technology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the mathematical term for a function’s rate of change at a point?",
    options: ["Integral", "Derivative", "Limit", "Variable"],
    correctAnswer: 1,
    explanation: "The derivative of a function at a point measures its instantaneous rate of change.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which physicist is famous for the uncertainty principle?",
    options: ["Albert Einstein", "Niels Bohr", "Werner Heisenberg", "Max Planck"],
    correctAnswer: 2,
    explanation: "Heisenberg formulated the uncertainty principle in quantum mechanics.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the powerhouse organelle responsible for energy production in eukaryotic cells?",
    options: ["Nucleus", "Chloroplast", "Mitochondria", "Golgi apparatus"],
    correctAnswer: 2,
    explanation: "Mitochondria generate ATP via cellular respiration.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which programming language is primarily used for iOS app development?",
    options: ["Java", "Swift", "Python", "C#"],
    correctAnswer: 1,
    explanation: "Swift is the primary language for iOS development by Apple.",
    topic: "computer science",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the name of the largest internal organ in the human body?",
    options: ["Liver", "Lungs", "Heart", "Kidneys"],
    correctAnswer: 0,
    explanation: "The liver is the largest internal organ.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In chemistry, what is the pH level of pure water at 25°C?",
    options: ["7", "0", "14", "1"],
    correctAnswer: 0,
    explanation: "Pure water has a neutral pH of 7 at 25°C.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Who is the author of the theory of evolution by natural selection?",
    options: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Alfred Wallace"],
    correctAnswer: 1,
    explanation: "Charles Darwin proposed natural selection as a mechanism of evolution.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the main advantage of using a linked list over an array?",
    options: [
      "Faster access time",
      "Dynamic size and efficient insertions/deletions",
      "Better memory locality",
      "Easier to implement"
    ],
    correctAnswer: 1,
    explanation: "Linked lists allow dynamic sizing and efficient insert/delete operations compared to arrays.",
    topic: "computer science",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In economics, what is 'inflation'?",
    options: [
      "Increase in the general price level",
      "Decrease in unemployment",
      "Growth in GDP",
      "Rise in stock prices"
    ],
    correctAnswer: 0,
    explanation: "Inflation refers to the overall rise in prices of goods and services.",
    topic: "economics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which part of the brain controls balance and coordination?",
    options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
    correctAnswer: 1,
    explanation: "The cerebellum manages balance, posture, and coordination.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the value of Planck’s constant?",
    options: [
      "6.626 x 10^-34 Js",
      "9.81 m/s^2",
      "3.00 x 10^8 m/s",
      "1.38 x 10^-23 J/K"
    ],
    correctAnswer: 0,
    explanation: "Planck’s constant is approximately 6.626 x 10^-34 Joule-seconds.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which sorting algorithm has the best average-case time complexity?",
    options: [
      "Bubble Sort",
      "Insertion Sort",
      "Merge Sort",
      "Selection Sort"
    ],
    correctAnswer: 2,
    explanation: "Merge Sort has an average and worst-case time complexity of O(n log n).",
    topic: "computer science",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which vitamin is produced in the skin when exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    correctAnswer: 3,
    explanation: "Vitamin D is synthesized in the skin via UV exposure.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the main function of the ozone layer?",
    options: [
      "Regulate Earth's temperature",
      "Absorb ultraviolet radiation",
      "Produce oxygen",
      "Create weather patterns"
    ],
    correctAnswer: 1,
    explanation: "The ozone layer absorbs and blocks harmful UV radiation from the sun.",
    topic: "environment",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    explanation: "Mars is called the Red Planet due to iron oxide on its surface.",
    topic: "astronomy",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    correctAnswer: 2,
    explanation: "Ottawa is the capital city of Canada.",
    topic: "geography",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which organelle packages proteins for secretion?",
    options: ["Endoplasmic Reticulum", "Golgi apparatus", "Mitochondria", "Lysosome"],
    correctAnswer: 1,
    explanation: "The Golgi apparatus modifies and packages proteins for secretion or delivery.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In literature, who wrote 'The Odyssey'?",
    options: ["Homer", "Virgil", "Shakespeare", "Dante"],
    correctAnswer: 0,
    explanation: "'The Odyssey' is attributed to the ancient Greek poet Homer.",
    topic: "literature",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the chemical symbol for the element with atomic number 26?",
    options: ["Fe", "Cu", "Zn", "Ag"],
    correctAnswer: 0,
    explanation: "Iron has atomic number 26 and symbol Fe.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What does HTTP stand for in web technology?",
    options: [
      "HyperText Transfer Protocol",
      "HighText Transfer Protocol",
      "Hyperlink Text Transfer Protocol",
      "Hyper Transfer Text Protocol"
    ],
    correctAnswer: 0,
    explanation: "HTTP is the protocol used for transmitting web pages.",
    topic: "technology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Who formulated the laws of planetary motion?",
    options: ["Newton", "Kepler", "Galileo", "Copernicus"],
    correctAnswer: 1,
    explanation: "Johannes Kepler formulated the three laws of planetary motion.",
    topic: "astronomy",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which programming language is known for its use in artificial intelligence and data science?",
    options: ["C++", "Python", "JavaScript", "Ruby"],
    correctAnswer: 1,
    explanation: "Python is widely used for AI and data science due to its libraries and simplicity.",
    topic: "technology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the formula for kinetic energy?",
    options: [
      "KE = 1/2 mv²",
      "KE = mgh",
      "KE = Fd",
      "KE = mc²"
    ],
    correctAnswer: 0,
    explanation: "Kinetic energy is half the mass times velocity squared.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which country has the largest population in the world?",
    options: ["India", "United States", "China", "Russia"],
    correctAnswer: 2,
    explanation: "China has the largest population globally.",
    topic: "geography",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the term for a solution that resists changes in pH?",
    options: ["Acid", "Base", "Buffer", "Salt"],
    correctAnswer: 2,
    explanation: "Buffers maintain stable pH levels by neutralizing added acids or bases.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which continent is known as the 'Dark Continent'?",
    options: ["Asia", "Africa", "Europe", "Australia"],
    correctAnswer: 1,
    explanation: "Africa was historically called the 'Dark Continent' due to limited exploration.",
    topic: "geography",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In what year did the World War II end?",
    options: ["1944", "1945", "1946", "1947"],
    correctAnswer: 1,
    explanation: "World War II ended in 1945.",
    topic: "history",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which metal is liquid at room temperature?",
    options: ["Mercury", "Gold", "Copper", "Silver"],
    correctAnswer: 0,
    explanation: "Mercury is liquid at room temperature.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which mathematical constant represents the ratio of a circle’s circumference to its diameter?",
    options: ["e", "Pi", "Phi", "Gamma"],
    correctAnswer: 1,
    explanation: "Pi (π) is approximately 3.14159 and defines this ratio.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
    {
    id: uuidv4(),
    text: "What is the Heisenberg uncertainty principle related to?",
    options: [
      "Position and momentum",
      "Energy and mass",
      "Time and space",
      "Velocity and acceleration"
    ],
    correctAnswer: 0,
    explanation: "It states that one cannot simultaneously know the exact position and momentum of a particle.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In economics, what does GDP stand for?",
    options: [
      "Gross Domestic Product",
      "General Debt Payment",
      "Gross Debt Percentage",
      "Government Development Plan"
    ],
    correctAnswer: 0,
    explanation: "GDP measures the total value of goods and services produced in a country.",
    topic: "economics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which chemical element has the highest electrical conductivity?",
    options: ["Gold", "Copper", "Silver", "Aluminum"],
    correctAnswer: 2,
    explanation: "Silver has the highest electrical conductivity of all elements.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Who is known as the father of modern computers?",
    options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Ada Lovelace"],
    correctAnswer: 0,
    explanation: "Charles Babbage conceptualized the first mechanical computer.",
    topic: "technology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What type of bond is formed when two atoms share electrons?",
    options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
    correctAnswer: 1,
    explanation: "Covalent bonds involve sharing of electrons between atoms.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the smallest unit of life that can replicate independently?",
    options: ["Atom", "Molecule", "Cell", "Organ"],
    correctAnswer: 2,
    explanation: "The cell is the basic unit of life and can replicate independently.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In which year was the United Nations established?",
    options: ["1918", "1945", "1950", "1960"],
    correctAnswer: 1,
    explanation: "The UN was established in 1945 after World War II.",
    topic: "history",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the main function of ribosomes?",
    options: [
      "Energy production",
      "Protein synthesis",
      "DNA replication",
      "Lipid storage"
    ],
    correctAnswer: 1,
    explanation: "Ribosomes synthesize proteins by translating mRNA.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which law states that the volume of a gas is inversely proportional to pressure at constant temperature?",
    options: ["Boyle’s Law", "Charles’s Law", "Avogadro’s Law", "Dalton’s Law"],
    correctAnswer: 0,
    explanation: "Boyle's Law defines the inverse relation of pressure and volume.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What does the term 'bit' stand for in computing?",
    options: [
      "Binary digit",
      "Basic integer",
      "Binary integer",
      "Byte information transfer"
    ],
    correctAnswer: 0,
    explanation: "A bit is the smallest unit of data in computing and stands for binary digit.",
    topic: "technology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which planet has the strongest gravitational pull?",
    options: ["Earth", "Jupiter", "Neptune", "Saturn"],
    correctAnswer: 1,
    explanation: "Jupiter, being the largest planet, has the strongest gravity in the solar system.",
    topic: "astronomy",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which part of the cell contains genetic material?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Lysosome"],
    correctAnswer: 0,
    explanation: "The nucleus stores DNA, the cell’s genetic material.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In which language was the first computer program written?",
    options: ["Fortran", "Assembly", "Machine Code", "Ada Lovelace's Algorithm"],
    correctAnswer: 3,
    explanation: "Ada Lovelace wrote the first algorithm intended for a machine.",
    topic: "technology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the main difference between renewable and nonrenewable energy sources?",
    options: [
      "Renewable sources are unlimited; nonrenewable are finite",
      "Renewable sources cause pollution; nonrenewable do not",
      "Nonrenewable sources are cheaper",
      "Renewable sources come from fossil fuels"
    ],
    correctAnswer: 0,
    explanation: "Renewable energy is naturally replenished, while nonrenewable is finite.",
    topic: "environment",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which physicist developed the three laws of motion?",
    options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"],
    correctAnswer: 0,
    explanation: "Newton’s three laws describe the relationship between forces and motion.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In literature, what is the term for a figure of speech comparing two unlike things using 'like' or 'as'?",
    options: ["Metaphor", "Simile", "Hyperbole", "Personification"],
    correctAnswer: 1,
    explanation: "A simile uses 'like' or 'as' to make comparisons.",
    topic: "literature",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the unit of measurement for electric current?",
    options: ["Volt", "Ohm", "Ampere", "Watt"],
    correctAnswer: 2,
    explanation: "Electric current is measured in amperes (amps).",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Who painted the ceiling of the Sistine Chapel?",
    options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
    correctAnswer: 1,
    explanation: "Michelangelo painted the Sistine Chapel ceiling.",
    topic: "art",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the term for the sum of all chemical reactions in a living organism?",
    options: ["Metabolism", "Homeostasis", "Osmosis", "Photosynthesis"],
    correctAnswer: 0,
    explanation: "Metabolism encompasses all biochemical reactions in cells.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What does DNA stand for?",
    options: [
      "Deoxyribonucleic Acid",
      "Deoxynitric Acid",
      "Dioxyribonucleic Acid",
      "Dioxynitric Acid"
    ],
    correctAnswer: 0,
    explanation: "DNA stands for Deoxyribonucleic Acid, the carrier of genetic information.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
    correctAnswer: 1,
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere.",
    topic: "environment",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which mathematician is known for his contributions to the foundations of calculus?",
    options: ["Newton and Leibniz", "Euler", "Gauss", "Pythagoras"],
    correctAnswer: 0,
    explanation: "Isaac Newton and Gottfried Wilhelm Leibniz independently developed calculus.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the chemical formula for table salt?",
    options: ["NaCl", "KCl", "CaCl2", "MgCl2"],
    correctAnswer: 0,
    explanation: "Table salt is sodium chloride (NaCl).",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which process converts glucose into energy in the presence of oxygen?",
    options: ["Fermentation", "Photosynthesis", "Cellular Respiration", "Glycolysis"],
    correctAnswer: 2,
    explanation: "Cellular respiration converts glucose and oxygen into ATP energy.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the main programming paradigm used in functional programming languages?",
    options: ["Object-oriented", "Procedural", "Declarative", "Imperative"],
    correctAnswer: 2,
    explanation: "Functional programming emphasizes declarative programming with immutable data.",
    topic: "technology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which organ in the human body filters blood to produce urine?",
    options: ["Liver", "Kidneys", "Bladder", "Pancreas"],
    correctAnswer: 1,
    explanation: "Kidneys filter waste and excess substances from blood to make urine.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the primary source of energy for the Earth's climate system?",
    options: ["The Moon", "The Sun", "Volcanic activity", "Ocean currents"],
    correctAnswer: 1,
    explanation: "The Sun is the main energy source driving Earth's climate.",
    topic: "environment",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which programming concept uses 'classes' and 'objects'?",
    options: [
      "Functional programming",
      "Procedural programming",
      "Object-oriented programming",
      "Logic programming"
    ],
    correctAnswer: 2,
    explanation: "Object-oriented programming uses classes and objects.",
    topic: "technology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which country invented paper?",
    options: ["Egypt", "China", "India", "Greece"],
    correctAnswer: 1,
    explanation: "Paper was invented in ancient China around 105 AD.",
    topic: "history",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which organ produces insulin in the human body?",
    options: ["Liver", "Pancreas", "Kidney", "Thyroid"],
    correctAnswer: 1,
    explanation: "The pancreas produces insulin to regulate blood sugar.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the term for a network security system that monitors and controls incoming and outgoing traffic?",
    options: ["Firewall", "Router", "Switch", "Modem"],
    correctAnswer: 0,
    explanation: "A firewall filters traffic to protect networks from unauthorized access.",
    topic: "technology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
    {
    id: uuidv4(),
    text: "What is the principle of superposition in physics?",
    options: [
      "The total displacement is the sum of individual displacements",
      "Energy cannot be created or destroyed",
      "Force equals mass times acceleration",
      "Objects in motion stay in motion"
    ],
    correctAnswer: 0,
    explanation: "The principle of superposition states that the net response caused by two or more stimuli is the sum of the responses that would have been caused by each stimulus individually.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which organelle is responsible for energy production in cells?",
    options: ["Nucleus", "Mitochondria", "Endoplasmic Reticulum", "Golgi Apparatus"],
    correctAnswer: 1,
    explanation: "Mitochondria generate energy in the form of ATP through cellular respiration.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which law in thermodynamics states that entropy of a perfect crystal approaches zero at absolute zero temperature?",
    options: [
      "First Law of Thermodynamics",
      "Second Law of Thermodynamics",
      "Third Law of Thermodynamics",
      "Zeroth Law of Thermodynamics"
    ],
    correctAnswer: 2,
    explanation: "The Third Law of Thermodynamics states that the entropy of a perfect crystal at absolute zero is zero.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In computer science, what does the acronym 'API' stand for?",
    options: [
      "Application Programming Interface",
      "Automatic Process Integration",
      "Advanced Programming Input",
      "Application Program Interaction"
    ],
    correctAnswer: 0,
    explanation: "API stands for Application Programming Interface, which allows software programs to communicate with each other.",
    topic: "technology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Who formulated the laws of planetary motion?",
    options: ["Galileo Galilei", "Johannes Kepler", "Isaac Newton", "Nicolaus Copernicus"],
    correctAnswer: 1,
    explanation: "Johannes Kepler formulated the three laws describing planetary motion.",
    topic: "astronomy",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the primary component of natural gas?",
    options: ["Propane", "Methane", "Butane", "Ethane"],
    correctAnswer: 1,
    explanation: "Methane is the main component of natural gas.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which ancient civilization built the Machu Picchu?",
    options: ["Aztec", "Mayan", "Incan", "Olmec"],
    correctAnswer: 2,
    explanation: "Machu Picchu was built by the Inca civilization in Peru.",
    topic: "history",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What type of electromagnetic radiation has the shortest wavelength?",
    options: ["Ultraviolet", "X-rays", "Gamma rays", "Microwaves"],
    correctAnswer: 2,
    explanation: "Gamma rays have the shortest wavelength and highest energy in the electromagnetic spectrum.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What does 'HTTP' stand for in internet protocols?",
    options: [
      "HyperText Transfer Protocol",
      "Hyperlink Transfer Protocol",
      "Hyperlink Text Protocol",
      "Hyper Transfer Text Protocol"
    ],
    correctAnswer: 0,
    explanation: "HTTP stands for HyperText Transfer Protocol, used for communication on the web.",
    topic: "technology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Chloroplast", "Ribosome"],
    correctAnswer: 1,
    explanation: "Mitochondria produce energy for the cell.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which philosopher is known for the statement 'Cogito, ergo sum'?",
    options: ["Aristotle", "René Descartes", "Immanuel Kant", "Socrates"],
    correctAnswer: 1,
    explanation: "René Descartes stated 'I think, therefore I am' as a fundamental element of Western philosophy.",
    topic: "philosophy",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    correctAnswer: 0,
    explanation: "The symbol Au comes from the Latin 'aurum' meaning gold.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In genetics, what is the term for alternative forms of a gene?",
    options: ["Alleles", "Chromosomes", "Genomes", "Nucleotides"],
    correctAnswer: 0,
    explanation: "Alleles are different versions of the same gene.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which organ in the human body is primarily responsible for detoxification?",
    options: ["Kidney", "Liver", "Spleen", "Pancreas"],
    correctAnswer: 1,
    explanation: "The liver processes toxins and harmful substances.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which famous scientist developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
    correctAnswer: 1,
    explanation: "Albert Einstein developed the special and general theories of relativity.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the boiling point of water at standard atmospheric pressure?",
    options: ["100°C", "90°C", "212°F", "Both A and C"],
    correctAnswer: 3,
    explanation: "Water boils at 100°C or 212°F at 1 atm pressure.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    explanation: "Mars is called the Red Planet due to its iron oxide surface giving a reddish appearance.",
    topic: "astronomy",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In mathematics, what is the value of Pi to three decimal places?",
    options: ["3.142", "3.141", "3.144", "3.143"],
    correctAnswer: 0,
    explanation: "Pi approximates to 3.142 when rounded to three decimal places.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What does the acronym 'RAM' stand for in computer memory?",
    options: [
      "Random Access Memory",
      "Readily Available Memory",
      "Read Access Module",
      "Rapid Access Memory"
    ],
    correctAnswer: 0,
    explanation: "RAM is Random Access Memory, used for temporary data storage while programs run.",
    topic: "technology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which of these is a noble gas?",
    options: ["Oxygen", "Nitrogen", "Neon", "Hydrogen"],
    correctAnswer: 2,
    explanation: "Neon is a noble gas, known for being inert and stable.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the largest organ in the human body?",
    options: ["Liver", "Skin", "Lungs", "Heart"],
    correctAnswer: 1,
    explanation: "The skin is the largest organ covering the body.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which scientist is famous for the law of universal gravitation?",
    options: ["Galileo Galilei", "Isaac Newton", "Albert Einstein", "Johannes Kepler"],
    correctAnswer: 1,
    explanation: "Newton formulated the law of universal gravitation.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the term for animals that eat both plants and meat?",
    options: ["Herbivores", "Carnivores", "Omnivores", "Detritivores"],
    correctAnswer: 2,
    explanation: "Omnivores consume both plants and animals.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which chemical process splits water into hydrogen and oxygen?",
    options: ["Photosynthesis", "Electrolysis", "Combustion", "Condensation"],
    correctAnswer: 1,
    explanation: "Electrolysis uses electricity to split water into hydrogen and oxygen gases.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What does the term 'Moore's Law' refer to in computing?",
    options: [
      "CPU speed doubles every 18 months",
      "Memory capacity doubles every 2 years",
      "Number of transistors on a microchip doubles approximately every two years",
      "Software complexity doubles every year"
    ],
    correctAnswer: 2,
    explanation: "Moore's Law states the number of transistors doubles approximately every two years.",
    topic: "technology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Who was the first person to propose the heliocentric model of the solar system?",
    options: ["Nicolaus Copernicus", "Galileo Galilei", "Johannes Kepler", "Ptolemy"],
    correctAnswer: 0,
    explanation: "Copernicus proposed the sun-centered model.",
    topic: "astronomy",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the chemical symbol for potassium?",
    options: ["P", "Po", "K", "Pt"],
    correctAnswer: 2,
    explanation: "Potassium's symbol is K, from the Latin 'kalium'.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which process in plants converts carbon dioxide into oxygen?",
    options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
    correctAnswer: 1,
    explanation: "Photosynthesis uses CO₂ and sunlight to produce oxygen and glucose.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which mathematical theorem states that in a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides?",
    options: ["Pythagorean theorem", "Fermat's Last theorem", "Bayes' theorem", "Euclid's theorem"],
    correctAnswer: 0,
    explanation: "The Pythagorean theorem applies to right-angled triangles.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which gas is primarily responsible for the greenhouse effect on Earth?",
    options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Argon"],
    correctAnswer: 2,
    explanation: "Carbon dioxide traps heat in the atmosphere, causing the greenhouse effect.",
    topic: "environment",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the largest moon of Saturn called?",
    options: ["Europa", "Ganymede", "Titan", "Callisto"],
    correctAnswer: 2,
    explanation: "Titan is the largest moon of Saturn.",
    topic: "astronomy",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In economics, what does 'inflation' refer to?",
    options: [
      "Decrease in prices over time",
      "Increase in prices over time",
      "Stable prices over time",
      "Government price control"
    ],
    correctAnswer: 1,
    explanation: "Inflation is the rate at which the general level of prices rises.",
    topic: "economics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Who is known as the 'Father of Genetics'?",
    options: ["Charles Darwin", "Gregor Mendel", "James Watson", "Francis Crick"],
    correctAnswer: 1,
    explanation: "Gregor Mendel's work on pea plants founded genetics.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What does the term 'photosynthesis' literally mean?",
    options: [
      "Light combining",
      "Light splitting",
      "Light putting together",
      "Light removing"
    ],
    correctAnswer: 2,
    explanation: "Photosynthesis literally means 'putting together with light'.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
    {
    id: uuidv4(),
    text: "What is the Heisenberg Uncertainty Principle about?",
    options: [
      "It is impossible to know both the position and momentum of a particle simultaneously with perfect accuracy",
      "Energy can neither be created nor destroyed",
      "Light behaves both as wave and particle",
      "Electrons orbit the nucleus in fixed paths"
    ],
    correctAnswer: 0,
    explanation: "The Heisenberg Uncertainty Principle states a fundamental limit to the precision with which certain pairs of physical properties can be known simultaneously.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which scientist discovered penicillin?",
    options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Gregor Mendel"],
    correctAnswer: 0,
    explanation: "Alexander Fleming discovered penicillin in 1928.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the term for the distance light travels in one year?",
    options: ["Astronomical Unit", "Light Year", "Parsec", "Kilometer"],
    correctAnswer: 1,
    explanation: "A light year is the distance light travels in one year.",
    topic: "astronomy",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the chemical formula for table salt?",
    options: ["NaCl", "KCl", "Na2CO3", "CaCl2"],
    correctAnswer: 0,
    explanation: "Table salt is sodium chloride, NaCl.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In economics, what does GDP stand for?",
    options: [
      "Gross Domestic Product",
      "General Domestic Price",
      "Gross Development Potential",
      "General Data Process"
    ],
    correctAnswer: 0,
    explanation: "GDP stands for Gross Domestic Product, a measure of economic output.",
    topic: "economics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the speed of light in vacuum?",
    options: ["299,792 km/s", "150,000 km/s", "300,000 km/s", "299,792 m/s"],
    correctAnswer: 0,
    explanation: "The speed of light in vacuum is approximately 299,792 kilometers per second.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the largest planet in our Solar System?",
    options: ["Saturn", "Earth", "Jupiter", "Neptune"],
    correctAnswer: 2,
    explanation: "Jupiter is the largest planet in the Solar System.",
    topic: "astronomy",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the main function of ribosomes?",
    options: [
      "Energy production",
      "Protein synthesis",
      "Lipid storage",
      "Genetic information storage"
    ],
    correctAnswer: 1,
    explanation: "Ribosomes synthesize proteins by translating mRNA.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the standard SI unit of electric current?",
    options: ["Volt", "Ampere", "Ohm", "Watt"],
    correctAnswer: 1,
    explanation: "The ampere (A) is the SI unit of electric current.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which element has the atomic number 1?",
    options: ["Oxygen", "Hydrogen", "Helium", "Carbon"],
    correctAnswer: 1,
    explanation: "Hydrogen has atomic number 1.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In literature, who wrote 'War and Peace'?",
    options: ["Leo Tolstoy", "Fyodor Dostoevsky", "Charles Dickens", "Mark Twain"],
    correctAnswer: 0,
    explanation: "'War and Peace' was written by Leo Tolstoy.",
    topic: "literature",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What type of bond involves the sharing of electron pairs between atoms?",
    options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
    correctAnswer: 1,
    explanation: "A covalent bond involves sharing electron pairs.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Chloroplast", "Endoplasmic Reticulum"],
    correctAnswer: 1,
    explanation: "Mitochondria generate most of the cell's supply of ATP.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Who is known as the father of modern chemistry?",
    options: ["Dmitri Mendeleev", "Antoine Lavoisier", "Marie Curie", "Robert Boyle"],
    correctAnswer: 1,
    explanation: "Antoine Lavoisier is considered the father of modern chemistry.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
    correctAnswer: 1,
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere.",
    topic: "environment",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the main purpose of the legislative branch of government?",
    options: [
      "Enforce laws",
      "Interpret laws",
      "Create laws",
      "Execute laws"
    ],
    correctAnswer: 2,
    explanation: "The legislative branch is responsible for making laws.",
    topic: "civics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which ancient city was buried by the eruption of Mount Vesuvius in 79 AD?",
    options: ["Pompeii", "Athens", "Rome", "Troy"],
    correctAnswer: 0,
    explanation: "Pompeii was buried by volcanic ash from Vesuvius.",
    topic: "history",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In computer science, what does 'HTML' stand for?",
    options: [
      "HyperText Markup Language",
      "Hyperlink Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Transfer Markup Language"
    ],
    correctAnswer: 0,
    explanation: "HTML stands for HyperText Markup Language.",
    topic: "technology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which scientist is famous for the discovery of radioactivity?",
    options: ["Marie Curie", "Isaac Newton", "Albert Einstein", "Niels Bohr"],
    correctAnswer: 0,
    explanation: "Marie Curie discovered radioactivity.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the main component of the sun?",
    options: ["Oxygen", "Nitrogen", "Hydrogen", "Helium"],
    correctAnswer: 2,
    explanation: "The sun is mainly composed of hydrogen.",
    topic: "astronomy",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: 2,
    explanation: "Canberra is the capital city of Australia.",
    topic: "geography",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which molecule carries genetic instructions in living organisms?",
    options: ["RNA", "DNA", "Protein", "Lipid"],
    correctAnswer: 1,
    explanation: "DNA carries genetic information.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the powerhouse of the cell?",
    options: ["Mitochondria", "Nucleus", "Ribosome", "Chloroplast"],
    correctAnswer: 0,
    explanation: "Mitochondria produce energy for the cell.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which particle has no electric charge?",
    options: ["Proton", "Electron", "Neutron", "Positron"],
    correctAnswer: 2,
    explanation: "Neutrons are electrically neutral.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which scientist developed the classification system for living organisms?",
    options: ["Charles Darwin", "Carl Linnaeus", "Gregor Mendel", "Louis Pasteur"],
    correctAnswer: 1,
    explanation: "Carl Linnaeus developed the system of binomial nomenclature.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which chemical element has the highest atomic number naturally occurring on Earth?",
    options: ["Uranium", "Plutonium", "Lead", "Gold"],
    correctAnswer: 0,
    explanation: "Uranium (atomic number 92) is the heaviest naturally occurring element.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the process by which plants lose water vapor through leaves?",
    options: ["Respiration", "Transpiration", "Photosynthesis", "Osmosis"],
    correctAnswer: 1,
    explanation: "Transpiration is the release of water vapor from plant leaves.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which war ended with the Treaty of Versailles?",
    options: ["World War I", "World War II", "The Napoleonic Wars", "The Crimean War"],
    correctAnswer: 0,
    explanation: "World War I ended with the Treaty of Versailles in 1919.",
    topic: "history",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the name of the first artificial Earth satellite?",
    options: ["Apollo 11", "Sputnik 1", "Voyager 1", "Hubble"],
    correctAnswer: 1,
    explanation: "Sputnik 1 was the first artificial satellite launched in 1957.",
    topic: "space",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In which organ of the human body would you find the islets of Langerhans?",
    options: ["Liver", "Pancreas", "Kidney", "Spleen"],
    correctAnswer: 1,
    explanation: "Islets of Langerhans are clusters of cells in the pancreas.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the primary gas responsible for acid rain?",
    options: ["Carbon dioxide", "Sulfur dioxide", "Nitrogen", "Oxygen"],
    correctAnswer: 1,
    explanation: "Sulfur dioxide reacts with water vapor to form acid rain.",
    topic: "environment",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the function of the Golgi apparatus?",
    options: [
      "Protein modification and packaging",
      "Energy production",
      "Genetic material storage",
      "Lipid synthesis"
    ],
    correctAnswer: 0,
    explanation: "The Golgi apparatus modifies and packages proteins for transport.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which particle accelerator is the largest and most powerful in the world?",
    options: ["Tevatron", "Large Hadron Collider", "SLAC", "RHIC"],
    correctAnswer: 1,
    explanation: "The Large Hadron Collider (LHC) is the world's largest particle accelerator.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
      {
    id: uuidv4(),
    text: "Which part of the brain is responsible for regulating balance and coordination?",
    options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
    correctAnswer: 1,
    explanation: "The cerebellum controls balance and coordination.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the name of the theory that describes the origin of the universe?",
    options: ["Big Bang Theory", "Steady State Theory", "String Theory", "Quantum Theory"],
    correctAnswer: 0,
    explanation: "The Big Bang Theory explains the origin of the universe from a singularity.",
    topic: "astronomy",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the principle behind MRI (Magnetic Resonance Imaging)?",
    options: [
      "X-ray absorption",
      "Nuclear magnetic resonance of hydrogen atoms",
      "Ultrasound waves",
      "Electrical impedance tomography"
    ],
    correctAnswer: 1,
    explanation: "MRI uses nuclear magnetic resonance to image tissues.",
    topic: "medicine",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which process involves the splitting of a heavy atomic nucleus into lighter nuclei?",
    options: ["Fusion", "Fission", "Ionization", "Radioactive decay"],
    correctAnswer: 1,
    explanation: "Fission is the splitting of a heavy nucleus into lighter nuclei.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In economics, what is 'inflation'?",
    options: [
      "Decrease in price levels",
      "Increase in the general price level of goods and services",
      "Increase in unemployment",
      "Decrease in GDP"
    ],
    correctAnswer: 1,
    explanation: "Inflation is the rate at which prices for goods and services rise.",
    topic: "economics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Who formulated the laws of planetary motion?",
    options: ["Isaac Newton", "Galileo Galilei", "Johannes Kepler", "Copernicus"],
    correctAnswer: 2,
    explanation: "Johannes Kepler formulated the laws of planetary motion.",
    topic: "astronomy",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Pb", "Gd"],
    correctAnswer: 1,
    explanation: "Gold's chemical symbol is Au.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which law states that energy cannot be created or destroyed, only transformed?",
    options: [
      "Newton's First Law",
      "Law of Conservation of Energy",
      "Ohm's Law",
      "Boyle's Law"
    ],
    correctAnswer: 1,
    explanation: "The Law of Conservation of Energy states energy is conserved in a system.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which organelle is responsible for photosynthesis?",
    options: ["Mitochondria", "Chloroplast", "Golgi apparatus", "Nucleus"],
    correctAnswer: 1,
    explanation: "Chloroplasts conduct photosynthesis in plant cells.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the main language spoken in Brazil?",
    options: ["Spanish", "Portuguese", "French", "English"],
    correctAnswer: 1,
    explanation: "Portuguese is the official language of Brazil.",
    topic: "geography",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which vitamin is primarily synthesized when the skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin D", "Vitamin C"],
    correctAnswer: 2,
    explanation: "Vitamin D is synthesized in the skin via sunlight exposure.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the capital city of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    correctAnswer: 2,
    explanation: "Ottawa is the capital city of Canada.",
    topic: "geography",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What does DNA stand for?",
    options: [
      "Deoxyribonucleic Acid",
      "Deoxyribose Nucleic Acid",
      "Deoxynucleotide Acid",
      "Deoxyribonucleotide Acid"
    ],
    correctAnswer: 0,
    explanation: "DNA stands for Deoxyribonucleic Acid.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the chemical formula for ozone?",
    options: ["O2", "O3", "CO2", "NO2"],
    correctAnswer: 1,
    explanation: "Ozone's chemical formula is O3.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Who wrote the play 'Hamlet'?",
    options: ["William Shakespeare", "Charles Dickens", "George Bernard Shaw", "Jane Austen"],
    correctAnswer: 0,
    explanation: "'Hamlet' was written by William Shakespeare.",
    topic: "literature",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which planet has the shortest day in the solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Mercury"],
    correctAnswer: 1,
    explanation: "Jupiter completes a rotation in about 10 hours, the shortest day.",
    topic: "astronomy",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In computer science, what does 'CPU' stand for?",
    options: [
      "Central Process Unit",
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Performance Unit"
    ],
    correctAnswer: 1,
    explanation: "CPU stands for Central Processing Unit.",
    topic: "technology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the term for animals that eat only plants?",
    options: ["Carnivores", "Herbivores", "Omnivores", "Detritivores"],
    correctAnswer: 1,
    explanation: "Herbivores feed exclusively on plants.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which scientist proposed the three laws of motion?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    correctAnswer: 0,
    explanation: "Isaac Newton proposed the three laws of motion.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the boiling point of water at sea level in degrees Celsius?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    correctAnswer: 1,
    explanation: "Water boils at 100°C at sea level.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which metal has the highest electrical conductivity?",
    options: ["Gold", "Copper", "Silver", "Aluminum"],
    correctAnswer: 2,
    explanation: "Silver has the highest electrical conductivity of all metals.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Who is known as the father of psychoanalysis?",
    options: ["Carl Jung", "Sigmund Freud", "Ivan Pavlov", "B.F. Skinner"],
    correctAnswer: 1,
    explanation: "Sigmund Freud is known as the father of psychoanalysis.",
    topic: "psychology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which country invented the compass?",
    options: ["China", "India", "Egypt", "Greece"],
    correctAnswer: 0,
    explanation: "The compass was invented in China.",
    topic: "history",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    correctAnswer: 1,
    explanation: "The Nile River is considered the longest river in the world.",
    topic: "geography",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which gas is commonly used in balloons and airships because it is lighter than air?",
    options: ["Hydrogen", "Helium", "Nitrogen", "Oxygen"],
    correctAnswer: 1,
    explanation: "Helium is lighter than air and non-flammable, commonly used in balloons.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the name of the scale used to measure the magnitude of earthquakes?",
    options: ["Richter scale", "Beaufort scale", "Saffir-Simpson scale", "Fujita scale"],
    correctAnswer: 0,
    explanation: "The Richter scale measures earthquake magnitude.",
    topic: "geology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Who discovered the structure of DNA?",
    options: [
      "James Watson and Francis Crick",
      "Gregor Mendel",
      "Rosalind Franklin and Maurice Wilkins",
      "Louis Pasteur"
    ],
    correctAnswer: 0,
    explanation: "Watson and Crick proposed the double helix structure of DNA.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Saturn", "Jupiter"],
    correctAnswer: 0,
    explanation: "Mars is called the Red Planet due to iron oxide on its surface.",
    topic: "astronomy",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which blood type is known as the universal donor?",
    options: ["O+", "A-", "O-", "AB+"],
    correctAnswer: 2,
    explanation: "O-negative blood can be given to any blood type.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the main ingredient in traditional glass?",
    options: ["Silicon dioxide", "Calcium carbonate", "Sodium chloride", "Potassium nitrate"],
    correctAnswer: 0,
    explanation: "Glass is mainly made of silicon dioxide (sand).",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the function of chlorophyll?",
    options: [
      "Absorbs light for photosynthesis",
      "Stores nutrients",
      "Provides structural support",
      "Regulates water intake"
    ],
    correctAnswer: 0,
    explanation: "Chlorophyll absorbs sunlight for photosynthesis.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which philosopher wrote 'The Republic'?",
    options: ["Plato", "Aristotle", "Socrates", "Confucius"],
    correctAnswer: 0,
    explanation: "'The Republic' was written by Plato.",
    topic: "philosophy",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In physics, what is 'entropy' a measure of?",
    options: [
      "Energy",
      "Disorder or randomness",
      "Force",
      "Velocity"
    ],
    correctAnswer: 1,
    explanation: "Entropy measures the degree of disorder in a system.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the chemical element with the symbol 'Fe'?",
    options: ["Fluorine", "Iron", "Francium", "Fermium"],
    correctAnswer: 1,
    explanation: "'Fe' is the chemical symbol for iron.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
      {
    id: uuidv4(),
    text: "What is the Heisenberg Uncertainty Principle related to?",
    options: [
      "The position and velocity of a particle cannot both be precisely determined",
      "Energy is conserved",
      "Light behaves both as wave and particle",
      "Gravity affects time"
    ],
    correctAnswer: 0,
    explanation: "The principle states that the more precisely the position is known, the less precisely the momentum can be known, and vice versa.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which gas is primarily responsible for the greenhouse effect on Earth?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
    correctAnswer: 1,
    explanation: "Carbon dioxide traps heat in the atmosphere, contributing to the greenhouse effect.",
    topic: "environment",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Who proposed the theory of general relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Max Planck"],
    correctAnswer: 1,
    explanation: "Albert Einstein proposed the theory of general relativity in 1915.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which molecule carries oxygen in the blood?",
    options: ["Myoglobin", "Hemoglobin", "Chlorophyll", "Collagen"],
    correctAnswer: 1,
    explanation: "Hemoglobin binds and transports oxygen in red blood cells.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the primary function of ribosomes in a cell?",
    options: [
      "Protein synthesis",
      "Energy production",
      "DNA replication",
      "Waste removal"
    ],
    correctAnswer: 0,
    explanation: "Ribosomes are responsible for synthesizing proteins.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the main component of natural gas?",
    options: ["Methane", "Ethane", "Propane", "Butane"],
    correctAnswer: 0,
    explanation: "Methane is the primary component of natural gas.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which mathematician is known as the father of calculus?",
    options: ["Isaac Newton", "Gottfried Wilhelm Leibniz", "Carl Gauss", "Leonhard Euler"],
    correctAnswer: 0,
    explanation: "Isaac Newton, along with Leibniz, developed calculus independently.",
    topic: "mathematics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What type of bond is formed when two atoms share electrons?",
    options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
    correctAnswer: 1,
    explanation: "A covalent bond involves sharing electron pairs between atoms.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which city hosted the first modern Olympic Games in 1896?",
    options: ["Athens", "Paris", "London", "Rome"],
    correctAnswer: 0,
    explanation: "Athens, Greece, hosted the first modern Olympics in 1896.",
    topic: "history",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic reticulum"],
    correctAnswer: 1,
    explanation: "Mitochondria generate the cell's energy (ATP).",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which physicist is famous for the uncertainty principle?",
    options: ["Werner Heisenberg", "Max Planck", "Erwin Schrödinger", "Niels Bohr"],
    correctAnswer: 0,
    explanation: "Werner Heisenberg formulated the uncertainty principle.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which element is liquid at room temperature?",
    options: ["Mercury", "Bromine", "Chlorine", "Francium"],
    correctAnswer: 0,
    explanation: "Mercury is a liquid metal at room temperature.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "In what year did the French Revolution begin?",
    options: ["1789", "1776", "1812", "1799"],
    correctAnswer: 0,
    explanation: "The French Revolution began in 1789.",
    topic: "history",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which organ produces insulin?",
    options: ["Liver", "Pancreas", "Kidney", "Gallbladder"],
    correctAnswer: 1,
    explanation: "The pancreas produces insulin to regulate blood sugar.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the main function of DNA polymerase?",
    options: [
      "Transcribe DNA into RNA",
      "Replicate DNA strands",
      "Repair damaged DNA",
      "Degrade RNA"
    ],
    correctAnswer: 1,
    explanation: "DNA polymerase synthesizes new DNA strands during replication.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which gas is used in the Haber process to produce ammonia?",
    options: ["Nitrogen", "Hydrogen", "Oxygen", "Carbon dioxide"],
    correctAnswer: 0,
    explanation: "Nitrogen gas reacts with hydrogen in the Haber process to produce ammonia.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which mathematician developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
    correctAnswer: 1,
    explanation: "Albert Einstein developed the theory of relativity.",
    topic: "physics",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the term for a solution with pH less than 7?",
    options: ["Neutral", "Basic", "Acidic", "Alkaline"],
    correctAnswer: 2,
    explanation: "Acidic solutions have a pH less than 7.",
    topic: "chemistry",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "What is the powerhouse of the cell known for producing ATP?",
    options: ["Nucleus", "Mitochondria", "Lysosome", "Golgi apparatus"],
    correctAnswer: 1,
    explanation: "Mitochondria produce ATP through cellular respiration.",
    topic: "biology",
    difficulty: "hard",
    ageGroups: ["adults"]
  },
  {
    id: uuidv4(),
    text: "Which battle marked the end of Napoleon’s rule?",
    options: ["Battle of Austerlitz", "Battle of Trafalgar", "Battle of Waterloo", "Battle of Leipzig"],
    correctAnswer: 2,
    explanation: "The Battle of Waterloo in 1815 ended Napoleon's rule.",
    topic: "history",
    difficulty: "hard",
    ageGroups: ["adults"]
  }

];