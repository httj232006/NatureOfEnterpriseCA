export interface TimetableSlot {
  id: number;
  day: "mon" | "tue" | "wed" | "thu" | "fri";
  time_start: string;
  time_end: string;
  subject: string;
  room: string;
  lecturer: string;
  color: "blue" | "green" | "amber" | "free";
}

export interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  event_date: string;
  event_time: string;
  category: "academic" | "social" | "sport" | "workshop";
  color: "blue" | "green" | "amber";
}

export interface Society {
  id: number;
  name: string;
  description: string;
  icon: string;
  member_count: number;
  category: string;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  allergy_tags: string[];
  day_label: string;
  category: string;
}

export interface Location {
  id: number;
  name: string;
  description: string;
  icon: string;
  building: string;
}

export interface LostFoundItem {
  id: number;
  name: string;
  description: string;
  location_found: string;
  date_reported: string;
  status: "found" | "lost" | "claimed";
  icon: string;
  contact_email?: string;
}

export interface HelpdeskTicket {
  id: number;
  ticket_ref: string;
  subject: string;
  details: string;
  category: string;
  status: "Open" | "In Progress" | "Resolved";
  created_at: string;
}

export interface Notification {
  id: number;
  icon: string;
  title: string;
  body: string;
  created_at: string;
  is_read: boolean;
}

export interface StudentInteraction {
  id: number;
  student_id: string;
  event_id: number;
  interest_tech: number;
  interest_arts: number;
  interest_sport: number;
  interest_career: number;
  interest_sustainability: number;
  interest_social: number;
  interest_science: number;
  interest_volunteering: number;
  clicked: boolean;
}
