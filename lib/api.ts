/**
 * API client for Madison Backend communication
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface BackendHealth {
  status: string;
  message: string;
  timestamp?: string;
  environment?: string;
}

export interface SystemDiagnostic {
  status: string;
  uptime: number;
  version: string;
  timestamp?: string;
  engines: {
    owner: boolean;
    revenue: boolean;
    content: boolean;
    traffic: boolean;
    funnel: boolean;
    scaling: boolean;
  };
}

export interface OwnerStatus {
  owner: string;
  system: string;
  backend: string;
  deployment?: string;
  timestamp?: string;
}

/**
 * Fetch health status from backend
 */
export async function fetchBackendHealth(): Promise<BackendHealth> {
  try {
    const response = await fetch(`${API_URL}/api/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Health check failed: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching backend health:', error);
    throw error;
  }
}

/**
 * Fetch system diagnostics from backend
 */
export async function fetchSystemDiagnostic(): Promise<SystemDiagnostic> {
  try {
    const response = await fetch(`${API_URL}/api/system/diagnostic`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Diagnostic fetch failed: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching system diagnostic:', error);
    throw error;
  }
}

/**
 * Fetch owner status from backend
 */
export async function fetchOwnerStatus(): Promise<OwnerStatus> {
  try {
    const response = await fetch(`${API_URL}/api/owner/status`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Owner status fetch failed: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching owner status:', error);
    throw error;
  }
}
