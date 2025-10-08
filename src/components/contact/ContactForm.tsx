'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '../ui/alert';

const initialState = {
  message: null,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: 'Success!',
        description: state.message,
      });
    }
    if (state.errors && Object.keys(state.errors).length > 0) {
        const errorMessages = Object.values(state.errors).flat().join(' ');
        toast({
            variant: "destructive",
            title: "Error submitting form",
            description: errorMessages,
        })
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <Input type="text" name="name" placeholder="Your Name" aria-label="Your Name" />
        {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
      </div>
      <div>
        <Input type="email" name="email" placeholder="Your Email" aria-label="Your Email" />
        {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
      </div>
      <div>
        <Select name="problemType">
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="epfo">EPFO Queries</SelectItem>
            <SelectItem value="esic">ESIC Queries</SelectItem>
            <SelectItem value="estamps">Issuance of eStamps</SelectItem>
            <SelectItem value="income-tax">Income Tax Queries</SelectItem>
            <SelectItem value="gst">GST Queries</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {state.errors?.problemType && <p className="text-sm text-destructive mt-1">{state.errors.problemType[0]}</p>}
      </div>
      <div>
        <Textarea name="description" placeholder="Describe your issue" aria-label="Describe your issue" rows={4} />
        {state.errors?.description && <p className="text-sm text-destructive mt-1">{state.errors.description[0]}</p>}
      </div>
      <SubmitButton />
    </form>
  );
}
