"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2 } from "lucide-react";

type FormData = {
  // Parent/Guardian Info
  parentName: string;
  email: string;
  phone: string;

  // Child Info
  childName: string;
  childAge: string;
  gradeLevel: string;

  // Program Selection
  learningFocus: string[];
  startDate: string;
  additionalNotes: string;
};

export default function ApplicationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    gradeLevel: "",
    learningFocus: [],
    startDate: "",
    additionalNotes: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const learningFocusOptions = [
    { value: "ai-art", label: "AI Art & Creativity" },
    { value: "coding", label: "Coding & Programming" },
    { value: "robotics", label: "Robotics & Engineering" },
    { value: "data-science", label: "Data Science Basics" },
    { value: "digital-literacy", label: "Digital Literacy" },
    { value: "game-design", label: "Game Design" },
  ];

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const toggleLearningFocus = (value: string) => {
    setFormData(prev => ({
      ...prev,
      learningFocus: prev.learningFocus.includes(value)
        ? prev.learningFocus.filter(f => f !== value)
        : [...prev.learningFocus, value]
    }));
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (currentStep === 1) {
      if (!formData.parentName.trim()) newErrors.parentName = "Parent/guardian name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email";
      }
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    }

    if (currentStep === 2) {
      if (!formData.childName.trim()) newErrors.childName = "Child's name is required";
      if (!formData.childAge) newErrors.childAge = "Age is required";
      if (!formData.gradeLevel) newErrors.gradeLevel = "Grade level is required";
    }

    if (currentStep === 3) {
      if (formData.learningFocus.length === 0) {
        newErrors.learningFocus = "Please select at least one learning focus area";
      }
      if (!formData.startDate) newErrors.startDate = "Preferred start date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(step)) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-8 px-6 md:px-10 flex items-center justify-center">
        <Card className="max-w-2xl w-full">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Application Submitted!</CardTitle>
            <CardDescription>
              Thank you for your interest in Yoof AI Learning
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertDescription>
                We've received your application for <strong>{formData.childName}</strong>.
                A confirmation email has been sent to <strong>{formData.email}</strong>.
              </AlertDescription>
            </Alert>

            <div className="bg-muted p-4 rounded-lg space-y-2">
              <h3 className="font-semibold">What's Next?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Our team will review your application within 2-3 business days</li>
                <li>✓ You'll receive an email with next steps and onboarding information</li>
                <li>✓ We'll schedule an introductory call to discuss your child's learning journey</li>
              </ul>
            </div>

            <div className="flex gap-3 pt-4">
              <Button onClick={() => window.location.href = "/"} className="flex-1">
                Back to Home
              </Button>
              <Button onClick={() => {
                setIsSubmitted(false);
                setStep(1);
                setFormData({
                  parentName: "",
                  email: "",
                  phone: "",
                  childName: "",
                  childAge: "",
                  gradeLevel: "",
                  learningFocus: [],
                  startDate: "",
                  additionalNotes: "",
                });
              }} variant="outline" className="flex-1">
                Submit Another
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-6 md:px-10">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Apply to Yoof</h1>
          <p className="text-muted-foreground">
            Start your child's AI learning journey today
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {step === 1 && "Parent/Guardian Information"}
              {step === 2 && "Student Information"}
              {step === 3 && "Program Preferences"}
              {step === 4 && "Review & Submit"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "Please provide your contact information"}
              {step === 2 && "Tell us about your child"}
              {step === 3 && "Select your preferred learning areas"}
              {step === 4 && "Review your application before submitting"}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Step 1: Parent/Guardian Info */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="parentName">Full Name *</Label>
                  <Input
                    id="parentName"
                    placeholder="John Smith"
                    value={formData.parentName}
                    onChange={(e) => updateFormData("parentName", e.target.value)}
                  />
                  {errors.parentName && (
                    <p className="text-sm text-destructive">{errors.parentName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+44 7700 900000"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone}</p>
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Child Info */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="childName">Child's Name *</Label>
                  <Input
                    id="childName"
                    placeholder="Emma Smith"
                    value={formData.childName}
                    onChange={(e) => updateFormData("childName", e.target.value)}
                  />
                  {errors.childName && (
                    <p className="text-sm text-destructive">{errors.childName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="childAge">Age *</Label>
                  <Select value={formData.childAge} onValueChange={(value) => updateFormData("childAge", value)}>
                    <SelectTrigger id="childAge">
                      <SelectValue placeholder="Select age" />
                    </SelectTrigger>
                    <SelectContent>
                      {[5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(age => (
                        <SelectItem key={age} value={age.toString()}>
                          {age} years old
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.childAge && (
                    <p className="text-sm text-destructive">{errors.childAge}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gradeLevel">Grade Level *</Label>
                  <Select value={formData.gradeLevel} onValueChange={(value) => updateFormData("gradeLevel", value)}>
                    <SelectTrigger id="gradeLevel">
                      <SelectValue placeholder="Select grade level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="primary-ks1">Key Stage 1 (Years 1-2)</SelectItem>
                      <SelectItem value="primary-ks2">Key Stage 2 (Years 3-6)</SelectItem>
                      <SelectItem value="secondary-ks3">Key Stage 3 (Years 7-9)</SelectItem>
                      <SelectItem value="secondary-ks4">Key Stage 4 (Years 10-11)</SelectItem>
                      <SelectItem value="other">Other/Home Education</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.gradeLevel && (
                    <p className="text-sm text-destructive">{errors.gradeLevel}</p>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Program Selection */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Learning Focus Areas * (Select all that apply)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {learningFocusOptions.map(option => (
                      <div
                        key={option.value}
                        onClick={() => toggleLearningFocus(option.value)}
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${
                          formData.learningFocus.includes(option.value)
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{option.label}</span>
                          {formData.learningFocus.includes(option.value) && (
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.learningFocus && (
                    <p className="text-sm text-destructive">{errors.learningFocus}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="startDate">Preferred Start Date *</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => updateFormData("startDate", e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                  {errors.startDate && (
                    <p className="text-sm text-destructive">{errors.startDate}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalNotes">Additional Notes (Optional)</Label>
                  <Textarea
                    id="additionalNotes"
                    placeholder="Tell us about your child's interests, learning goals, or any special requirements..."
                    value={formData.additionalNotes}
                    onChange={(e) => updateFormData("additionalNotes", e.target.value)}
                    rows={4}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Parent/Guardian Information</h3>
                    <div className="bg-muted p-4 rounded-lg space-y-1 text-sm">
                      <p><strong>Name:</strong> {formData.parentName}</p>
                      <p><strong>Email:</strong> {formData.email}</p>
                      <p><strong>Phone:</strong> {formData.phone}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Student Information</h3>
                    <div className="bg-muted p-4 rounded-lg space-y-1 text-sm">
                      <p><strong>Name:</strong> {formData.childName}</p>
                      <p><strong>Age:</strong> {formData.childAge} years old</p>
                      <p><strong>Grade Level:</strong> {
                        formData.gradeLevel === "primary-ks1" ? "Key Stage 1 (Years 1-2)" :
                        formData.gradeLevel === "primary-ks2" ? "Key Stage 2 (Years 3-6)" :
                        formData.gradeLevel === "secondary-ks3" ? "Key Stage 3 (Years 7-9)" :
                        formData.gradeLevel === "secondary-ks4" ? "Key Stage 4 (Years 10-11)" :
                        "Other/Home Education"
                      }</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Program Preferences</h3>
                    <div className="bg-muted p-4 rounded-lg space-y-3 text-sm">
                      <div>
                        <strong>Learning Focus:</strong>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {formData.learningFocus.map(focus => {
                            const option = learningFocusOptions.find(o => o.value === focus);
                            return <Badge key={focus} variant="secondary">{option?.label}</Badge>;
                          })}
                        </div>
                      </div>
                      <p><strong>Start Date:</strong> {new Date(formData.startDate).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}</p>
                      {formData.additionalNotes && (
                        <div>
                          <strong>Additional Notes:</strong>
                          <p className="mt-1 text-muted-foreground">{formData.additionalNotes}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <Alert>
                  <AlertDescription>
                    By submitting this application, you agree to our terms of service and privacy policy.
                    We will contact you within 2-3 business days.
                  </AlertDescription>
                </Alert>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-3 pt-4">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={isSubmitting}
                >
                  Previous
                </Button>
              )}

              {step < totalSteps ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="ml-auto"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="ml-auto"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground">
          Need help? Contact us at <a href="mailto:hello@yoofai.co.uk" className="text-primary hover:underline">hello@yoofai.co.uk</a>
        </p>
      </div>
    </div>
  );
}
