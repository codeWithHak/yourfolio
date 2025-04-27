"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, User, Send } from "lucide-react";

export default function DemoSection() {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      role: "bot",
      content:
        "Hi there! I'm John's AI assistant. How can I help you learn more about his experience and skills?",
    },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message
    setChatMessages([...chatMessages, { role: "user", content: message }]);

    // Simulate AI response
    setTimeout(() => {
      let response =
        "Thanks for your message! I'd be happy to tell you more about John's experience in product design and his work at Microsoft.";

      if (message.toLowerCase().includes("experience")) {
        response =
          "John has over 8 years of experience in product design, with the last 3 years at Microsoft working on their flagship products.";
      } else if (
        message.toLowerCase().includes("contact") ||
        message.toLowerCase().includes("hire")
      ) {
        response =
          "You can schedule a call with John directly through his calendar link, or send him an email at john@example.com.";
      } else if (
        message.toLowerCase().includes("project") ||
        message.toLowerCase().includes("portfolio")
      ) {
        response =
          "John has worked on several key projects including the redesign of Microsoft Teams and the new Surface interface. You can see detailed case studies on this portfolio.";
      }

      setChatMessages((prev) => [...prev, { role: "bot", content: response }]);
    }, 1000);

    setMessage("");
  };

  return (
    <section id="demo" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See What Your Future Digital Self Looks Like
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience a live demo of our portfolio and AI chatbot integration.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="portfolio" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="portfolio">Portfolio Preview</TabsTrigger>
              <TabsTrigger value="chatbot">AI Chatbot Demo</TabsTrigger>
            </TabsList>

            <TabsContent value="portfolio" className="mt-0">
              <Card className="border border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-background p-4 border-b border-border flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      shahidrehman.com
                    </div>
                    <div className="w-16"></div> {/* Spacer for alignment */}
                  </div>

                  <div className="relative">
                    <img
                      src="/images/shahid.webp"
                      alt="Portfolio demo"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <Button size="lg" className="text-lg">
                        View Live Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="chatbot" className="mt-0">
              <Card className="border border-border">
                <CardContent className="p-6">
                  <div className="bg-muted rounded-lg p-4 mb-4 flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <p className="text-sm">
                      This is a simulation of the AI chatbot that visitors can
                      interact with on your portfolio.
                    </p>
                  </div>

                  <div className="bg-background border border-border rounded-lg h-96 flex flex-col">
                    <div className="p-3 border-b border-border">
                      <h3 className="font-medium">
                        Chat with Shahid&apos;s AI Assistant
                      </h3>
                    </div>

                    <div className="flex-grow overflow-y-auto p-4 space-y-4">
                      {chatMessages.map((msg, index) => (
                        <div
                          key={index}
                          className={`flex ${
                            msg.role === "user"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[80%] rounded-lg p-3 ${
                              msg.role === "user"
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                            }`}
                          >
                            {msg.role === "bot" && (
                              <div className="flex items-center gap-2 mb-1">
                                <div className="bg-background rounded-full p-1">
                                  <User className="h-3 w-3" />
                                </div>
                                <span className="text-xs font-medium">
                                Shahid&apos;s AI
                                </span>
                              </div>
                            )}
                            <p className="text-sm">{msg.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 border-t border-border">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          onKeyDown={(e) =>
                            e.key === "Enter" && handleSendMessage()
                          }
                          placeholder="Ask about Shahid's experience, projects, or contact info..."
                          className="flex-grow bg-muted rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <Button size="icon" onClick={handleSendMessage}>
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-muted-foreground">
                    Try asking: &quot;What&apos;s Shahid&apos;s experience?" or &apos;How can I
                    contact John?&apos;
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
