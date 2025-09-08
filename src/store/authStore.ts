import { create } from "zustand";
import Cookies from "js-cookie";
// Types pulled from @types/js-cookie; ensure dev dependency installed.

// If js-cookie is not installed yet, we can fallback to document.cookie helpers.
// We'll implement a tiny cookie util to avoid extra dependency if desired.
// For now this assumes js-cookie; if missing, install with: npm i js-cookie

export interface AuthSession {
  token: string;
  expires: string; // ISO
  email: string;
  fullName: string;
  roles: string[];
}

interface AuthState {
  session: AuthSession | null;
  setSession: (session: AuthSession) => void;
  clearSession: () => void;
  isAuthenticated: boolean;
  getAuthHeader: () => { Authorization?: string };
}

const COOKIE_KEY = "df_jwt";
const COOKIE_META_KEY = "df_jwt_meta";

function writeSessionCookie(session: AuthSession) {
  // Store token in one cookie; meta in another (optional) to keep size small.
  Cookies.set(COOKIE_KEY, session.token, { sameSite: "strict" });
  Cookies.set(
    COOKIE_META_KEY,
    JSON.stringify({
      expires: session.expires,
      email: session.email,
      fullName: session.fullName,
      roles: session.roles,
    }),
    { sameSite: "strict" }
  );
}

function readSessionCookie(): AuthSession | null {
  const token = Cookies.get(COOKIE_KEY);
  const metaRaw = Cookies.get(COOKIE_META_KEY);
  if (!token || !metaRaw) return null;
  try {
    const meta = JSON.parse(metaRaw);
    return { token, roles: [], ...meta } as AuthSession;
  } catch {
    return null;
  }
}

function clearSessionCookie() {
  Cookies.remove(COOKIE_KEY);
  Cookies.remove(COOKIE_META_KEY);
}

export const useAuthStore = create<AuthState>((set, get) => ({
  session: readSessionCookie(),
  setSession: (session) => {
    writeSessionCookie(session);
    set({ session, isAuthenticated: true });
  },
  clearSession: () => {
    clearSessionCookie();
    set({ session: null, isAuthenticated: false });
  },
  isAuthenticated: false,
  getAuthHeader: () => {
    const s = get().session;
    if (!s?.token) return {};
    return { Authorization: `Bearer ${s.token}` };
  },
}));
