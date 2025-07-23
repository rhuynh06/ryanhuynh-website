import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const techStackIcons = [
  "/tech/js.svg",
  "/tech/html.svg",
  "/tech/css.svg",
  "/tech/pygame.svg",
  "/tech/python.svg",
  "/tech/gemini.svg",
  "/tech/react.svg",
  "/tech/lambda.svg",
  "/tech/bedrock.svg",
  "/tech/polly.svg",
  "/tech/gateway.svg",
  "/tech/iam.svg",
  "/tech/vite.svg",
  "/tech/tensorflow.svg",
  "/tech/flask.svg",
  "/tech/sqlalchemy.svg",
  "/tech/tailwind.svg",
  "/tech/fastapi.svg",
  "/tech/express.svg",
  "/tech/prisma.svg",
  "/tech/mantine.svg",
  "/tech/nextjs.svg",
  "/tech/socketio.svg",
  "/tech/livekit.svg",
  "/tech/uploadthing.png",
  "/tech/supabase.svg",
  "/tech/postgresql.svg",
  "/tech/numpy.svg",
  "/tech/pandas.svg",
  "/tech/seaborn.svg",
  "/tech/mathplotlib.svg"
];

const personalLoadingMessages = [
  "Ryan's AI agents booting up...",
  "Compiling PyTorch & Prisma stacks...",
  "Wiring up PostgreSQL neural nets...",
  "Spinning React components into shape...",
  "Cooking up Tailwind styles...",
  "FastAPI servers warming up...",
  "Deploying LevelNotes productivity boosters...",
  "Syncing with Supabase cloud storage...",
  "AwakenChat audio channels tuning...",
  "Injecting caffeine into code veins...",
];

const ICON_SIZE = 40;

type Position = { x: number; y: number };
type Velocity = { vx: number; vy: number };

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

// Custom hook to type out text letter-by-letter
function useTypewriter(text: string, speed = 80) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const positions = useRef<Position[]>([]);
  const velocities = useRef<Velocity[]>([]);
  const [, setTick] = useState(0);

  // Initialize positions and velocities once
  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    positions.current = techStackIcons.map(() => ({
      x: randomBetween(0, w - ICON_SIZE),
      y: randomBetween(0, h - ICON_SIZE),
    }));

    velocities.current = techStackIcons.map(() => ({
      vx: randomBetween(-1.8, 1.8),
      vy: randomBetween(-1.8, 1.8),
    }));
  }, []);

  // Animation loop for bouncing icons
  useEffect(() => {
    let animationFrameId: number;

    const update = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      positions.current.forEach((pos, i) => {
        let { x, y } = pos;
        let { vx, vy } = velocities.current[i];

        x += vx;
        y += vy;

        if (x <= 0) {
          x = 0;
          vx = -vx;
        } else if (x >= w - ICON_SIZE) {
          x = w - ICON_SIZE;
          vx = -vx;
        }

        if (y <= 0) {
          y = 0;
          vy = -vy;
        } else if (y >= h - ICON_SIZE) {
          y = h - ICON_SIZE;
          vy = -vy;
        }

        positions.current[i] = { x, y };
        velocities.current[i] = { vx, vy };
      });

      setTick((tick) => tick + 1);
      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Progress bar increment
  useEffect(() => {
    const totalDuration = 4250; // ms total
    const intervalMs = 20; // interval period in ms
    const steps = totalDuration / intervalMs; // total number of increments
    const increment = 100 / steps; // progress increment per step

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += increment;
      setProgress(Math.min(currentProgress, 100));
      if (currentProgress >= 100) clearInterval(interval);
    }, intervalMs);

    return () => clearInterval(interval);
  }, []);

  // Cycle loading messages
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((i) => (i + 1) % personalLoadingMessages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect for subtitle
  const subtitle = useTypewriter("Building AI-powered dreams...", 100);

  // Keyboard handlers for Refresh (R)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "r") {
        window.location.reload();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-black text-green-400 font-mono overflow-hidden select-none">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-cover animate-pulse"
        aria-hidden="true"
      />

      {/* Bouncing tech stack icons */}
      {positions.current.map((pos, i) => (
        <motion.img
          key={i}
          src={techStackIcons[i]}
          alt={`tech-icon-${i}`}
          className="w-10 h-10 absolute z-10 pointer-events-none filter drop-shadow-[0_0_6px_rgba(81,255,81,0.9)]"
          style={{ top: pos.y, left: pos.x }}
          whileHover={{ scale: 1.4, y: pos.y - 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          draggable={false}
        />
      ))}

      {/* Centered content */}
      <div className="fixed inset-0 flex flex-col justify-center items-center z-20 px-4 text-center select-text">
        <h1 className="text-6xl font-extrabold text-green-400 drop-shadow-[0_0_20px_rgba(0,255,0,0.8)] mb-3">
          Ryan Huynh
        </h1>
        <h2 className="text-xl font-mono italic text-green-300 mb-10 min-h-[28px]">
          {subtitle}&nbsp;
          <span className="blinking-cursor">|</span>
        </h2>

        <Loader2 className="animate-spin text-green-500 w-12 h-12 mb-6" />

        <p className="text-lg max-w-md mx-auto mb-6">
          {personalLoadingMessages[messageIndex]}
        </p>

        <div className="w-72 h-2 bg-green-900 rounded-full overflow-hidden border border-green-500 shadow-inner mb-10">
          <motion.div
            className="h-full bg-gradient-to-r from-green-400 via-green-500 to-green-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.25 }}
          />
        </div>
      </div>

      {/* Footer with GitHub link */}
      <footer className="fixed bottom-3 left-1/2 -translate-x-1/2 text-xs text-green-700 z-20 select-none opacity-70">
        Powered by passion & code •{" "}
        <a
          href="https://github.com/rhuynh06"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-green-400"
        >
          GitHub
        </a>
      </footer>

      <style>{`
        .blinking-cursor {
          animation: blink 1.2s step-start 0s infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
