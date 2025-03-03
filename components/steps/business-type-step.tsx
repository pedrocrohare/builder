"use client"

import type { FormData } from "@/components/website-builder-form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface BusinessTypeStepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
}

export function BusinessTypeStep({ formData, updateFormData }: BusinessTypeStepProps) {
  const businessTypes = [
    { id: "business", label: "Business" },
    { id: "personal", label: "Personal" },
    { id: "portfolio", label: "Portfolio" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "blog", label: "Blog" },
  ]

  const industryOptions = [
    { value: "technology", label: "Technology" },
    { value: "healthcare", label: "Healthcare" },
    { value: "education", label: "Education" },
    { value: "finance", label: "Finance" },
    { value: "retail", label: "Retail" },
    { value: "food", label: "Food & Beverage" },
    { value: "arts", label: "Arts & Entertainment" },
    { value: "professional", label: "Professional Services" },
    { value: "nonprofit", label: "Non-profit" },
    { value: "other", label: "Other" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-6">What type of website do you need?</h2>
        <RadioGroup
          value={formData.businessType}
          onValueChange={(value) => updateFormData({ businessType: value })}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {businessTypes.map((type) => (
            <div key={type.id} className="flex items-center space-x-2">
              <RadioGroupItem value={type.id} id={type.id} />
              <Label
                htmlFor={type.id}
                className="flex flex-1 cursor-pointer items-center rounded-md border border-slate-200 dark:border-slate-800 p-4 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {type.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">What industry are you in?</h2>
        <Select value={formData.industryType} onValueChange={(value) => updateFormData({ industryType: value })}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an industry" />
          </SelectTrigger>
          <SelectContent>
            {industryOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

