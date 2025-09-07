export interface Profile {
  name: string
  title: string
  location: string
  email: string
  phone: string
  linkedin: string
  github: string
  summary: string
  interests: string[]
}

export const profile: Profile = {
  name: 'Adrián Montes',
  title: 'Telematics Engineering student focused on modern software development (backend & frontend)',
  location: 'Madrid, Spain',
  email: 'adrian.adyra@gmail.com',
  phone: '+34 637 682 361',
  linkedin: 'linkedin.com/in/adrianmonteslinares',
  github: 'github.com/aMonteSl',
  summary: 'Telematics Engineering student (URJC) seeking an internship to keep growing technically while contributing to real solutions and team goals. Creator of Code-XR, an open-source VS Code plugin for real-time code metrics visualization with XR integration.',
  interests: [
    'Learning new technologies',
    'XR/Web development',
    'Backend development',
    'Generative AI',
    'Exploring cultures/travel'
  ]
}
