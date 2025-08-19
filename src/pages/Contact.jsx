import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full rounded-b-3xl">
        <img
          src="https://images.unsplash.com/photo-1505699261378-c372af38134c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fExhcHRvcCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Contact background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
        <div className="relative h-full container mx-auto px-6 lg:px-16 flex flex-col items-start justify-end pb-10">
          <Badge className="mb-4 rounded-full px-4 py-1 text-sm">
            Contact Us
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We’d love to hear from you! Whether you have a question about
            features, pricing, or anything else.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="container mx-auto px-6 lg:px-16 py-12 grid gap-10 lg:grid-cols-[2fr_1fr]">
        {/* Form */}
        <Card className="rounded-3xl">
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form and we’ll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Your Name" className="rounded-xl" />
            <Input
              placeholder="Your Email"
              type="email"
              className="rounded-xl"
            />
            <Textarea
              placeholder="Your Message"
              className="rounded-xl min-h-[120px]"
            />
            <Button className="rounded-xl">
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="grid gap-6">
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Reach us through any of the following ways
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" /> support@yourcompany.com
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" /> +92 300 0000000
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" /> Karachi, Pakistan
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
              <CardDescription>Find what you need faster</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              <Button variant="outline" className="justify-between rounded-xl">
                FAQs <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="justify-between rounded-xl">
                Support Center <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="justify-between rounded-xl">
                Careers <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
