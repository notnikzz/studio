import { ApologyCard } from '@/components/apology-card';
import { Heart } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 md:p-8 font-body relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background z-0"></div>

      {/* Floating hearts */}
      {Array.from({ length: 15 }).map((_, i) => (
        <Heart
          key={i}
          className="absolute text-primary/20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}rem`,
            height: `${Math.random() * 3 + 1}rem`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 10 + 10}s`,
          }}
          fill="currentColor"
        />
      ))}

      <div className="z-10 w-full">
        <ApologyCard />
      </div>
    </main>
  );
}
