// Utility function to shuffle an array using Fisher-Yates algorithm
export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Function to randomize questions order
export function randomizeQuestions(questions) {
  return shuffleArray(questions);
}

// Function to randomize options for a single question
export function randomizeOptions(question) {
  const { options, answer } = question;

  // Create array of option indices
  const optionIndices = options.map((_, index) => index);

  // Shuffle the indices
  const shuffledIndices = shuffleArray(optionIndices);

  // Create new options array with shuffled options
  const shuffledOptions = shuffledIndices.map((index) => options[index]);

  // Find the new index of the correct answer
  const newAnswerIndex = shuffledIndices.indexOf(answer);

  return {
    ...question,
    options: shuffledOptions,
    answer: newAnswerIndex,
  };
}

// Function to randomize all questions and their options
export function randomizeQuiz(questions) {
  // First randomize the order of questions
  const shuffledQuestions = randomizeQuestions(questions);

  // Then randomize options for each question
  return shuffledQuestions.map((question) => randomizeOptions(question));
}
