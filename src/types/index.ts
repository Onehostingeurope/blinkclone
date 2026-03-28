export type Plan = 'Free' | 'Starter' | 'Pro' | 'Max' | 'Team';
export type UserStatus = 'Active' | 'Trial' | 'Suspended';
export type ProjectStatus = 'Live' | 'Building' | 'Failed';
export type DeployStatus = 'Success' | 'Building' | 'Failed';
export type LogLevel = 'OK' | 'INFO' | 'WARN' | 'ERROR';
export type BadgeVariant = 'green' | 'blue' | 'purple' | 'yellow' | 'teal' | 'orange' | 'red' | 'gray';

export interface User {
  id: string;
  name: string;
  email: string;
  plan: Plan;
  credits: string;
  projects: number;
  joined: string;
  lastActive: string;
  status: UserStatus;
}

export interface Project {
  id: string;
  name: string;
  owner: string;
  type: 'Full Stack' | 'Mobile' | 'Website';
  domain: string;
  creditsUsed: number;
  created: string;
  status: ProjectStatus;
}

export interface Deployment {
  id: string;
  project: string;
  user: string;
  duration: string;
  time: string;
  status: DeployStatus;
}

export interface ApiKey {
  name: string;
  value: string;
  scope: string;
  status: 'Active' | 'Expiring' | 'Inactive';
}

export interface LogEntry {
  time: string;
  level: LogLevel;
  message: string;
}

export interface StatCard {
  label: string;
  value: string;
  change?: string;
  changeDir?: 'up' | 'down';
}

export interface Template {
  id: string;
  name: string;
  desc: string;
  icon: string;
  color: string;
  category: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  badge?: string;
  count?: string | number;
  countVariant?: 'default' | 'success' | 'danger';
}
