import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useKV } from '@github/spark/hooks'
import { 
  ArrowRight, 
  Envelope, 
  Phone, 
  MapPin, 
  ArrowSquareOut,
  PaintBrush,
  Users,
  TrendUp,
  Heart,
  Star
} from "@phosphor-icons/react"
import { toast } from "sonner"

// Import project images
import healthTechImage from "@/assets/images/project-healthtech.svg"
import dashboardImage from "@/assets/images/project-dashboard.svg"
import finTechImage from "@/assets/images/project-fintech.svg"

interface Project {
  id: string
  title: string
  description: string
  category: string
  imageUrl?: string
  tags: string[]
  overview?: string
  problem?: string
  solution?: string
  results?: string[]
  tools?: string[]
}

interface ContactForm {
  name: string
  email: string
  message: string
}

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [contactForm, setContactForm] = useState<ContactForm>({ name: "", email: "", message: "" })
  const [projects] = useKV<Project[]>("portfolio-projects", [])

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast.error("Please fill in all fields")
      return
    }
    
    toast.success("Message sent! I'll get back to you soon.")
    setContactForm({ name: "", email: "", message: "" })
  }

  const skills = [
    "User Research", "Persona Development", "Journey Mapping", "Wireframing",
    "Prototyping", "Usability Testing", "Information Architecture", "Interaction Design",
    "Visual Design", "Design Systems", "Accessibility", "Data Analysis"
  ]

  const tools = [
    "Figma", "Sketch", "Adobe XD", "Principle", "InVision", "Miro",
    "Notion", "Hotjar", "Maze", "Optimal Workshop"
  ]

  // Sample projects with real Figma design images
  const sampleProjects = [
    {
      id: "healthtech",
      title: "HealthTech Mobile App",
      category: "Healthcare",
      description: "Redesigned patient portal to improve medication adherence by 40%",
      tags: ["Mobile", "Healthcare", "User Research"],
      imageUrl: healthTechImage,
      overview: "A comprehensive redesign of a healthcare mobile app focused on improving medication adherence through intuitive interface design and behavioral psychology principles.",
      problem: "Patients were struggling with medication adherence due to complex interfaces and lack of clear scheduling systems. The existing app had a 23% daily active user rate and poor medication compliance tracking.",
      solution: "Implemented a card-based interface with clear visual hierarchy, prominent call-to-action buttons for medication taking, and simplified scheduling views. Added behavioral nudges and progress tracking to encourage consistent usage.",
      results: [
        "40% improvement in medication adherence rates",
        "65% increase in daily active users",
        "32% reduction in user task completion time",
        "4.7/5 App Store rating (up from 2.8/5)"
      ],
      tools: ["Figma", "Principle", "Maze", "Hotjar"]
    },
    {
      id: "dashboard",
      title: "E-commerce Dashboard",
      category: "B2B SaaS",
      description: "Streamlined vendor management interface reducing task completion time by 60%",
      tags: ["Dashboard", "B2B", "Data Visualization"],
      imageUrl: dashboardImage,
      overview: "A complete overhaul of a vendor management dashboard focusing on data hierarchy, visual clarity, and workflow optimization for e-commerce businesses managing multiple suppliers.",
      problem: "Vendors and administrators were spending excessive time navigating complex workflows. The existing system had poor information architecture, leading to frequent errors and frustrated users with scattered data across multiple screens.",
      solution: "Created a unified dashboard with clear navigation patterns, at-a-glance metrics, and streamlined vendor onboarding flows. Implemented progressive disclosure for complex data and introduced visual data representations to reduce cognitive load.",
      results: [
        "60% reduction in task completion time",
        "45% decrease in user errors",
        "78% improvement in user satisfaction scores",
        "35% increase in platform adoption by new vendors"
      ],
      tools: ["Figma", "Adobe XD", "Miro", "Optimal Workshop"]
    },
    {
      id: "fintech",
      title: "Financial Planning Tool",
      category: "FinTech",
      description: "Simplified investment portfolio management for first-time investors",
      tags: ["FinTech", "Web App", "Accessibility"],
      imageUrl: finTechImage,
      overview: "A user-friendly investment platform designed specifically for first-time investors, focusing on education, simplicity, and confidence-building through clear visual design and progressive disclosure.",
      problem: "First-time investors found existing investment platforms intimidating and overly complex. High bounce rates and low conversion indicated that users felt overwhelmed by financial jargon and complex interfaces.",
      solution: "Designed an educational-first approach with guided onboarding, simplified portfolio visualizations, and plain-language explanations. Created progressive investment recommendations and clear risk indicators to build user confidence.",
      results: [
        "73% increase in user onboarding completion",
        "52% improvement in first investment conversion",
        "89% user satisfaction with educational content",
        "41% reduction in customer support queries"
      ],
      tools: ["Figma", "InVision", "Maze", "Notion"]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-foreground">Sarah Chen</h1>
            <div className="hidden md:flex items-center gap-8">
              <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">Work</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
            <Button size="sm" className="bg-accent hover:bg-accent/90">
              <Envelope className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Crafting digital experiences that 
              <span className="text-accent"> delight users</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              UX Designer with 5+ years of experience transforming complex problems into intuitive, 
              user-centered solutions. I specialize in research-driven design that drives business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View My Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Download Resume
                <ArrowSquareOut className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of recent projects showcasing my approach to user-centered design
            </p>
          </div>

          {(projects || []).length === 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Sample Project Cards with real images */}
              {sampleProjects.map((project, index) => (
                <Card 
                  key={index} 
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">{project.category}</Badge>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(projects || []).map((project) => (
                <Card 
                  key={project.id} 
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    {project.imageUrl ? (
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20"></div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">{project.category}</Badge>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">About Me</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a UX Designer passionate about creating meaningful digital experiences that solve real human problems. 
                  With a background in psychology and 5+ years in tech, I bring a unique blend of empathy and analytical thinking to every project.
                </p>
                <p>
                  My approach centers on understanding users deeply through research, then translating those insights into 
                  elegant solutions that balance user needs with business goals. I believe the best designs are invisible – 
                  they just work.
                </p>
                <p>
                  When I'm not designing, you'll find me exploring local coffee shops, practicing photography, 
                  or mentoring aspiring designers in the community.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center gap-2 text-accent">
                  <Heart className="w-5 h-5" />
                  <span className="font-medium">User-centered design</span>
                </div>
                <div className="flex items-center gap-2 text-accent">
                  <Star className="w-5 h-5" />
                  <span className="font-medium">5+ years experience</span>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Tools & Software</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <Badge key={index} variant="outline">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Have a project in mind? I'd love to hear about it and discuss how we can create something amazing together.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Envelope className="w-6 h-6 text-accent" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground">sarah.chen.ux@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message"
                  value={contactForm.message}
                  onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell me about your project..."
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                Send Message
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Sarah Chen. Designed with passion for great user experiences.
          </p>
        </div>
      </footer>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="problem">Problem</TabsTrigger>
                  <TabsTrigger value="solution">Solution</TabsTrigger>
                  <TabsTrigger value="results">Results</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-6">
                  <div className="space-y-4">
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <img 
                        src={selectedProject.imageUrl} 
                        alt={selectedProject.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <p className="text-muted-foreground">{selectedProject.overview}</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools?.map((tool, index) => (
                        <Badge key={index} variant="outline">{tool}</Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="problem" className="mt-6">
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.problem}</p>
                </TabsContent>
                
                <TabsContent value="solution" className="mt-6">
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.solution}</p>
                </TabsContent>
                
                <TabsContent value="results" className="mt-6">
                  <ul className="space-y-2">
                    {selectedProject.results?.map((result, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <TrendUp className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default App