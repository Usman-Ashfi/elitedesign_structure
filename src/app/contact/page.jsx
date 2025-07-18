import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import ContactForm from "./ContactForm";

// --- Data Constants for better management ---

const contactInfo = {
  phone: "(0304) 43299134",
  email: "Elitedesignandstructure@gmail.com",
  address: {
    line1: "Main Gojra Road",
    line2: "Adda Painsra Faisalabad",
  },
  emergencyHotline: "(555) 911-BUILD",
};

const officeHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const faqItems = [
  {
    value: "item-1",
    question: "How quickly can you start my project?",
    answer:
      "Project start times depend on several factors including project complexity, permit requirements, and our current schedule. Typically, we can begin design work within 1-2 weeks of contract signing, with construction starting 4-12 weeks later depending on permits and approvals.",
  },
  {
    value: "item-2",
    question: "Do you provide free estimates?",
    answer:
      "Yes, we provide free initial consultations and preliminary estimates for all potential projects. For detailed estimates and architectural drawings, we may charge a fee that can be credited toward your project if you choose to work with us.",
  },
  {
    value: "item-3",
    question: "What areas do you serve?",
    answer:
      "We primarily serve the greater metropolitan area within a 50-mile radius of our main office. For larger projects, we may consider work in extended areas. Contact us to discuss your specific location.",
  },
  {
    value: "item-4",
    question: "Are you licensed and insured?",
    answer:
      "Yes, Elite Design & Structure  is fully licensed, bonded, and insured. We carry comprehensive general liability insurance, workers' compensation, and professional liability coverage. We can provide certificates of insurance upon request.",
  },
  {
    value: "item-5",
    question: "How do you handle project changes and cost overruns?",
    answer:
      "We use detailed contracts and change order processes to manage project modifications. Any changes to the original scope are documented and approved in writing before implementation. We provide transparent pricing and regular budget updates throughout the project.",
  },
  {
    value: "item-6",
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including checks, bank transfers, and major credit cards. Payment schedules are typically structured around project milestones, with an initial deposit and progress payments throughout construction.",
  },
];


const HeroSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-amber-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <Badge variant="outline" className="border-amber-200 text-amber-700">
            Get In Touch
          </Badge>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
            Let's Start Your Project
          </h1>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ready to bring your construction vision to life? Contact us today
            for a free consultation and detailed project proposal.
          </p>
        </div>
        <div className="flex items-center gap-8 pt-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">24hrs</div>
            <div className="text-sm text-gray-600">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">Free</div>
            <div className="text-sm text-gray-600">Consultation</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">15+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactInfo = () => (
  <div className="space-y-8">
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h2>
      <p className="text-gray-600">
        Prefer to speak directly? Reach out to us using any of the methods
        below.
      </p>
    </div>
    <div className="grid gap-6">
      <Card className="border-gray-200 hover:shadow-lg transition-shadow">
        <CardContent className="flex items-start gap-4 p-6">
          <Phone className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
            <p className="text-gray-600 mb-2">
              Call us for immediate assistance
            </p>
            <Link
              href={`tel:${contactInfo.phone}`}
              className="font-medium text-gray-900 hover:text-amber-700"
            >
              {contactInfo.phone}
            </Link>
            <p className="text-sm text-gray-500">Mon-Fri: 8:00 AM - 6:00 PM</p>
          </div>
        </CardContent>
      </Card>
      <Card className="border-gray-200 hover:shadow-lg transition-shadow">
        <CardContent className="flex items-start gap-4 p-6">
          <Mail className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
            <p className="text-gray-600 mb-2">Send us a detailed message</p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="font-medium text-gray-900 hover:text-amber-700"
            >
              {contactInfo.email}
            </a>
            <p className="text-sm text-gray-500">Response within 24 hours</p>
          </div>
        </CardContent>
      </Card>
      <Card className="border-gray-200 hover:shadow-lg transition-shadow">
        <CardContent className="flex items-start gap-4 p-6">
          <MapPin className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Office Location
            </h3>
            <p className="text-gray-600 mb-2">
              Visit us for in-person consultation
            </p>
            <p className="font-medium text-gray-900">
              {contactInfo.address.line1}
            </p>
            <p className="font-medium text-gray-900">
              {contactInfo.address.line2}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
    <Card className="border-gray-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-amber-600" />
          Office Hours
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {officeHours.map((item) => (
          <div key={item.day} className="flex justify-between">
            <span className="text-gray-600">{item.day}</span>
            <span className="font-medium">{item.hours}</span>
          </div>
        ))}
        <div className="pt-2 border-t">
          <p className="text-sm text-gray-500">
            Emergency construction services available 24/7
          </p>
        </div>
      </CardContent>
    </Card>
    <Card className="border-gray-200">
      <CardContent className="p-0">
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500">Interactive Map</p>
            <p className="text-sm text-gray-400">
              {contactInfo.address.line1},{" "}
              {contactInfo.address.line2.split(",")[0]}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const FaqSection = () => (
  <section className="w-full py-12 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <Badge variant="outline" className="border-amber-200 text-amber-700">
          FAQ
        </Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
          Get quick answers to common questions about our services and process.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
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
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <Badge variant="outline" className="border-amber-200 text-amber-400">
          Ready to Begin?
        </Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
          Your Dream Project Starts Here
        </h2>
        <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed">
          Don't wait to bring your vision to life. Contact Elite Design & Structure today and
          take the first step toward your perfect construction project.
        </p>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
            <a href={`tel:${contactInfo.phone}`}>
              Call Now: {contactInfo.phone}
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
          >
            <Link href="/projects">View Our Portfolio</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

// --- Main Page Component ---

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <HeroSection />

        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>

        <FaqSection />
        <CtaSection />
      </main>
    </div>
  );
}
