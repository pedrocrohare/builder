"use client"

import type { FormData } from "@/components/website-builder-form"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface FeaturesStepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
}

export function FeaturesStep({ formData, updateFormData }: FeaturesStepProps) {
  const features = [
    { id: "contact", label: "Contact Form" },
    { id: "gallery", label: "Image Gallery" },
    { id: "blog", label: "Blog Section" },
    { id: "testimonials", label: "Testimonials" },
    { id: "newsletter", label: "Newsletter Signup" },
    { id: "social", label: "Social Media Integration" },
    { id: "map", label: "Google Maps" },
    { id: "booking", label: "Booking/Appointment System" },
    { id: "chat", label: "Live Chat" },
    { id: "search", label: "Search Functionality" },
  ]

  const handleFeatureChange = (featureId: string, checked: boolean) => {
    if (checked) {
      updateFormData({ features: [...formData.features, featureId] })
    } else {
      updateFormData({
        features: formData.features.filter((id) => id !== featureId),
      })
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">What features do you need?</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-6">
        Select all the features you want to include in your website.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature) => (
          <div key={feature.id} className="flex items-center space-x-2">
            <Checkbox
              id={`feature-${feature.id}`}
              checked={formData.features.includes(feature.id)}
              onCheckedChange={(checked) => handleFeatureChange(feature.id, checked as boolean)}
            />
            <Label
              htmlFor={`feature-${feature.id}`}
              className="flex flex-1 cursor-pointer items-center rounded-md border border-slate-200 dark:border-slate-800 p-4 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {feature.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}

