"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BusinessTypeStep } from "@/components/steps/business-type-step"
import { DesignPreferencesStep } from "@/components/steps/design-preferences-step"
import { FeaturesStep } from "@/components/steps/features-step"
import { ContentStep } from "@/components/steps/content-step"
import { SummaryStep } from "@/components/steps/summary-step"
import { WebsitePreviewStep } from "@/components/steps/website-preview-step"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Edit } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

export type FormData = {
  businessType: string
  industryType: string
  designStyle: string
  colorScheme: string
  features: string[]
  contentType: string[]
  businessName: string
  businessDescription: string
}

const initialFormData: FormData = {
  businessType: "",
  industryType: "",
  designStyle: "",
  colorScheme: "",
  features: [],
  contentType: [],
  businessName: "",
  businessDescription: "",
}

export function WebsiteBuilderForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>(initialFormData)

  const steps = [
    { name: "Business Type", component: BusinessTypeStep },
    { name: "Design Preferences", component: DesignPreferencesStep },
    { name: "Features", component: FeaturesStep },
    { name: "Content", component: ContentStep },
    { name: "Summary", component: SummaryStep },
    { name: "Preview", component: WebsitePreviewStep },
  ]

  const CurrentStepComponent = steps[currentStep].component

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const progressPercentage = ((currentStep + 1) / steps.length) * 100

  const jumpToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex)
    window.scrollTo(0, 0)
  }

  const renderSummaryBadges = () => {
    const badges = []

    if (formData.businessType) {
      badges.push(
        <Badge key="businessType" variant="secondary" className="mr-2 mb-2">
          {formData.businessType}
          <Button variant="ghost" size="sm" className="ml-2 p-0 h-auto" onClick={() => jumpToStep(0)}>
            <Edit className="h-3 w-3" />
            <span className="sr-only">Edit business type</span>
          </Button>
        </Badge>,
      )
    }

    if (formData.industryType) {
      badges.push(
        <Badge key="industryType" variant="secondary" className="mr-2 mb-2">
          {formData.industryType}
          <Button variant="ghost" size="sm" className="ml-2 p-0 h-auto" onClick={() => jumpToStep(0)}>
            <Edit className="h-3 w-3" />
            <span className="sr-only">Edit industry type</span>
          </Button>
        </Badge>,
      )
    }

    if (formData.designStyle) {
      badges.push(
        <Badge key="designStyle" variant="secondary" className="mr-2 mb-2">
          {formData.designStyle}
          <Button variant="ghost" size="sm" className="ml-2 p-0 h-auto" onClick={() => jumpToStep(1)}>
            <Edit className="h-3 w-3" />
            <span className="sr-only">Edit design style</span>
          </Button>
        </Badge>,
      )
    }

    if (formData.colorScheme) {
      badges.push(
        <Badge key="colorScheme" variant="secondary" className="mr-2 mb-2">
          {formData.colorScheme}
          <Button variant="ghost" size="sm" className="ml-2 p-0 h-auto" onClick={() => jumpToStep(1)}>
            <Edit className="h-3 w-3" />
            <span className="sr-only">Edit color scheme</span>
          </Button>
        </Badge>,
      )
    }

    if (formData.features.length > 0) {
      badges.push(
        <Badge key="features" variant="secondary" className="mr-2 mb-2">
          {formData.features.length} feature{formData.features.length !== 1 ? "s" : ""}
          <Button variant="ghost" size="sm" className="ml-2 p-0 h-auto" onClick={() => jumpToStep(2)}>
            <Edit className="h-3 w-3" />
            <span className="sr-only">Edit features</span>
          </Button>
        </Badge>,
      )
    }

    if (formData.contentType.length > 0) {
      badges.push(
        <Badge key="contentType" variant="secondary" className="mr-2 mb-2">
          {formData.contentType.length} content type{formData.contentType.length !== 1 ? "s" : ""}
          <Button variant="ghost" size="sm" className="ml-2 p-0 h-auto" onClick={() => jumpToStep(3)}>
            <Edit className="h-3 w-3" />
            <span className="sr-only">Edit content types</span>
          </Button>
        </Badge>,
      )
    }

    return badges
  }

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400 mb-1">
          <span>
            Step {currentStep + 1} of {steps.length}
          </span>
          <span>{steps[currentStep].name}</span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>

          <Button
            onClick={handleNext}
            disabled={
              currentStep === steps.length - 1 ||
              (currentStep === 0 && (!formData.businessType || !formData.industryType)) ||
              (currentStep === 1 && (!formData.designStyle || !formData.colorScheme)) ||
              (currentStep === 3 && (!formData.businessName || !formData.businessDescription))
            }
            className="flex items-center gap-2"
          >
            {currentStep === steps.length - 1 ? "Create Website" : "Next"}
            {currentStep !== steps.length - 1 && <ArrowRight className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <Card className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800">
        <CardContent className="p-4">
          <h3 className="text-sm font-medium mb-2">Your selections:</h3>
          <ScrollArea className="h-20">
            <div className="flex flex-wrap">{renderSummaryBadges()}</div>
          </ScrollArea>
        </CardContent>
      </Card>

      <Card className="border-slate-200 dark:border-slate-800 shadow-lg">
        <CardContent className="pt-6">
          <CurrentStepComponent formData={formData} updateFormData={updateFormData} />
        </CardContent>
      </Card>
    </div>
  )
}

