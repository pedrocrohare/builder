"use client"

import type { FormData } from "@/components/website-builder-form"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Download,
  Loader2,
  Menu,
  Search,
  ShoppingCart,
  User,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import { useState } from "react"

interface WebsitePreviewStepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
}

export function WebsitePreviewStep({ formData }: WebsitePreviewStepProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    // Simulate website generation
    setTimeout(() => {
      setIsGenerating(false)
      setIsGenerated(true)
    }, 3000)
  }

  // Get color classes based on the selected color scheme
  const getColorClasses = () => {
    switch (formData.colorScheme) {
      case "blue":
        return {
          primary: "bg-blue-600",
          secondary: "bg-blue-100",
          text: "text-blue-600",
          hover: "hover:bg-blue-700",
          border: "border-blue-200",
          button: "bg-blue-600 hover:bg-blue-700 text-white",
          light: "bg-blue-50",
        }
      case "green":
        return {
          primary: "bg-green-600",
          secondary: "bg-green-100",
          text: "text-green-600",
          hover: "hover:bg-green-700",
          border: "border-green-200",
          button: "bg-green-600 hover:bg-green-700 text-white",
          light: "bg-green-50",
        }
      case "purple":
        return {
          primary: "bg-purple-600",
          secondary: "bg-purple-100",
          text: "text-purple-600",
          hover: "hover:bg-purple-700",
          border: "border-purple-200",
          button: "bg-purple-600 hover:bg-purple-700 text-white",
          light: "bg-purple-50",
        }
      case "red":
        return {
          primary: "bg-red-600",
          secondary: "bg-red-100",
          text: "text-red-600",
          hover: "hover:bg-red-700",
          border: "border-red-200",
          button: "bg-red-600 hover:bg-red-700 text-white",
          light: "bg-red-50",
        }
      case "neutral":
      default:
        return {
          primary: "bg-slate-800",
          secondary: "bg-slate-100",
          text: "text-slate-800",
          hover: "hover:bg-slate-900",
          border: "border-slate-200",
          button: "bg-slate-800 hover:bg-slate-900 text-white",
          light: "bg-slate-50",
        }
    }
  }

  // Get style classes based on the selected design style
  const getStyleClasses = () => {
    switch (formData.designStyle) {
      case "minimal":
        return {
          container: "max-w-screen-xl mx-auto px-4",
          heading: "text-3xl font-light",
          subheading: "text-xl font-light",
          card: "border border-gray-100 shadow-sm",
          spacing: "py-12",
        }
      case "modern":
        return {
          container: "max-w-screen-xl mx-auto px-6",
          heading: "text-4xl font-bold",
          subheading: "text-2xl font-medium",
          card: "rounded-xl shadow-lg",
          spacing: "py-16",
        }
      case "classic":
        return {
          container: "max-w-screen-lg mx-auto px-4",
          heading: "text-3xl font-serif",
          subheading: "text-xl font-serif",
          card: "border rounded shadow",
          spacing: "py-10",
        }
      case "creative":
        return {
          container: "max-w-screen-xl mx-auto px-8",
          heading: "text-4xl font-bold italic",
          subheading: "text-2xl font-medium",
          card: "rounded-2xl shadow-xl",
          spacing: "py-14",
        }
      case "corporate":
      default:
        return {
          container: "max-w-screen-lg mx-auto px-4",
          heading: "text-3xl font-semibold",
          subheading: "text-xl font-medium",
          card: "border-0 shadow-md",
          spacing: "py-8",
        }
    }
  }

  const colors = getColorClasses()
  const style = getStyleClasses()

  // Render different website templates based on business type
  const renderWebsitePreview = () => {
    switch (formData.businessType) {
      case "business":
        return renderBusinessWebsite()
      case "portfolio":
        return renderPortfolioWebsite()
      case "ecommerce":
        return renderEcommerceWebsite()
      case "blog":
        return renderBlogWebsite()
      case "personal":
      default:
        return renderPersonalWebsite()
    }
  }

  // Business website template
  const renderBusinessWebsite = () => {
    return (
      <div className="bg-white w-full overflow-hidden">
        {/* Header */}
        <header className={`${colors.primary} text-white py-4`}>
          <div className={`${style.container} flex justify-between items-center`}>
            <div className="font-bold text-xl">{formData.businessName || "Business Name"}</div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:underline">
                Home
              </a>
              <a href="#" className="hover:underline">
                About
              </a>
              <a href="#" className="hover:underline">
                Services
              </a>
              {formData.features.includes("blog") && (
                <a href="#" className="hover:underline">
                  Blog
                </a>
              )}
              <a href="#" className="hover:underline">
                Contact
              </a>
            </nav>
            <div className="md:hidden">
              <Menu className="h-6 w-6" />
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className={`${colors.light} ${style.spacing}`}>
          <div className={`${style.container} flex flex-col md:flex-row items-center`}>
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className={`${style.heading} mb-4`}>Welcome to {formData.businessName || "Our Business"}</h1>
              <p className="text-gray-600 mb-6">
                {formData.businessDescription ||
                  "We provide exceptional services to help your business grow and succeed in today's competitive market."}
              </p>
              <div className="flex space-x-4">
                <button className={`${colors.button} px-6 py-2 rounded`}>Our Services</button>
                <button className="bg-white border px-6 py-2 rounded">Contact Us</button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="/placeholder.svg?height=300&width=500" alt="Business" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* Services */}
        <section className={`bg-white ${style.spacing}`}>
          <div className={style.container}>
            <h2 className={`${style.heading} text-center mb-12`}>Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className={`${style.card} p-6 rounded-lg`}>
                  <div className={`${colors.secondary} rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
                    <div className={`${colors.text} text-2xl font-bold`}>{item}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Service {item}</h3>
                  <p className="text-gray-600">Description of service {item} and how it benefits your customers.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        {renderSelectedFeatures()}

        {/* Footer */}
        <footer className={`${colors.primary} text-white py-8`}>
          <div className={`${style.container} grid grid-cols-1 md:grid-cols-4 gap-8`}>
            <div>
              <h3 className="text-xl font-bold mb-4">{formData.businessName || "Business Name"}</h3>
              <p className="text-sm opacity-80">
                {formData.businessDescription?.substring(0, 100) ||
                  "Short description of your business and what you do."}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" /> (123) 456-7890
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" /> info@example.com
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" /> 123 Business St, City
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:opacity-80">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:opacity-80">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="hover:opacity-80">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="hover:opacity-80">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className={`${style.container} mt-8 pt-8 border-t border-white/20 text-center text-sm opacity-70`}>
            © {new Date().getFullYear()} {formData.businessName || "Business Name"}. All rights reserved.
          </div>
        </footer>
      </div>
    )
  }

  // Portfolio website template
  const renderPortfolioWebsite = () => {
    return (
      <div className="bg-white w-full overflow-hidden">
        {/* Header */}
        <header className="bg-white py-6 border-b">
          <div className={`${style.container} flex justify-between items-center`}>
            <div className={`font-bold text-xl ${colors.text}`}>{formData.businessName || "Your Name"}</div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className={`${colors.text} hover:opacity-70`}>
                Home
              </a>
              <a href="#" className={`${colors.text} hover:opacity-70`}>
                Projects
              </a>
              <a href="#" className={`${colors.text} hover:opacity-70`}>
                About
              </a>
              <a href="#" className={`${colors.text} hover:opacity-70`}>
                Contact
              </a>
            </nav>
            <div className="md:hidden">
              <Menu className="h-6 w-6" />
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className={`bg-white ${style.spacing}`}>
          <div className={`${style.container} flex flex-col items-center text-center`}>
            <img src="/placeholder.svg?height=150&width=150" alt="Profile" className="rounded-full w-32 h-32 mb-6" />
            <h1 className={`${style.heading} mb-4`}>Hi, I'm {formData.businessName.split(" ")[0] || "John"}</h1>
            <p className="text-gray-600 max-w-2xl mb-8">
              {formData.businessDescription ||
                "I'm a creative professional specializing in design, development, and digital solutions. I create beautiful, functional work that helps businesses succeed."}
            </p>
            <button className={`${colors.button} px-8 py-3 rounded-full`}>View My Work</button>
          </div>
        </section>

        {/* Portfolio */}
        <section className={`${colors.light} ${style.spacing}`}>
          <div className={style.container}>
            <h2 className={`${style.heading} text-center mb-12`}>My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className={`${style.card} overflow-hidden rounded-lg`}>
                  <img
                    src={`/placeholder.svg?height=300&width=400&text=Project+${item}`}
                    alt={`Project ${item}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Project {item}</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Brief description of project {item} and the skills used.
                    </p>
                    <a href="#" className={`${colors.text} text-sm font-medium hover:underline`}>
                      View Details →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className={`bg-white ${style.spacing}`}>
          <div className={style.container}>
            <h2 className={`${style.heading} text-center mb-12`}>My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Design", "Development", "Photography", "Marketing", "UI/UX", "Branding", "Strategy", "Animation"].map(
                (skill) => (
                  <div
                    key={skill}
                    className={`${colors.secondary} ${colors.text} rounded-lg p-4 text-center font-medium`}
                  >
                    {skill}
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className={`${colors.primary} text-white ${style.spacing}`}>
          <div className={`${style.container} text-center`}>
            <h2 className={`${style.heading} mb-6`}>Let's Work Together</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Interested in collaborating or have a project in mind? Get in touch and let's create something amazing
              together.
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium">Contact Me</button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-6 border-t">
          <div className={`${style.container} flex flex-col md:flex-row justify-between items-center`}>
            <div className="text-gray-600 mb-4 md:mb-0">
              © {new Date().getFullYear()} {formData.businessName || "Your Name"}. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    )
  }

  // E-commerce website template
  const renderEcommerceWebsite = () => {
    return (
      <div className="bg-white w-full overflow-hidden">
        {/* Header */}
        <header className="bg-white py-4 border-b">
          <div className={`${style.container} flex justify-between items-center`}>
            <div className="font-bold text-xl">{formData.businessName || "Shop Name"}</div>
            <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-auto">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full border rounded-full py-2 px-4 pr-10"
                />
                <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <User className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 relative">
                <ShoppingCart className="h-5 w-5" />
                <span
                  className={`absolute -top-2 -right-2 ${colors.primary} text-white text-xs rounded-full w-4 h-4 flex items-center justify-center`}
                >
                  3
                </span>
              </a>
              <div className="md:hidden">
                <Menu className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className={`${style.container} mt-4 hidden md:block`}>
            <nav className="flex justify-center space-x-8">
              <a href="#" className="hover:underline">
                Home
              </a>
              <a href="#" className="hover:underline">
                New Arrivals
              </a>
              <a href="#" className="hover:underline">
                Women
              </a>
              <a href="#" className="hover:underline">
                Men
              </a>
              <a href="#" className="hover:underline">
                Accessories
              </a>
              <a href="#" className="hover:underline">
                Sale
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Banner */}
        <section className="relative">
          <img
            src="/placeholder.svg?height=400&width=1200&text=Sale+Now+On"
            alt="Banner"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 flex items-center">
            <div className={`${style.container}`}>
              <div className="max-w-md bg-white/90 p-6 rounded-lg">
                <h1 className={`${style.heading} mb-2`}>Summer Collection</h1>
                <p className="text-gray-700 mb-4">Discover our new arrivals with up to 40% off.</p>
                <button className={`${colors.button} px-6 py-2 rounded`}>Shop Now</button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className={`bg-white ${style.spacing}`}>
          <div className={style.container}>
            <h2 className={`${style.heading} text-center mb-12`}>Featured Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className={`${style.card} overflow-hidden rounded-lg`}>
                  <img
                    src={`/placeholder.svg?height=300&width=300&text=Product+${item}`}
                    alt={`Product ${item}`}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-1">Product {item}</h3>
                    <p className="text-gray-500 text-sm mb-2">Category</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">${(19.99 * item).toFixed(2)}</span>
                      <button className={`${colors.button} px-3 py-1 rounded text-sm`}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className={`${colors.light} ${style.spacing}`}>
          <div className={style.container}>
            <h2 className={`${style.heading} text-center mb-12`}>Shop by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Clothing", "Shoes", "Accessories"].map((category) => (
                <div key={category} className="relative rounded-lg overflow-hidden h-64">
                  <img
                    src={`/placeholder.svg?height=300&width=400&text=${category}`}
                    alt={category}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-white text-2xl font-bold mb-2">{category}</h3>
                      <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className={`${colors.primary} text-white ${style.spacing}`}>
          <div className={`${style.container} text-center`}>
            <h2 className={`${style.heading} mb-4`}>Join Our Newsletter</h2>
            <p className="max-w-2xl mx-auto mb-6">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <div className="flex flex-col md:flex-row max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-l-lg md:rounded-r-none rounded-r-lg mb-2 md:mb-0 text-gray-900"
              />
              <button className="bg-white text-gray-900 px-6 py-2 rounded-r-lg md:rounded-l-none rounded-l-lg font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 py-12">
          <div className={`${style.container} grid grid-cols-1 md:grid-cols-4 gap-8`}>
            <div>
              <h3 className="text-lg font-bold mb-4">{formData.businessName || "Shop Name"}</h3>
              <p className="text-gray-600 text-sm">
                {formData.businessDescription?.substring(0, 100) ||
                  "Your one-stop shop for quality products at affordable prices."}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:underline">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sale
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    All Products
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Track Order
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <p className="text-gray-600 text-sm">We accept all major credit cards and PayPal.</p>
            </div>
          </div>
          <div className={`${style.container} mt-8 pt-8 border-t text-center text-sm text-gray-600`}>
            © {new Date().getFullYear()} {formData.businessName || "Shop Name"}. All rights reserved.
          </div>
        </footer>
      </div>
    )
  }

  // Blog website template
  const renderBlogWebsite = () => {
    return (
      <div className="bg-white w-full overflow-hidden">
        {/* Header */}
        <header className="bg-white py-6 border-b">
          <div className={`${style.container} flex flex-col md:flex-row justify-between items-center`}>
            <div className="font-bold text-2xl mb-4 md:mb-0">{formData.businessName || "Blog Name"}</div>
            <nav className="flex space-x-6">
              <a href="#" className="hover:underline">
                Home
              </a>
              <a href="#" className="hover:underline">
                Categories
              </a>
              <a href="#" className="hover:underline">
                About
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* Featured Post */}
        <section className={`bg-white ${style.spacing}`}>
          <div className={style.container}>
            <div className={`${style.card} overflow-hidden rounded-lg`}>
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src="/placeholder.svg?height=400&width=600&text=Featured+Post"
                    alt="Featured Post"
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8">
                  <div
                    className={`${colors.secondary} ${colors.text} inline-block px-3 py-1 rounded-full text-sm font-medium mb-4`}
                  >
                    Featured
                  </div>
                  <h1 className={`${style.heading} mb-4`}>The Ultimate Guide to Something Amazing</h1>
                  <p className="text-gray-600 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                  <div className="flex items-center mb-6">
                    <img
                      src="/placeholder.svg?height=50&width=50"
                      alt="Author"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-medium">John Doe</div>
                      <div className="text-gray-500 text-sm">May 15, 2023 · 10 min read</div>
                    </div>
                  </div>
                  <button className={`${colors.button} px-6 py-2 rounded-full`}>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className={`${colors.light} ${style.spacing}`}>
          <div className={style.container}>
            <h2 className={`${style.heading} mb-12`}>Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className={`${style.card} overflow-hidden rounded-lg`}>
                  <img
                    src={`/placeholder.svg?height=200&width=300&text=Post+${item}`}
                    alt={`Post ${item}`}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <div
                      className={`${colors.secondary} ${colors.text} inline-block px-2 py-1 rounded-full text-xs font-medium mb-2`}
                    >
                      Category
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Blog Post Title {item}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-gray-500 text-xs">May {item + 10}, 2023</div>
                      <a href="#" className={`${colors.text} text-sm font-medium hover:underline`}>
                        Read More →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className={`bg-white ${style.spacing}`}>
          <div className={style.container}>
            <h2 className={`${style.heading} text-center mb-12`}>Popular Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Technology", "Lifestyle", "Travel", "Food", "Health", "Business", "Art", "Science"].map((category) => (
                <a
                  key={category}
                  href="#"
                  className={`${colors.secondary} ${colors.text} rounded-lg p-4 text-center font-medium hover:opacity-90 transition-opacity`}
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className={`${colors.primary} text-white ${style.spacing}`}>
          <div className={`${style.container} text-center`}>
            <h2 className={`${style.heading} mb-4`}>Subscribe to Our Newsletter</h2>
            <p className="max-w-2xl mx-auto mb-6">Get the latest posts delivered right to your inbox.</p>
            <div className="flex flex-col md:flex-row max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-l-lg md:rounded-r-none rounded-r-lg mb-2 md:mb-0 text-gray-900"
              />
              <button className="bg-white text-gray-900 px-6 py-2 rounded-r-lg md:rounded-l-none rounded-l-lg font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 py-12">
          <div className={`${style.container} grid grid-cols-1 md:grid-cols-3 gap-8`}>
            <div>
              <h3 className="text-lg font-bold mb-4">{formData.businessName || "Blog Name"}</h3>
              <p className="text-gray-600 text-sm">
                {formData.businessDescription?.substring(0, 100) ||
                  "A blog about interesting topics and insights from around the world."}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Popular Posts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className={`${style.container} mt-8 pt-8 border-t text-center text-sm text-gray-600`}>
            © {new Date().getFullYear()} {formData.businessName || "Blog Name"}. All rights reserved.
          </div>
        </footer>
      </div>
    )
  }

  // Personal website template
  const renderPersonalWebsite = () => {
    return (
      <div className="bg-white w-full overflow-hidden">
        {/* Header */}
        <header className="bg-white py-6">
          <div className={`${style.container} flex justify-between items-center`}>
            <div className="font-bold text-xl">{formData.businessName || "Your Name"}</div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className={`${colors.text} hover:opacity-70`}>
                Home
              </a>
              <a href="#" className={`${colors.text} hover:opacity-70`}>
                About
              </a>
              <a href="#" className={`${colors.text} hover:opacity-70`}>
                Blog
              </a>
              <a href="#" className={`${colors.text} hover:opacity-70`}>
                Contact
              </a>
            </nav>
            <div className="md:hidden">
              <Menu className="h-6 w-6" />
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className={`${colors.light} ${style.spacing}`}>
          <div className={`${style.container} flex flex-col md:flex-row items-center`}>
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h1 className={`${style.heading} mb-4`}>Hello, I'm {formData.businessName.split(" ")[0] || "John"}</h1>
              <p className="text-gray-600 mb-6">
                {formData.businessDescription ||
                  "I'm passionate about sharing my journey, experiences, and insights with the world. Welcome to my personal website where I document my adventures and thoughts."}
              </p>
              <div className="flex space-x-4">
                <button className={`${colors.button} px-6 py-2 rounded-full`}>About Me</button>
                <button className="bg-white border px-6 py-2 rounded-full">Contact</button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Profile"
                className="rounded-full w-64 h-64 mx-auto"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section className={`bg-white ${style.spacing}`}>
          <div className={style.container}>
            <h2 className={`${style.heading} text-center mb-12`}>About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <p className="text-gray-600 mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className={`${style.card} p-6 text-center`}>
                  <h3 className="text-xl font-semibold mb-2">My Interests</h3>
                  <p className="text-gray-600">Photography, Travel, Reading, Cooking</p>
                </div>
                <div className={`${style.card} p-6 text-center`}>
                  <h3 className="text-xl font-semibold mb-2">My Education</h3>
                  <p className="text-gray-600">Bachelor's in Something, University Name</p>
                </div>
                <div className={`${style.card} p-6 text-center`}>
                  <h3 className="text-xl font-semibold mb-2">My Experience</h3>
                  <p className="text-gray-600">5+ years in Something Interesting</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog */}
        <section className={`${colors.light} ${style.spacing}`}>
          <div className={style.container}>
            <h2 className={`${style.heading} text-center mb-12`}>Recent Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className={`${style.card} overflow-hidden rounded-lg`}>
                  <img
                    src={`/placeholder.svg?height=200&width=300&text=Post+${item}`}
                    alt={`Post ${item}`}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">My Adventure {item}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-gray-500 text-xs">May {item + 10}, 2023</div>
                      <a href="#" className={`${colors.text} text-sm font-medium hover:underline`}>
                        Read More →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button className={`${colors.button} px-6 py-2 rounded-full`}>View All Posts</button>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className={`bg-white ${style.spacing}`}>
          <div className={style.container}>
            <h2 className={`${style.heading} text-center mb-12`}>Get In Touch</h2>
            <div className="max-w-md mx-auto">
              <div className="grid gap-4 mb-6">
                <input type="text" placeholder="Your Name" className="w-full border rounded-lg p-3" />
                <input type="email" placeholder="Your Email" className="w-full border rounded-lg p-3" />
                <textarea placeholder="Your Message" className="w-full border rounded-lg p-3" rows={4}></textarea>
              </div>
              <button className={`${colors.button} w-full py-3 rounded-lg`}>Send Message</button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`${colors.primary} text-white py-8`}>
          <div className={`${style.container} text-center`}>
            <div className="flex justify-center space-x-4 mb-4">
              <a href="#" className="hover:opacity-80">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="text-sm opacity-80">
              © {new Date().getFullYear()} {formData.businessName || "Your Name"}. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    )
  }

  // Render selected features based on user choices
  const renderSelectedFeatures = () => {
    // Only render if there are features selected
    if (formData.features.length === 0) return null

    const featureSections = []

    // Contact Form
    if (formData.features.includes("contact")) {
      featureSections.push(
        <section key="contact" className={`${colors.light} ${style.spacing}`}>
          <div className={style.container}>
            <h2 className={`${style.heading} text-center mb-8`}>Contact Us</h2>
            <div className="max-w-lg mx-auto">
              <div className="grid gap-4 mb-6">
                <input type="text" placeholder="Your Name" className="w-full border rounded p-3" />
                <input type="email" placeholder="Your Email" className="w-full border rounded p-3" />
                <textarea placeholder="Your Message" className="w-full border rounded p-3" rows={4}></textarea>
              </div>
              <button className={`${colors.button} w-full py-3 rounded`}>Send Message</button>
            </div>
          </div>
        </section>,
      )
    }

    // Testimonials
    if (formData.features.includes("testimonials")) {
      featureSections.push(
        <section key="testimonials" className={`bg-white ${style.spacing}`}>
          <div className={style.container}>
            <h2 className={`${style.heading} text-center mb-12`}>What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className={`${style.card} p-6 rounded-lg`}>
                  <div className="flex items-center mb-4">
                    <img
                      src={`/placeholder.svg?height=60&width=60&text=${item}`}
                      alt={`Client ${item}`}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">Client Name {item}</h3>
                      <p className="text-gray-500 text-sm">Position, Company</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua."
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>,
      )
    }

    // Map
    if (formData.features.includes("map")) {
      featureSections.push(
        <section key="map" className={`bg-white ${style.spacing}`}>
          <div className={style.container}>
            <h2 className={`${style.heading} text-center mb-8`}>Find Us</h2>
            <div className="border rounded-lg overflow-hidden h-64 bg-gray-200">
              <div className="w-full h-full flex items-center justify-center">
                <MapPin className="h-12 w-12 text-gray-400 mr-2" />
                <span className="text-gray-500">Google Map would appear here</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600">123 Business Street, City, Country</p>
            </div>
          </div>
        </section>,
      )
    }

    // Gallery
    if (formData.features.includes("gallery")) {
      featureSections.push(
        <section key="gallery" className={`${colors.light} ${style.spacing}`}>
          <div className={style.container}>
            <h2 className={`${style.heading} text-center mb-12`}>Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="overflow-hidden rounded-lg">
                  <img
                    src={`/placeholder.svg?height=200&width=200&text=Image+${item}`}
                    alt={`Gallery ${item}`}
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>,
      )
    }

    // Newsletter
    if (formData.features.includes("newsletter")) {
      featureSections.push(
        <section key="newsletter" className={`${colors.primary} text-white ${style.spacing}`}>
          <div className={`${style.container} text-center`}>
            <h2 className={`${style.heading} mb-4`}>Subscribe to Our Newsletter</h2>
            <p className="max-w-2xl mx-auto mb-6">Stay updated with our latest news and offers.</p>
            <div className="flex flex-col md:flex-row max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-l-lg md:rounded-r-none rounded-r-lg mb-2 md:mb-0 text-gray-900"
              />
              <button className="bg-white text-gray-900 px-6 py-2 rounded-r-lg md:rounded-l-none rounded-l-lg font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </section>,
      )
    }

    // Booking/Appointment
    if (formData.features.includes("booking")) {
      featureSections.push(
        <section key="booking" className={`bg-white ${style.spacing}`}>
          <div className={style.container}>
            <h2 className={`${style.heading} text-center mb-8`}>Book an Appointment</h2>
            <div className="max-w-lg mx-auto">
              <div className="grid gap-4 mb-6">
                <input type="text" placeholder="Your Name" className="w-full border rounded p-3" />
                <input type="email" placeholder="Your Email" className="w-full border rounded p-3" />
                <input type="tel" placeholder="Your Phone" className="w-full border rounded p-3" />
                <input type="date" className="w-full border rounded p-3" />
                <select className="w-full border rounded p-3">
                  <option value="">Select Time</option>
                  <option value="9:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                </select>
              </div>
              <button className={`${colors.button} w-full py-3 rounded`}>Book Now</button>
            </div>
          </div>
        </section>,
      )
    }

    return featureSections
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Your Website Preview</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Here's a preview of your website based on your selections.
        </p>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <div className="bg-slate-800 p-2 flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-slate-300 truncate">{formData.businessName || "Your Website"}</span>
          </div>
        </div>
        <div className="bg-white overflow-auto max-h-[500px]">{renderWebsitePreview()}</div>
      </div>

      <div className="flex justify-center">
        {!isGenerated ? (
          <Button size="lg" onClick={handleGenerate} disabled={isGenerating} className="w-full md:w-auto">
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating your website...
              </>
            ) : (
              "Generate Website"
            )}
          </Button>
        ) : (
          <Button size="lg" variant="outline" className="w-full md:w-auto">
            <Download className="mr-2 h-4 w-4" />
            Download Website Files
          </Button>
        )}
      </div>

      {isGenerated && (
        <Card className="p-4 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900">
          <p className="text-center text-green-800 dark:text-green-300">
            Your website has been successfully generated! You can now download the files or deploy directly to your
            hosting provider.
          </p>
        </Card>
      )}
    </div>
  )
}

