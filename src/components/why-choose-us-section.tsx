"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp, Award, Clock } from "lucide-react"

export default function WhyChooseUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const metrics = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "70%",
      description: "of recruiters check your online presence first",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "3x",
      description: "more interview callbacks with a professional portfolio",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Top Companies",
      description: "Our portfolios have landed jobs at Google, Microsoft, and Meta",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "48 Hours",
      description: "Average turnaround time for your complete portfolio",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at Google",
      image: "/images/sarah.jpeg",
      quote:
        "YourFolio transformed my online presence. I received 3 job offers within a month of launching my portfolio!",
    },
    {
      name: "Michael Chen",
      role: "UX Designer at Adobe",
      image: "/images/michael.jpeg",
      quote: "The AI chatbot on my portfolio has been a game-changer. Recruiters are impressed by the innovation.",
    },
  ]

  return (
    <section id="why-choose-us" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why YourFolio Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;ve helped hundreds of professionals stand out in the corporate world with our proven approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="border border-border">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">{metric.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{metric.title}</h3>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div
            className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h3 className="text-2xl font-bold mb-6">Before & After</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-lg p-6 border border-border">
                <Badge variant="outline" className="mb-4">
                  Before
                </Badge>
                <div className="space-y-4">
                  <div className="h-8 bg-muted-foreground/20 rounded w-3/4"></div>
                  <div className="h-4 bg-muted-foreground/20 rounded w-full"></div>
                  <div className="h-4 bg-muted-foreground/20 rounded w-5/6"></div>
                  <div className="h-4 bg-muted-foreground/20 rounded w-4/5"></div>
                </div>
                <div className="mt-6 text-sm text-muted-foreground">Basic LinkedIn profile with minimal engagement</div>
              </div>
              <div className="bg-background rounded-lg p-6 border border-primary shadow-md">
                <Badge variant="default" className="mb-4">
                  After
                </Badge>
                <div className="space-y-4">
                  <div className="h-8 bg-primary/20 rounded w-3/4"></div>
                  <div className="h-4 bg-primary/20 rounded w-full"></div>
                  <div className="h-4 bg-primary/20 rounded w-5/6"></div>
                  <div className="h-4 bg-primary/20 rounded w-4/5"></div>
                </div>
                <div className="mt-6 text-sm font-medium">
                  Professional portfolio with AI chatbot and optimized content
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <h3 className="text-2xl font-bold mb-6">What Our Clients Say</h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="italic mb-3">&quot;{testimonial.quote}&quot;</p>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
