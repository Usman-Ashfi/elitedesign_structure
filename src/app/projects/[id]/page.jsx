"use client"; // Required for hooks and client-side interactivity

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2, // This is not used but can be kept for future use
  Calendar,
  MapPin,
  Users,
  DollarSign,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Correctly import the single source of truth for project data
import PROJECTS_DATA from "../data"; // Adjust path if necessary

// --- Reusable Sub-Components (No changes needed here) ---

const Breadcrumb = ({ projectTitle }) => (
  <section className="w-full py-4 bg-gray-50 border-b">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Link href="/" className="hover:text-amber-600">
          Home
        </Link>
        <span>/</span>
        <Link href="/projects" className="hover:text-amber-600">
          Projects
        </Link>
        <span>/</span>
        <span className="text-gray-900">{projectTitle}</span>
      </div>
    </div>
  </section>
);

const ProjectStat = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-2">
    <Icon className="h-4 w-4 text-amber-600" />
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
);

const ProjectHero = ({ title, category, description, stats, mainImage }) => (
  <section className="w-full py-12 md:py-24">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-6">
          <div className="space-y-4">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
              {category}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
              {title}
            </h1>
            <p className="text-gray-600 md:text-lg">{description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <ProjectStat key={stat.label} {...stat} />
            ))}
          </div>
          <div className="flex gap-4">
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">Contact Us About Similar Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
        <Image
          src={mainImage}
          width={700}
          height={500}
          alt={title}
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
        />
      </div>
    </div>
  </section>
);

const ProjectGallery = ({ images }) => (
  <section className="w-full py-12 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Project Gallery</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            width={400}
            height={300}
            alt={image.alt}
            className="aspect-video overflow-hidden rounded-lg object-cover shadow-md hover:shadow-lg transition-shadow"
          />
        ))}
      </div>
    </div>
  </section>
);

const ProjectDetails = ({
  overview,
  features,
  specifications,
  technologies,
}) => (
  <section className="w-full py-12 md:py-24">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Project Overview
            </h2>
            <p className="text-gray-600">{overview}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Key Features
            </h3>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-8">
          <Card className="border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Project Specifications
              </h3>
              <div className="space-y-4">
                {specifications.map((spec) => (
                  <div key={spec.label} className="flex justify-between">
                    <span className="text-gray-600">{spec.label}:</span>
                    <span className="font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Technologies Used
              </h3>
              <div className="space-y-3">
                {technologies.map((tech) => (
                  <div key={tech} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

const StarIcon = (props) => (
  <svg {...props} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);
const StarRating = ({ rating = 5 }) => (
  <div className="flex items-center gap-1 mb-4">
    {[...Array(rating)].map((_, i) => (
      <StarIcon key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const ClientTestimonial = ({ quote, author, title, initials }) => (
  <section className="w-full py-12 bg-gradient-to-br from-amber-50 to-orange-50">
    <div className="container mx-auto px-4 md:px-6">
      <Card className="max-w-4xl mx-auto border-gray-200 bg-white">
        <CardContent className="p-8">
          <StarRating />
          <blockquote className="text-lg text-gray-700 mb-6">
            "{quote}"
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="text-amber-700 font-semibold">{initials}</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">{author}</p>
              <p className="text-gray-600">{title}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

const RelatedProjectCard = React.memo(({ project }) => (
  <Card className="overflow-hidden border-gray-200 hover:shadow-lg transition-shadow">
    <Image
      src={project.mainImage}
      width={400}
      height={200}
      alt={project.title}
      className="aspect-video w-full object-cover"
    />
    <CardContent className="p-4">
      <Badge
        className={`mb-2 ${badgeColors[project.category] || "bg-gray-100"}`}
      >
        {project.category}
      </Badge>
      <h3 className="font-bold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-sm text-gray-600 mb-3 h-10">{project.description}</p>
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
    </CardContent>
  </Card>
));
RelatedProjectCard.displayName = "RelatedProjectCard";

// This is just for the badge color on the related projects card
const badgeColors = {
  Residential: "bg-amber-100 text-amber-800",
  Commercial: "bg-green-100 text-green-800",
  Industrial: "bg-slate-100 text-slate-800",
  Renovation: "bg-purple-100 text-purple-800",
};

const RelatedProjects = ({ projects }) => (
  <section className="w-full py-12 md:py-24">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Related Projects</h2>
        <Button
          asChild
          variant="outline"
          className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
        >
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <RelatedProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);

// --- Main Page Component ---
export default function ProjectDetailPage({ params }) {
  const resolvedParams = React.use(params);
  const id = resolvedParams.id;

  const projectId = parseInt(id, 10);
  const project = PROJECTS_DATA.find((p) => p.id === projectId);

  // Handle cases where the project ID is not found
  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="text-xl text-gray-600">Project Not Found</p>
          <Link href="/projects">
            <Button className="mt-4 bg-amber-600 hover:bg-amber-700">
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Find the full data objects for the related projects using their IDs
  const relatedProjectsData = PROJECTS_DATA.filter((p) =>
    project.relatedProjectIds.includes(p.id)
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* In a real app, Header and Footer would be in a shared Layout component */}
      <main className="flex-1">
        <Breadcrumb projectTitle={project.title} />
        <ProjectHero
          title={project.title}
          category={project.category}
          description={project.description}
          stats={project.stats}
          mainImage={project.mainImage}
        />
        <ProjectGallery images={project.gallery} />
        <ProjectDetails
          overview={project.overview}
          features={project.features}
          specifications={project.specifications}
          technologies={project.technologies}
        />
        <ClientTestimonial {...project.testimonial} />
        <RelatedProjects projects={relatedProjectsData} />
      </main>
    </div>
  );
}
