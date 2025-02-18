"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { ChevronRight } from "lucide-react"

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      source: "",
      message: "",
      terms: false,
    },
  })

  async function onSubmit(values) {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log(values)
      toast.success("Registration successful! Welcome aboard!")
      form.reset()
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block mb-2 font-medium text-white">First Name</label>
            <input
              id="firstName"
              placeholder="John"
              className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded text-white focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              {...form.register("firstName", { required: "First name is required" })}
            />
            {form.formState.errors.firstName && (
              <p className="mt-1 text-sm text-red-500">{form.formState.errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-2 font-medium text-white">Last Name</label>
            <input
              id="lastName"
              placeholder="Doe"
              className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded text-white focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              {...form.register("lastName", { required: "Last name is required" })}
            />
            {form.formState.errors.lastName && (
              <p className="mt-1 text-sm text-red-500">{form.formState.errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-white">Email</label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded text-white focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              {...form.register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
            />
            {form.formState.errors.email && (
              <p className="mt-1 text-sm text-red-500">{form.formState.errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 font-medium text-white">Phone Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="(123) 456-7890"
              className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded text-white focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              {...form.register("phone", { required: "Phone number is required" })}
            />
            {form.formState.errors.phone && (
              <p className="mt-1 text-sm text-red-500">{form.formState.errors.phone.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block mb-3 font-medium text-white">How did you hear about us?</label>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <input
                id="source-social"
                type="radio"
                value="social"
                className="w-5 h-5 accent-orange-500"
                {...form.register("source", { required: "Please select an option" })}
              />
              <label htmlFor="source-social" className="text-white">Social Media</label>
            </div>
            <div className="flex items-center space-x-3">
              <input
                id="source-search"
                type="radio"
                value="search"
                className="w-5 h-5 accent-orange-500"
                {...form.register("source", { required: "Please select an option" })}
              />
              <label htmlFor="source-search" className="text-white">Search Engine</label>
            </div>
            <div className="flex items-center space-x-3">
              <input
                id="source-friend"
                type="radio"
                value="friend"
                className="w-5 h-5 accent-orange-500"
                {...form.register("source", { required: "Please select an option" })}
              />
              <label htmlFor="source-friend" className="text-white">Friend Referral</label>
            </div>
            <div className="flex items-center space-x-3">
              <input
                id="source-other"
                type="radio"
                value="other"
                className="w-5 h-5 accent-orange-500"
                {...form.register("source", { required: "Please select an option" })}
              />
              <label htmlFor="source-other" className="text-white">Other Source</label>
            </div>
          </div>
          {form.formState.errors.source && (
            <p className="mt-1 text-sm text-red-500">{form.formState.errors.source.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-medium text-white">Message (Optional)</label>
          <textarea
            id="message"
            placeholder="Tell us a bit about yourself..."
            className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded text-white resize-none min-h-[120px] focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
            {...form.register("message")}
          />
          {form.formState.errors.message && (
            <p className="mt-1 text-sm text-red-500">{form.formState.errors.message.message}</p>
          )}
        </div>

        <div className="flex flex-row items-start space-x-3">
          <input
            id="terms"
            type="checkbox"
            className="mt-1 w-5 h-5 accent-orange-500"
            {...form.register("terms", { required: "You must agree to the terms and conditions" })}
          />
          <div className="space-y-1 leading-none">
            <label htmlFor="terms" className="text-white">I agree to the terms and conditions</label>
            {form.formState.errors.terms && (
              <p className="mt-1 text-sm text-red-500">{form.formState.errors.terms.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 px-6 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            <span className="flex items-center">
              Submit Registration
              <ChevronRight className="ml-2 h-5 w-5" />
            </span>
          )}
        </button>
      </form>
    </div>
  )
}