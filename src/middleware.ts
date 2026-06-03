import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DRAFT_MODE, PREVIEW_TOKEN, PREVIEW_COOKIE } from "@/lib/draft";

const HOLDING_PATH = "/proximamente";

export function middleware(req: NextRequest) {
  // Sitio público → no hacer nada.
  if (!DRAFT_MODE) return NextResponse.next();

  const { pathname, searchParams } = req.nextUrl;

  // 1) Alguien abre el link con ?preview=TOKEN → guardar cookie y limpiar la URL.
  const provided = searchParams.get("preview");
  if (provided && provided === PREVIEW_TOKEN) {
    const clean = req.nextUrl.clone();
    clean.searchParams.delete("preview");
    const res = NextResponse.redirect(clean);
    res.cookies.set(PREVIEW_COOKIE, PREVIEW_TOKEN, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 180, // 180 días
    });
    return res;
  }

  // 2) Ya tiene la cookie válida → acceso normal a todo el sitio.
  if (req.cookies.get(PREVIEW_COOKIE)?.value === PREVIEW_TOKEN) {
    return NextResponse.next();
  }

  // 3) La página de espera se sirve tal cual (evita loop).
  if (pathname === HOLDING_PATH) {
    const res = NextResponse.next();
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
    return res;
  }

  // 4) Cualquier otra ruta → mostrar la página de espera, sin indexar.
  const url = req.nextUrl.clone();
  url.pathname = HOLDING_PATH;
  const res = NextResponse.rewrite(url);
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}

export const config = {
  // Aplica a todo menos a los assets internos de Next y archivos estáticos.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|favicon-32.png|favicon.png|apple-touch-icon.png|robots.txt|sitemap.xml|brand/|.*\\.(?:png|jpg|jpeg|gif|svg|webp|mp4|ico|css|js|woff2?)).*)",
  ],
};
