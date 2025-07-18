"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Hammer,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PROJECTS_DATA from "./projects/data";

// --- Data Constants ---

const servicesData = [
  {
    icon: Building2,
    title: "Architectural Design",
    description:
      "Innovative architectural solutions that blend functionality with aesthetic appeal for residential and commercial projects.",
  },
  {
    icon: Hammer,
    title: "Construction Management",
    description:
      "Full-service construction management ensuring projects are completed on time, within budget, and to the highest standards.",
  },
  {
    icon: Users,
    title: "Project Consultation",
    description:
      "Expert consultation services to help you make informed decisions throughout your construction journey.",
  },
];

const whyChooseUsData = [
  {
    icon: Award,
    title: "Award-Winning Designs",
    description:
      "Our innovative designs have been recognized with multiple industry awards and certifications.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our team of certified architects and construction professionals ensures quality at every step.",
  },
  {
    icon: Building2,
    title: "Sustainable Practices",
    description:
      "We prioritize environmentally responsible construction methods and materials.",
  },
];

const testimonialsData = [
  {
    rating: 5,
    quote:
      "Elite Design & Structure  transformed our vision into reality. Their attention to detail and professional approach made our commercial project a huge success. The team was responsive, reliable, and delivered on time.",
    author: "Sarah Mitchell",
    title: "CEO, TechStart Inc.",
    initials: "SM",
  },
  {
    rating: 5,
    quote:
      "Outstanding work on our family home renovation! The architectural design exceeded our expectations, and the construction quality is impeccable. We couldn't be happier with the results.",
    author: "Michael Johnson",
    title: "Homeowner",
    initials: "MJ",
  },
  {
    rating: 5,
    quote:
      "Professional, efficient, and innovative. Elite Design & Structure  handled our industrial facility project with expertise. Their project management kept everything on schedule and within budget.",
    author: "David Rodriguez",
    title: "Operations Manager, Industrial Corp",
    initials: "DR",
  },
];

// --- Sub-Components ---

const HeroSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gray-50 to-amber-50">
    <div className="container px-4 md:px-6 mx-auto">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="w-fit border-amber-200 text-amber-700"
            >
              Award-Winning Design
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
              Building Dreams Into Reality
            </h1>
            <p className="max-w-[600px] text-gray-600 md:text-xl">
              Expert construction and architectural design services. From
              concept to completion, we create spaces that inspire and endure.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700"
            >
              <Link href="/projects">
                View Our Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-300 bg-transparent"
            >
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>
          <div className="flex items-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">150+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
        <Image
          src="/Home/h1.jpg"
          width="600"
          height="600"
          alt="Modern architectural building"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover shadow-2xl lg:order-last"
        />
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, description }) => (
  <Card className="border-gray-200 hover:shadow-lg transition-shadow text-center">
    <CardContent className="flex flex-col items-center space-y-4 p-6">
      <Icon className="h-12 w-12 text-amber-600" />
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const ServicesSection = () => (
  <section id="services" className="w-full py-12 md:py-24 lg:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center space-y-4">
        <Badge variant="outline" className="border-amber-200 text-amber-700">
          Our Expertise
        </Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
          Comprehensive Construction & Design Services
        </h2>
        <p className="max-w-[900px] mx-auto text-gray-600 md:text-xl/relaxed">
          From initial concept to final construction, we provide end-to-end
          solutions for all your building needs.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-3">
        {servicesData.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  </section>
);

const ProjectCard = React.memo(({ project }) => (
  <Card className="overflow-hidden border-gray-200 hover:shadow-xl transition-shadow group">
    <Image
      src={project.mainImage}
      width="500"
      height="300"
      alt={project.title}
      className="aspect-video w-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <CardContent className="p-6">
      <Badge
        className={`mb-2 hover:${project.badgeColor} ${project.badgeColor}`}
      >
        {project.category}
      </Badge>
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-600 mb-4 h-14">{project.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">Completed {project.year}</span>
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="text-amber-600 hover:text-amber-700 p-0 h-auto font-medium"
        >
          <Link href={`/projects/${project.id}`}>
            View Details <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </Button>
      </div>
    </CardContent>
  </Card>
));
ProjectCard.displayName = "ProjectCard";

const ProjectsShowcase = () => (
  <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center space-y-4">
        <Badge variant="outline" className="border-amber-200 text-amber-700">
          Portfolio
        </Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
          Featured Projects
        </h2>
        <p className="max-w-[900px] mx-auto text-gray-600 md:text-xl/relaxed">
          Explore our portfolio of successful construction and design projects
          that showcase our expertise and attention to detail.
        </p>
      </div>
      <div className="mx-auto grid max-w-8xl gap-8 py-12 lg:grid-cols-3">
        {PROJECTS_DATA.slice(0, 3).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="text-center">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
        >
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
    </div>
  </section>
);

const WhyChooseUsSection = () => (
  <section id="about" className="w-full py-12 md:py-24 lg:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="w-fit border-amber-200 text-amber-700"
            >
              Why Choose Us
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
              Excellence in Every Detail
            </h2>
            <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
              With over 15 years of experience, we bring unmatched expertise and
              dedication to every project.
            </p>
          </div>
          <ul className="grid gap-6">
            {whyChooseUsData.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <item.icon className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src="/Home/h2.jpg"
          width="600"
          height="600"
          alt="Construction team at work"
          className="mx-auto w-full h-auto overflow-hidden rounded-xl object-cover shadow-xl lg:order-last"
        />
      </div>
    </div>
  </section>
);

const StarIcon = (props) => (
  <svg {...props} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const StarRating = ({ rating, className }) => (
  <div className="flex items-center gap-1">
    {[...Array(rating)].map((_, i) => (
      <StarIcon key={i} className={className} />
    ))}
  </div>
);

const TestimonialCard = React.memo(({ testimonial }) => (
  <Card className="border-gray-200 hover:shadow-lg transition-shadow bg-white">
    <CardContent className="p-6">
      <StarRating
        rating={testimonial.rating}
        className="w-4 h-4 text-amber-400"
      />
      <blockquote className="text-gray-700 my-4">
        "{testimonial.quote}"
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
          <span className="text-amber-700 font-semibold text-sm">
            {testimonial.initials}
          </span>
        </div>
        <div>
          <p className="font-semibold text-gray-900">{testimonial.author}</p>
          <p className="text-sm text-gray-600">{testimonial.title}</p>
        </div>
      </div>
    </CardContent>
  </Card>
));
TestimonialCard.displayName = "TestimonialCard";

const TestimonialsSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-amber-50 to-orange-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center space-y-4">
        <Badge variant="outline" className="border-amber-200 text-amber-700">
          Client Reviews
        </Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
          What Our Clients Say
        </h2>
        <p className="max-w-[900px] mx-auto text-gray-600 md:text-xl/relaxed">
          Don't just take our word for it. Here's what our satisfied clients
          have to say about working with us.
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-3">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.author} testimonial={testimonial} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
        >
          <Link href="/reviews">Read More Reviews</Link>
        </Button>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section
    id="contact"
    className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white"
  >
    <div className="container px-4 mx-auto md:px-6">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <Badge
            variant="outline"
            className="w-fit border-amber-200 text-amber-400"
          >
            Get In Touch
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Ready to Start Your Project?
          </h2>
          <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed">
            Contact us today for a free consultation and let's discuss how we
            can bring your vision to life.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700"
            >
              <Link href="/contact">Get Free Quote</Link>
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
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-4">
            <Phone className="h-5 w-5 text-amber-400" />
            <div>
              <p className="font-medium">Phone</p>
              <a
                href="tel:03044329134"
                className="text-gray-300 hover:text-white"
              >
                (0304) 4329134
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="h-5 w-5 text-amber-400" />
            <div>
              <p className="font-medium">Email</p>
              <a
                href="mailto:Elitedesignandstructure@gmail.com"
                className="text-gray-300 hover:text-white"
              >
                Elitedesignandstructure@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="h-5 w-5 text-amber-400" />
            <div>
              <p className="font-medium">Address</p>
              <p className="text-gray-300">
                Main Gojra Road , Adda Painsra Faisalabad
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Main Page Component ---
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ProjectsShowcase />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
}
