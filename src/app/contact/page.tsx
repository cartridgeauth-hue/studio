import ContactForm from "@/components/contact/ContactForm";
import ScrollAnimationWrapper from "@/components/shared/ScrollAnimationWrapper";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <ScrollAnimationWrapper>
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-center mb-4">Contact Us</h1>
                <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                    Have a question or need to book a consultation? Fill out the form below or reach out to us directly. We're here to help.
                </p>
            </ScrollAnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <ScrollAnimationWrapper>
                    <div className="bg-card p-8 rounded-lg h-full">
                        <h2 className="font-headline text-2xl font-bold mb-6">Get in Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <Mail className="w-6 h-6 text-accent" />
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <a href="mailto:contact@theledgerco.in" className="text-muted-foreground hover:text-accent transition-colors">
                                        contact@theledgerco.in
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="w-6 h-6 text-accent" />
                                <div>
                                    <h3 className="font-semibold">Phone</h3>
                                    <p className="text-muted-foreground">(123) 456-7890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper>
                    <div className="bg-card p-8 rounded-lg">
                        <h2 className="font-headline text-2xl font-bold mb-6">Send us a Message</h2>
                        <ContactForm />
                    </div>
                </ScrollAnimationWrapper>
            </div>
        </div>
    );
}
