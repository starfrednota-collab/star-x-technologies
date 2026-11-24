/* Loads the official Supabase browser client when the public config is completed. */
(() => {
  "use strict";
  const cfg = window.STARX_SUPABASE_CONFIG || {};
  const ready =
    typeof cfg.url === "string" &&
    cfg.url.startsWith("https://") &&
    !cfg.url.includes("PASTE_YOUR") &&
    typeof cfg.publishableKey === "string" &&
    cfg.publishableKey.length > 20 &&
    !cfg.publishableKey.includes("PASTE_YOUR");

  window.STARX_SUPABASE_READY = ready;
  if (!ready) {
    console.info("STAR-X: Supabase is not configured yet. Follow SUPABASE_SETUP.html.");
    return;
  }
  if (!window.supabase || !window.supabase.createClient) {
    console.error("STAR-X: Supabase library did not load. Check your internet connection.");
    return;
  }
  window.STARX_SUPABASE = window.supabase.createClient(cfg.url, cfg.publishableKey);
  console.info("STAR-X: Supabase client initialized.");
})();
