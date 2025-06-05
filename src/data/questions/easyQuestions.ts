import { Question } from '../../types';
import { v4 as uuidv4 } from 'uuid';

export const easyQuestions: Question[] = [
  // Astronomy Questions
 {
      id: uuidv4(),
      text: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: 1,
      explanation: "Mars is called the Red Planet because it appears red from iron oxide (rust) on its surface.",
      topic: "astronomy",
      difficulty: "easy",
      ageGroups: ["kids", "teens", "adults"]
    },
    {
      id: uuidv4(),
      text: "What is the closest star to Earth?",
      options: ["Proxima Centauri", "The Sun", "Sirius", "Alpha Centauri"],
      correctAnswer: 1,
      explanation: "The Sun is the closest star to Earth, about 93 million miles away.",
      topic: "astronomy",
      difficulty: "easy",
      ageGroups: ["kids", "teens", "adults"]
    },
    {
      id: uuidv4(),
      text: "Which layer of Earth's atmosphere contains the ozone layer?",
      options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
      correctAnswer: 1,
      explanation: "The ozone layer is located in the stratosphere, about 15-35 kilometers above Earth's surface.",
      topic: "earth",
      difficulty: "easy",
      ageGroups: ["kids", "teens", "adults"]
    },
    {
      id: uuidv4(),
      text: "What is the process by which plants make their own food?",
      options: ["Photosynthesis", "Respiration", "Digestion", "Fermentation"],
      correctAnswer: 0,
      explanation: "Photosynthesis is the process where plants use sunlight, water, and carbon dioxide to produce glucose and oxygen.",
      topic: "science",
      difficulty: "easy",
      ageGroups: ["kids", "teens", "adults"]
    },
    {
      id: uuidv4(),
      text: "Which of these animals is a mammal?",
      options: ["Snake", "Dolphin", "Lizard", "Fish"],
      correctAnswer: 1,
      explanation: "Dolphins are mammals because they breathe air, give birth to live young, and produce milk for their babies.",
      topic: "science",
      difficulty: "easy",
      ageGroups: ["kids", "teens", "adults"]
    },
    {
      id: uuidv4(),
      text: "What is the largest organ in the human body?",
      options: ["Heart", "Brain", "Skin", "Liver"],
      correctAnswer: 2,
      explanation: "The skin is the largest organ in the human body, covering about 20 square feet in adults.",
      topic: "science",
      difficulty: "easy",
      ageGroups: ["kids", "teens", "adults"]
    },
    {
      id: uuidv4(),
      text: "Which continent is the largest?",
      options: ["North America", "Africa", "Asia", "Europe"],
      correctAnswer: 2,
      explanation: "Asia is the largest continent, covering about 30% of Earth's total land area.",
      topic: "geography",
      difficulty: "easy",
      ageGroups: ["kids", "teens", "adults"]
    },
    {
      id: uuidv4(),
      text: "What causes day and night on Earth?",
      options: ["Earth's rotation", "Earth's revolution", "The Moon", "The Sun's movement"],
      correctAnswer: 0,
      explanation: "Earth's rotation on its axis causes day and night, with one complete rotation taking 24 hours.",
      topic: "astronomy",
      difficulty: "easy",
      ageGroups: ["kids", "teens", "adults"]
    },
    {
      id: uuidv4(),
      text: "Which gas do plants absorb from the air?",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
      correctAnswer: 1,
      explanation: "Plants absorb carbon dioxide from the air during photosynthesis to produce glucose and oxygen.",
      topic: "science",
      difficulty: "easy",
      ageGroups: ["kids", "teens", "adults"]
    },
    {
      id: uuidv4(),
      text: "What is the main function of the heart?",
      options: ["Thinking", "Breathing", "Pumping blood", "Digesting food"],
      correctAnswer: 2,
      explanation: "The heart's main function is to pump blood throughout the body, delivering oxygen and nutrients to cells.",
      topic: "science",
      difficulty: "easy",
      ageGroups: ["kids", "teens", "adults"]
    },
{
  id: uuidv4(),
  text: "Which part of the plant conducts photosynthesis?",
  options: ["Roots", "Stem", "Flowers", "Leaves"],
  correctAnswer: 3,
  explanation: "Leaves contain chlorophyll and are the main site for photosynthesis.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the longest river in the world?",
  options: ["Amazon", "Nile", "Yangtze", "Ganga"],
  correctAnswer: 1,
  explanation: "The Nile River is widely regarded as the longest river in the world.",
  topic: "geography",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which sense organ helps us hear sounds?",
  options: ["Eyes", "Ears", "Nose", "Tongue"],
  correctAnswer: 1,
  explanation: "Ears are the sensory organs responsible for hearing.",
  topic: "science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which month has the fewest days?",
  options: ["January", "February", "April", "June"],
  correctAnswer: 1,
  explanation: "February has 28 or 29 days, fewer than any other month.",
  topic: "calendar",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What color is chlorophyll?",
  options: ["Red", "Green", "Blue", "Yellow"],
  correctAnswer: 1,
  explanation: "Chlorophyll, which helps in photosynthesis, is green in color.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which organ helps in breathing?",
  options: ["Liver", "Stomach", "Lungs", "Heart"],
  correctAnswer: 2,
  explanation: "The lungs are responsible for breathing and gas exchange.",
  topic: "science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
    {
  id: uuidv4(),
  text: "How many continents are there on Earth?",
  options: ["5", "6", "7", "8"],
  correctAnswer: 2,
  explanation: "There are 7 continents on Earth: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
  topic: "geography",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "How many sides does a triangle have?",
  options: ["2", "3", "4", "5"],
  correctAnswer: 1,
  explanation: "A triangle has three sides.",
  topic: "math",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which bird is known for mimicking human speech?",
  options: ["Sparrow", "Parrot", "Crow", "Pigeon"],
  correctAnswer: 1,
  explanation: "Parrots can mimic human speech.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is H2O commonly known as?",
  options: ["Hydrogen", "Oxygen", "Salt", "Water"],
  correctAnswer: 3,
  explanation: "H2O is the chemical formula for water.",
  topic: "chemistry",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "How many hours are there in a day?",
  options: ["10", "12", "24", "30"],
  correctAnswer: 2,
  explanation: "There are 24 hours in a day.",
  topic: "general knowledge",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What shape is a coin usually?",
  options: ["Square", "Triangle", "Round", "Rectangle"],
  correctAnswer: 2,
  explanation: "Coins are generally round in shape.",
  topic: "math",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What color do you get by mixing red and yellow?",
  options: ["Orange", "Purple", "Green", "Pink"],
  correctAnswer: 0,
  explanation: "Red and yellow make orange.",
  topic: "arts",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which sense organ is used for smelling?",
  options: ["Eyes", "Nose", "Ears", "Skin"],
  correctAnswer: 1,
  explanation: "The nose helps us to smell.",
  topic: "science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What do we breathe in to stay alive?",
  options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  correctAnswer: 1,
  explanation: "We breathe in oxygen to survive.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},

{
  id: uuidv4(),
  text: "Which shape has four equal sides and four right angles?",
  options: ["Rectangle", "Rhombus", "Square", "Trapezium"],
  correctAnswer: 2,
  explanation: "A square has four equal sides and four right angles.",
  topic: "math",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},

{
  id: uuidv4(),
  text: "Which gas do plants take in for photosynthesis?",
  options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
  correctAnswer: 2,
  explanation: "Plants use carbon dioxide in the process of photosynthesis.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the color of the sun?",
  options: ["Yellow", "Blue", "Red", "Green"],
  correctAnswer: 0,
  explanation: "The sun appears yellow from Earth due to the scattering of light.",
  topic: "astronomy",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which number comes after 99?",
  options: ["98", "100", "101", "99"],
  correctAnswer: 1,
  explanation: "100 comes after 99.",
  topic: "math",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "How many letters are there in the English alphabet?",
  options: ["24", "25", "26", "27"],
  correctAnswer: 2,
  explanation: "There are 26 letters in the English alphabet.",
  topic: "language",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What do bees collect to make honey?",
  options: ["Nectar", "Pollen", "Water", "Dust"],
  correctAnswer: 0,
  explanation: "Bees collect nectar from flowers to make honey.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which fruit is known for having its seeds on the outside?",
  options: ["Banana", "Strawberry", "Apple", "Grapes"],
  correctAnswer: 1,
  explanation: "Strawberries have seeds on their outer surface.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
    {
  id: uuidv4(),
  text: "Which sense organ do we use to see?",
  options: ["Nose", "Ears", "Eyes", "Hands"],
  correctAnswer: 2,
  explanation: "We use our eyes to see.",
  topic: "science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the largest mammal in the world?",
  options: ["Elephant", "Blue Whale", "Giraffe", "Rhino"],
  correctAnswer: 1,
  explanation: "The blue whale is the largest mammal.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What do you call a baby dog?",
  options: ["Kitten", "Pup", "Cub", "Chick"],
  correctAnswer: 1,
  explanation: "A baby dog is called a pup or puppy.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which object in the sky gives us light during the day?",
  options: ["Stars", "Moon", "Sun", "Clouds"],
  correctAnswer: 2,
  explanation: "The sun provides daylight.",
  topic: "astronomy",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which fruit is yellow and monkeys love it?",
  options: ["Apple", "Mango", "Banana", "Papaya"],
  correctAnswer: 2,
  explanation: "Monkeys are known to love bananas.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the capital of India?",
  options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
  correctAnswer: 1,
  explanation: "New Delhi is the capital of India.",
  topic: "geography",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which animal says 'meow'?",
  options: ["Dog", "Cat", "Cow", "Lion"],
  correctAnswer: 1,
  explanation: "Cats say 'meow'.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What color is the sky on a clear day?",
  options: ["Green", "Yellow", "Blue", "Red"],
  correctAnswer: 2,
  explanation: "The sky appears blue on a clear day.",
  topic: "science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},

{
  id: uuidv4(),
  text: "Which gas do humans need to breathe in to survive?",
  options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  correctAnswer: 1,
  explanation: "Humans need oxygen to survive.",
  topic: "science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet is known for its rings?",
  options: ["Earth", "Mars", "Saturn", "Jupiter"],
  correctAnswer: 2,
  explanation: "Saturn is famous for its prominent ring system.",
  topic: "astronomy",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which part of the plant is usually underground?",
  options: ["Stem", "Leaves", "Roots", "Flower"],
  correctAnswer: 2,
  explanation: "Roots are typically found underground and absorb water and nutrients.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What do we use to write on a blackboard?",
  options: ["Pen", "Chalk", "Marker", "Brush"],
  correctAnswer: 1,
  explanation: "Chalk is used to write on blackboards.",
  topic: "general knowledge",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the name of the fairy in Peter Pan?",
  options: ["Cinderella", "Tinker Bell", "Elsa", "Moana"],
  correctAnswer: 1,
  explanation: "Tinker Bell is the fairy friend of Peter Pan.",
  topic: "literature",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which shape has three sides?",
  options: ["Circle", "Square", "Triangle", "Rectangle"],
  correctAnswer: 2,
  explanation: "A triangle has three sides.",
  topic: "math",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which natural satellite orbits the Earth?",
  options: ["Mars", "Venus", "Moon", "Sun"],
  correctAnswer: 2,
  explanation: "The Moon is Earth’s natural satellite.",
  topic: "astronomy",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which body part helps us to see?",
  options: ["Ears", "Nose", "Eyes", "Mouth"],
  correctAnswer: 2,
  explanation: "We use our eyes to see the world around us.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the largest land animal?",
  options: ["Lion", "Giraffe", "Elephant", "Hippopotamus"],
  correctAnswer: 2,
  explanation: "The African elephant is the largest land animal.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What do humans use to breathe?",
  options: ["Liver", "Heart", "Lungs", "Stomach"],
  correctAnswer: 2,
  explanation: "Lungs allow humans to breathe in oxygen and release carbon dioxide.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which color is a mix of red and yellow?",
  options: ["Green", "Orange", "Purple", "Brown"],
  correctAnswer: 1,
  explanation: "Red and yellow mixed together make orange.",
  topic: "art",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which sense organ is used to hear sounds?",
  options: ["Nose", "Tongue", "Ears", "Eyes"],
  correctAnswer: 2,
  explanation: "Ears are the organs that detect sound waves.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},

{
  id: uuidv4(),
  text: "What do we call a baby dog?",
  options: ["Kitten", "Puppy", "Cub", "Calf"],
  correctAnswer: 1,
  explanation: "A baby dog is called a puppy.",
  topic: "general knowledge",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the color of the sky on a clear day?",
  options: ["Red", "Green", "Blue", "Yellow"],
  correctAnswer: 2,
  explanation: "The sky appears blue due to the scattering of sunlight by the atmosphere.",
  topic: "earth science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
    {
  id: uuidv4(),
  text: "What is the main source of energy for the Earth?",
  options: ["The Moon", "The Sun", "Volcanoes", "Oceans"],
  correctAnswer: 1,
  explanation: "The Sun is the primary source of energy for Earth, providing light and heat.",
  topic: "science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which animal is known as the 'King of the Jungle'?",
  options: ["Tiger", "Elephant", "Lion", "Leopard"],
  correctAnswer: 2,
  explanation: "The lion is often called the 'King of the Jungle' because of its strength and position in the food chain.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the name of the instrument used to measure temperature?",
  options: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
  correctAnswer: 1,
  explanation: "A thermometer measures temperature.",
  topic: "science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which gas do humans need to breathe to survive?",
  options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
  correctAnswer: 0,
  explanation: "Humans need oxygen to breathe and survive.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What do we call animals that eat only plants?",
  options: ["Carnivores", "Omnivores", "Herbivores", "Insectivores"],
  correctAnswer: 2,
  explanation: "Herbivores are animals that eat only plants.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the natural satellite of the Earth?",
  options: ["Mars", "The Moon", "Venus", "Jupiter"],
  correctAnswer: 1,
  explanation: "The Moon is Earth's natural satellite.",
  topic: "astronomy",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the hardest natural substance on Earth?",
  options: ["Gold", "Iron", "Diamond", "Silver"],
  correctAnswer: 2,
  explanation: "Diamond is the hardest natural substance known on Earth.",
  topic: "science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
    {
  id: uuidv4(),
  text: "Which organ in the human body is responsible for pumping blood?",
  options: ["Lungs", "Brain", "Heart", "Liver"],
  correctAnswer: 2,
  explanation: "The heart pumps blood throughout the body.",
  topic: "science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the boiling point of water at sea level?",
  options: ["100°C", "90°C", "80°C", "120°C"],
  correctAnswer: 0,
  explanation: "Water boils at 100 degrees Celsius at sea level.",
  topic: "science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main language spoken in Brazil?",
  options: ["Spanish", "Portuguese", "French", "English"],
  correctAnswer: 1,
  explanation: "Portuguese is the official language of Brazil.",
  topic: "geography",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which vitamin is produced when the skin is exposed to sunlight?",
  options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B12"],
  correctAnswer: 2,
  explanation: "Vitamin D is produced in the skin when exposed to sunlight.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What do you call a baby cat?",
  options: ["Puppy", "Cub", "Kitten", "Calf"],
  correctAnswer: 2,
  explanation: "A baby cat is called a kitten.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "How many colors are there in a rainbow?",
  options: ["5", "6", "7", "8"],
  correctAnswer: 2,
  explanation: "A rainbow has seven colors: red, orange, yellow, green, blue, indigo, and violet.",
  topic: "science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the freezing point of water?",
  options: ["0°C", "32°C", "100°C", "50°C"],
  correctAnswer: 0,
  explanation: "Water freezes at 0 degrees Celsius.",
  topic: "science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What type of animal is a frog?",
  options: ["Mammal", "Bird", "Reptile", "Amphibian"],
  correctAnswer: 3,
  explanation: "Frogs are amphibians because they live both in water and on land.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the name of the first artificial satellite launched into space?",
  options: ["Sputnik 1", "Apollo 11", "Voyager 1", "Hubble"],
  correctAnswer: 0,
  explanation: "Sputnik 1 was the first artificial satellite launched by the Soviet Union in 1957.",
  topic: "space",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which computer component is considered the brain of the computer?",
  options: ["Hard Drive", "RAM", "CPU", "GPU"],
  correctAnswer: 2,
  explanation: "The CPU (Central Processing Unit) processes all instructions from software and hardware.",
  topic: "computer",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Who was the first person to walk on the Moon?",
  options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "John Glenn"],
  correctAnswer: 1,
  explanation: "Neil Armstrong was the first human to walk on the Moon during the Apollo 11 mission in 1969.",
  topic: "space",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What does 'HTTP' stand for in computer networking?",
  options: ["HyperText Transfer Protocol", "High Transfer Text Program", "Hyper Terminal Transport Process", "Host Transfer Text Protocol"],
  correctAnswer: 0,
  explanation: "HTTP stands for HyperText Transfer Protocol, which is used for data communication on the web.",
  topic: "computer",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet in our solar system has the most moons?",
  options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
  correctAnswer: 1,
  explanation: "As of recent discoveries, Saturn has the most confirmed moons, surpassing Jupiter.",
  topic: "space",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What does CPU stand for?",
  options: ["Central Programming Unit", "Computer Processing Unit", "Central Processing Unit", "Control Processing Unit"],
  correctAnswer: 2,
  explanation: "CPU stands for Central Processing Unit, the main component that executes instructions in a computer.",
  topic: "computer",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet is known as the 'Gas Giant'?",
  options: ["Earth", "Mars", "Jupiter", "Mercury"],
  correctAnswer: 2,
  explanation: "Jupiter is a gas giant due to its massive size and gaseous composition.",
  topic: "space",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which programming language is commonly used for web development?",
  options: ["Python", "Java", "JavaScript", "C++"],
  correctAnswer: 2,
  explanation: "JavaScript is widely used for building interactive websites and web applications.",
  topic: "computer",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the name of our galaxy?",
  options: ["Andromeda", "Milky Way", "Orion", "Centauri"],
  correctAnswer: 1,
  explanation: "The Milky Way is the galaxy that contains our Solar System.",
  topic: "space",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which device stores data permanently?",
  options: ["RAM", "CPU", "Hard Drive", "Cache"],
  correctAnswer: 2,
  explanation: "A Hard Drive stores data permanently, unlike RAM or cache which are temporary.",
  topic: "computer",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet has a day longer than its year?",
  options: ["Venus", "Mars", "Mercury", "Jupiter"],
  correctAnswer: 0,
  explanation: "Venus rotates so slowly that its day is longer than its year.",
  topic: "space",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which operating system is developed by Apple?",
  options: ["Windows", "Linux", "macOS", "Android"],
  correctAnswer: 2,
  explanation: "macOS is the operating system developed by Apple for their computers.",
  topic: "computer",
  difficulty: "easy",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the name of NASA's most famous space telescope?",
  options: ["Kepler", "Hubble", "Chandra", "Voyager"],
  correctAnswer: 1,
  explanation: "The Hubble Space Telescope has provided stunning images and valuable data since 1990.",
  topic: "space",
  difficulty: "medium",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which input device is used to move a pointer on the screen?",
  options: ["Keyboard", "Scanner", "Mouse", "Printer"],
  correctAnswer: 2,
  explanation: "A mouse is a pointing device used to interact with graphical interfaces on a computer screen.",
  topic: "computer",
  difficulty: "easy",
  ageGroups: ["kids", "teens"]
},
{
  id: uuidv4(),
  text: "What is the name of the first human-made object to leave the Solar System?",
  options: ["Voyager 1", "Apollo 13", "Sputnik 2", "Galileo"],
  correctAnswer: 0,
  explanation: "Voyager 1 became the first human-made object to enter interstellar space in 2012.",
  topic: "space",
  difficulty: "hard",
  ageGroups: ["teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which organ helps us to see?",
  options: ["Ear", "Nose", "Eye", "Mouth"],
  correctAnswer: 2,
  explanation: "The eye is the organ responsible for vision.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the capital city of France?",
  options: ["Rome", "Madrid", "Paris", "Berlin"],
  correctAnswer: 2,
  explanation: "Paris is the capital city of France.",
  topic: "geography",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What tool do we use to measure temperature?",
  options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
  correctAnswer: 0,
  explanation: "A thermometer measures temperature.",
  topic: "science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which animal is known as the King of the Jungle?",
  options: ["Elephant", "Tiger", "Lion", "Leopard"],
  correctAnswer: 2,
  explanation: "The lion is called the King of the Jungle.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the chemical symbol for water?",
  options: ["H2O", "CO2", "NaCl", "O2"],
  correctAnswer: 0,
  explanation: "H2O is the chemical formula for water, consisting of two hydrogen atoms and one oxygen atom.",
  topic: "science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the largest mammal on Earth?",
  options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
  correctAnswer: 1,
  explanation: "The blue whale is the largest mammal on Earth.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What do plants need to perform photosynthesis?",
  options: ["Sunlight, Water, Carbon dioxide", "Oxygen, Water, Soil", "Sunlight, Oxygen, Nitrogen", "Water, Soil, Nitrogen"],
  correctAnswer: 0,
  explanation: "Plants need sunlight, water, and carbon dioxide to perform photosynthesis.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
    {
  id: uuidv4(),
  text: "What is the freezing point of water in Celsius?",
  options: ["0°C", "32°C", "100°C", "-10°C"],
  correctAnswer: 0,
  explanation: "Water freezes at 0 degrees Celsius under normal atmospheric pressure.",
  topic: "science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},

{
  id: uuidv4(),
  text: "Which is the tallest animal in the world?",
  options: ["Elephant", "Giraffe", "Kangaroo", "Camel"],
  correctAnswer: 1,
  explanation: "The giraffe is the tallest land animal.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main source of energy for Earth?",
  options: ["The Moon", "The Sun", "Volcanoes", "The Ocean"],
  correctAnswer: 1,
  explanation: "The Sun is the primary source of energy for Earth's climate and ecosystems.",
  topic: "science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which ocean is the largest?",
  options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
  correctAnswer: 3,
  explanation: "The Pacific Ocean is the largest ocean on Earth.",
  topic: "geography",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What do caterpillars turn into?",
  options: ["Frogs", "Butterflies", "Beetles", "Moths"],
  correctAnswer: 1,
  explanation: "Caterpillars metamorphose into butterflies.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "How many days are there in a leap year?",
  options: ["365", "366", "364", "367"],
  correctAnswer: 1,
  explanation: "A leap year has 366 days, one more than a regular year.",
  topic: "science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which planet is closest to the Sun?",
  options: ["Venus", "Mercury", "Earth", "Mars"],
  correctAnswer: 1,
  explanation: "Mercury is the closest planet to the Sun.",
  topic: "astronomy",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What do you call animals that eat only plants?",
  options: ["Carnivores", "Herbivores", "Omnivores", "Insectivores"],
  correctAnswer: 1,
  explanation: "Herbivores eat only plants.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which instrument measures rainfall?",
  options: ["Thermometer", "Barometer", "Rain gauge", "Anemometer"],
  correctAnswer: 2,
  explanation: "A rain gauge measures the amount of rainfall.",
  topic: "science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
    {
  id: uuidv4(),
  text: "What gas do humans need to breathe to survive?",
  options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
  correctAnswer: 0,
  explanation: "Humans need oxygen to breathe and survive.",
  topic: "science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which part of the human body controls thoughts and emotions?",
  options: ["Heart", "Brain", "Lungs", "Liver"],
  correctAnswer: 1,
  explanation: "The brain controls thoughts, emotions, and bodily functions.",
  topic: "science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which is the fastest land animal?",
  options: ["Lion", "Cheetah", "Tiger", "Elephant"],
  correctAnswer: 1,
  explanation: "The cheetah is the fastest land animal, capable of speeds up to 70 mph.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What do plants need to grow?",
  options: ["Sunlight", "Water", "Soil", "All of the above"],
  correctAnswer: 3,
  explanation: "Plants need sunlight, water, and soil nutrients to grow.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which color do you get by mixing red and white?",
  options: ["Pink", "Purple", "Orange", "Brown"],
  correctAnswer: 0,
  explanation: "Mixing red and white produces the color pink.",
  topic: "arts",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the main source of light for Earth during the day?",
  options: ["The Moon", "Stars", "The Sun", "Lightning"],
  correctAnswer: 2,
  explanation: "The Sun is the main source of light during the day.",
  topic: "astronomy",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "How many legs does a spider have?",
  options: ["6", "8", "10", "12"],
  correctAnswer: 1,
  explanation: "Spiders have eight legs.",
  topic: "biology",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "What is the name of the process by which water changes from liquid to gas?",
  options: ["Condensation", "Evaporation", "Precipitation", "Freezing"],
  correctAnswer: 1,
  explanation: "Evaporation is when water changes from liquid to gas.",
  topic: "science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
},
{
  id: uuidv4(),
  text: "Which organ pumps blood throughout the human body?",
  options: ["Lungs", "Heart", "Kidneys", "Liver"],
  correctAnswer: 1,
  explanation: "The heart pumps blood throughout the body.",
  topic: "science",
  difficulty: "easy",
  ageGroups: ["kids", "teens", "adults"]
}

];