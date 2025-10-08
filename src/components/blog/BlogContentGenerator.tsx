'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { generateBlogContentAction } from '@/lib/actions';
import { Sparkles, Loader2 } from 'lucide-react';
import { Textarea } from '../ui/textarea';

const FormSchema = z.object({
  topic: z.string().min(5, 'Topic must be at least 5 characters.'),
  keywords: z.string().min(3, 'Keywords must be at least 3 characters.'),
  tone: z.string().min(3, 'Tone must be at least 3 characters.'),
  style: z.string().min(3, 'Style must be at least 3 characters.'),
  targetAudience: z.string().min(5, 'Target Audience must be at least 5 characters.'),
});

type FormValues = z.infer<typeof FormSchema>;

export default function BlogContentGenerator() {
  const [generatedContent, setGeneratedContent] = useState<{ title: string; content: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      topic: '',
      keywords: '',
      tone: 'Informative',
      style: 'Journalistic',
      targetAudience: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setGeneratedContent(null);
    
    const result = await generateBlogContentAction(data);

    if (result.success && result.data) {
      setGeneratedContent(result.data);
      // Populate the main editor fields
      const titleInput = document.getElementById('title') as HTMLInputElement;
      const contentTextarea = document.getElementById('content') as HTMLTextAreaElement;
      if (titleInput) titleInput.value = result.data.title;
      if (contentTextarea) contentTextarea.value = result.data.content;

    } else {
      setError(result.error || 'An unknown error occurred.');
    }
    setIsLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <Sparkles className="text-accent" />
          AI Content Assistant
        </CardTitle>
        <CardDescription>
          Fill in the details below to generate a draft for your blog post.
        </CardDescription>
      </CardHeader>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="topic">Topic</Label>
            <Input id="topic" placeholder="e.g., Understanding GST for small businesses" {...form.register('topic')} />
            {form.formState.errors.topic && <p className="text-sm text-destructive">{form.formState.errors.topic.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="keywords">Keywords</Label>
            <Input id="keywords" placeholder="e.g., GST, small business, tax compliance" {...form.register('keywords')} />
             {form.formState.errors.keywords && <p className="text-sm text-destructive">{form.formState.errors.keywords.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="tone">Tone</Label>
            <Input id="tone" {...form.register('tone')} />
             {form.formState.errors.tone && <p className="text-sm text-destructive">{form.formState.errors.tone.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="style">Style</Label>
            <Input id="style" {...form.register('style')} />
             {form.formState.errors.style && <p className="text-sm text-destructive">{form.formState.errors.style.message}</p>}
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="targetAudience">Target Audience</Label>
            <Input id="targetAudience" placeholder="e.g., Freelancers and startup founders" {...form.register('targetAudience')} />
             {form.formState.errors.targetAudience && <p className="text-sm text-destructive">{form.formState.errors.targetAudience.message}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <Loader2 className="animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
            {isLoading ? 'Generating...' : 'Generate Content'}
          </Button>
          {error && <p className="text-sm text-destructive">{error}</p>}
        </CardFooter>
      </form>
    </Card>
  );
}
