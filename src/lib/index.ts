export function redirect({
  set,
  headers,
}: {
  headers: Record<string, string | null>;
}, href: string) {
  if (headers["hx-request"] === 'true') {
    set.headers["HX-Location"] = href;
  } else {
    set.redirect = href;
  }
}