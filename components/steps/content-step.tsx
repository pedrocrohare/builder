"use client"

import type { FormData } from "@/components/website-builder-form"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ContentStepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
}

export function ContentStep({ formData, updateFormData }: ContentStepProps) {
  const contentTypes = [
    { id: "text", label: "Text Content" },
    { id: "images", label: "Images" },
    { id: "videos", label: "Videos" },
    { id: "documents", label: "Documents/PDFs" },
    { id: "products", label: "Product Listings" },
  ]

  const handleContentTypeChange = (contentId: string, checked: boolean) => {
    if (checked) {
      updateFormData({ contentType: [...formData.contentType, contentId] })
    } else {
      updateFormData({
        contentType: formData.contentType.filter((id) => id !== contentId),
      })
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-6">What content will your website have?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contentTypes.map((content) => (
            <div key={content.id} className="flex items-center space-x-2">
              <Checkbox
                id={`content-${content.id}`}
                checked={formData.contentType.includes(content.id)}
                onCheckedChange={(checked) => handleContentTypeChange(content.id, checked as boolean)}
              />
              <Label
                htmlFor={`content-${content.id}`}
                className="flex flex-1 cursor-pointer items-center rounded-md border border-slate-200 dark:border-slate-800 p-4 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {content.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Basic Information</h2>

        <div className="space-y-2">
          <Label htmlFor="business-name">Business/Website Name</Label>
          <Input
            id="business-name"
            value={formData.businessName}
            onChange={(e) => updateFormData({ businessName: e.target.value })}
            placeholder="Enter your business or website name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="business-description">Brief Description</Label>
          <Textarea
            id="business-description"
            value={formData.businessDescription}
            onChange={(e) => updateFormData({ businessDescription: e.target.value })}
            placeholder="Describe your business or website in a few sentences"
            rows={4}
          />
        </div>
      </div>
    </div>
  )
}

