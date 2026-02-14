import { OrderStatus, Material, ChecklistItem, UserRole } from './types';

export const MACHINE_RATE_PER_MINUTE = 1500; // Pesos Colombianos (COP)
export const DESIGN_RATE_PER_HOUR = 35000; // COP
export const PROFIT_MARGIN_PERCENTAGE = 0.35; // 35%

export const INITIAL_MATERIALS: Material[] = [
  { id: 'm1', name: 'MDF', thickness: '3mm', costPerSheet: 45000, sheetWidth: 183, sheetHeight: 244, fullSheets: 15 },
  { id: 'm2', name: 'MDF', thickness: '5.5mm', costPerSheet: 75000, sheetWidth: 183, sheetHeight: 244, fullSheets: 8 },
  { id: 'm3', name: 'Acrílico Cristal', thickness: '3mm', costPerSheet: 280000, sheetWidth: 120, sheetHeight: 180, fullSheets: 4 },
  { id: 'm4', name: 'Acrílico Color', thickness: '3mm', costPerSheet: 320000, sheetWidth: 120, sheetHeight: 180, fullSheets: 2 },
];

export const DEFAULT_CHECKLIST_TEMPLATE: ChecklistItem[] = [
  { id: 'step1', label: 'Corte Láser', completed: false },
  { id: 'step2', label: 'Lijado / Limpieza', completed: false },
  { id: 'step3', label: 'Pintura / Acabado', completed: false },
  { id: 'step4', label: 'Ensamble', completed: false },
  { id: 'step5', label: 'Empaque', completed: false },
];

export const KANBAN_COLUMNS = [
  { id: 'col1', title: 'Diseño y Boceto', statuses: [OrderStatus.DRAFT, OrderStatus.DESIGN] },
  { id: 'col2', title: 'Aprobación Cliente', statuses: [OrderStatus.WAITING_APPROVAL] },
  { id: 'col3', title: 'Producción', statuses: [OrderStatus.PRODUCTION] },
  { id: 'col4', title: 'Acabados y Entrega', statuses: [OrderStatus.ASSEMBLY, OrderStatus.READY] },
];

// Updated Navigation with Role Based Access Control
export const NAV_ITEMS = [
  { 
    id: 'dashboard', 
    label: 'Dashboard', 
    icon: 'LayoutDashboard',
    roles: [UserRole.ADMIN] // Only Admin
  },
  { 
    id: 'quote', 
    label: 'Cotizador', 
    icon: 'Calculator',
    roles: [UserRole.ADMIN, UserRole.DESIGNER]
  },
  { 
    id: 'production', 
    label: 'Producción (Kanban)', 
    icon: 'Kanban',
    roles: [UserRole.ADMIN, UserRole.DESIGNER, UserRole.OPERATOR] // Everyone needs to see status
  },
  { 
    id: 'calendar', 
    label: 'Calendario', 
    icon: 'CalendarDays',
    roles: [UserRole.ADMIN, UserRole.OPERATOR] // Designers focus on design, Operators on deadlines
  },
  { 
    id: 'inventory', 
    label: 'Inventario', 
    icon: 'Package',
    roles: [UserRole.ADMIN, UserRole.DESIGNER]
  },
  { 
    id: 'crm', 
    label: 'Clientes (CRM)', 
    icon: 'Users',
    roles: [UserRole.ADMIN, UserRole.DESIGNER]
  },
  { 
    id: 'reports', 
    label: 'Reportes', 
    icon: 'FileText',
    roles: [UserRole.ADMIN] // Only Admin
  },
];