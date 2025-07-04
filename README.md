# 🕹️ React Arcade Quiz App

Welcome to **React Arcade Quiz** — the ultimate retro challenge for React devs! 🚀

> **Test your skills. Beat the clock. Climb the leaderboard. Become a Quiz Champion!**

---

## 👾 What is This?

A fast-paced, neon-lit quiz game built with React, styled like a classic arcade cabinet. Answer questions, race against the timer, and rack up your high score — all with pixel-perfect, animated flair!

---

## 🎮 Features

- **Arcade Vibes:** Neon gradients, animated buttons, spinning React logo, and emoji-powered feedback.
- **Quiz Flow:**
  1. **Insert Coin** (Start Screen)
  2. **Loading...** (Animated Pencil Loader)
  3. **Quiz Battle** (Answer questions, beat the timer)
  4. **Game Over** (Results with progress ring & emoji)
  5. **Review Answers** (See what you got right & wrong)
  6. **Play Again!**
- **Scoring:** Points per question, instant feedback, and a celebratory or encouraging result message.
- **Timer:** Adds urgency, just like a classic arcade countdown.
- **Responsive:** Looks awesome on any device.
- **Error Handling:** Fun, animated error screen if something goes wrong.

---

## 🛠️ Tech Stack

- **React 19** + **Vite** (blazing fast!)
- **Tailwind CSS** & **styled-components** (for those sweet gradients & effects)
- **react-icons** (for arcade-style icons)
- **json-server** (mock API for questions)
- **ESLint** (code quality)

---

## 🚦 How to Play

1. **Clone this repo:**
   ```bash
   git clone <your-repo-url>
   cd QuizReactApp
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the question server:**
   ```bash
   npm run server
   # (Runs on http://localhost:3001)
   ```
4. **Start the app:**
   ```bash
   npm run dev
   # (Runs on http://localhost:5173)
   ```
5. **Insert Coin!** Hit "Start Quiz" and let the games begin!

---

## 🏆 Game Flow

- **Start Screen:** Spinning React logo, neon title, and a glowing "Start Quiz" button.
- **Loading:** Animated pencil loader (get ready!).
- **Quiz:**
  - Multiple choice questions.
  - Click to select, then submit.
  - Timer ticks down — don't let it hit zero!
  - Score and progress shown in the navbar.
- **Results:**
  - Circular progress bar with your score %.
  - Emoji and message based on your performance (from "💔" to "🏆").
  - Try again or review your answers.
- **Review:**
  - See each question, your answer, and the correct answer — with emoji feedback.

---

## 📝 Questions Format

Questions are stored in `src/assets/questions.json`:

```json
{
  "questions": [
    {
      "id": 1,
      "question": "What is the most popular library for building user interfaces in JavaScript?",
      "options": ["Angular", "Vue", "React", "Svelte"],
      "answer": 2,
      "points": 10
    },
    ...
  ]
}
```

---

## 💡 Customization

- Add your own questions to `src/assets/questions.json`.
- Tweak styles in `App.css`, `index.css`, or component files for your own arcade flavor!

---

## 🧑‍💻 Contributing

PRs welcome! Add new features, more arcade effects, or extra quiz modes!

---

## 📜 License

MIT — Free to play, free to remix!

---

## 👑 High Score Hall of Fame

_Can you beat your best?_ Share your score and challenge your friends!

---

**Built with 💙, ⚡, and a love for classic games!**
