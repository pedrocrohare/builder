"use client"

import type { FormData } from "@/components/website-builder-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

interface SummaryStepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
}

export function SummaryStep({ formData }: SummaryStepProps) {
  const getBusinessTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      business: "Business",
      personal: "Personal",
      portfolio: "Portfolio",
      ecommerce: "E-commerce",
      blog: "Blog",
    }
    return types[type] || type
  }

  const getDesignStyleLabel = (style: string) => {
    const styles: Record<string, string> = {
      minimal: "Minimal & Clean",
      modern: "Modern & Bold",
      classic: "Classic & Professional",
      creative: "Creative & Artistic",
      corporate: "Corporate & Formal",
    }
    return styles[style] || style
  }

  const getColorSchemeLabel = (scheme: string) => {
    const schemes: Record<string, string> = {
      blue: "Blue & Professional",
      green: "Green & Fresh",
      purple: "Purple & Creative",
      red: "Red & Bold",
      neutral: "Neutral & Elegant",
    }
    return schemes[scheme] || scheme
  }

  const getFeatureLabel = (feature: string) => {
    const features: Record<string, string> = {
      contact: "Contact Form",
      gallery: "Image Gallery",
      blog: "Blog Section",
      testimonials: "Testimonials",
      newsletter: "Newsletter Signup",
      social: "Social Media Integration",
      map: "Google Maps",
      booking: "Booking/Appointment System",
      chat: "Live Chat",
      search: "Search Functionality",
    }
    return features[feature] || feature
  }

  const getContentTypeLabel = (content: string) => {
    const contents: Record<string, string> = {
      text: "Text Content",
      images: "Images",
      videos: "Videos",
      documents: "Documents/PDFs",
      products: "Product Listings",
    }
    return contents[content] || content
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Summary of Your Website</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-6">Review your selections before we generate your website.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Website Type</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">Type:</span>
                <span className="font-medium">{getBusinessTypeLabel(formData.businessType)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">Industry:</span>
                <span className="font-medium">{formData.industryType}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Design Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">Style:</span>
                <span className="font-medium">{getDesignStyleLabel(formData.designStyle)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">Color Scheme:</span>
                <div className="flex items-center">
                  <span className={`w-4 h-4 rounded-full mr-2 bg-${formData.colorScheme}-500`}></span>
                  <span className="font-medium">{getColorSchemeLabel(formData.colorScheme)}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1">
              {formData.features.length > 0 ? (
                formData.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span>{getFeatureLabel(feature)}</span>
                  </li>
                ))
              ) : (
                <li className="text-slate-500">No features selected</li>
              )}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Content Types</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1">
              {formData.contentType.length > 0 ? (
                formData.contentType.map((content) => (
                  <li key={content} className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span>{getContentTypeLabel(content)}</span>
                  </li>
                ))
              ) : (
                <li className="text-slate-500">No content types selected</li>
              )}
            </ul>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Basic Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Business/Website Name:</h3>
                <p>{formData.businessName}</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Description:</h3>
                <p className="text-slate-700 dark:text-slate-300">{formData.businessDescription}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

