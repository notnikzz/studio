import { ApologyCard } from '@/components/apology-card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 md:p-8 font-body relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse-slow"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-accent/10 rounded-full filter blur-3xl opacity-50 animate-pulse-slow"
        style={{ animationDelay: '2.5s' }}
      ></div>
      <div className="z-10 w-full">
        <ApologyCard />
      </div>
    </main>
  );
}
