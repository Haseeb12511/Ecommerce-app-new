import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle2,
  Flag,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Quote,
  Mail,
  Phone,
  ArrowRight,
  Star,
  Target,
  Globe2,
  Handshake,
  Compass,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Image / Hero */}
      <section className="relative pt-14 w-full rounded-b-3xl">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop"
          alt="Team collaborating"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
        <div className="relative h-full container mx-auto px-6 lg:px-16 flex flex-col items-start justify-end pb-10">
          <Badge className="mb-4 rounded-full px-4 py-1 text-sm">
            About Us
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            Building products that feel human, help at scale, and last for years
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We’re a small team with a big mission: make technology kind, useful,
            and sustainable.
          </p>
          <div className="mt-6 flex gap-3">
            <Button size="lg" className="rounded-2xl">
              Meet the Team
            </Button>
            <Button size="lg" variant="outline" className="rounded-2xl">
              Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Mission / Vision Tabs */}
      <section className="container mx-auto px-6 lg:px-16 py-12">
        <Tabs defaultValue="mission" className="w-full">
          <TabsList className="grid w-full grid-cols-3 rounded-2xl">
            <TabsTrigger value="mission" className="rounded-xl">
              Mission
            </TabsTrigger>
            <TabsTrigger value="vision" className="rounded-xl">
              Vision
            </TabsTrigger>
            <TabsTrigger value="impact" className="rounded-xl">
              Impact
            </TabsTrigger>
          </TabsList>
          <TabsContent value="mission">
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Target className="h-5 w-5" />
                  Our Mission
                </CardTitle>
                <CardDescription>
                  Empower businesses and communities with tools that are
                  delightful, accessible, and secure.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    icon: HeartHandshake,
                    title: "Human-first",
                    text: "We design for people over metrics—empathy guides every decision.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Trustworthy",
                    text: "Privacy, security, and reliability are non‑negotiable.",
                  },
                  {
                    icon: Leaf,
                    title: "Sustainable",
                    text: "We optimize for longevity, efficiency, and low footprint.",
                  },
                ].map((item, idx) => (
                  <ValueCard
                    key={idx}
                    Icon={item.icon}
                    title={item.title}
                    text={item.text}
                  />
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="vision">
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Globe2 className="h-5 w-5" />
                  Our Vision
                </CardTitle>
                <CardDescription>
                  A world where technology feels effortless and augments every
                  person’s potential.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    icon: Rocket,
                    title: "Innovation",
                    text: "We prototype fast, learn faster, and ship with care.",
                  },
                  {
                    icon: Compass,
                    title: "Clarity",
                    text: "Simple experiences that guide without getting in the way.",
                  },
                  {
                    icon: Sparkles,
                    title: "Delight",
                    text: "Moments of joy that turn users into fans.",
                  },
                ].map((item, idx) => (
                  <ValueCard
                    key={idx}
                    Icon={item.icon}
                    title={item.title}
                    text={item.text}
                  />
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="impact">
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Workflow className="h-5 w-5" />
                  Our Impact
                </CardTitle>
                <CardDescription>
                  We measure success by outcomes: accessibility, uptime, and
                  real customer wins.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-3">
                <Stat number="99.98%" label="Uptime (12m)" />
                <Stat number="24/7" label="Human support" />
                <Stat number="120+" label="Happy clients" />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Story + Timeline */}
      <section className="container mx-auto px-6 lg:px-16 py-8">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl">Our Story</CardTitle>
              <CardDescription>
                From a coffee table sketch to products used around the globe.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We started with a simple question: what if software felt like a
                helping hand, not a hurdle? Today, our cross‑disciplinary team
                blends research, design, and engineering to build tools that do
                more with less.
              </p>
              <div className="grid gap-4">
                {[
                  {
                    year: "2021",
                    text: "Founded with a focus on humane, accessible software.",
                  },
                  {
                    year: "2022",
                    text: "Shipped our first platform with built‑in privacy by design.",
                  },
                  {
                    year: "2023",
                    text: "Scaled support and reliability—hit 99.98% uptime.",
                  },
                  {
                    year: "2024",
                    text: "Expanded to 120+ customers across 14 countries.",
                  },
                ].map((item, idx) => (
                  <TimelineItem key={idx} year={item.year} text={item.text} />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" /> Team Snapshot
              </CardTitle>
              <CardDescription>
                Small, senior, and cross‑functional.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4">
              <TeamTile
                name="Amina"
                role="Design Lead"
                avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
              />
              <TeamTile
                name="Hassan"
                role="Frontend"
                avatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop"
              />
              <TeamTile
                name="Sara"
                role="Research"
                avatar="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop"
              />
              <TeamTile
                name="Omar"
                role="Platform"
                avatar="https://images.unsplash.com/photo-1546456073-6712f79251bb?q=80&w=400&auto=format&fit=crop"
              />
            </CardContent>
            <CardFooter className="justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4" /> 10+ years avg. experience
              </div>
              <Button variant="ghost" className="rounded-xl">
                See careers <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Values Grid */}
      <section className="container mx-auto px-6 lg:px-16 py-8">
        <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: HeartHandshake,
              title: "Empathy",
              text: "We listen deeply and design inclusively.",
            },
            {
              icon: ShieldCheck,
              title: "Integrity",
              text: "We keep promises and protect data.",
            },
            {
              icon: Leaf,
              title: "Simplicity",
              text: "Fewer steps, clearer outcomes.",
            },
            {
              icon: Flag,
              title: "Ownership",
              text: "We ship, learn, and improve.",
            },
            {
              icon: Sparkles,
              title: "Craft",
              text: "Polish that users can feel.",
            },
            {
              icon: Handshake,
              title: "Partnership",
              text: "Win together with our customers.",
            },
          ].map((v, i) => (
            <ValueCard key={i} Icon={v.icon} title={v.title} text={v.text} />
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="container mx-auto px-6 lg:px-16 py-10">
        <Card className="rounded-3xl">
          <CardContent className="p-8 grid md:grid-cols-[1fr_2fr] gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-14 w-14">
                  <AvatarImage src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop" />
                  <AvatarFallback>AK</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">A. Khan</p>
                  <p className="text-sm text-muted-foreground">
                    COO, Brightline
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-lg leading-relaxed"
            >
              <Quote className="inline h-5 w-5 mr-2" />
              They deliver rare clarity and care. Our onboarding dropped from 14
              steps to 5, NPS jumped, and support tickets fell by half.
            </motion.blockquote>
          </CardContent>
        </Card>
      </section>

      {/* Social Proof + Metrics */}
      <section className="container mx-auto px-6 lg:px-16 py-6">
        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard label="Average CSAT" value="4.9/5" Icon={Star} />
          <MetricCard label="Countries Served" value="14" Icon={Globe2} />
          <MetricCard label="Projects Delivered" value="180+" Icon={Flag} />
          <MetricCard label="SLA Success" value="99%" Icon={ShieldCheck} />
        </div>
      </section>

      {/* CSR / Progress */}
      <section className="container mx-auto px-6 lg:px-16 py-10">
        <Card className="rounded-3xl">
          <CardHeader>
            <CardTitle>Giving Back</CardTitle>
            <CardDescription>
              We donate time and 1% of revenue to digital literacy programs.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-sm text-muted-foreground mb-3">
                2025 Goal Progress
              </p>
              <Progress value={72} className="h-3" />
              <p className="mt-2 text-sm text-muted-foreground">
                72% complete — 720 volunteer hours logged.
              </p>
            </div>
            <div className="grid gap-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4" />
                Free workshops for students
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4" />
                Open‑source accessibility components
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4" />
                Community mentorship circles
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 lg:px-16 py-10">
        <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
        <Accordion
          type="single"
          collapsible
          className="rounded-2xl bg-muted/30 p-4"
        >
          <AccordionItem value="values">
            <AccordionTrigger>
              What makes your approach different?
            </AccordionTrigger>
            <AccordionContent>
              We pair fast iteration with strong design systems and stringent
              reliability practices. That balance keeps quality high without
              slowing delivery.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="security">
            <AccordionTrigger>
              How do you handle privacy and security?
            </AccordionTrigger>
            <AccordionContent>
              We apply privacy‑by‑design, follow the principle of least
              privilege, and conduct regular third‑party audits.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="engagement">
            <AccordionTrigger>
              Do you work with startups and enterprises?
            </AccordionTrigger>
            <AccordionContent>
              Yes. Our engagement models scale from design sprints to multi‑year
              platform partnerships.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <Separator className="my-8" />

      {/* CTA Footer */}
      <section className="container mx-auto px-6 lg:px-16 pb-16">
        <Card className="rounded-3xl">
          <CardContent className="p-8 grid md:grid-cols-[2fr_1fr] gap-6 items-center">
            <div>
              <h3 className="text-2xl font-semibold">
                Ready to build something meaningful?
              </h3>
              <p className="text-muted-foreground mt-2">
                Tell us about your goals. We’ll share a short plan within 24
                hours.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="you@company.com"
                    className="pl-10 rounded-xl"
                  />
                </div>
                <Button className="rounded-xl">
                  Contact us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +92 300 0000000
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> hello@yourcompany.com
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" /> Karachi • Remote‑first
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function ValueCard({ Icon, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Card className="h-full rounded-3xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Icon className="h-5 w-5" /> {title}
          </CardTitle>
          <CardDescription>{text}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
}

function Stat({ number, label }) {
  return (
    <Card className="rounded-3xl">
      <CardContent className="p-6">
        <p className="text-3xl font-semibold tracking-tight">{number}</p>
        <p className="text-sm text-muted-foreground mt-1">{label}</p>
      </CardContent>
    </Card>
  );
}

function TimelineItem({ year, text }) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-primary" />
      <p className="text-sm text-muted-foreground">{year}</p>
      <p className="font-medium">{text}</p>
    </div>
  );
}

function TeamTile({ name, role, avatar }) {
  return (
    <Card className="rounded-3xl">
      <CardContent className="p-4 flex items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar} />
          <AvatarFallback>{name?.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium leading-tight">{name}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function MetricCard({ label, value, Icon }) {
  return (
    <Card className="rounded-3xl">
      <CardContent className="p-6 flex items-center gap-4">
        <div className="rounded-2xl p-2 bg-muted">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-2xl font-semibold leading-none tracking-tight">
            {value}
          </div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
}
