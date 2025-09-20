import { Navbar } from "@/components/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">Contact</h1>
            <p className="text-xl text-muted-foreground">
              Contact form and information coming soon
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
