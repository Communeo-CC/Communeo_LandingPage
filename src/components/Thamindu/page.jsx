import Image from "next/image"
import { SignUpForm } from "@/components/sign-up-form"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <Header />
      <main className="pb-16">
        <Container>
          <section className="py-12 md:py-16">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Get Started Today</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Sign up now to receive the latest updates and exclusive content directly to your inbox
              </p>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </section>

          <section className="py-12 bg-[#e8dfd3] rounded-lg px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-center mb-8">Register Now</h2>
              <p className="text-center text-muted-foreground mb-12">We're excited to have you join!</p>
              <SignUpForm />
            </div>
          </section>

          <section className="py-12 md:py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Join Our Community Today!</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Open doors to an exclusive updates, tips, and complete advance insight to your field
                </p>
                <div className="flex gap-4">
                  <Button size="lg">Sign Up</Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(462)-gcicm5QoiSH8EkYGZWaIXm4cZB8wNI.png"
                  alt="Team collaboration"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

