"use client";

import { useState } from "react";
import { 
  FileText, 
  Calendar, 
  Mail, 
  Users, 
  Receipt, 
  MessageSquare,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Subheading } from "./text";
import { Heading } from "./text";

const useCases = [
  {
    id: "freelance",
    icon: FileText,
    title: "Freelances & Consultants",
    subtitle: "Gagnez 8h/semaine sur l'administratif",
    description: "Automatisez vos devis, factures et relances clients pour vous concentrer sur votre expertise.",
    benefits: [
      "Génération automatique de devis personnalisés",
      "Relances clients intelligentes",
      "Suivi des paiements en temps réel",
      "Rapports d'activité hebdomadaires"
    ],
    stat: "87%",
    statLabel: "de temps gagné sur la facturation",
    gradient: "from-pink-500 via-fuchsia-600 to-purple-700"
  },
  {
    id: "coach",
    icon: Calendar,
    title: "Coachs & Formateurs",
    subtitle: "Simplifiez votre organisation",
    description: "Synchronisez vos agendas, gérez vos inscriptions et envoyez vos rappels automatiquement.",
    benefits: [
      "Prise de RDV en ligne automatisée",
      "Rappels SMS & email personnalisés",
      "Gestion des annulations simplifiée",
      "Intégration Zoom/Meet automatique"
    ],
    stat: "95%",
    statLabel: "de réduction des no-shows",
    gradient: "from-blue-500 via-indigo-600 to-violet-700"
  },
  {
    id: "agency",
    icon: Users,
    title: "Agences & TPE",
    subtitle: "Scalez sans recruter",
    description: "Centralisez vos outils, automatisez vos workflows et pilotez votre équipe efficacement.",
    benefits: [
      "Onboarding clients automatisé",
      "Reporting consolidé multi-projets",
      "Alertes et notifications intelligentes",
      "Synchronisation CRM en temps réel"
    ],
    stat: "3x",
    statLabel: "plus de clients gérés",
    gradient: "from-amber-500 via-orange-600 to-red-600"
  },
  {
    id: "ecommerce",
    icon: Receipt,
    title: "E-commerçants",
    subtitle: "Boostez vos ventes",
    description: "Automatisez votre service client, vos relances panier et votre gestion de stock.",
    benefits: [
      "Relances panier abandonné",
      "Réponses automatiques FAQ",
      "Alertes stock faible",
      "Synchronisation marketplace"
    ],
    stat: "+34%",
    statLabel: "de taux de conversion",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700"
  },
  {
    id: "marketing",
    icon: Mail,
    title: "Marketeurs & CM",
    subtitle: "Décuplez votre impact",
    description: "Planifiez vos contenus, analysez vos performances et engagez votre audience sans effort.",
    benefits: [
      "Programmation multi-réseaux",
      "Veille concurrentielle automatique",
      "Rapports de performance IA",
      "Génération de contenus assistée"
    ],
    stat: "5x",
    statLabel: "plus de contenu publié",
    gradient: "from-purple-500 via-violet-600 to-indigo-700"
  },
  {
    id: "support",
    icon: MessageSquare,
    title: "Services Clients",
    subtitle: "Répondez 24h/24",
    description: "Créez des chatbots intelligents et automatisez vos réponses pour satisfaire vos clients.",
    benefits: [
      "Chatbot IA personnalisé",
      "Tri automatique des demandes",
      "Escalade intelligente",
      "Satisfaction client mesurée"
    ],
    stat: "24/7",
    statLabel: "disponibilité garantie",
    gradient: "from-rose-500 via-pink-600 to-fuchsia-700"
  }
];

export const UseCases = () => {
  const [activeCase, setActiveCase] = useState(useCases[0]);

  return (
    <section id="use-cases" className="py-12 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-2xl lg:max-w-7xl">
        <div className=" max-w-3xl mb-16">
          <Subheading>Cas d&apos;usage</Subheading>
          <Heading as="h3" className="mt-2">
            Vos concurrents utilisent déjà l&apos;IA !
          </Heading>

          <p className="text-xl text-muted-foreground mt-4">
            Découvrez comment Good Morning IA transforme le quotidien de professionnels comme vous.
          </p>
        </div>

        {/* Use case selector - horizontal scroll on mobile */}
        <div className="flex gap-3 max-w-2xl mx-auto overflow-x-auto pb-4 mb-12 scrollbar-hide -mx-6 px-6 md:px-0 md:flex-wrap md:justify-center">
          {useCases.map((useCase) => (
            <button
              key={useCase.id}
              onClick={() => setActiveCase(useCase)}
              className={cn(
                "flex items-center gap-3 px-5 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap shrink-0",
                activeCase.id === useCase.id
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground hover:bg-secondary/50"
              )}
            >
              <useCase.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{useCase.title}</span>
              <span className="sm:hidden">{useCase.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Active use case detail */}
        <div 
          key={activeCase.id}
          className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in"
        >
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <activeCase.icon className="w-4 h-4" />
              {activeCase.subtitle}
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {activeCase.title}
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8">
              {activeCase.description}
            </p>

            <ul className="space-y-4 mb-8">
              {activeCase.benefits.map((benefit, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              Démarrer avec ce cas d&apos;usage
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right: Visual stat card */}
          <div className="order-1 lg:order-2">
            <div className={cn(
              "relative p-8 md:p-12 rounded-3xl bg-gradient-to-br",
              activeCase.gradient,
              "shadow-2xl overflow-hidden"
            )}>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-3xl" />
              
              <div className="relative text-center">
                <activeCase.icon className="w-16 h-16 text-white/90 mx-auto mb-6" />
                
                <div className="text-6xl md:text-7xl font-black text-white mb-2">
                  {activeCase.stat}
                </div>
                
                <div className="text-lg md:text-xl text-white/90 font-medium">
                  {activeCase.statLabel}
                </div>

                {/* Animated dots */}
                <div className="flex justify-center gap-2 mt-8">
                  {useCases.map((uc) => (
                    <div
                      key={uc.id}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        activeCase.id === uc.id
                          ? "bg-white w-6"
                          : "bg-white/40"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
