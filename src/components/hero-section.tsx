"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToPackages = () => {
    const packagesSection = document.getElementById("packages");
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 dark:to-primary/10 -z-10" />

      {/* Abstract pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 -z-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 8 0 L 0 0 0 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 ">
              We Build Portfolios for Corporate Employees.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Your name. Your work. Your online presence—built to impress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToPackages} className="group cursor-pointer">
                View Packages
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>

              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="group cursor-pointer">
                    Let&apos;s Get You Noticed
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Get in touch</DialogTitle>
                    <DialogDescription>
                      Reach out to us through WhatsApp or email to discuss your
                      portfolio needs.
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
                        <p className="text-sm text-muted-foreground">
                          +92331339166
                        </p>
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
                        <p className="text-sm text-muted-foreground">
                          huzairahmedkhan@gmail.com
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      variant="outline"
                      onClick={() => setIsDialogOpen(false)}
                      className="cursor-pointer"
                    >
                      Close
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              scale: isVisible ? 1 : 0.95,
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-lg blur opacity-30 dark:opacity-50 animate-pulse"></div>
              <div className="relative bg-background rounded-lg border border-border shadow-xl overflow-hidden">
                <img
                  src="/images/shahid.webp"
                  alt="Portfolio mockup"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 dark:opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-background/80 backdrop-blur-md rounded-lg p-4 border border-border">
                    <h3 className="text-lg font-semibold mb-1">
                      Shahid Rehman
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Associate Charted Banker UK
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
