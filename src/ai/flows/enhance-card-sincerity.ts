'use server';

/**
 * @fileOverview Enhances the digital apology card's design and presentation using AI to convey deep sincerity and reflect the seriousness of Nikhil's feelings towards Urvashe.
 *
 * - enhanceCardSincerity - A function that enhances the card with AI.
 * - EnhanceCardSincerityInput - The input type for the enhanceCardSincerity function.
 * - EnhanceCardSincerityOutput - The return type for the enhanceCardSincerity function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceCardSincerityInputSchema = z.object({
  heartfeltMessage: z.string().describe('The heartfelt apology message from Nikhil to Urvashe.'),
  cuteBarHighlight: z.string().describe('The date (8th September) Nikhil started liking Urvashe, to be highlighted in the cute bar.'),
  photo1DataUri: z.string().describe("A photo of Urvashe and Nikhil together, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
  photo2DataUri: z.string().describe("A photo of fan and roof, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
  photo3DataUri: z.string().describe("A photo of Nikhil smiling to show sincerity, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
  cardColors: z.object({
    primaryColor: z.string().describe('The primary color of the card (soft rose).'),
    backgroundColor: z.string().describe('The background color of the card (light cream).'),
    accentColor: z.string().describe('The accent color of the card (dusty rose).'),
  }).describe('Color scheme for the card'),
  font: z.string().describe('The font to be used for the card (Alegreya).'),
});

export type EnhanceCardSincerityInput = z.infer<typeof EnhanceCardSincerityInputSchema>;

const EnhanceCardSincerityOutputSchema = z.object({
  enhancedDesignDescription: z.string().describe('A description of the enhanced card design, incorporating sincerity and reflecting Nikhil\s feelings.'),
});

export type EnhanceCardSincerityOutput = z.infer<typeof EnhanceCardSincerityOutputSchema>;

export async function enhanceCardSincerity(input: EnhanceCardSincerityInput): Promise<EnhanceCardSincerityOutput> {
  return enhanceCardSincerityFlow(input);
}

const enhanceCardSincerityPrompt = ai.definePrompt({
  name: 'enhanceCardSincerityPrompt',
  input: {schema: EnhanceCardSincerityInputSchema},
  output: {schema: EnhanceCardSincerityOutputSchema},
  prompt: `As Nikhil, enhance the design and presentation of a digital apology card to convey deep sincerity and reflect the seriousness of my feelings towards Urvashe. Use the following information to guide the design:

Heartfelt Message: {{{heartfeltMessage}}}
Cute Bar Highlight: {{{cuteBarHighlight}}}
Photo 1 (Urvashe and Nikhil): {{media url=photo1DataUri}}
Photo 2 (Fan and Roof): {{media url=photo2DataUri}}
Photo 3 (Nikhil Smiling): {{media url=photo3DataUri}}
Card Colors: Primary - {{{cardColors.primaryColor}}}, Background - {{{cardColors.backgroundColor}}}, Accent - {{{cardColors.accentColor}}}
Font: {{{font}}}

Considering these elements, provide a description of the enhanced card design that ensures it conveys deep sincerity and expresses the seriousness of my apology and love for Urvashe. The card is written by Nikhil.
`,
});

const enhanceCardSincerityFlow = ai.defineFlow(
  {
    name: 'enhanceCardSincerityFlow',
    inputSchema: EnhanceCardSincerityInputSchema,
    outputSchema: EnhanceCardSincerityOutputSchema,
  },
  async input => {
    const {output} = await enhanceCardSincerityPrompt(input);
    return output!;
  }
);
