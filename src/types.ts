export interface TestimonialLetter {
  id: string;
  author: string;
  role: string;
  location: string;
  date: string;
  letterContent: string;
  highlightQuote: string;
}

export interface SyllabusModule {
  number: number;
  title: string;
  subtitle: string;
  topics: string[];
  duration: string;
  keyTakeaway: string;
}

export interface TargetAudienceProfile {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefit: string;
  iconName: string;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  profession: string;
  preferredSchedule: string;
  notes: string;
  includeEbook: boolean;
}
