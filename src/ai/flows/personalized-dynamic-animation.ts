'use server';

/**
 * @fileOverview Dynamically renders and personalizes the animation in the apology card using AI.
 *
 * - personalizedDynamicAnimation - A function that handles the dynamic animation rendering and personalization.
 * - PersonalizedDynamicAnimationInput - The input type for the personalizedDynamicAnimation function.
 * - PersonalizedDynamicAnimationOutput - The return type for the personalizedDynamicAnimation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedDynamicAnimationInputSchema = z.object({
  message: z.string().describe('The heartfelt message expressing apology and love.'),
  cuteBarHighlight: z.string().describe('A special element highlighting a date or event.'),
  photo1DataUri: z
    .string()
    .describe(
      "A photo of Nikhil and Urvashe, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
    photo2DataUri: z
    .string()
    .describe(
      "A photo of fan and roof, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
    photo3DataUri: z
    .string()
    .describe(
      "A photo of Nikhl smiling, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  colorScheme: z.string().describe('The color scheme for the card.'),
  animationStyle: z.string().describe('The desired style of animation.'),
});
export type PersonalizedDynamicAnimationInput = z.infer<typeof PersonalizedDynamicAnimationInputSchema>;

const PersonalizedDynamicAnimationOutputSchema = z.object({
  animationDataUri: z
    .string()
    .describe(
      'The data URI of the dynamically rendered and personalized animation, including MIME type and Base64 encoding.'
    ),
});
export type PersonalizedDynamicAnimationOutput = z.infer<typeof PersonalizedDynamicAnimationOutputSchema>;

export async function personalizedDynamicAnimation(input: PersonalizedDynamicAnimationInput): Promise<PersonalizedDynamicAnimationOutput> {
  return personalizedDynamicAnimationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedDynamicAnimationPrompt',
  input: {schema: PersonalizedDynamicAnimationInputSchema},
  output: {schema: PersonalizedDynamicAnimationOutputSchema},
  prompt: `As Nikhil, create a unique and heartwarming animation for Urvashe, generating a base64 data URI for the animation.

  Message: {{{message}}}
  Cute Bar Highlight: {{{cuteBarHighlight}}}
  Photo 1: {{media url=photo1DataUri}}
  Photo 2: {{media url=photo2DataUri}}
  Photo 3: {{media url=photo3DataUri}}
  Color Scheme: {{{colorScheme}}}
  Animation Style: {{{animationStyle}}}

  Ensure the animation style matches the described style and color scheme to express the depth of sincerity and love.
`,
});

const personalizedDynamicAnimationFlow = ai.defineFlow(
  {
    name: 'personalizedDynamicAnimationFlow',
    inputSchema: PersonalizedDynamicAnimationInputSchema,
    outputSchema: PersonalizedDynamicAnimationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
