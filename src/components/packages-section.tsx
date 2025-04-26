"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, Users, Bot } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { CiMail } from "react-icons/ci"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function PackagesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)

  const packages = [
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      name: "Your Digital Handshake",
      features: ["Sleek, professional portfolio site", "Your name ranks on Google", "Clean, mobile-first UI"],
      tagline: "When people Google you, give them something to respect.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      name: "Corporate Climber Kit",
      features: [
        "Sleek, professional portfolio site",
        "Your name ranks on Google",
        "Clean, mobile-first UI",
        "Full LinkedIn profile makeover",
        "Recruiter-optimized keywords",
      ],
      tagline: "From invisible to irresistible in the corporate world.",
      popular: true,
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      name: "AI Advantage Elite",
      features: [
        "Sleek, professional portfolio site",
        "Your name ranks on Google",
        "Clean, mobile-first UI",
        "Full LinkedIn profile makeover",
        "Recruiter-optimized keywords",
        "AI-powered personal chatbot on portfolio",
        "3 LinkedIn post templates",
        "10 viral content ideas",
      ],
      tagline: "While others post resumes, you deploy an AI version of yourself.",
    },
  ]

  const cardVariants = {
    default: { y: 0 },
    hover: { y: -10 },
  }

  const handleStartNow = (packageName: string) => {
    setSelectedPackage(packageName)
    setIsDialogOpen(true)
  }

  return (
    <section id="packages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Package</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the perfect portfolio package to elevate your professional presence and stand out in the corporate
            world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="default"
              animate={hoveredCard === index ? "hover" : "default"}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="h-full"
            >
              <Card className={`h-full flex flex-col ${pkg.popular ? "border-primary shadow-lg relative" : ""}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-0 right-0 flex justify-center">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <div className="mb-4">{pkg.icon}</div>
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-sm">{pkg.tagline}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={() => handleStartNow(pkg.name)}>
                    Start Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Get started with {selectedPackage}</DialogTitle>
            <DialogDescription>
              Contact us through WhatsApp or email to get started with your portfolio package.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <a
              href="https://wa.me/0331339166"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
            >
              <div className="bg-green-500 text-white p-2 rounded-full flex items-center justify-center">
                <FaWhatsapp className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">0331339166</p>
              </div>
            </a>

            <a
              href="mailto:huzairahmedkhan@gmail.com"
              className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
            >
              <div className="bg-blue-500 text-white p-2 rounded-full flex items-center justify-center">
                <CiMail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-muted-foreground">huzairahmedkhan@gmail.com</p>
              </div>
            </a>
          </div>
          <div className="flex justify-end">
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
