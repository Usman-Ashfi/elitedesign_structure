"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, MessageSquare } from "lucide-react";
import { useState } from "react";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  timeline: "",
  budget: "",
  location: "",
  description: "",
  services: {
    "Architectural-Design": false,
    "Town-Planning": false,
    Building: false,
    "Interior-Design": false,
    "Structure-Design": false,
    "Quntity-Services": false,
    Landscaping: false,
    "Project-Management": false,
  },
  additional: "",
  consent: false,
};

const projectTypeOptions = [
  { value: "residential-new", label: "New Residential Construction" },
  { value: "residential-renovation", label: "Residential Renovation" },
  { value: "commercial-new", label: "New Commercial Construction" },
  { value: "commercial-renovation", label: "Commercial Renovation" },
  { value: "industrial", label: "Industrial Construction" },
  { value: "design-only", label: "Architectural Design Only" },
  { value: "consultation", label: "Consultation Services" },
  { value: "other", label: "Other" },
];

const timelineOptions = [
  { value: "asap", label: "As Soon As Possible" },
  { value: "1-3months", label: "1-3 Months" },
  { value: "3-6months", label: "3-6 Months" },
  { value: "6-12months", label: "6-12 Months" },
  { value: "12months+", label: "12+ Months" },
  { value: "flexible", label: "Flexible" },
];

const budgetOptions = [
  { value: "under-100k", label: "Under $100,000" },
  { value: "100k-250k", label: "$100,000 - $250,000" },
  { value: "250k-500k", label: "$250,000 - $500,000" },
  { value: "500k-1m", label: "$500,000 - $1,000,000" },
  { value: "1m-5m", label: "$1,000,000 - $5,000,000" },
  { value: "5m+", label: "$5,000,000+" },
  { value: "not-sure", label: "Not Sure Yet" },
];

const servicesOptions = [
  { id: "Architectural-Design", label: "Architectural Design" },
  { id: "Town-Planning", label: "Town Planning" },
  { id: "Building", label: "Building" },
  { id: "Interior-Design", label: "Interior Design" },
  { id: "Structure-Design", label: "Structure Design" },
  { id: "Quntity-Services", label: "Quntity Services" },
  { id: "Landscaping", label: "Landscaping" },
  { id: "Project-Management", label: "Project Management" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: null }));
    }
  };

  const handleSelectChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: null }));
    }
  };

  const handleCheckboxChange = (id, checked) => {
    if (id === "consent") {
      setFormData((prev) => ({ ...prev, consent: checked }));
      if (errors.consent) {
        setErrors((prev) => ({ ...prev, consent: null }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        services: { ...prev.services, [id]: checked },
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone is required.";
    if (!formData.projectType)
      newErrors.projectType = "Project type is required.";
    if (!formData.description)
      newErrors.description = "Project description is required.";
    if (!formData.consent)
      newErrors.consent = "You must agree to be contacted.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    setErrors({});

    // Simulate API call
    console.log("Form Submitted:", formData);
    setTimeout(() => {
      // Simulate success
      setStatus("success");
      // Reset form after a few seconds
      setTimeout(() => {
        setStatus("idle");
        setFormData(initialFormData);
      }, 3000);

      // To simulate an error:
      // setStatus("error");
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Project Inquiry Form
        </h2>
        <p className="text-gray-600">
          Fill out the form below and we'll get back to you within 24 hours with
          a detailed response.
        </p>
      </div>
      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-amber-600" />
            Tell Us About Your Project
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                {errors.firstName && (
                  <p className="text-sm text-red-600">{errors.firstName}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                {errors.lastName && (
                  <p className="text-sm text-red-600">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && (
                  <p className="text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company/Organization</Label>
              <Input
                id="company"
                placeholder="Your Company Name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            {/* Project Details */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Project Details
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) =>
                      handleSelectChange("projectType", value)
                    }
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypeOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.projectType && (
                    <p className="text-sm text-red-600">{errors.projectType}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Desired Timeline</Label>
                  <Select
                    value={formData.timeline}
                    onValueChange={(value) =>
                      handleSelectChange("timeline", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelineOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="budget">Project Budget</Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) =>
                      handleSelectChange("budget", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Project Location</Label>
                  <Input
                    id="location"
                    placeholder="City, State"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Project Description *</Label>
              <Textarea
                id="description"
                placeholder="Please describe your project in detail..."
                className="min-h-[120px]"
                value={formData.description}
                onChange={handleChange}
                required
              />
              {errors.description && (
                <p className="text-sm text-red-600">{errors.description}</p>
              )}
            </div>

            {/* Services Needed */}
            <div className="space-y-4">
              <Label>Services Needed (Select all that apply)</Label>
              <div className="grid gap-3 md:grid-cols-2">
                {servicesOptions.map((service) => (
                  <div key={service.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={service.id}
                      checked={formData.services[service.id]}
                      onCheckedChange={(checked) =>
                        handleCheckboxChange(service.id, checked)
                      }
                    />
                    <Label htmlFor={service.id} className="text-sm font-normal">
                      {service.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-2">
              <Label htmlFor="additional">Additional Information</Label>
              <Textarea
                id="additional"
                placeholder="Any additional details, questions, or special requirements..."
                className="min-h-[80px]"
                value={formData.additional}
                onChange={handleChange}
              />
            </div>

            {/* Consent */}
            <div className="flex items-start space-x-3">
              <Checkbox
                className={"mt-1"}
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("consent", checked)
                }
                required
              />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor="consent"
                  className="text-sm text-gray-600 font-normal inline"
                >
                  I agree to be contacted by{" "}
                  <strong>Elite Design & Structure (PVT) LTD </strong> regarding
                  my project inquiry. I understand that my information will be
                  kept confidential and used only for project-related
                  communications.
                </Label>
                {errors.consent && (
                  <p className="text-sm text-red-600">{errors.consent}</p>
                )}
              </div>
            </div>

            <Button
              size="lg"
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400"
              disabled={status === "submitting"}
            >
              {status === "submitting"
                ? "Submitting..."
                : "Submit Project Inquiry"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            {status === "success" && (
              <p className="text-sm text-green-600 text-center">
                Message sent successfully! We will get back to you shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600 text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
