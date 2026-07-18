export interface Trainer {
  id: string;
  name: string;
  role: string;
  certifications: string[];
  image: string;
  rating: number;
  socials: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  quote: string;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}

export interface WorkoutProgram {
  id: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  caloriesBurn: string;
  image: string;
  intensity: 'Medium' | 'High' | 'Extreme';
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnually: number;
  period: string;
  description: string;
  features: { text: string; included: boolean }[];
  isPopular: boolean;
  badge?: string;
  accentColor: string; // 'neon-green' or 'electric-blue' or 'slate'
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  achievement: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Membership' | 'Training' | 'Facilities' | 'Policies';
}
