import React from 'react'
import { RootLayout } from './components/layout/RootLayout'
import { AboutSection } from './components/sections/AboutSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { EducationSection } from './components/sections/EducationSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { ActivitiesSection } from './components/sections/ActivitiesSection'
import { LanguagesSection } from './components/sections/LanguagesSection'
import { ContactSection } from './components/sections/ContactSection'

function App() {
  return (
    <RootLayout>
      <div className="space-y-0">
        <AboutSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
        <ActivitiesSection />
        <LanguagesSection />
        <ContactSection />
      </div>
    </RootLayout>
  )
}

export default App
