"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Building2,
  Hammer,
  ArrowRight,
  CheckCircle,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --- Data Constants for a Data-Driven UI ---

const mainServicesData = [
  {
    badge: "Creative Vision",
    title: "Architecture",
    description:
      "Our award-winning architects translate your vision into iconic, functional, and sustainable designs. We focus on creating spaces that are both inspiring to inhabit and seamlessly integrated with their surroundings.",
    features: [
      "Conceptual & Detailed Design",
      "3D Modeling & Photorealistic Visualization",
      "Sustainable & Eco-Friendly Building Design",
      "Regulatory Compliance & Approvals",
    ],
    buttonText: "Explore Architectural Designs",
    imageUrl: "/Services/s1.jpg",
    imageAlt: "A modern architectural blueprint and model",
    imageFirst: false,
  },
  {
    badge: "Urban Planning",
    title: "Town Planning",
    description:
      "We provide strategic town planning services to create well-organized, sustainable, and thriving communities. Our expertise covers everything from large-scale master planning to navigating complex zoning regulations.",
    features: [
      "Master Planning & Urban Design",
      "Feasibility Studies & Site Analysis",
      "Zoning & Land Use Applications",
      "Community Engagement & Consultation",
    ],
    buttonText: "Discover Our Planning Projects",
    imageUrl: "/Services/s2.jpeg",
    imageAlt: "An aerial view of a planned community",
    imageFirst: true,
  },
  {
    badge: "Aesthetic Spaces",
    title: "Interior Design",
    description:
      "Our interior design team crafts beautiful, functional, and personalized interiors that reflect your style and enhance your quality of life. We manage every detail, from space planning to the final finishes.",
    features: [
      "Space Planning & Layout Optimization",
      "Material, Color & Finish Selection",
      "Custom Furniture & Lighting Design",
      "Turnkey Residential & Commercial Interiors",
    ],
    buttonText: "See Interior Portfolios",
    imageUrl: "/Services/s3.jpg",
    imageAlt: "A beautifully designed modern living room",
    imageFirst: false,
  },
  {
    badge: "Quality Construction",
    title: "Building & Construction",
    description:
      "As expert builders, we bring architectural plans to life with precision, quality craftsmanship, and a commitment to safety. We manage all on-site activities to ensure a high-quality build from foundation to finish.",
    features: [
      "New Residential & Commercial Construction",
      "Major Renovations & Additions",
      "High-Quality Material Sourcing",
      "On-Site Safety & Quality Assurance",
    ],
    buttonText: "Learn About Our Building Process",
    imageUrl: "/Services/s4.jpeg",
    imageAlt: "A construction site with a building frame",
    imageFirst: true,
  },
  {
    badge: "Engineering Integrity",
    title: "Structure Design",
    description:
      "Our structural engineers ensure the safety, stability, and longevity of your building. We use advanced analysis and design techniques to create robust and efficient structural systems for any project scale.",
    features: [
      "Structural Analysis & Load Calculation",
      "Foundation & Superstructure Design",
      "Seismic & Wind Resistance Design",
      "Structural Steel & Concrete Detailing",
    ],
    buttonText: "Consult Our Engineers",
    imageUrl: "/Services/s5.jpg",
    imageAlt: "A detailed structural engineering diagram",
    imageFirst: false,
  },
  {
    badge: "Cost Management",
    title: "Quantity Surveying",
    description:
      "Our quantity surveying services provide meticulous cost control and financial management for your project. We ensure you receive the best value by managing budgets, tenders, and contracts effectively.",
    features: [
      "Preliminary Cost Estimates & Budgeting",
      "Bill of Quantities (BoQ) Preparation",
      "Tender Documentation & Evaluation",
      "Contract Administration & Variation Management",
    ],
    buttonText: "Request a Cost Plan",
    imageUrl: "/Services/s6.jpg",
    imageAlt: "A person reviewing financial documents and blueprints",
    imageFirst: true,
  },
  {
    badge: "Natural Harmony",
    title: "Landscaping",
    description:
      "We design and create stunning outdoor spaces that complement your architecture and enhance your property. Our landscaping services range from private gardens to large-scale public parks.",
    features: [
      "Landscape Master Planning",
      "Hardscape & Softscape Design",
      "Irrigation & Water Management Systems",
      "Plant Selection & Garden Installation",
    ],
    buttonText: "Design Your Outdoor Space",
    imageUrl: "/Services/s7.jpeg",
    imageAlt: "A beautifully manicured garden and patio area",
    imageFirst: false,
  },
  {
    badge: "Seamless Execution",
    title: "Project Management",
    description:
      "Our experienced project managers ensure your construction project is completed on time, within budget, and to the highest quality standards. We are your single point of contact, coordinating every aspect of the process.",
    features: [
      "End-to-End Project Coordination",
      "Timeline & Schedule Management",
      "Risk Management & Mitigation",
      "Stakeholder Communication & Reporting",
    ],
    buttonText: "Explore Management Services",
    imageUrl: "/Services/s8.jpg",
    imageAlt: "A project manager at a construction site with a tablet",
    imageFirst: true,
  },
];

const serviceCategoriesData = [
  {
    icon: Building2,
    title: "Residential",
    description: "Custom homes, renovations, and residential developments.",
    items: [
      "Custom Home Design",
      "Home Renovations",
      "Multi-Family Housing",
      "Luxury Developments",
    ],
  },
  {
    icon: Hammer,
    title: "Commercial",
    description: "Office buildings, retail spaces, and commercial complexes.",
    items: [
      "Office Buildings",
      "Retail Centers",
      "Hospitality Projects",
      "Mixed-Use Developments",
    ],
  },
  {
    icon: Shield,
    title: "Industrial",
    description:
      "Manufacturing facilities, warehouses, and industrial complexes.",
    items: [
      "Manufacturing Plants",
      "Warehouse Facilities",
      "Distribution Centers",
      "Specialized Facilities",
    ],
  },
];

