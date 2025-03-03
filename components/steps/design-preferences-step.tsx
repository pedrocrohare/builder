"use client"

import type { FormData } from "@/components/website-builder-form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface DesignPreferencesStepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
}

export function DesignPreferencesStep({ formData, updateFormData }: DesignPreferencesStepProps) {
  const designStyles = [
    { id: "minimal", label: "Minimal & Clean" },
    { id: "modern", label: "Modern & Bold" },
    { id: "classic", label: "Classic & Professional" },
    { id: "creative", label: "Creative & Artistic" },
    { id: "corporate", label: "Corporate & Formal" },
  ]

  const colorSchemes = [
    { id: "blue", label: "Blue & Professional", color: "bg-blue-500" },
    { id: "green", label: "Green & Fresh", color: "bg-green-500" },
    { id: "purple", label: "Purple & Creative", color: "bg-purple-500" },
    { id: "red", label: "Red & Bold", color: "bg-red-500" },
    { id: "neutral", label: "Neutral & Elegant", color: "bg-slate-500" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-6">What design style do you prefer?</h2>
        <RadioGroup
          value={formData.designStyle}
          onValueChange={(value) => updateFormData({ designStyle: value })}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {designStyles.map((style) => (
            <div key={style.id} className="flex items-center space-x-2">
              <RadioGroupItem value={style.id} id={`style-${style.id}`} />
              <Label
                htmlFor={`style-${style.id}`}
                className="flex flex-1 cursor-pointer items-center rounded-md border border-slate-200 dark:border-slate-800 p-4 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {style.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Choose a color scheme</h2>
        <RadioGroup
          value={formData.colorScheme}
          onValueChange={(value) => updateFormData({ colorScheme: value })}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {colorSchemes.map((scheme) => (
            <div key={scheme.id} className="flex items-center space-x-2">
              <RadioGroupItem value={scheme.id} id={`color-${scheme.id}`} />
              <Label
                htmlFor={`color-${scheme.id}`}
                className="flex flex-1 cursor-pointer items-center rounded-md border border-slate-200 dark:border-slate-800 p-4 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <span className={`w-6 h-6 rounded-full mr-3 ${scheme.color}`}></span>
                {scheme.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  )
}

