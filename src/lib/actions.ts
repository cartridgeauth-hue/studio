
'use server';

import {
  generateBlogContent,
  type GenerateBlogContentInput,
} from '@/ai/flows/blog-content-generation';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email.'),
  problemType: z.string().min(1, 'Please select a problem type.'),
  description: z.string().min(10, 'Description must be at least 10 characters.'),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    problemType: formData.get('problemType'),
    description: formData.get('description'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  // Here you would typically send an email or save to a database.
  // For this example, we'll just log it and return a success message.
  console.log('Contact form submitted:', validatedFields.data);

  return { message: 'Thank you for your message! We will get back to you soon.' };
}

export async function generateBlogContentAction(input: GenerateBlogContentInput) {
  try {
    const output = await generateBlogContent(input);
    return { success: true, data: output };
  } catch (error) {
    console.error('Error generating blog content:', error);
    return { success: false, error: 'Failed to generate blog content.' };
  }
}
