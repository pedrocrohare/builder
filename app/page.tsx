import { WebsiteBuilderForm } from "@/components/website-builder-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl mb-4">
            Build Your Website
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Answer a few questions about your needs and we'll create the perfect website for you.
          </p>
        </div>
        <WebsiteBuilderForm />
      </div>
    </main>
  )
}

