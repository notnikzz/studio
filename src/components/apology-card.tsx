"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart, Mail, Camera, MessageSquareHeart } from 'lucide-react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ApologyCard() {
  const [isMounted, setIsMounted] = useState(false);
  const [showApology, setShowApology] = useState(false);
  const [showPictures, setShowPictures] = useState(false);
  const [showLoveMessage, setShowLoveMessage] = useState(false);

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

  const cardContent = (
    <>
      <div className="flex flex-col items-center gap-4">
        {!showApology && (
          <Button
            onClick={() => setShowApology(true)}
            size="lg"
            className="bg-primary/90 hover:bg-primary text-primary-foreground animate-pulse"
          >
            <Mail className="mr-2" /> A message for you
          </Button>
        )}

        {showApology && (
          <>
            <div className="text-center space-y-4 text-foreground/80 font-body text-lg animate-fade-in">
              <p>I'm so sorry for hurting you.</p>
            </div>
            {!showPictures && (
              <Button
                onClick={() => setShowPictures(true)}
                size="lg"
                className="bg-primary/90 hover:bg-primary text-primary-foreground mt-4 animate-pulse"
              >
                <Camera className="mr-2" /> See our memories
              </Button>
            )}
          </>
        )}
      </div>

      {showPictures && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in items-center">
          <div className="space-y-6">
            {nikhilUrvashePhoto && (
              <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
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
          </div>
          <div className="grid grid-rows-2 gap-6">
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
      )}

      {showPictures && !showLoveMessage && (
        <div className="text-center mt-8">
          <Button
            onClick={() => setShowLoveMessage(true)}
            size="lg"
            className="bg-primary/90 hover:bg-primary text-primary-foreground animate-pulse"
          >
            <MessageSquareHeart className="mr-2" /> My promise to you
          </Button>
        </div>
      )}

      {showLoveMessage && (
        <div className="text-center mt-8 space-y-4 animate-fade-in">
          <p className="text-lg text-foreground/80">
            Please, can you find it in your heart to forgive me? I promise to be
            better, to be the man you deserve.
          </p>
          <p className="text-2xl font-headline text-primary">I love you.</p>
        </div>
      )}
    </>
  );

  return (
    <div
      className={cn(
        'transition-all duration-1000 ease-in-out',
        isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      )}
    >
      <Card className="w-full max-w-4xl mx-auto bg-card/80 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden border-primary/10">
        <div className="flex flex-col p-8 md:p-12">
          <CardHeader className="p-0 mb-6 text-center">
            <CardTitle className="font-headline text-4xl md:text-5xl text-primary">
              To My Dearest Urvashe,
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex-grow">
            {cardContent}
          </CardContent>
          <CardFooter className="p-0 mt-auto pt-8 flex flex-col items-center gap-2">
            <p className="font-headline text-2xl text-foreground">
              With all my love and sincerity,
            </p>
            <p className="font-headline text-3xl text-primary/90">Nikhil</p>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}
