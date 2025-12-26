import React from "react";
import Image from "next/image";

import {
  Heart,
  Play,
  ArrowRight,
  BrainCircuit,
  Activity,
  Users,
  Globe2,
  ShieldCheck,
  GraduationCap,
  ClipboardList,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

export default function AlagaLinkOfficial() {
  return (
    <div className="min-h-screen bg-orange-50 font-sans text-stone-900">
      {/* 1. HEADER */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-green-100">
        <div className="container mx-auto flex h-20 items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-green-700 fill-green-700" />
            <span className="text-2xl font-black tracking-tighter uppercase text-green-800">
              Alaga<span className="text-yellow-500">Link</span>
            </span>
          </div>

          {/* Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-8 font-bold text-green-800 uppercase tracking-wider text-sm">
            <a href="#" className="border-b-2 border-green-700 pb-1">
              Home
            </a>
            <a href="#about" className="hover:text-green-600 transition pb-1">
              About Us
            </a>
            <a href="#ai" className="hover:text-green-600 transition pb-1">
              AI Integration 
            </a>
            <a href="#users" className="hover:text-green-600 transition pb-1">
              Stakeholders
            </a>
            <a href="#team" className="hover:text-green-600 transition pb-1">
              Team
            </a>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block rounded-md bg-green-700 px-6 py-3 text-sm font-black text-white hover:bg-green-800 transition-all shadow-md">
            Contact us
          </button>
        </div>
      </header>

      {/* 2. HERO SECTION - Project Title */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text & CTA */}
          <div className="space-y-8 z-10">
            <h1 className="text-5xl lg:text-7xl font-black text-green-800 leading-tight">
              Elevate Community Health With{" "}
              <span className="text-green-600">AI-Powered Triage.</span>
            </h1>
            <p className="text-lg text-stone-600 max-w-lg leading-relaxed">
              AlagaLink streamlines Barangay Health Centers with automated
              patient prioritization and self-service tools, ensuring timely and
              efficient care for every resident.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-green-700 text-white px-8 py-4 rounded-md font-black uppercase shadow-lg hover:bg-green-800 transition flex items-center justify-center gap-2">
                Book an appointment
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-green-100">
              <div>
                <h3 className="text-4xl font-black text-green-700">12+</h3>
                <p className="text-stone-600 font-medium mt-2">
                  Pilot Barangays
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-black text-green-700">650+</h3>
                <p className="text-stone-600 font-medium mt-2">
                  Patients Served
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-black text-green-700">97%</h3>
                <p className="text-stone-600 font-medium mt-2">
                  Triage Accuracy
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image with Layered Background */}
          <div className="relative lg:ml-8 isolate">
            {/* Layered Background Shapes using DepEd Colors */}
            <div
              className="absolute -top-6 -left-6 w-3/4 h-3/4 bg-green-700/20 rounded-lg -z-10"
              style={{ opacity: 0.8 }}
            ></div>
            <div
              className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-yellow-400/30 rounded-lg -z-20"
              style={{ opacity: 0.8 }}
            ></div>

            {/* Main Image */}
            <div className="relative z-10  rounded-lg  overflow-hidden shadow-2xl border-[12px] border-white">
              <img
                src="/images/hero-picture.png"
                alt="Barangay Health Worker using a tablet for triage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM & SOLUTION */}
      <section id="about" className="py-24 bg-stone-50 overflow-hidden">
        <div className="container mx-auto px-6">
          {/* PROBLEM SUB-SECTION */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            {/* Left: Mosaic Image Pattern (Placeholders) */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[500px]">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-red-100 row-span-2">
                <img
                  src="/images/manual-queue.png"
                  className="absolute inset-0 w-full h-full object-cover object-[75%_center]"
                  alt="manual-queue-image"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-red-100">
                <img
                  src="/images/data-loss.png"
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="data-loss-image"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-red-100">
                <img
                  src="/images/overcrowding.png"
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="overcrowding-image"
                />
              </div>
            </div>

            {/* Right: Problem Text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-1 rounded-full text-xs font-black uppercase tracking-tighter">
                <AlertTriangle className="h-4 w-4" />
                The Current Crisis
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-green-800 uppercase leading-tight">
                Traditional Methods <br />
                <span className="text-red-600">Are Inefficient.</span>
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Barangay Health Centers often experience inefficiency in patient
                scheduling management due to manual catering methods which cause
                conflicts, record loss, and overcrowding. The lack of digital
                prioritization results in unequal access to care for patients
                with severe symptoms.
              </p>
              <div className="space-y-4 pt-4 border-t border-red-100">
                <div className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-red-600 flex-shrink-0" />
                  <p className="text-sm font-bold text-stone-700">
                    Scheduling conflicts and data loss
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-red-600 flex-shrink-0" />
                  <p className="text-sm font-bold text-stone-700">
                    Burdened administrative departments
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SOLUTION SUB-SECTION (Inspired by Provided Image Layout) */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Solution Text */}
            <div className="space-y-6 lg:order-1 order-2">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-black uppercase tracking-tighter">
                <CheckCircle2 className="h-4 w-4" />
                The AlagaLink Intervention
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-green-800 uppercase leading-tight">
                Streamlining Care <br />
                <span className="text-yellow-600 text-stroke-small">
                  Through Innovation.
                </span>
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                AlagaLink introduces a digital community health appointment
                scheduling system that integrates self-service tools, automated
                triage, and administrative dashboards.
              </p>

              <div className="grid gap-4 pt-4">
                {[
                  {
                    title: "Booking & Modification",
                    desc: "A patient-friendly web application for managing appointments.",
                  },
                  {
                    title: "Automated Triage",
                    desc: "Categorizes patients by urgency and provides immediate checkup feedback.",
                  },
                  {
                    title: "Centralized Data",
                    desc: "Secure management for patient and appointment histories.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-xl border-l-8 border-green-600 shadow-sm group hover:bg-green-50 transition-colors"
                  >
                    <h4 className="font-black text-green-800 uppercase text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-stone-500 font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Solution Graphic (ZenTherapy Style Placeholder) */}
            <div className="relative lg:order-2 order-1 isolate h-[500px]">
              {/* Background Shapes in DepEd Yellow Rain & Foam Green */}
              <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-yellow-400/20 rounded-[3rem] -z-10 translate-x-8 -translate-y-8" />
              <div className="absolute bottom-0 left-0 w-4/5 h-4/5 bg-green-700/10 rounded-[3rem] -z-20 -translate-x-8 translate-y-8" />

              <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/images/sample-ui.png"
                  alt="AlagaLink Tentative UI"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AI INTEGRATION */}
      <section
        id="ai"
        className="py-24 bg-green-800 text-white relative overflow-hidden"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black uppercase mb-8 italic">
            Automated <span className="text-yellow-400">Triage</span>{" "}
            Integration
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-green-900/50 border border-green-600 rounded-lg">
              <BrainCircuit className="h-10 w-10 text-yellow-400 mx-auto mb-4" />
              <h4 className="font-bold uppercase mb-2">
                Urgency Categorization
              </h4>
              <p className="text-xs text-green-100">
                AI sorts patients by symptom severity to ensure immediate care
                for critical cases.
              </p>
            </div>
            <div className="p-6 bg-green-900/50 border border-green-600 rounded-lg">
              <Activity className="h-10 w-10 text-yellow-400 mx-auto mb-4" />
              <h4 className="font-bold uppercase mb-2">Immediate Feedback</h4>
              <p className="text-xs text-green-100">
                Provides real-time symptom assessment and automated status
                updates to patients.
              </p>
            </div>
            <div className="p-6 bg-green-900/50 border border-green-600 rounded-lg">
              <ClipboardList className="h-10 w-10 text-yellow-400 mx-auto mb-4" />
              <h4 className="font-bold uppercase mb-2">Suggested Checkups</h4>
              <p className="text-xs text-green-100">
                Automatically recommends specific medical services based on
                triage data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SDG ALIGNMENT */}
      <section id="sdg" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-green-800 uppercase">
              UN Sustainable Development Goals
            </h2>
            <div className="h-2 w-20 bg-yellow-400 mx-auto mt-2"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="w-120 bg-[#4C9F38] text-white p-6 rounded-lg shadow-lg flex items-center gap-4">
              <img
                src="/images/sdg-3.png"
                alt="SDG 3 Icon"
                className="h-36 w-36 mx-auto mb-4 shrink-0"
              />
              <div>
                <span className="text-4xl font-black block mb-2">03</span>
                <h4 className="font-bold uppercase text-sm mb-4">
                  Good Health & Well-being
                </h4>
                <p className="text-xs">
                  Guaranteeing healthy lives and promoting well-being for all
                  ages through service efficiency.
                </p>
              </div>
            </div>
            <div className="w-120 bg-[#FD9D24] text-white p-6 rounded-lg shadow-lg flex items-center gap-4">
              <img
                src="/images/sdg-11.png"
                alt="SDG 11 Icon"
                className="h-36 w-36 mx-auto mb-4 shrink-0"
              />
              <div>
                <span className="text-4xl font-black block mb-2">11</span>
                <h4 className="font-bold uppercase text-sm mb-4">
                  Sustainable Communities
                </h4>
                <p className="text-xs">
                  Promoting accessible and efficient community health service
                  delivery systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STATISTICS & RESEARCH FINDINGS */}
      <section
        id="stats"
        className="py-24 bg-orange-50 border-y-4 border-yellow-200"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black text-green-800 uppercase text-center mb-16 italic">
            Research Foundations
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-red-600 mb-2">High</div>
              <p className="text-xs font-bold text-stone-500 uppercase">
                Patient Dissatisfaction
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-green-700 mb-2">
                Loss
              </div>
              <p className="text-xs font-bold text-stone-500 uppercase">
                Manual Record Duplication
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-green-700 mb-2">
                Delay
              </div>
              <p className="text-xs font-bold text-stone-500 uppercase">
                Consultation Hours Overcrowding
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-green-700 mb-2">
                Unequal
              </div>
              <p className="text-xs font-bold text-stone-500 uppercase">
                Access to Immediate Care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TARGET USERS */}
      <section id="users" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black text-green-800 uppercase text-center mb-16">
            Primary Stakeholders
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-left p-8 bg-stone-50 rounded-xl border-b-4 border-green-700 shadow-sm">
              <Users className="h-12 w-12 text-green-700 mx-auto mb-4" />
              <h3 className="font-bold text-xl text-green-800 mb-4">
                PATIENTS
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Primary beneficiaries reducing wait times via digital
                management.
              </p>
              <img
                src="/images/patients.jpeg"
                alt="Patient Icon"
                className="mx-auto mt-4 w-full h-72 object-cover object-[center_65%] rounded-2xl "
              />
            </div>
            <div className="text-left p-8 bg-stone-50 rounded-xl border-b-4 border-green-700 shadow-sm">
              <Activity className="h-12 w-12 text-green-700 mx-auto mb-4" />
              <h3 className="font-bold text-xl text-green-800 mb-4">BHWs</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Minimizes administrative workload and enables severe symptom
                prioritization.
              </p>
              <img
                src="/images/health-workers.webp"
                alt="Barangay Health Workers Icon"
                className="mx-auto mt-4 w-full h-72 object-cover object-[center_65%] rounded-2xl "
              />
            </div>
            <div className="text-left p-8 bg-stone-50 rounded-xl border-b-4 border-green-700 shadow-sm">
              <GraduationCap className="h-12 w-12 text-green-700 mx-auto mb-4" />
              <h3 className="font-bold text-xl text-green-800 mb-4">
                RESEARCHERS
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Future innovators using this structured framework for healthcare
                systems.
              </p>
              <img
                src="/images/future-researchers.jpg"
                alt="Researchers Icon"
                className="mx-auto mt-4 w-full h-72 object-cover object-[center_65%] rounded-2xl "
              />
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SETUP SECTION (Requested Refinement) */}
      <section
        id="team"
        className="py-24 bg-orange-50 border-t-8 border-green-700"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-green-800 mb-16 font-inter tracking-tight uppercase underline decoration-yellow-400 underline-offset-8">
            Team Setup
          </h2>
          <div className="max-w-sm mx-auto bg-white p-10 rounded-xl shadow-xl border-2 border-yellow-200 relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-16 h-16 bg-green-700"
              style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
            ></div>
            <div className="group relative mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-yellow-400 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-2 rounded-full inline-block border-4 border-green-700 shadow-md">
                <img
                  src="/images/formal-image.jpg"
                  alt="Vin Benjamin Belandres"
                  className="w-48 h-48 rounded-full bg-stone-100 object-cover"
                />
              </div>
            </div>
            <h3 className="text-2xl font-black text-green-800 font-inter mb-4 uppercase tracking-tighter">
              Vin Benjamin Belandres
            </h3>
            <div className="space-y-2 mb-8">
              <p className="text-green-700 font-black font-inter uppercase tracking-widest text-[10px] bg-green-50 py-1 rounded-full border border-green-100">
                Full Stack Developer
              </p>
              <p className="text-green-700 font-black font-inter uppercase tracking-widest text-[10px] bg-green-50 py-1 rounded-full border border-green-100">
                UI/UX Designer
              </p>
              <p className="text-green-700 font-black font-inter uppercase tracking-widest text-[10px] bg-green-50 py-1 rounded-full border border-green-100">
                Project Manager
              </p>
            </div>
            <a
              href="https://dlgaquilon.github.io/it103-fa1-portfolio/"
              className="inline-flex items-center gap-2 text-green-800 font-black font-inter uppercase tracking-tighter text-sm no-underline hover:text-green-600 hover:scale-105 transition-transform"
            >
              View Portfolio
              <div className="bg-yellow-400 p-1 rounded-full">
                <ArrowRight className="h-4 w-4 text-green-900" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-800 py-16 text-white border-t-8 border-yellow-400">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1: Brand & Newsletter */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-white p-1.5 rounded-md">
                  <Heart className="h-6 w-6 text-green-700 fill-green-700" />
                </div>
                <span className="text-2xl font-black tracking-tighter uppercase">
                  Alaga<span className="text-yellow-400">Link</span>
                </span>
              </div>
              <p className="text-sm uppercase tracking-wider text-green-100">
                Join our newsletter
              </p>
              <div className="relative max-w-sm">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full bg-green-900/50 border border-green-600 rounded-md py-3 px-4 text-sm placeholder:text-green-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="absolute right-2 top-1.5 bg-white p-1.5 rounded-md text-green-800 hover:bg-yellow-400 transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Column 2: Useful Links */}
            <div>
              <h4 className="font-black uppercase tracking-widest text-yellow-400 mb-6">
                Useful Links
              </h4>
              <ul className="space-y-4 text-sm uppercase tracking-tight text-green-100">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Carers
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Navigation */}
            <div>
              <h4 className="font-black uppercase tracking-widest text-yellow-400 mb-6">
                Navigation
              </h4>
              <ul className="space-y-4 text-sm uppercase tracking-tight text-green-100">
                <li>
                  <a href="#about" className="hover:text-yellow-400 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#ai" className="hover:text-yellow-400 transition">
                    AI Integration
                  </a>
                </li>
                <li>
                  <a href="#sdg" className="hover:text-yellow-400 transition">
                    SDGs
                  </a>
                </li>
                <li>
                  <a href="#users" className="hover:text-yellow-400 transition">
                    Stakeholders
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:text-yellow-400 transition">
                    Team
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h4 className="font-black uppercase tracking-widest text-yellow-400 mb-6">
                Contact Info
              </h4>
              <ul className="space-y-4 text-sm text-green-100">
                <li className="flex items-start gap-3">
                  <Globe2 className="h-5 w-5 text-yellow-400 shrink-0" />
                  <span className="uppercase tracking-tighter">
                    Barangay Health Centers
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Activity className="h-5 w-5 text-yellow-400 shrink-0" />
                  <span>+63 930 144 9543</span>
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-yellow-400 shrink-0" />
                  <span>support@alagalink.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-green-700 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6 text-[10px] uppercase tracking-[0.2em] text-green-200">
              <a href="#" className="hover:text-yellow-400">
                Terms and Conditions
              </a>
              <span>•</span>
              <a href="#" className="hover:text-yellow-400">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-yellow-400">
                Partner Agreement
              </a>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-green-400">
              Copyright © 2025. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
