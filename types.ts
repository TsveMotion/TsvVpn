import { LucideIcon } from "lucide-react";

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  highlight?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServerLocation {
  id: string;
  name: string;
  top: string;
  left: string;
}