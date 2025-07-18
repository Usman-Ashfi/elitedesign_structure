"use client"; // Required for hooks like useState, useMemo, etc.

import React, { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Filter,
  ArrowRight,
  Calendar,
  MapPin,
  DollarSign, // This icon might be useful for the project card later
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Import the centralized data source
import PROJECTS_DATA from "./data"; // Adjust the import path as needed

// --- Dynamically generate filter options from the data ---
const getUniqueValues = (key) => [...new Set(PROJECTS_DATA.map((p) => p[key]))];
const getUniqueYears = () =>
  [
    ...new Set(
      PROJECTS_DATA.map(
        (p) => p.stats.find((s) => s.label === "Completed")?.value.split(" ")[1]
      ).filter(Boolean)
    ),
  ].sort((a, b) => b - a);

const CATEGORIES = getUniqueValues("category");
const YEARS = getUniqueYears();
const STATUSES = ["Completed", "In Progress", "Planning"]; // This remains static unless added to data
const PROJECTS_PER_PAGE = 6;

// --- Sub-Components ---

const HeroSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-amber-50">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <Badge variant="outline" className="border-amber-200 text-amber-700">
        Our Portfolio
      </Badge>
      <h1 className="mt-2 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
        Explore Our Construction Projects
      </h1>
      <p className="max-w-[900px] mx-auto mt-4 text-gray-600 md:text-xl/relaxed">
        Discover our diverse portfolio of successful construction and design
        projects across residential, commercial, and industrial sectors.
      </p>
      <div className="mt-6 flex flex-col gap-2 min-[400px]:flex-row justify-center">
        <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
          <Link href="/contact">
            Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
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
    </div>
  </section>
);

const ProjectFilters = ({ filters, onFilterChange, onSearchChange }) => {
  return (
    <section className="w-full py-6 bg-white border-b sticky top-16 z-40">
      {" "}
      {/* Adjusted sticky position */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-2 self-start md:self-center">
            <Filter className="h-5 w-5 text-gray-500" />
            <span className="font-medium text-gray-700">Filter Projects:</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search projects..."
                className="pl-10 w-full sm:w-56"
                onChange={onSearchChange}
              />
            </div>
            <Select
              value={filters.category}
              onValueChange={(value) => onFilterChange("category", value)}
            >
              <SelectTrigger className="w-full sm:w-44">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {CATEGORIES.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={filters.year}
              onValueChange={(value) => onFilterChange("year", value)}
            >
              <SelectTrigger className="w-full sm:w-36">
                <SelectValue placeholder="All Years" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {YEARS.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {/* The status filter will not work until 'status' is added to the data objects */}
            {/* <Select value={filters.status} onValueChange={(value) => onFilterChange("status", value)}>
              <SelectTrigger className="w-full sm:w-44"><SelectValue placeholder="All Status" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                {STATUSES.map((status) => <SelectItem key={status} value={status}>{status}</SelectItem>)}
              </SelectContent>
            </Select> */}
          </div>
        </div>
      </div>
    </section>
  );
};

const badgeColors = {
  Residential: "bg-amber-100 text-amber-800",
  Commercial: "bg-green-100 text-green-800",
  Industrial: "bg-slate-100 text-slate-800",
  Renovation: "bg-purple-100 text-purple-800",
};

const ProjectCard = React.memo(({ project }) => {
  const location =
    project.stats.find((s) => s.label === "Location")?.value || "N/A";
  const completedDate =
    project.stats.find((s) => s.label === "Completed")?.value || "N/A";

  return (
    <Card className="overflow-hidden border-gray-200 hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative">
        <Image
          src={project.mainImage}
          width={500}
          height={300}
          alt={project.title}
          className="aspect-video w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge
          className={`absolute top-4 left-4 ${
            badgeColors[project.category] || "bg-gray-100"
          }`}
        >
          {project.category}
        </Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
        <div className="space-y-2 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{completedDate}</span>
          </div>
        </div>
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 p-0 h-auto font-medium"
        >
          <Link href={`/projects/${project.id}`}>
            View Project Details <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
});
ProjectCard.displayName = "ProjectCard";

const ProjectGrid = ({ projects }) => {
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);
  const hasMoreProjects = visibleCount < projects.length;

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + PROJECTS_PER_PAGE);
  };

  useEffect(() => {
    setVisibleCount(PROJECTS_PER_PAGE);
  }, [projects]);

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {projects.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, visibleCount).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-800">
              No Projects Found
            </h3>
            <p className="text-gray-500 mt-2">
              Try adjusting your filters to find what you're looking for.
            </p>
          </div>
        )}
        {hasMoreProjects && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
              onClick={handleLoadMore}
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

const FeaturedProjectSection = ({ project }) => {
  if (!project) return null; // Don't render if there's no project data

  const durationStat =
    project.specifications.find((s) => s.label === "Duration")?.value || "N/A";
  const unitStat = project.features[0] || ""; // Example: "50 luxury residential units"
  const certificationStat =
    project.specifications.find((s) => s.label === "Certification")?.value ||
    "N/A";

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <Badge
              variant="outline"
              className="w-fit border-amber-200 text-amber-700"
            >
              Featured Project
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
              {project.title}
            </h2>
            <p className="text-gray-600 md:text-lg">
              {project.overview.split(". ")[0]}.
            </p>{" "}
            {/* Show first sentence */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {unitStat.split(" ")[0]}
                </div>
                <div className="text-sm text-gray-600">
                  {unitStat.split(" ").slice(1).join(" ")}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {durationStat.split(" ")[0]}
                </div>
                <div className="text-sm text-gray-600">
                  {durationStat.split(" ").slice(1).join(" ")}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {certificationStat}
                </div>
                <div className="text-sm text-gray-600">Certified</div>
              </div>
            </div>
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href={`/projects/${project.id}`}>
                View Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Image
            src={project.mainImage}
            width={600}
            height={500}
            alt={project.title}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

// --- Main Page Component ---
export default function ProjectsPage() {
  const [filters, setFilters] = useState({
    query: "",
    category: "all",
    year: "all",
  });
  const [debouncedQuery, setDebouncedQuery] = useState(filters.query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setFilters((prev) => ({ ...prev, query: debouncedQuery }));
    }, 300);
    return () => clearTimeout(handler);
  }, [debouncedQuery]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearchChange = (e) => {
    setDebouncedQuery(e.target.value);
  };

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const { query, category, year } = filters;
      const projectYear = project.stats
        .find((s) => s.label === "Completed")
        ?.value.split(" ")[1];

      return (
        (query === "" ||
          project.title.toLowerCase().includes(query.toLowerCase()) ||
          project.description.toLowerCase().includes(query.toLowerCase())) &&
        (category === "all" || project.category === category) &&
        (year === "all" || projectYear === year)
      );
    });
  }, [filters]);

  const featuredProject = PROJECTS_DATA.find((p) => p.id === 1); // Or any other logic to select a featured project

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <HeroSection />
        <ProjectFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onSearchChange={handleSearchChange}
        />
        <ProjectGrid projects={filteredProjects} />
        {/* You can make the StatsSection dynamic as well if you compute the stats from the data */}
        {/* <StatsSection /> */}
        <FeaturedProjectSection project={featuredProject} />
        {/* <CtaSection /> */}
      </main>
    </div>
  );
}