const processStepsData = [
  {
    number: 1,
    title: "Consultation",
    description:
      "Initial meeting to understand your vision, requirements, and budget.",
  },
  {
    number: 2,
    title: "Design",
    description: "Create detailed architectural plans and 3D visualizations.",
  },
  {
    number: 3,
    title: "Planning",
    description:
      "Obtain permits, finalize contracts, and schedule construction.",
  },
  {
    number: 4,
    title: "Construction",
    description:
      "Execute the project with regular updates and quality control.",
  },
];

const faqData = [
  {
    value: "item-1",
    question: "How long does a typical construction project take?",
    answer:
      "Project timelines vary depending on size and complexity. Residential projects typically take 3-8 months, while commercial projects can range from 6-18 months. We provide detailed timelines during the planning phase.",
  },
  {
    value: "item-2",
    question: "Do you handle permits and regulatory approvals?",
    answer:
      "Yes, we handle all necessary permits and regulatory approvals as part of our comprehensive service. Our team is familiar with local building codes and regulations.",
  },
  {
    value: "item-3",
    question: "What is included in your project management services?",
    answer:
      "Our project management includes scheduling, budget management, quality control, safety oversight, vendor coordination, and regular progress reporting to keep you informed throughout the project.",
  },
  {
    value: "item-4",
    question: "Do you offer warranties on your work?",
    answer:
      "Yes, we provide comprehensive warranties on all our construction work. Structural work comes with a 10-year warranty, while other components have varying warranty periods based on industry standards.",
  },
  {
    value: "item-5",
    question: "Can you work within my budget?",
    answer:
      "We work with clients across various budget ranges. During our initial consultation, we'll discuss your budget and provide options that maximize value while meeting your requirements.",
  },
];

// --- Sub-Components ---

const HeroSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-amber-50">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <Badge variant="outline" className="border-amber-200 text-amber-700">
        Our Services
      </Badge>
      <h1 className="mt-2 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
        Comprehensive Construction & Design Solutions
      </h1>
      <p className="max-w-[900px] mx-auto mt-4 text-gray-600 md:text-xl/relaxed">
        From initial concept to final construction, we provide end-to-end
        solutions for residential, commercial, and industrial projects.
      </p>
      <div className="mt-6 flex flex-col gap-2 min-[400px]:flex-row justify-center">
        <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
          <Link href="/contact">
            Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
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
  </section>
);

const ServiceDetailSection = ({
  badge,
  title,
  description,
  features,
  buttonText,
  imageUrl,
  imageAlt,
  imageFirst = false,
}) => (
  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
    <div className={`space-y-4 ${imageFirst ? "lg:order-last" : ""}`}>
      <Badge
        variant="outline"
        className="w-fit border-amber-200 text-amber-700"
      >
        {badge}
      </Badge>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
        {title}
      </h2>
      <p className="text-gray-600 md:text-lg">{description}</p>
      <ul className="space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Button asChild className="bg-amber-600 hover:bg-amber-700">
        <Link href="/contact">{buttonText}</Link>
      </Button>
    </div>
    <Image
      src={imageUrl}
      width={600}
      height={400}
      alt={imageAlt}
      className="mx-auto overflow-hidden rounded-xl object-cover shadow-lg"
    />
  </div>
);

const ServiceCategoryCard = ({ icon: Icon, title, description, items }) => (
  <Card className="border-gray-200 hover:shadow-lg transition-shadow">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-amber-600" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-gray-600">{description}</p>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-amber-600" />
            {item}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const ProcessStep = ({ number, title, description }) => (
  <div className="text-center space-y-4">
    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
      <span className="text-2xl font-bold text-amber-600">{number}</span>
    </div>
    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FaqSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <Badge variant="outline" className="border-amber-200 text-amber-700">
          FAQ
        </Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

const CtaSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <Badge variant="outline" className="border-amber-200 text-amber-400">
        Ready to Start?
      </Badge>
      <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-5xl text-white">
        Let's Discuss Your Project
      </h2>
      <p className="max-w-[600px] mx-auto mt-4 text-gray-300 md:text-xl/relaxed">
        Contact us today for a free consultation and detailed project proposal.
      </p>
      <div className="mt-6 flex flex-col gap-2 min-[400px]:flex-row justify-center">
        <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
          <Link href="/contact">Get Free Consultation</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
        >
          <a href="tel:03044329134">Call (0304) 4329134</a>
        </Button>
      </div>
    </div>
  </section>
);

// --- Main Page Component ---
export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <HeroSection />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:gap-24">
              {mainServicesData.map((service) => (
                <ServiceDetailSection key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <Badge
                variant="outline"
                className="border-amber-200 text-amber-700"
              >
                Service Categories
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                Specialized Services by Project Type
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {serviceCategoriesData.map((category) => (
                <ServiceCategoryCard key={category.title} {...category} />
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
                Our Process
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                How We Work With You
              </h2>
              <p className="max-w-[900px] mx-auto text-gray-600 md:text-xl/relaxed">
                Our proven process ensures your project is completed
                successfully from start to finish.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {processStepsData.map((step) => (
                <ProcessStep key={step.number} {...step} />
              ))}
            </div>
          </div>
        </section>

        <FaqSection />
        <CtaSection />
      </main>
    </div>
  );
}
