"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Award,
  Users,
  Target,
  Heart,
  Shield,
  ArrowRight,
  CheckCircle,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --- Data Constants for a Data-Driven UI ---

const mvvData = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To create exceptional built environments that enhance communities, inspire occupants, and stand the test of time through innovative design and superior construction quality.",
  },
  {
    icon: Award,
    title: "Our Vision",
    description:
      "To be the leading construction and architectural firm recognized for transforming visions into reality while setting new standards for sustainability and innovation in the industry.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Excellence in craftsmanship, integrity in all relationships, innovation in problem-solving, sustainability in practice, and commitment to client success.",
  },
];

const statsData = [
  { value: "150+", label: "Projects Completed" },
  { value: "15+", label: "Years of Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "25+", label: "Industry Awards" },
];

const awardsData = [
  {
    icon: Award,
    title: "LEED Gold Certified",
    description:
      "Certified in Leadership in Energy and Environmental Design for sustainable building practices.",
  },
  {
    icon: Shield,
    title: "OSHA Safety Excellence",
    description:
      "Recognized for outstanding safety performance and zero-incident construction sites.",
  },
  {
    icon: Users,
    title: "Best Places to Work",
    description:
      "Recognized as one of the best places to work in the construction industry.",
  },
  {
    icon: CheckCircle,
    title: "ISO 9001 Certified",
    description:
      "International standard for quality management systems and continuous improvement.",
  },
  {
    icon: Calendar,
    title: "On-Time Delivery Award",
    description:
      "98% of projects completed on schedule, exceeding industry standards.",
  },
];

const culturePoints = [
  "Collaborative and inclusive work environment",
  "Continuous professional development opportunities",
  "Commitment to work-life balance",
  "Innovation and creative problem-solving",
  "Community involvement and giving back",
];

// --- Reusable Sub-Components ---

const HeroSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-amber-50">
    <div className="container px-4 mx-auto md:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-4">
          <Badge
            variant="outline"
            className="w-fit border-amber-200 text-amber-700"
          >
            About Elite Design & Structure
          </Badge>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
            Building Excellence Since 2008
          </h1>
          <p className="max-w-[600px] text-gray-600 md:text-xl">
            We are a premier construction and architectural design firm
            dedicated to creating exceptional spaces that inspire and endure.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700"
            >
              <Link href="#team">
                Meet Our Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-300 bg-transparent"
            >
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
        <Image
          src="/About/a1.jpg"
          width={600}
          height={600}
          alt="Elite Design & Structure team at construction site"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover shadow-2xl lg:order-last"
        />
      </div>
    </div>
  </section>
);

const StorySection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-4">
          <Badge
            variant="outline"
            className="w-fit border-amber-200 text-amber-700"
          >
            Our Story
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
            From Vision to Reality
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Founded in 2008 by architects Muhammad Waqas,
              <strong> Elite Design & Structure</strong> began with a simple
              vision: to create buildings that not only meet functional needs
              but also inspire the people who use them every day.
            </p>
            <p>
              What started as a small architectural firm has grown into a
              full-service construction and design company. Our growth is driven
              by our unwavering commitment to quality, innovation, and client
              satisfaction.
            </p>
            <p>
              Today, we're proud to be recognized as industry leaders in
              sustainable construction and cutting-edge design. Every project
              reflects our core values of excellence, integrity, and
              environmental responsibility.
            </p>
          </div>
        </div>
        <Image
          src="/About/a2.jpg"
          width={600}
          height={500}
          alt="Elite Design & Structure founders and early team"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg"
        />
      </div>
    </div>
  </section>
);

const MvvCard = ({ icon: Icon, title, description }) => (
  <Card className="border-gray-200 hover:shadow-lg transition-shadow">
    <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
      <Icon className="h-12 w-12 text-amber-600" />
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const AwardCard = React.memo(({ award }) => (
  <Card className="border-gray-200 hover:shadow-lg transition-shadow">
    <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
      <award.icon className="h-12 w-12 text-amber-600" />
      <h3 className="text-lg font-bold text-gray-900">{award.title}</h3>
      <p className="text-gray-600 text-sm">{award.description}</p>
    </CardContent>
  </Card>
));
AwardCard.displayName = "AwardCard";

const CultureSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <Image
          src="/About/a3.jpg"
          width={600}
          height={500}
          alt="Elite Design & Structure  team collaboration"
          className="mx-auto overflow-hidden rounded-xl object-cover shadow-lg lg:order-first"
        />
        <div className="space-y-4">
          <Badge
            variant="outline"
            className="w-fit border-amber-200 text-amber-700"
          >
            Our Culture
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
            Building More Than Structures
          </h2>
          <p className="text-gray-600 md:text-lg">
            At Elite Design & Structure , we believe that great buildings start
            with great teams. Our collaborative culture fosters innovation,
            creativity, and continuous learning.
          </p>
          <ul className="space-y-3">
            {culturePoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
          <Button asChild className="bg-amber-600 hover:bg-amber-700">
            <Link href="/careers">Join Our Team</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const CtaSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <Badge variant="outline" className="border-amber-200 text-amber-400">
        Ready to Work Together?
      </Badge>
      <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-5xl text-white">
        Let's Build Something Amazing
      </h2>
      <p className="max-w-[600px] mx-auto mt-4 text-gray-300 md:text-xl/relaxed">
        Partner with Elite Design & Structure for your next project. Experience
        the difference that expertise, dedication, and innovation can make.
      </p>
      <div className="mt-6 flex flex-col gap-2 min-[400px]:flex-row justify-center">
        <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
          <Link href="/contact">Start Your Project</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
        >
          <Link href="/contact">Schedule Consultation</Link>
        </Button>
      </div>
    </div>
  </section>
);

// --- Main Page Component ---
export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <HeroSection />
        <StorySection />

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <Badge
                variant="outline"
                className="border-amber-200 text-amber-700"
              >
                Our Foundation
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                Mission, Vision & Values
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {mvvData.map((item) => (
                <MvvCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="space-y-4 mb-12">
              <Badge
                variant="outline"
                className="border-amber-200 text-amber-700"
              >
                Our Achievements
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                Building Success by the Numbers
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {statsData.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <Badge
                variant="outline"
                className="border-amber-200 text-amber-700"
              >
                Recognition
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                Certifications & Awards
              </h2>
              <p className="max-w-[900px] mx-auto text-gray-600 md:text-xl/relaxed">
                Our commitment to excellence has been recognized by industry
                leaders and certification bodies.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {awardsData.map((award) => (
                <AwardCard key={award.title} award={award} />
              ))}
            </div>
          </div>
        </section>

        <CultureSection />
        <CtaSection />
      </main>
    </div>
  );
}
