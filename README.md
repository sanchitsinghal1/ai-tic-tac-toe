#  Unbeatable AI Tic-Tac-Toe

> **The Challenge:** I bet you can't win. (Spoiler: The best you can get is a Draw )

Welcome to my take on the classic Tic-Tac-Toe! I built this project not just to make a game, but to challenge myself with complex state management in **React** and understand how Game AI works under the hood.

It uses the **Minimax Algorithm**, which basically means this AI has read the future and already knows how to block your next move.

##  Why I Built This?
Honestly, I was tired of building simple "To-Do List" apps. I wanted to build something that required **logic, recursion, and real-time decision making**.
- **The Struggle:** Wrapping my head around the recursive calls for the Minimax algorithm was tricky at first!
- **The Eureka Moment:** Watching the AI finally block my winning move for the first time felt amazing.

##  Key Features
- ** Unbeatable AI:** It calculates every possible outcome. You literally cannot win against the 'Impossible' mode.
- ** Zero Lag:** Optimized React hooks (`useState`, `useEffect`) ensure smooth gameplay.
- ** Clean UI:** Minimalist design that looks great on both Mobile & Desktop.
- ** Modes:**
  - **Human vs AI:** Test your skills against the computer.
  - **Human vs Human:** Play with a friend (because sometimes it's nice to actually win).

##  How it Works (The Logic)
The AI uses the **Minimax Algorithm**, a concept from Game Theory:
1. It simulates **all possible future moves** in the game tree.
2. It assigns a score: **+10** (AI Wins), **-10** (AI Loses), **0** (Draw).
3. It always picks the move that maximizes its score while minimizing yours.
*(Basically, it thinks 10 steps ahead of you!)*

##  Tech Stack
- **Frontend:** React.js
- **Styling:** CSS3 (Modern Flexbox/Grid)
- **Deployment:** Vercel

## How to Run Locally
Want to tweak the code or try to beat the logic locally?

1. Clone the repo:
   ```bash
   git clone https://github.com/sanchitsinghal1/ai-tic-tac-toe.git
Install dependencies:
Bash
npm install

Start the game:
Bash
npm start
👨‍💻 Connect with Me
Built with ❤️ and a lot of coffee by Sanchit Singhal.

If you enjoyed the challenge, feel free to drop a ⭐ Star on this repo!
