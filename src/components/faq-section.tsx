"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const faqs = [
    {
      question: "What if I already have LinkedIn?",
      answer:
        "LinkedIn is a great starting point, but it's a crowded platform where your profile competes with millions of others. YourFolio creates a dedicated space that you control, showcasing your work in a way LinkedIn can't. It complements your LinkedIn profile by providing a more in-depth look at your skills and accomplishments.",
    },
    {
      question: "Will this actually help me get hired?",
      answer:
        "Absolutely. Our clients report a 3x increase in interview callbacks after launching their portfolios. Recruiters and hiring managers appreciate candidates who go the extra mile to showcase their work and personal brand. Your portfolio demonstrates initiative and digital literacy—qualities employers value.",
    },
    {
      question: "How long does it take?",
      answer:
        "We typically deliver a complete portfolio within 48 hours of receiving your information. For more complex projects or those including the AI chatbot, it may take up to 72 hours. We'll provide you with a specific timeline during our initial consultation.",
    },
    {
      question: "Can I update the site later?",
      answer:
        "Yes, all our packages include one free round of updates within the first month. After that, we offer affordable maintenance plans or can provide you with access to update the content yourself through our easy-to-use dashboard.",
    },
    {
      question: "Do I need technical knowledge to maintain my portfolio?",
      answer:
        "Not at all. We've designed our portfolios to be user-friendly, even for those with no technical background. Our dashboard makes it simple to update your information, add new projects, or change your contact details without any coding knowledge.",
    },
  ]

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Wondering Why You Need This?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;ve answered some common questions about our portfolio services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
