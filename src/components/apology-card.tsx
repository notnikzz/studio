"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

// In a real app, this would be fetched from the AI flow.
const aiEnhancedDesignDescription =
  "To capture the depth of Nikhil's feelings, the design uses a soft, romantic color palette of rose and cream. The 'Alegreya' font adds a touch of classic elegance, reflecting the seriousness of his message. The main photo of you both is central, symbolizing your connection. Nikhil's smiling photo is given a gentle pulse, a visual heartbeat showing his sincere love. The 'fan and roof' photo is a nod to a private, shared memory, adding a layer of personal intimacy. The 'Cute Bar' is a joyful celebration of the day his feelings began. Every element is woven together to create a tapestry of apology, love, and heartfelt commitment.";

export function ApologyCard() {
  const [isMounted, setIsMounted] = useState(false);
  const nikhilUrvashePhoto = PlaceHolderImages.find(
    (p) => p.id === 'nikhil-urvashe'
  );
  const fanRoofPhoto = PlaceHolderImages.find((p) => p.id === 'fan-roof');
  const nikhilSmilingPhoto = PlaceHolderImages.find(
    (p) => p.id === 'nikhil-smiling'
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={cn(
        'transition-all duration-1000 ease-in-out',
        isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      )}
    >
      <Card className="w-full max-w-5xl mx-auto bg-card/80 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden border-primary/10">
        <div className="grid md:grid-cols-5">
          <div className="md:col-span-3 p-8 md:p-12 flex flex-col">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="font-headline text-4xl md:text-5xl text-primary">
                To My Dearest Urvashe,
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-grow space-y-6 text-lg text-foreground/80 font-body">
              <p>
                I am so incredibly sorry. My actions were thoughtless, and I
                deeply regret the hurt I've caused you. There's no excuse for
                it, and I want to be completely open and honest with you.
              </p>
              <p>
                You are the most important person in my life, and the thought of
                a world without your smile is unbearable. I am serious about
                you, about us, and about building a future together. This isn't
                just a fleeting feeling; it's a deep and profound love that has
                grown since the very first moment I realized I liked you.
              </p>
              <div className="!my-8">
                <div className="bg-primary text-primary-foreground p-4 rounded-xl text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-center gap-3">
                    <Heart className="w-6 h-6 animate-pulse" />
                    <p className="font-headline text-xl">September 8th</p>
                    <Heart className="w-6 h-6 animate-pulse" />
                  </div>
                  <p className="text-sm text-primary-foreground/80 mt-1">
                    The day I started liking you
                  </p>
                </div>
              </div>
              <p>
                Please, can you find it in your heart to forgive me? I promise
                to be better, to be the man you deserve.
              </p>
            </CardContent>
            <CardFooter className="p-0 mt-auto pt-8 flex flex-col items-start gap-2">
              <p className="font-headline text-2xl text-foreground">
                With all my love and sincerity,
              </p>
              <p className="font-headline text-3xl text-primary/90">Nikhil</p>
            </CardFooter>
          </div>
          <div className="md:col-span-2 bg-secondary/30 p-6 md:p-8 flex flex-col items-center justify-center gap-6">
            {nikhilUrvashePhoto && (
              <div className="w-full rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src={nikhilUrvashePhoto.imageUrl}
                  alt={nikhilUrvashePhoto.description}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={nikhilUrvashePhoto.imageHint}
                  priority
                />
              </div>
            )}
            <div className="grid grid-cols-2 gap-6 w-full">
              {nikhilSmilingPhoto && (
                <div className="rounded-2xl overflow-hidden shadow-xl animate-pulse-slow">
                  <Image
                    src={nikhilSmilingPhoto.imageUrl}
                    alt={nikhilSmilingPhoto.description}
                    width={400}
                    height={600}
                    className="w-full h-auto object-cover"
                    data-ai-hint={nikhilSmilingPhoto.imageHint}
                  />
                </div>
              )}
              {fanRoofPhoto && (
                <div className="rounded-2xl overflow-hidden shadow-xl transform hover:rotate-3 hover:scale-110 transition-transform duration-500">
                  <Image
                    src={fanRoofPhoto.imageUrl}
                    alt={fanRoofPhoto.description}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    data-ai-hint={fanRoofPhoto.imageHint}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="p-4 md:px-8 md:pb-8 border-t border-primary/10">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="text-primary/80 hover:text-primary hover:no-underline text-sm">
                A Note on the Design
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 font-body">
                {aiEnhancedDesignDescription}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Card>
    </div>
  );
}
