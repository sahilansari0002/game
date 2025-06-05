import { Question } from '../../types';
import { v4 as uuidv4 } from 'uuid';

export const mediumQuestions: Question[] = [



    {
      id: uuidv4(),
      text: "What is the function of mitochondria in cells?",
      options: [
        "Protein synthesis",
        "Energy production",
        "Waste removal",
        "Cell division"
      ],
      correctAnswer: 1,
      explanation: "Mitochondria are often called the powerhouse of the cell because they produce energy through cellular respiration.",
      topic: "science",
      difficulty: "medium",
      ageGroups: ["teens", "adults"]
    },
    {
    id: uuidv4(),
    text: "What causes the aurora borealis (Northern Lights)?",
    options: [
      "Reflection of sunlight on ice",
      "Solar wind interacting with Earth's magnetosphere",
      "Volcanic eruptions",
      "Light pollution"
    ],
    correctAnswer: 1,
    explanation: "The Northern Lights occur when charged particles from the sun collide with gases in Earth's atmosphere along magnetic field lines.",
    topic: "astronomy",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },


  {
    id: uuidv4(),
    text: "What is the main ingredient in the structure of all living cells?",
    options: ["Protein", "Carbohydrates", "Water", "Lipids"],
    correctAnswer: 2,
    explanation: "Water is the main component of living cells, making up 70-90% of cell mass.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which continent is known as the 'Dark Continent'?",
    options: ["Asia", "Africa", "Europe", "South America"],
    correctAnswer: 1,
    explanation: "Africa was historically called the Dark Continent due to limited knowledge and exploration.",
    topic: "geography",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Who proposed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
    correctAnswer: 1,
    explanation: "Albert Einstein proposed the theory of relativity.",
    topic: "physics",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: 2,
    explanation: "Canberra is the capital city of Australia.",
    topic: "geography",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which planet has the most moons in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 2,
    explanation: "Jupiter has the most moons in our solar system.",
    topic: "astronomy",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What type of electromagnetic radiation has the longest wavelength?",
    options: ["Gamma rays", "X-rays", "Radio waves", "Visible light"],
    correctAnswer: 2,
    explanation: "Radio waves have the longest wavelength in the electromagnetic spectrum.",
    topic: "physics",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the process by which rocks break down into smaller pieces?",
    options: ["Erosion", "Weathering", "Deposition", "Sedimentation"],
    correctAnswer: 1,
    explanation: "Weathering is the breakdown of rocks into smaller pieces by physical or chemical processes.",
    topic: "geology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
     {
    id: uuidv4(),
    text: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    correctAnswer: 1,
    explanation: "Japan is called the Land of the Rising Sun because it is located to the east of the Asian continent.",
    topic: "geography",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which organ produces bile to aid digestion?",
    options: ["Liver", "Pancreas", "Stomach", "Gallbladder"],
    correctAnswer: 0,
    explanation: "The liver produces bile, which helps digest fats.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
    correctAnswer: 1,
    explanation: "Mitochondria produce energy through cellular respiration.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which planet is closest to the sun?",
    options: ["Venus", "Mercury", "Earth", "Mars"],
    correctAnswer: 1,
    explanation: "Mercury is the closest planet to the sun.",
    topic: "astronomy",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the hardest natural substance found on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    correctAnswer: 2,
    explanation: "Diamond is the hardest natural substance known.",
    topic: "geology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the name of the galaxy that contains our solar system?",
    options: ["Andromeda Galaxy", "Milky Way Galaxy", "Whirlpool Galaxy", "Sombrero Galaxy"],
    correctAnswer: 1,
    explanation: "Our solar system is located in the Milky Way Galaxy.",
    topic: "astronomy",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the primary gas found in natural gas?",
    options: ["Methane", "Propane", "Butane", "Ethane"],
    correctAnswer: 0,
    explanation: "Methane is the main component of natural gas.",
    topic: "chemistry",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the boiling point of ethanol?",
    options: ["78°C", "100°C", "90°C", "110°C"],
    correctAnswer: 0,
    explanation: "Ethanol boils at approximately 78 degrees Celsius.",
    topic: "chemistry",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which organ is responsible for pumping blood throughout the body?",
    options: ["Lungs", "Heart", "Brain", "Kidneys"],
    correctAnswer: 1,
    explanation: "The heart pumps blood to all parts of the body.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Who was the first woman to win a Nobel Prize?",
    options: ["Marie Curie", "Rosalind Franklin", "Jane Goodall", "Ada Lovelace"],
    correctAnswer: 0,
    explanation: "Marie Curie was the first woman to win a Nobel Prize in 1903.",
    topic: "history",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which vitamin is mainly obtained from sunlight?",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B12"],
    correctAnswer: 2,
    explanation: "Vitamin D is synthesized in the skin when exposed to sunlight.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the main language spoken in Argentina?",
    options: ["Spanish", "Portuguese", "English", "French"],
    correctAnswer: 0,
    explanation: "Spanish is the official language of Argentina.",
    topic: "geography",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which planet is known for its rings?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    correctAnswer: 1,
    explanation: "Saturn is famous for its prominent ring system.",
    topic: "astronomy",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which is the smallest bone in the human body?",
    options: ["Femur", "Stapes", "Tibia", "Humerus"],
    correctAnswer: 1,
    explanation: "The stapes bone in the middle ear is the smallest bone in the human body.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which gas is commonly used in balloons to make them float?",
    options: ["Oxygen", "Helium", "Nitrogen", "Hydrogen"],
    correctAnswer: 1,
    explanation: "Helium is lighter than air and used to fill balloons.",
    topic: "chemistry",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the capital of Egypt?",
    options: ["Alexandria", "Cairo", "Luxor", "Giza"],
    correctAnswer: 1,
    explanation: "Cairo is the capital city of Egypt.",
    topic: "geography",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which organ filters toxins from the blood?",
    options: ["Liver", "Kidneys", "Lungs", "Spleen"],
    correctAnswer: 0,
    explanation: "The liver filters toxins and waste from the blood.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    correctAnswer: 0,
    explanation: "Au is the chemical symbol for gold.",
    topic: "chemistry",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What kind of celestial object is the Sun?",
    options: ["Planet", "Star", "Moon", "Asteroid"],
    correctAnswer: 1,
    explanation: "The Sun is a star at the center of our solar system.",
    topic: "astronomy",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which country hosted the 2016 Summer Olympics?",
    options: ["China", "Brazil", "UK", "Russia"],
    correctAnswer: 1,
    explanation: "Brazil hosted the 2016 Summer Olympics in Rio de Janeiro.",
    topic: "history",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the name of the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    correctAnswer: 1,
    explanation: "The Nile is generally considered the longest river in the world.",
    topic: "geography",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which country is known for the invention of pizza?",
    options: ["France", "USA", "Italy", "Greece"],
    correctAnswer: 2,
    explanation: "Pizza originated in Italy.",
    topic: "culture",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which element is needed by plants for photosynthesis?",
    options: ["Chlorine", "Chlorophyll", "Calcium", "Carbon"],
    correctAnswer: 1,
    explanation: "Chlorophyll is the pigment that allows plants to absorb light for photosynthesis.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the term for animals that eat both plants and meat?",
    options: ["Herbivores", "Carnivores", "Omnivores", "Detritivores"],
    correctAnswer: 2,
    explanation: "Omnivores consume both plants and animals.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the SI unit of electric current?",
    options: ["Volt", "Ohm", "Ampere", "Watt"],
    correctAnswer: 2,
    explanation: "Ampere is the SI unit of electric current.",
    topic: "physics",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which of the following is a renewable energy source?",
    options: ["Coal", "Oil", "Solar", "Natural Gas"],
    correctAnswer: 2,
    explanation: "Solar energy is renewable and comes from the sun.",
    topic: "environment",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the main language spoken in Canada?",
    options: ["English", "French", "Both English and French", "Spanish"],
    correctAnswer: 2,
    explanation: "Canada has two official languages: English and French.",
    topic: "geography",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which of these elements is a noble gas?",
    options: ["Sodium", "Chlorine", "Neon", "Iron"],
    correctAnswer: 2,
    explanation: "Neon is a noble gas, characterized by its stability and reluctance to form chemical bonds.",
    topic: "science",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },


  {
    id: uuidv4(),
    text: "Which gas is most abundant in Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
    correctAnswer: 1,
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere.",
    topic: "science",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the main purpose of red blood cells?",
    options: [
      "Fight infection",
      "Carry oxygen",
      "Clot blood",
      "Produce hormones"
    ],
    correctAnswer: 1,
    explanation: "Red blood cells carry oxygen from the lungs to the body tissues.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which device converts electrical energy into mechanical energy?",
    options: ["Generator", "Transformer", "Motor", "Battery"],
    correctAnswer: 2,
    explanation: "An electric motor converts electrical energy into mechanical energy.",
    topic: "physics",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the SI unit of force?",
    options: ["Joule", "Pascal", "Newton", "Watt"],
    correctAnswer: 2,
    explanation: "The SI unit of force is the Newton.",
    topic: "physics",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which is the largest internal organ in the human body?",
    options: ["Liver", "Heart", "Kidneys", "Lungs"],
    correctAnswer: 0,
    explanation: "The liver is the largest internal organ.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What does DNA stand for?",
    options: [
      "Deoxyribonucleic Acid",
      "Dinucleic Acid",
      "Deoxynucleic Acid",
      "Dideoxyribonucleic Acid"
    ],
    correctAnswer: 0,
    explanation: "DNA stands for Deoxyribonucleic Acid.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which language is primarily spoken in Brazil?",
    options: ["Spanish", "Portuguese", "English", "French"],
    correctAnswer: 1,
    explanation: "Portuguese is the official language of Brazil.",
    topic: "geography",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the main function of the ozone layer?",
    options: [
      "Protect Earth from harmful UV radiation",
      "Trap heat in the atmosphere",
      "Produce oxygen",
      "Generate weather patterns"
    ],
    correctAnswer: 0,
    explanation: "The ozone layer protects Earth by absorbing the majority of the sun's harmful ultraviolet radiation.",
    topic: "environment",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which organelle is responsible for protein synthesis?",
    options: ["Ribosome", "Nucleus", "Golgi apparatus", "Mitochondria"],
    correctAnswer: 0,
    explanation: "Ribosomes are the cellular structures where proteins are synthesized.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the term for animals that eat only plants?",
    options: ["Carnivores", "Herbivores", "Omnivores", "Detritivores"],
    correctAnswer: 1,
    explanation: "Herbivores are animals that eat only plants.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the capital city of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    correctAnswer: 2,
    explanation: "Ottawa is the capital city of Canada.",
    topic: "geography",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which part of the brain controls balance and coordination?",
    options: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"],
    correctAnswer: 1,
    explanation: "The cerebellum controls balance and coordination.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Mark Twain",
      "Jane Austen"
    ],
    correctAnswer: 0,
    explanation: "'Romeo and Juliet' is a famous tragedy written by William Shakespeare.",
    topic: "literature",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the largest planet in our solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Mars"],
    correctAnswer: 2,
    explanation: "Jupiter is the largest planet in our solar system.",
    topic: "astronomy",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which blood type is known as the universal donor?",
    options: ["A", "B", "AB", "O negative"],
    correctAnswer: 3,
    explanation: "O negative blood can be donated to any blood type.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    correctAnswer: 1,
    explanation: "Mars is called the Red Planet because of its reddish appearance caused by iron oxide.",
    topic: "astronomy",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the freezing point of water?",
    options: ["0°C", "32°C", "100°C", "-10°C"],
    correctAnswer: 0,
    explanation: "Water freezes at 0 degrees Celsius.",
    topic: "science",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the main gas responsible for global warming?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
    correctAnswer: 2,
    explanation: "Carbon dioxide traps heat in the atmosphere and contributes to global warming.",
    topic: "environment",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What organ is responsible for filtering blood in the human body?",
    options: ["Liver", "Kidneys", "Heart", "Lungs"],
    correctAnswer: 1,
    explanation: "The kidneys filter waste and excess substances from the blood.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which gas do plants absorb from the atmosphere for photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
    correctAnswer: 2,
    explanation: "Plants absorb carbon dioxide to make food via photosynthesis.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which is the smallest unit of life?",
    options: ["Organ", "Cell", "Tissue", "Molecule"],
    correctAnswer: 1,
    explanation: "The cell is the smallest structural and functional unit of life.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
    {
    id: uuidv4(),
    text: "Which scientist is known for the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    correctAnswer: 1,
    explanation: "Albert Einstein developed the theory of relativity.",
    topic: "physics",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which gas is essential for human respiration?",
    options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: 1,
    explanation: "Oxygen is required by humans to breathe and produce energy.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which metal is liquid at room temperature?",
    options: ["Mercury", "Gold", "Silver", "Copper"],
    correctAnswer: 0,
    explanation: "Mercury is the only metal that is liquid at room temperature.",
    topic: "chemistry",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What type of bond involves the sharing of electron pairs between atoms?",
    options: ["Ionic bond", "Covalent bond", "Hydrogen bond", "Metallic bond"],
    correctAnswer: 1,
    explanation: "Covalent bonds share electron pairs between atoms.",
    topic: "chemistry",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which country is the largest by land area?",
    options: ["China", "USA", "Russia", "Canada"],
    correctAnswer: 2,
    explanation: "Russia is the largest country by land area in the world.",
    topic: "geography",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the chemical symbol for iron?",
    options: ["Ir", "Fe", "In", "I"],
    correctAnswer: 1,
    explanation: "Fe is the chemical symbol for iron.",
    topic: "chemistry",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the freezing point of water in Fahrenheit?",
    options: ["0°F", "32°F", "100°F", "212°F"],
    correctAnswer: 1,
    explanation: "Water freezes at 32 degrees Fahrenheit.",
    topic: "physics",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    correctAnswer: 0,
    explanation: "Jupiter has the most moons of any planet in our solar system.",
    topic: "astronomy",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the process of cell division that results in two daughter cells?",
    options: ["Mitosis", "Meiosis", "Binary fission", "Budding"],
    correctAnswer: 0,
    explanation: "Mitosis produces two identical daughter cells from one parent cell.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the name of the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correctAnswer: 2,
    explanation: "The Pacific Ocean is the largest ocean on Earth.",
    topic: "geography",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which vitamin is important for blood clotting?",
    options: ["Vitamin A", "Vitamin D", "Vitamin K", "Vitamin C"],
    correctAnswer: 2,
    explanation: "Vitamin K is necessary for proper blood clotting.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Who was the first president of the United States?",
    options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
    correctAnswer: 1,
    explanation: "George Washington was the first president of the USA.",
    topic: "history",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the main component of the Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    correctAnswer: 2,
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere.",
    topic: "environment",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which organ in the human body produces insulin?",
    options: ["Liver", "Pancreas", "Kidney", "Thyroid"],
    correctAnswer: 1,
    explanation: "The pancreas produces insulin to regulate blood sugar.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the capital city of Brazil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    correctAnswer: 2,
    explanation: "Brasília is the capital city of Brazil.",
    topic: "geography",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the most abundant element in the Earth's crust?",
    options: ["Oxygen", "Silicon", "Aluminum", "Iron"],
    correctAnswer: 0,
    explanation: "Oxygen makes up about 46% of the Earth's crust by weight.",
    topic: "geology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which scientist is known as the father of modern chemistry?",
    options: ["Dmitri Mendeleev", "Antoine Lavoisier", "John Dalton", "Marie Curie"],
    correctAnswer: 1,
    explanation: "Antoine Lavoisier is often called the father of modern chemistry.",
    topic: "chemistry",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
    correctAnswer: 1,
    explanation: "Mount Everest is the tallest mountain on Earth.",
    topic: "geography",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which particle has a negative charge?",
    options: ["Proton", "Neutron", "Electron", "Photon"],
    correctAnswer: 2,
    explanation: "Electrons carry a negative charge.",
    topic: "physics",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the main ingredient in traditional glass?",
    options: ["Sand", "Clay", "Limestone", "Salt"],
    correctAnswer: 0,
    explanation: "Glass is mainly made from silica sand.",
    topic: "chemistry",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    correctAnswer: 0,
    explanation: "Mars is often called the Red Planet due to its reddish appearance.",
    topic: "astronomy",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the name of the largest desert on Earth?",
    options: ["Sahara", "Gobi", "Kalahari", "Antarctic Desert"],
    correctAnswer: 3,
    explanation: "The Antarctic Desert is the largest desert by area.",
    topic: "geography",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which country is home to the Great Barrier Reef?",
    options: ["Australia", "USA", "South Africa", "India"],
    correctAnswer: 0,
    explanation: "The Great Barrier Reef is located off the coast of Australia.",
    topic: "geography",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which scientist proposed the heliocentric model of the solar system?",
    options: ["Copernicus", "Galileo", "Kepler", "Newton"],
    correctAnswer: 0,
    explanation: "Copernicus proposed that the Earth and planets revolve around the Sun.",
    topic: "astronomy",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which is the longest bone in the human body?",
    options: ["Femur", "Tibia", "Humerus", "Fibula"],
    correctAnswer: 0,
    explanation: "The femur is the longest bone in the human body.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the pH level of pure water?",
    options: ["7", "0", "14", "1"],
    correctAnswer: 0,
    explanation: "Pure water has a neutral pH of 7.",
    topic: "chemistry",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which country gifted the Statue of Liberty to the USA?",
    options: ["France", "England", "Germany", "Italy"],
    correctAnswer: 0,
    explanation: "France gifted the Statue of Liberty to the USA in 1886.",
    topic: "history",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which gas is responsible for the greenhouse effect?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: 1,
    explanation: "Carbon dioxide traps heat in the atmosphere causing the greenhouse effect.",
    topic: "environment",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which is the fastest land animal?",
    options: ["Cheetah", "Lion", "Tiger", "Leopard"],
    correctAnswer: 0,
    explanation: "The cheetah can run up to 75 mph, making it the fastest land animal.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the currency of South Africa?",
    options: ["Rand", "Dollar", "Euro", "Pound"],
    correctAnswer: 0,
    explanation: "The South African currency is the Rand.",
    topic: "geography",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the largest internal organ in the human body?",
    options: ["Heart", "Liver", "Lung", "Kidney"],
    correctAnswer: 1,
    explanation: "The liver is the largest internal organ.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which invention is Thomas Edison famous for?",
    options: ["Telephone", "Light bulb", "Radio", "Television"],
    correctAnswer: 1,
    explanation: "Thomas Edison is credited with inventing the practical light bulb.",
    topic: "history",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
    {
    id: uuidv4(),
    text: "Which organelle is known as the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
    correctAnswer: 2,
    explanation: "Mitochondria generate the cell's energy through respiration.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the boiling point of water at sea level in Celsius?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    correctAnswer: 1,
    explanation: "Water boils at 100 degrees Celsius at standard atmospheric pressure.",
    topic: "physics",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Who discovered penicillin?",
    options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Gregor Mendel"],
    correctAnswer: 1,
    explanation: "Alexander Fleming discovered penicillin in 1928.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which element has the atomic number 1?",
    options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
    correctAnswer: 2,
    explanation: "Hydrogen has the atomic number 1.",
    topic: "chemistry",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the main language spoken in Brazil?",
    options: ["Spanish", "Portuguese", "French", "English"],
    correctAnswer: 1,
    explanation: "Portuguese is the official language of Brazil.",
    topic: "geography",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which gas do plants absorb from the atmosphere during photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Methane"],
    correctAnswer: 2,
    explanation: "Plants absorb carbon dioxide to produce glucose during photosynthesis.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which planet is closest to the Sun?",
    options: ["Venus", "Mercury", "Earth", "Mars"],
    correctAnswer: 1,
    explanation: "Mercury is the closest planet to the Sun.",
    topic: "astronomy",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the currency of Japan?",
    options: ["Yuan", "Yen", "Won", "Rupee"],
    correctAnswer: 1,
    explanation: "The Japanese currency is the Yen.",
    topic: "geography",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which type of electromagnetic wave has the shortest wavelength?",
    options: ["Microwaves", "X-rays", "Radio waves", "Gamma rays"],
    correctAnswer: 3,
    explanation: "Gamma rays have the shortest wavelength in the electromagnetic spectrum.",
    topic: "physics",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Who wrote the novel '1984'?",
    options: ["George Orwell", "Aldous Huxley", "J.K. Rowling", "Ernest Hemingway"],
    correctAnswer: 0,
    explanation: "'1984' is a dystopian novel written by George Orwell.",
    topic: "literature",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which planet has the largest ring system?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    correctAnswer: 1,
    explanation: "Saturn is known for its extensive and bright ring system.",
    topic: "astronomy",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the chemical formula for table salt?",
    options: ["NaCl", "KCl", "NaOH", "HCl"],
    correctAnswer: 0,
    explanation: "Table salt is chemically sodium chloride (NaCl).",
    topic: "chemistry",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which scientist developed the laws of motion?",
    options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
    correctAnswer: 1,
    explanation: "Isaac Newton formulated the three laws of motion.",
    topic: "physics",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which process turns liquid water into water vapor?",
    options: ["Condensation", "Evaporation", "Precipitation", "Sublimation"],
    correctAnswer: 1,
    explanation: "Evaporation is the process of liquid turning into vapor.",
    topic: "environment",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What does HTTP stand for in web addresses?",
    options: [
      "HyperText Transfer Protocol",
      "Hyperlink Transfer Protocol",
      "HyperText Transmission Protocol",
      "Hyperlink Transmission Protocol"
    ],
    correctAnswer: 0,
    explanation: "HTTP stands for HyperText Transfer Protocol.",
    topic: "technology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which element is needed for the formation of hemoglobin in blood?",
    options: ["Iron", "Calcium", "Magnesium", "Potassium"],
    correctAnswer: 0,
    explanation: "Iron is essential for hemoglobin production in red blood cells.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Diamond", "Graphite", "Quartz"],
    correctAnswer: 1,
    explanation: "Diamond is the hardest naturally occurring material.",
    topic: "geology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Who painted the Mona Lisa?",
    options: [
      "Michelangelo",
      "Leonardo da Vinci",
      "Raphael",
      "Vincent van Gogh"
    ],
    correctAnswer: 1,
    explanation: "Leonardo da Vinci painted the Mona Lisa.",
    topic: "art",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the study of fossils called?",
    options: ["Geology", "Paleontology", "Archaeology", "Anthropology"],
    correctAnswer: 1,
    explanation: "Paleontology is the study of fossils.",
    topic: "science",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which country has the largest population?",
    options: ["India", "China", "USA", "Indonesia"],
    correctAnswer: 1,
    explanation: "China has the largest population in the world.",
    topic: "geography",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which organ filters blood in the human body?",
    options: ["Heart", "Liver", "Kidney", "Lung"],
    correctAnswer: 2,
    explanation: "The kidneys filter waste from the blood to produce urine.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the unit of electrical resistance?",
    options: ["Ohm", "Volt", "Ampere", "Watt"],
    correctAnswer: 0,
    explanation: "Resistance is measured in ohms.",
    topic: "physics",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Who is the author of 'The Odyssey'?",
    options: ["Homer", "Plato", "Socrates", "Aristotle"],
    correctAnswer: 0,
    explanation: "'The Odyssey' is an epic poem by Homer.",
    topic: "literature",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What causes tides on Earth?",
    options: [
      "Wind patterns",
      "Earth's rotation",
      "The Moon's gravitational pull",
      "Solar radiation"
    ],
    correctAnswer: 2,
    explanation: "Tides are primarily caused by the Moon's gravity.",
    topic: "environment",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which scientist developed the periodic table?",
    options: [
      "Dmitri Mendeleev",
      "Marie Curie",
      "Isaac Newton",
      "Niels Bohr"
    ],
    correctAnswer: 0,
    explanation: "Dmitri Mendeleev created the periodic table.",
    topic: "chemistry",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which planet is known for its extreme winds and storms, including the Great Red Spot?",
    options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
    correctAnswer: 1,
    explanation: "Jupiter is famous for the Great Red Spot, a giant storm.",
    topic: "astronomy",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What type of animal is a Komodo dragon?",
    options: ["Mammal", "Reptile", "Bird", "Amphibian"],
    correctAnswer: 1,
    explanation: "The Komodo dragon is the largest living species of lizard.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which instrument is used to measure atmospheric pressure?",
    options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
    correctAnswer: 1,
    explanation: "A barometer measures atmospheric pressure.",
    topic: "physics",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the main function of white blood cells?",
    options: [
      "Carry oxygen",
      "Fight infections",
      "Clot blood",
      "Store energy"
    ],
    correctAnswer: 1,
    explanation: "White blood cells help the immune system fight infections.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What gas do humans exhale?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Methane"],
    correctAnswer: 2,
    explanation: "Humans exhale carbon dioxide as a waste product.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Who is known as the father of modern physics?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Niels Bohr"
    ],
    correctAnswer: 1,
    explanation: "Albert Einstein is considered the father of modern physics.",
    topic: "physics",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which city is known as the Big Apple?",
    options: ["Los Angeles", "New York City", "Chicago", "Miami"],
    correctAnswer: 1,
    explanation: "New York City is nicknamed the Big Apple.",
    topic: "geography",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What part of the plant conducts photosynthesis?",
    options: ["Roots", "Stem", "Leaves", "Flowers"],
    correctAnswer: 2,
    explanation: "Leaves contain chlorophyll and conduct photosynthesis.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which continent is the Sahara Desert located in?",
    options: ["Asia", "Africa", "Australia", "South America"],
    correctAnswer: 1,
    explanation: "The Sahara Desert is located in Africa.",
    topic: "geography",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which instrument is used to measure temperature?",
    options: ["Barometer", "Thermometer", "Anemometer", "Hygrometer"],
    correctAnswer: 1,
    explanation: "A thermometer measures temperature.",
    topic: "physics",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the name of the galaxy that contains our Solar System?",
    options: ["Andromeda Galaxy", "Milky Way Galaxy", "Whirlpool Galaxy", "Sombrero Galaxy"],
    correctAnswer: 1,
    explanation: "Our Solar System is located in the Milky Way Galaxy.",
    topic: "astronomy",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the smallest planet in our Solar System?",
    options: ["Mercury", "Mars", "Venus", "Pluto"],
    correctAnswer: 0,
    explanation: "Mercury is the smallest planet in our Solar System.",
    topic: "astronomy",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
    correctAnswer: 1,
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere.",
    topic: "environment",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Who invented the telephone?",
    options: [
      "Alexander Graham Bell",
      "Thomas Edison",
      "Nikola Tesla",
      "Guglielmo Marconi"
    ],
    correctAnswer: 0,
    explanation: "Alexander Graham Bell is credited with inventing the telephone.",
    topic: "technology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which vitamin is produced when the skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    correctAnswer: 3,
    explanation: "Vitamin D is synthesized by the skin in response to sunlight.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the primary source of energy for the Earth's climate system?",
    options: ["The Moon", "The Sun", "Volcanoes", "Ocean currents"],
    correctAnswer: 1,
    explanation: "The Sun is the main energy source driving Earth's climate.",
    topic: "environment",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What is the largest bone in the human body?",
    options: ["Femur", "Tibia", "Humerus", "Fibula"],
    correctAnswer: 0,
    explanation: "The femur is the largest bone in the human body.",
    topic: "biology",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "What type of energy is stored in a stretched or compressed spring?",
    options: ["Kinetic energy", "Thermal energy", "Elastic potential energy", "Chemical energy"],
    correctAnswer: 2,
    explanation: "Energy stored in springs is elastic potential energy.",
    topic: "physics",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which scientist is famous for his work on electricity and magnetism and invented the electric motor?",
    options: ["Nikola Tesla", "Thomas Edison", "Michael Faraday", "James Clerk Maxwell"],
    correctAnswer: 2,
    explanation: "Michael Faraday invented the electric motor and contributed to electromagnetism.",
    topic: "physics",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which of these is a primary color of light?",
    options: ["Red", "Green", "Blue", "All of the above"],
    correctAnswer: 3,
    explanation: "Red, green, and blue are primary colors of light.",
    topic: "physics",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  },
  {
    id: uuidv4(),
    text: "Which device is used to measure electric current?",
    options: ["Voltmeter", "Ammeter", "Wattmeter", "Ohmmeter"],
    correctAnswer: 1,
    explanation: "An ammeter measures electric current.",
    topic: "physics",
    difficulty: "medium",
    ageGroups: ["teens", "adults"]
  }


];