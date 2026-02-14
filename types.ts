export enum ClientType {
  RECURRENT = 'A', // Emprendedor/Recurrente
  OCCASIONAL = 'B' // Ocasional/Regalo
}

export enum OrderStatus {
  DRAFT = 'Solicitud/Boceto',
  DESIGN = 'En Diseño',
  WAITING_APPROVAL = '🔴 ESPERANDO APROBACIÓN',
  PRODUCTION = 'En Corte/Producción',
  ASSEMBLY = 'Ensamble/Acabados',
  READY = 'Listo para Entrega',
  DELIVERED = 'Entregado'
}

// --- AUTH & ROLES ---
export enum UserRole {
  ADMIN = 'Administrador',
  DESIGNER = 'Diseñador',
  OPERATOR = 'Operario'
}

export interface User {
  username: string;
  password: string; // Plain text for this mock
  name: string;
  role: UserRole;
}
// --------------------

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: ClientType;
  ordersCount: number;
  lastOrderDate: string;
}

export interface Material {
  id: string;
  name: string;
  thickness: string; // e.g., '3mm', '5mm'
  costPerSheet: number;
  sheetWidth: number; // cm
  sheetHeight: number; // cm
  fullSheets: number;
}

export interface Scrap {
  id: string;
  materialId: string;
  width: number;
  height: number;
  notes: string;
}

export interface ChecklistItem {
  id: string;
  label: string;
  completed: boolean;
}

export interface Order {
  id: string;
  clientId: string;
  productName: string; // Changed from description
  quantity: number;    // Explicit quantity field
  status: OrderStatus;
  createdAt: string;
  totalPrice: number;
  materialId?: string;
  checklist: ChecklistItem[];
  deliveryDate: string; // ISO Date YYYY-MM-DD
}

export interface QuoteParams {
  materialId: string;
  quantity: number;
  machineTimeMinutes: number;
  designHours: number;
  width: number;
  height: number;
}