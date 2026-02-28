export interface Experience {
    id: number;
    company: string;
    role: string;
    type: string;
    period: string;
    location: string;
    description: string[];
    stack: string[];
    current?: boolean;
}

export interface Project {
    id: number;
    name: string;
    description: string;
    stack: string[];
    github?: string;
    live?: string;
    company?: string;
}

export interface Education {
    id: number;
    institution: string;
    degree: string;
    field: string;
    period: string;
    location: string;
    courses: string[];
}

export interface TechCategory {
    id: number;
    name: string;
    color: string;
    glow: string;
    items: string[];
}

export interface Certification {
    name: string;
    status: 'obtained' | 'in-progress';
}
  
export interface SocialLink {
    label: string;
    url: string;
    icon: string;
  }