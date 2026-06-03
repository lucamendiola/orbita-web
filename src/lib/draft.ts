// ──────────────────────────────────────────────────────────────────────────
// MODO DRAFT (privado mientras se tramita el permiso COFEPRIS)
//
// Mientras DRAFT_MODE = true:
//   • El sitio NO es accesible al público (todo redirige a /proximamente).
//   • Google y los crawlers reciben noindex + robots disallow (se desindexa).
//   • Solo entra quien tenga el link con el token de preview.
//
// Para compartir con alguien, mándale este link (entra una vez y queda dentro
// por 180 días gracias a una cookie):
//   https://www.orbitaclinica.com/?preview=EL_TOKEN_DE_ABAJO
//
// PARA VOLVER A PÚBLICO (cuando salga el permiso COFEPRIS):
//   1. Cambiar DRAFT_MODE a false aquí abajo.
//   2. git commit + git push  → Vercel redepliega y el sitio queda público.
// ──────────────────────────────────────────────────────────────────────────

export const DRAFT_MODE = true;

// Token de acceso para preview. Se puede sobreescribir con la env var
// PREVIEW_TOKEN en Vercel sin tocar código.
export const PREVIEW_TOKEN = process.env.PREVIEW_TOKEN ?? "orbita-2026";

export const PREVIEW_COOKIE = "orbita_preview";
