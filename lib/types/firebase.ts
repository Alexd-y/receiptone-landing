/**
 * Типы для Firebase Firestore коллекций ReceiptOne
 * Основано на документации базы данных
 */

// Collection: leads (для лендинга)
export interface Lead {
  email: string;
  name?: string | null;
  persona?: string | null;
  consentMarketing: boolean;
  consentAnalytics: boolean;
  source?: string | null;
  userAgent?: string | null;
  ipHash?: string | null;
  country?: string | null;
  message?: string | null;
  createdAt: string;
  created_time?: Date;
}

// Collection: users
export interface User {
  email: string;
  display_name?: string;
  photo_url?: string;
  uid: string;
  created_time: Date;
  phone_number?: string;
  second_name?: string;
  country_code: "us" | "ca";
  language?: string;
  gender_en?: string;
  gender_fr?: string;
  deleted?: boolean;
  delete_reason?: string;
  subscription_id?: string;
  subscription_exp_date?: Date;
  next_transaction_date?: Date;
  promo?: string;
  state?: StateTax;
  distance?: string;
  distance_rate?: number;
  date_format_type?: number;
}

export interface StateTax {
  state: string;
  country: "us" | "ca";
  tax_list: TaxList[];
}

export interface TaxList {
  tax_name: string; // GST, HST, PST, QST, RST, State Sales Tax
  tax_percent: number;
  tax: number;
  is_refundable: boolean;
}

// Collection: receipts
export interface Receipt {
  created_by: string; // User ID
  created_at: Date;
  company_name: string;
  company_image?: string;
  company_category?: string;
  price: number;
  tax: number;
  merchant_id?: string;
  receipt_image?: string;
  is_pre_tax?: boolean;
  is_reimbursable?: boolean;
  type_of_tax_deduction?: "Supplied" | "Reimbursable" | "Personal";
  payment_method?: "Cash" | "Card";
  comment?: string;
  tax_lists?: TaxList[];
  date: Date;
  receipt_file?: string;
  currency: string; // USD, CAD
}

// Collection: reports
export interface Report {
  created_by: string; // User ID
  created_at: Date;
  title: string;
  comment?: string;
  receipts: ReceiptDT[];
  currency: string;
  csvURL?: string;
  pdfURL?: string;
}

export interface ReceiptDT {
  // Receipt data transfer object для отчетов
  [key: string]: unknown;
}

// Collection: merchants
export interface Merchant {
  id: string;
  title: string;
  image?: string;
  category?: string;
}

// Collection: routes (Mileage)
export interface Route {
  created_at: Date;
  created_by: string; // User ID
  is_reimbursable?: boolean;
  start_route: RoutePoint;
  end_route: RoutePoint;
  rate: number;
  mileage: number;
  mileage_ml: number;
  total_price: number;
  comment?: string;
  date: Date;
  round_trip?: boolean;
  distance?: string;
  currency: string;
}

export interface RoutePoint {
  address: string;
  location: {
    latitude: number;
    longitude: number;
  };
  name?: string;
  city?: string;
  state?: string;
  country?: string;
  zip_code?: string;
}

// Collection: homeOffice
export interface HomeOffice {
  created_at: Date;
  created_by: string; // User ID
  title: string;
  currency: string;
  for_year: string;
  home_rent_type?: string;
  workspace_type?: string;
  workspace_size: number;
  workspace_unit: string;
  home_size: number;
  workspace_percent: number; // Calculated: (workspace_size / home_size) * 100
  start_work_date: Date;
  end_work_date: Date;
  rent_expenses: number;
  home_services_expenses: HomeService[];
  total_home_services_expenses: number;
  other_expenses: number;
  total_home_expenses: number;
  total_workspace_expenses: number;
  total_employment_home_expenses: number;
  total_employment_workspace_expenses: number;
  total_employment_expenses: number;
  home_office_id: string;
}

export interface HomeService {
  title: string; // Electricity, Internet, Water, Heat
  total_price: number;
}

// Collection: promoCodes
export interface PromoCode {
  promo: string;
  created_at: Date;
  expired_at: Date;
  count_activates_plan: number;
  count_activates_fact: number;
  user_activates: string[]; // User IDs
}

// Collection: faq
export interface FAQ {
  index: number;
  question_en: string;
  answer_en: string;
  question_fr: string;
  answer_fr: string;
  topic_title_en?: string;
  topic_title_fr?: string;
}

// Collection: instructions
export interface Instruction {
  index: number;
  title_en: string;
  text_en: string;
  title_fr: string;
  text_fr: string;
}

