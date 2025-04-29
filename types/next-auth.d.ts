import type { DefaultSession, DefaultUser } from "next-auth";
import type { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    id?: string; // Add the id property
    // Add other custom properties if needed (e.g., role: string)
  }
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id?: string; // Add the id property
      // Add other custom properties if needed (e.g., role: string)
    } & DefaultSession["user"];
  }

  /**
   * The shape of the user object returned in the OAuth providers' profile callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User extends DefaultUser {
    // Add other custom properties if needed (e.g., role: string)
  }
} 