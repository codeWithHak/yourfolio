"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MessageSquare, Mail } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { motion } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"

export default function FinalCta() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <section className="py-20 bg-primary/5 dark:bg-primary/10">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Get You Noticed.</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step toward elevating your professional presence and standing out in the corporate world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-2">
                  <Calendar className="h-5 w-5" />
                  Schedule a Call
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Get in touch</DialogTitle>
                  <DialogDescription>
                    Reach out to us through WhatsApp or email to discuss your portfolio needs.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <a
                    href="https://wa.me/0331339166"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                  >
                    <div className="bg-green-500 text-white p-2 rounded-full">
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
                    <div className="bg-blue-500 text-white p-2 rounded-full">
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

            <a href="https://wa.me/0331339166" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-2">
                <FaWhatsapp className="h-6 w-6" />
                WhatsApp Chat
              </Button>
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            No pressure—just a friendly chat about your future online self.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
