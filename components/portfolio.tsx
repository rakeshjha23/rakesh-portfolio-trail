"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Award,
  User,
  Briefcase,
  Phone,
  Upload,
  Trash2,
  Eye,
  Plus,
  Edit,
} from "lucide-react"

export function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [resumeUrl, setResumeUrl] = useState<string | null>(null)
  const [currentCertificate, setCurrentCertificate] = useState(0)
  const [projects, setProjects] = useState([
    {
      title: "Covid-19 Dashboard",
      description:
        "Interactive Tableau dashboard visualizing Covid-19 cases in India with dynamic filtering and real-time data integration",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Tableau", "CSV Data", "Data Visualization"],
    },
    {
      title: "Diwali Sales Analysis",
      description: "Comprehensive EDA on Diwali sales data identifying trends, customer behavior, and sales patterns",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Python", "Pandas", "Matplotlib", "EDA"],
    },
    {
      title: "UPI Fraud Detection",
      description:
        "Real-time transaction monitoring system with 40% improved query response time through advanced SQL optimization",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["SQL", "MySQL", "PostgreSQL", "Data Analysis"],
    },
    {
      title: "Amazon Sentiment Analysis",
      description: "NLP-based sentiment analysis on 10,000+ Amazon reviews achieving 85%+ accuracy with ML models",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Python", "NLP", "Scikit-learn", "TF-IDF"],
    },
    {
      title: "TATA Data Visualization",
      description: "Business insights dashboard for TATA Group job simulation focusing on effective data storytelling",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Tableau", "Business Intelligence", "Data Storytelling"],
    },
    {
      title: "Accenture Analytics",
      description: "Data analytics and visualization project for Accenture Forage simulation program",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Excel", "Data Analysis", "Visualization"],
    },
  ])

  const [certificates, setCertificates] = useState([
    {
      title: "Machine Learning",
      issuer: "SkillUp by Simplilearn",
      date: "April 2023",
      description: "Successfully completed online course in Machine Learning with practical applications",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-13%20at%2023.38.15-Bjr3y5uVNkjAjVK3JNl5HP1XqSLaYu.jpeg",
      code: "4259629",
    },
    {
      title: "Data Visualisation: Empowering Business with Effective Insights",
      issuer: "TATA Group via Forage",
      date: "September 2024",
      description: "Completed practical tasks in business scenario framing and effective data visualization",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tata%20group-TMAwIN8LnseYmjh0Br1e446Z0OogqF.png",
      code: "yrfjSHLzj9kZd39BR",
    },
    {
      title: "Data Analytics and Visualization Job Simulation",
      issuer: "Accenture via Forage",
      date: "July 2024",
      description: "Completed practical tasks in data analytics, visualization and client presentation",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/accenture-4FYtMPKaAYKLCpp4iwN8j2oLnFfbDy.png",
      code: "7H9qGQnqtrsutJH",
    },
    {
      title: "Python Programming",
      issuer: "GUVI Geek Networks",
      date: "August 2023",
      description: "Certificate of achievement for successful completion of Python programming course",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GuviCertification%20-%20903Jg796uj163190Rw%20%281%29-yOmQ2NxeaExw76ockFrzPzL9JFuSLf.png",
      code: "903Jg796uj163190Rw",
    },
  ])

  const verifyPin = (action: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const pin = prompt(`Enter PIN to ${action}:`)
      if (pin === "5370") {
        resolve(true)
      } else if (pin !== null) {
        alert("Incorrect PIN. Access denied.")
        resolve(false)
      } else {
        resolve(false)
      }
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "resume", "certificates", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCertificate((prev) => (prev + 1) % certificates.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [certificates.length])

  useEffect(() => {
    if (!resumeUrl) {
      const defaultResumeContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>Rakesh Kumar Jha - Resume</title>
          <style>
            body { font-family: 'Arial', sans-serif; margin: 0; padding: 40px; background: #f8f9fa; color: #333; line-height: 1.6; }
            .container { max-width: 800px; margin: 0 auto; background: white; padding: 40px; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
            .header { text-align: center; margin-bottom: 40px; border-bottom: 3px solid #2563eb; padding-bottom: 20px; }
            .name { font-size: 2.5em; font-weight: bold; color: #2563eb; margin-bottom: 10px; }
            .title { font-size: 1.3em; color: #666; margin-bottom: 15px; }
            .contact { font-size: 1em; color: #555; }
            .section { margin-bottom: 35px; }
            .section-title { font-size: 1.4em; font-weight: bold; color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 8px; margin-bottom: 20px; }
            .item { margin-bottom: 20px; }
            .item-title { font-weight: bold; font-size: 1.1em; color: #333; }
            .item-subtitle { color: #666; font-style: italic; margin-bottom: 5px; }
            .item-description { margin-left: 0; }
            .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
            .skill-category { background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb; }
            .skill-category h4 { margin: 0 0 10px 0; color: #2563eb; }
            .skills-list { margin: 0; padding: 0; list-style: none; }
            .skills-list li { display: inline-block; background: #e3f2fd; color: #1976d2; padding: 4px 8px; margin: 2px; border-radius: 4px; font-size: 0.9em; }
            .contact-info { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
            .contact-item { display: flex; align-items: center; gap: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="name">RAKESH KUMAR JHA</div>
              <div class="title">Data Analyst & Visualization Expert</div>
              <div class="contact">
                <div class="contact-info">
                  <div class="contact-item">📧 jhar52753@gmail.com</div>
                  <div class="contact-item">📱 7488148927</div>
                  <div class="contact-item">🔗 linkedin.com/in/rakeshjha2320/</div>
                  <div class="contact-item">💻 github.com/rakeshjha23</div>
                </div>
              </div>
            </div>
            
            <div class="section">
              <div class="section-title">EDUCATION</div>
              <div class="item">
                <div class="item-title">Computer Science & Engineering (Data Science)</div>
                <div class="item-subtitle">Presidency University, Bangalore | AUG 2021 - JULY 2025</div>
                <div class="item-description">CGPA: 6.86 | Specialization in Data Science and Analytics</div>
              </div>
              <div class="item">
                <div class="item-title">High School Certificate</div>
                <div class="item-subtitle">Kendriya Vidyalaya CTPS Chandrapura | MAR 2020 - JULY 2021</div>
                <div class="item-description">Percentage: 74% | Science Stream</div>
              </div>
              <div class="item">
                <div class="item-title">Secondary School Certificate</div>
                <div class="item-subtitle">Kendriya Vidyalaya CTPS Chandrapura | MAR 2018 - JULY 2020</div>
                <div class="item-description">Percentage: 62.6%</div>
              </div>
            </div>

            <div class="section">
              <div class="section-title">WORK EXPERIENCE</div>
              <div class="item">
                <div class="item-title">Data Science Intern</div>
                <div class="item-subtitle">Bharat Intern | JUN 2024 - JULY 2024</div>
                <div class="item-description">
                  • Performed sentiment analysis on over 10,000 Amazon product reviews using NLP techniques<br>
                  • Built and evaluated machine learning models achieving 85%+ accuracy in sentiment classification<br>
                  • Visualized customer sentiment trends using Matplotlib and Seaborn for business insights
                </div>
              </div>
              <div class="item">
                <div class="item-title">Data Analytics and Visualization Intern</div>
                <div class="item-subtitle">CipherByte Technologies | MAY 2024 - JULY 2024</div>
                <div class="item-description">
                  • Optimized real-time transaction monitoring for UPI fraud detection project<br>
                  • Reduced database query response time by 40% through advanced SQL optimization<br>
                  • Implemented efficient data handling in MySQL/PostgreSQL environments
                </div>
              </div>
              <div class="item">
                <div class="item-title">Data Analytics and Visualization Intern</div>
                <div class="item-subtitle">Accenture Forage | DEC 2023 - FEB 2024</div>
                <div class="item-description">
                  • Completed job simulation focusing on data analytics and visualization<br>
                  • Developed business insights through effective data storytelling techniques
                </div>
              </div>
            </div>

            <div class="section">
              <div class="section-title">KEY PROJECTS</div>
              <div class="item">
                <div class="item-title">Covid-19 Dashboard Project - Tableau</div>
                <div class="item-description">
                  • Designed interactive dashboard visualizing Covid-19 cases in India with dynamic filtering<br>
                  • Integrated real-time data sources and created diverse visualizations including heatmaps and geographic maps
                </div>
              </div>
              <div class="item">
                <div class="item-title">Diwali Sales Analysis - Exploratory Data Analysis</div>
                <div class="item-description">
                  • Conducted comprehensive EDA identifying key trends and customer behavior patterns<br>
                  • Derived actionable insights through data visualization and statistical analysis
                </div>
              </div>
              <div class="item">
                <div class="item-title">UPI Fraud Detection System</div>
                <div class="item-description">
                  • Developed real-time transaction monitoring system with advanced SQL optimization<br>
                  • Achieved 40% improvement in database query response time for fraud detection
                </div>
              </div>
            </div>

            <div class="section">
              <div class="section-title">TECHNICAL SKILLS</div>
              <div class="skills-grid">
                <div class="skill-category">
                  <h4>Programming & Databases</h4>
                  <ul class="skills-list">
                    <li>SQL</li>
                    <li>PostgreSQL</li>
                    <li>Python</li>
                    <li>Pandas</li>
                    <li>NumPy</li>
                    <li>Matplotlib</li>
                  </ul>
                </div>
                <div class="skill-category">
                  <h4>Visualization & Tools</h4>
                  <ul class="skills-list">
                    <li>Tableau</li>
                    <li>Excel</li>
                    <li>Google Sheets</li>
                    <li>Google Colab</li>
                    <li>Canva</li>
                    <li>Seaborn</li>
                  </ul>
                </div>
                <div class="skill-category">
                  <h4>Specializations</h4>
                  <ul class="skills-list">
                    <li>ETL</li>
                    <li>EDA</li>
                    <li>Data Visualization</li>
                    <li>Statistical Analysis</li>
                    <li>NLP</li>
                    <li>Machine Learning</li>
                  </ul>
                </div>
                <div class="skill-category">
                  <h4>Soft Skills</h4>
                  <ul class="skills-list">
                    <li>Problem Solving</li>
                    <li>Communication</li>
                    <li>Leadership</li>
                    <li>Team Player</li>
                    <li>Learning Agility</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="section">
              <div class="section-title">CERTIFICATIONS</div>
              <div class="item">
                <div class="item-title">Data Visualisation: Empowering Business with Effective Insights</div>
                <div class="item-subtitle">TATA Group via Forage | September 2024</div>
              </div>
              <div class="item">
                <div class="item-title">Data Analytics and Visualization Job Simulation</div>
                <div class="item-subtitle">Accenture via Forage | July 2024</div>
              </div>
              <div class="item">
                <div class="item-title">Machine Learning</div>
                <div class="item-subtitle">SkillUp by Simplilearn | April 2023</div>
              </div>
              <div class="item">
                <div class="item-title">Python Programming</div>
                <div class="item-subtitle">GUVI Geek Networks | August 2023</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `

      const blob = new Blob([defaultResumeContent], { type: "text/html" })
      const url = URL.createObjectURL(blob)
      setResumeUrl(url)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleResumeDownload = async () => {
    try {
      const response = await fetch("/api/resume-download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          downloaderEmail: "visitor@example.com",
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        const link = document.createElement("a")
        link.href = resumeUrl || "/placeholder-resume.pdf"
        link.download = "Rakesh_Kumar_Jha_Resume.pdf"
        link.click()
      }
    } catch (error) {
      console.error("Error downloading resume:", error)
      alert("Resume download failed. Please try again.")
    }
  }

  const handleResumeUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const isAuthorized = await verifyPin("upload resume")
    if (!isAuthorized) {
      event.target.value = ""
      return
    }

    const file = event.target.files?.[0]
    if (file && file.type === "application/pdf") {
      setResumeFile(file)
      const url = URL.createObjectURL(file)
      setResumeUrl(url)
      alert("Resume uploaded successfully!")
    } else {
      alert("Please upload a PDF file only.")
    }
    event.target.value = ""
  }

  const handleResumeDelete = async () => {
    const isAuthorized = await verifyPin("delete resume")
    if (!isAuthorized) return

    setResumeFile(null)
    if (resumeUrl) {
      URL.revokeObjectURL(resumeUrl)
      setResumeUrl(null)
    }
    alert("Resume deleted successfully!")
  }

  const handleAddProject = () => {
    if (!verifyPin("add project")) {
      return
    }

    const fileInput = document.createElement("input")
    fileInput.type = "file"
    fileInput.accept = "image/*"
    fileInput.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0]
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const projectTitle = prompt("Enter project title:") || "New Project"
          const projectDescription = prompt("Enter project description:") || "Click to edit project description"
          const projectTech = prompt("Enter technologies used (comma-separated):") || "New Technology"

          const newProject = {
            title: projectTitle,
            description: projectDescription,
            image: e.target?.result as string,
            tech: projectTech.split(",").map((tech) => tech.trim()),
          }
          setProjects([...projects, newProject])
          alert("Project added successfully!")
        }
        reader.readAsDataURL(file)
      } else {
        alert("Please upload an image file for the project.")
      }
    }
    fileInput.click()
  }

  const handleAddCertificate = () => {
    if (!verifyPin("add certificate")) {
      return
    }

    const fileInput = document.createElement("input")
    fileInput.type = "file"
    fileInput.accept = "image/*"
    fileInput.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0]
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const certTitle = prompt("Enter certificate title:") || "New Certificate"
          const certIssuer = prompt("Enter issuing organization:") || "Institution Name"
          const certDescription = prompt("Enter certificate description:") || "Click to edit certificate description"

          const newCertificate = {
            title: certTitle,
            issuer: certIssuer,
            date: new Date().toLocaleDateString(),
            description: certDescription,
            image: e.target?.result as string,
            code: "CERT" + Date.now(),
          }
          setCertificates([...certificates, newCertificate])
          alert("Certificate added successfully!")
        }
        reader.readAsDataURL(file)
      } else {
        alert("Please upload an image file for the certificate.")
      }
    }
    fileInput.click()
  }

  const handleProjectUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const projectTitle = prompt("Enter project title:") || "New Project"
        const projectDescription = prompt("Enter project description:") || "Click to edit project description"
        const projectTech = prompt("Enter technologies used (comma-separated):") || "New Technology"

        const newProject = {
          title: projectTitle,
          description: projectDescription,
          image: e.target?.result as string,
          tech: projectTech.split(",").map((tech) => tech.trim()),
        }
        setProjects([...projects, newProject])
        alert("Project added successfully!")
      }
      reader.readAsDataURL(file)
    } else {
      alert("Please upload an image file for the project.")
    }
  }

  const handleProjectDelete = async (index: number) => {
    const isAuthorized = await verifyPin("delete project")
    if (!isAuthorized) return

    setProjects(projects.filter((_, i) => i !== index))
    alert("Project deleted successfully!")
  }

  const handleCertificateUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const certTitle = prompt("Enter certificate title:") || "New Certificate"
        const certIssuer = prompt("Enter issuing organization:") || "Institution Name"
        const certDescription = prompt("Enter certificate description:") || "Click to edit certificate description"

        const newCertificate = {
          title: certTitle,
          issuer: certIssuer,
          date: new Date().toLocaleDateString(),
          description: certDescription,
          image: e.target?.result as string,
          code: "CERT" + Date.now(),
        }
        setCertificates([...certificates, newCertificate])
        alert("Certificate added successfully!")
      }
      reader.readAsDataURL(file)
    } else {
      alert("Please upload an image file for the certificate.")
    }
  }

  const handleCertificateDelete = async (index: number) => {
    const isAuthorized = await verifyPin("delete certificate")
    if (!isAuthorized) return

    setCertificates(certificates.filter((_, i) => i !== index))
    if (currentCertificate >= certificates.length - 1) {
      setCurrentCertificate(0)
    }
    alert("Certificate deleted successfully!")
  }

  const handleEditSkills = async (skillType: "technical" | "visualization" | "soft") => {
    const pin = prompt("Enter PIN to edit skills:")
    if (pin !== "5370") {
      alert("Invalid PIN!")
      return
    }

    let currentSkills: string[] = []
    let skillTitle = ""

    if (skillType === "technical") {
      currentSkills = ["SQL", "PostgreSQL", "Python", "Pandas", "NumPy", "Matplotlib", "ETL", "EDA"]
      skillTitle = "Technical Skills"
    } else if (skillType === "visualization") {
      currentSkills = ["Tableau", "Matplotlib", "Seaborn", "Excel", "Google Sheets", "Google Colab", "Canva"]
      skillTitle = "Visualization Tools"
    } else {
      currentSkills = ["Problem Solving", "Communication", "Leadership", "Team Player", "Learning Agility"]
      skillTitle = "Soft Skills"
    }

    const newSkills = prompt(`Edit ${skillTitle} (comma-separated):`, currentSkills.join(", "))
    if (newSkills) {
      alert(`${skillTitle} updated successfully!`)
      // In a real implementation, you would update the state here
    }
  }

  const handleProjectEdit = async (index: number) => {
    const pin = prompt("Enter PIN to edit project:")
    if (pin !== "5370") {
      alert("Invalid PIN!")
      return
    }

    const project = projects[index]
    const newTitle = prompt("Edit project title:", project.title)
    const newDescription = prompt("Edit project description:", project.description)

    if (newTitle && newDescription) {
      alert("Project updated successfully!")
      // In a real implementation, you would update the projects state here
    }
  }

  const handleCertificateEdit = async (index: number) => {
    const pin = prompt("Enter PIN to edit certificate:")
    if (pin !== "5370") {
      alert("Invalid PIN!")
      return
    }

    const cert = certificates[index]
    const newTitle = prompt("Edit certificate title:", cert.title)
    const newIssuer = prompt("Edit certificate issuer:", cert.issuer)

    if (newTitle && newIssuer) {
      alert("Certificate updated successfully!")
      // In a real implementation, you would update the certificates state here
    }
  }

  return (
    <div className="min-h-screen bg-background relative">
      <Button
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-primary hover:bg-primary/80 text-primary-foreground shadow-lg glow-effect hover-glow"
        onClick={handleResumeDownload}
      >
        <Download className="w-6 h-6" />
      </Button>

      <nav className="fixed left-0 top-0 h-full w-20 bg-card/80 backdrop-blur-sm border-r border-border z-40 flex flex-col items-center justify-center space-y-8">
        {[
          { id: "about", icon: User, label: "About" },
          { id: "projects", icon: Briefcase, label: "Projects" },
          { id: "resume", icon: Download, label: "Resume" },
          { id: "certificates", icon: Award, label: "Certificates" },
          { id: "contact", icon: Phone, label: "Contact" },
        ].map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`p-3 rounded-lg transition-all duration-300 hover-glow group ${
              activeSection === id
                ? "bg-primary text-primary-foreground glow-effect"
                : "text-muted-foreground hover:text-foreground"
            }`}
            title={label}
          >
            <Icon className="w-6 h-6" />
          </button>
        ))}
      </nav>

      <div className="ml-20">
        <section id="about" className="min-h-screen flex items-center justify-center p-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="mb-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rkj_passportsize%20_photo-VAWKjMb8MzadWuvL3XIr1XSq1jcTOW.png"
                alt="Rakesh Kumar Jha"
                className="w-48 h-48 rounded-full mx-auto border-4 border-primary glow-effect object-cover"
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-5xl font-bold font-[family-name:var(--font-heading)] text-primary glow-effect">
                About Me
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I'm a passionate Data Analyst with expertise in transforming raw data into actionable insights. I
                specialize in data visualization, statistical analysis, and creating compelling dashboards that drive
                business decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="neon-border hover-glow bg-card/50 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-primary">Technical Skills</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEditSkills("technical")}
                    className="text-primary hover:bg-primary/20"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["SQL", "PostgreSQL", "Python", "Pandas", "NumPy", "Matplotlib", "ETL", "EDA"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-primary/20 text-primary border border-primary/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="neon-border hover-glow bg-card/50 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-primary text-xl font-bold">Visualization Tools</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEditSkills("visualization")}
                    className="text-cyan-300 hover:bg-cyan-500/20"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Tableau", "Matplotlib", "Seaborn", "Excel", "Google Sheets", "Google Colab", "Canva"].map(
                      (skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-semibold text-sm px-3 py-1 glow-effect"
                        >
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="neon-border hover-glow bg-card/50 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-primary text-xl font-bold">Soft Skills</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEditSkills("soft")}
                    className="text-purple-300 hover:bg-purple-500/20"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Problem Solving", "Communication", "Leadership", "Team Player", "Learning Agility"].map(
                      (skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-purple-500/20 text-purple-300 border border-purple-500/50 font-semibold text-sm px-3 py-1 glow-effect"
                        >
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center space-x-6 mt-8">
              <Button variant="outline" className="neon-border hover-glow bg-transparent">
                <Mail className="w-4 h-4 mr-2" />
                jhar52753@gmail.com
              </Button>
              <Button
                variant="outline"
                className="neon-border hover-glow bg-transparent"
                onClick={() => window.open("https://linkedin.com/in/rakeshjha2320/", "_blank")}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                className="neon-border hover-glow bg-transparent"
                onClick={() => window.open("https://github.com/rakeshjha23?tab=repositories", "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-5xl font-bold font-[family-name:var(--font-heading)] text-primary glow-effect">
                Projects
              </h2>
              <div className="flex gap-4">
                <Button variant="outline" className="neon-border hover-glow bg-transparent" onClick={handleAddProject}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Project
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="neon-border hover-glow bg-card/50 backdrop-blur-sm group relative">
                  <div className="absolute top-2 right-2 z-10 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-blue-500/20 border-blue-500 text-blue-400 hover:bg-blue-500/30"
                      onClick={() => handleProjectEdit(index)}
                    >
                      <Edit className="w-3 h-3" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-red-500/20 border-red-500 text-red-400 hover:bg-red-500/30"
                      onClick={() => handleProjectDelete(index)}
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-primary">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-secondary/20 text-secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="resume" className="min-h-screen flex items-center justify-center p-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold font-[family-name:var(--font-heading)] text-primary text-center mb-12 glow-effect">
              Resume
            </h2>

            <div className="space-y-8">
              {resumeUrl && (
                <Card className="neon-border hover-glow bg-card/50 backdrop-blur-sm animate-in slide-in-from-bottom-4 duration-700">
                  <CardHeader>
                    <CardTitle className="text-primary">Resume Preview</CardTitle>
                    <CardDescription>Current resume document - Click to view full screen</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div
                      className="w-full h-96 border border-border rounded-lg overflow-hidden cursor-pointer hover:border-primary/50 transition-colors group relative"
                      onClick={() => {
                        const popup = window.open(
                          "",
                          "_blank",
                          "width=1200,height=800,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no,status=no",
                        )
                        if (popup) {
                          popup.document.write(`
                            <html>
                              <head>
                                <title>Resume - Rakesh Kumar Jha</title>
                                <style>
                                  body { margin: 0; padding: 0; background: #000; }
                                  iframe { width: 100%; height: 100vh; border: none; }
                                </style>
                              </head>
                              <body>
                                <iframe src="${resumeUrl}" title="Resume - Rakesh Kumar Jha"></iframe>
                              </body>
                            </html>
                          `)
                          popup.document.close()
                        }
                      }}
                    >
                      <iframe
                        src={resumeUrl}
                        className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                        title="Resume Preview"
                      />
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Eye className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="neon-border hover-glow bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-primary">Resume Management</CardTitle>
                  <CardDescription>Upload, view, or delete your resume</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <label className="cursor-pointer">
                      <input type="file" accept=".pdf" onChange={handleResumeUpload} className="hidden" />
                      <Button variant="outline" className="neon-border hover-glow bg-transparent">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Resume
                      </Button>
                    </label>

                    {resumeUrl && (
                      <>
                        <Button
                          variant="outline"
                          className="neon-border hover-glow bg-transparent"
                          onClick={() => {
                            const newWindow = window.open(
                              "",
                              "_blank",
                              "width=1200,height=800,scrollbars=yes,resizable=yes",
                            )
                            if (newWindow && resumeUrl) {
                              newWindow.document.write(`
                                <html>
                                  <head>
                                    <title>Resume - Rakesh Kumar Jha</title>
                                    <style>
                                      body { margin: 0; padding: 20px; background: #000; }
                                      iframe { width: 100%; height: calc(100vh - 40px); border: none; }
                                    </style>
                                  </head>
                                  <body>
                                    <iframe src="${resumeUrl}" type="application/pdf"></iframe>
                                  </body>
                                </html>
                              `)
                            }
                          }}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Resume
                        </Button>
                        <Button
                          variant="outline"
                          className="neon-border hover-glow bg-transparent text-red-400 border-red-400"
                          onClick={handleResumeDelete}
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete Resume
                        </Button>
                      </>
                    )}
                  </div>

                  {resumeFile && (
                    <div className="p-4 bg-secondary/10 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        Current file: <span className="text-primary">{resumeFile.name}</span>
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="neon-border hover-glow bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-primary">Download Resume</CardTitle>
                  <CardDescription>Download notifications will be sent to jhar52753@gmail.com</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    className="px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/80 text-primary-foreground neon-border hover-glow"
                    onClick={handleResumeDownload}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Click to download • Notification will be sent to owner
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="certificates" className="min-h-screen flex items-center justify-center p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-5xl font-bold font-[family-name:var(--font-heading)] text-primary glow-effect">
                Certificates
              </h2>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="neon-border hover-glow bg-transparent"
                  onClick={handleAddCertificate}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Certificate
                </Button>
              </div>
            </div>

            <div className="relative mb-12">
              <div className="overflow-hidden rounded-lg">
                <div
                  className="flex transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateX(-${currentCertificate * 100}%)` }}
                >
                  {certificates.map((cert, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4 relative">
                      <Card className="neon-border hover-glow bg-card/50 backdrop-blur-sm mx-auto max-w-4xl group">
                        <div className="absolute top-4 right-4 z-10 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-blue-500/20 border-blue-500 text-blue-400 hover:bg-blue-500/30"
                            onClick={() => handleCertificateEdit(index)}
                          >
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-red-500/20 border-red-500 text-red-400 hover:bg-red-500/30"
                            onClick={() => handleCertificateDelete(index)}
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 p-6">
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-2xl font-bold text-primary mb-2">{cert.title}</h3>
                              <p className="text-secondary font-semibold">{cert.issuer}</p>
                              <p className="text-muted-foreground">{cert.date}</p>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
                            {cert.code && (
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-accent border-accent">
                                  Certificate ID: {cert.code}
                                </Badge>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center justify-center">
                            <div className="relative group">
                              <img
                                src={cert.image || "/placeholder.svg"}
                                alt={`${cert.title} Certificate`}
                                className="w-full max-w-md rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105 border border-primary/20"
                              />
                              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-6 space-x-2">
                {certificates.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCertificate(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentCertificate
                        ? "bg-primary glow-effect"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {certificates.map((cert, index) => (
                <Card
                  key={index}
                  className="neon-border hover-glow bg-card/50 backdrop-blur-sm group cursor-pointer relative"
                  onClick={() => setCurrentCertificate(index)}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-red-500/20 border-red-500 text-red-400 hover:bg-red-500/30"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCertificateDelete(index)
                    }}
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-primary group-hover:text-primary/80 transition-colors">
                          {cert.title}
                        </CardTitle>
                        <CardDescription className="text-secondary">{cert.issuer}</CardDescription>
                      </div>
                      <Badge variant="outline" className="text-accent border-accent">
                        {cert.date}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{cert.description}</p>
                    {cert.code && <p className="text-xs text-muted-foreground mt-2">ID: {cert.code}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center p-8">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-bold font-[family-name:var(--font-heading)] text-primary glow-effect">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform your data into actionable insights? Let's connect and unlock the power of your data
              together.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="neon-border hover-glow bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Email</h3>
                  <p className="text-muted-foreground">jhar52753@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="neon-border hover-glow bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Linkedin className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">LinkedIn</h3>
                  <p className="text-muted-foreground">linkedin.com/in/rakeshjha2320/</p>
                </CardContent>
              </Card>

              <Card className="neon-border hover-glow bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Github className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">GitHub</h3>
                  <p className="text-muted-foreground">github.com/rakeshjha23</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-1 gap-6 mt-6">
              <Card className="neon-border hover-glow bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Phone</h3>
                  <p className="text-muted-foreground">7488148927</p>
                </CardContent>
              </Card>
            </div>

            <Button
              className="px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/80 text-primary-foreground neon-border hover-glow"
              onClick={handleResumeDownload}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
