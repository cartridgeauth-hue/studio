'use server';

/**
 * @fileOverview A blog content generation AI agent.
 *
 * - generateBlogContent - A function that handles the blog content generation process.
 * - GenerateBlogContentInput - The input type for the generateBlogContent function.
 * - GenerateBlogContentOutput - The return type for the generateBlogContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogContentInputSchema = z.object({
  topic: z.string().describe('The topic of the blog post.'),
  keywords: z.string().describe('Keywords related to the blog post.'),
  tone: z.string().describe('The desired tone of the blog post (e.g., informative, persuasive, humorous).'),
  style: z.string().describe('The writing style of the blog post (e.g., journalistic, academic, personal).'),
  targetAudience: z.string().describe('The target audience for the blog post.'),
});
export type GenerateBlogContentInput = z.infer<typeof GenerateBlogContentInputSchema>;

const GenerateBlogContentOutputSchema = z.object({
  title: z.string().describe('The title of the blog post.'),
  content: z.string().describe('The generated content of the blog post.'),
});
export type GenerateBlogContentOutput = z.infer<typeof GenerateBlogContentOutputSchema>;

const shouldPerformResearch = ai.defineTool({
  name: 'shouldPerformResearch',
  description: 'Determines whether to perform topic research and competitor analysis based on the topic and target audience.',
  inputSchema: z.object({
    topic: z.string().describe('The topic of the blog post.'),
    targetAudience: z.string().describe('The target audience for the blog post.'),
  }),
  outputSchema: z.boolean().describe('Whether to perform topic research and competitor analysis.'),
}, async (input) => {
  // In a real application, this would involve calling an external API or service to
  // perform topic research and competitor analysis.
  // For this example, we simply return a boolean value based on the topic and target audience.
  return input.topic.length < 5 || input.targetAudience.length < 5;
});

export async function generateBlogContent(input: GenerateBlogContentInput): Promise<GenerateBlogContentOutput> {
  return generateBlogContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogContentPrompt',
  input: {schema: GenerateBlogContentInputSchema},
  output: {schema: GenerateBlogContentOutputSchema},
  prompt: `You are an expert blog content writer. Your goal is to create high-quality and engaging blog posts based on the given topic, keywords, tone, style and target audience.

Topic: {{{topic}}}
Keywords: {{{keywords}}}
Tone: {{{tone}}}
Style: {{{style}}}
Target Audience: {{{targetAudience}}}

Write a blog post with a title and content.

If the shouldPerformResearch tool returned true, then make sure to incorporate it in the blog post.
Title:
Content:`, 
  tools: [shouldPerformResearch],
});

const generateBlogContentFlow = ai.defineFlow(
  {
    name: 'generateBlogContentFlow',
    inputSchema: GenerateBlogContentInputSchema,
    outputSchema: GenerateBlogContentOutputSchema,
  },
  async input => {
    const shouldResearch = await shouldPerformResearch({
      topic: input.topic,
      targetAudience: input.targetAudience,
    });

    const {output} = await prompt({
      ...input,
    });
    return output!;
  }
);
