(() => {
  "use strict";
  const $ = id => document.getElementById(id);
  const message = (text, good = false) => {
    const el = $("authMessage");
    if (el) {
      el.textContent = text;
      el.style.color = good ? "#087f5b" : "#b45309";
    }
  };
  const configured = () => !!window.STARX_SUPABASE;
  const showSetupNotice = () => {
    if (!configured()) message("Supabase is not connected yet. Open SUPABASE_SETUP.html and complete the setup first.");
  };
  const showSession = async () => {
    if (!configured()) return;
    const { data, error } = await window.STARX_SUPABASE.auth.getSession();
    if (error) { message(error.message); return; }
    const session = data.session;
    $("authForms").hidden = !!session;
    $("accountView").hidden = !session;
    if (session) {
      const email = session.user.email || "";
      $("welcomeName").textContent = "Your STAR-X account";
      $("welcomeEmail").textContent = email;
      $("customerOrders").textContent = "Your secure account is active. Order history will appear here when order processing is connected.";
    }
  };

  $("registerForm")?.addEventListener("submit", async event => {
    event.preventDefault();
    if (!configured()) return showSetupNotice();
    const name = $("customerName").value.trim();
    const email = $("customerEmail").value.trim();
    const password = $("customerPassword").value;
    if (password.length < 8) return message("Use a password with at least 8 characters.");
    const { data, error } = await window.STARX_SUPABASE.auth.signUp({
      email, password, options: { data: { full_name: name } }
    });
    if (error) return message(error.message);
    if (data.session) {
      message("Account created and signed in successfully.", true);
      await showSession();
    } else {
      message("Account request submitted. Check your email for the confirmation link, then sign in.", true);
    }
  });

  $("loginForm")?.addEventListener("submit", async event => {
    event.preventDefault();
    if (!configured()) return showSetupNotice();
    const { error } = await window.STARX_SUPABASE.auth.signInWithPassword({
      email: $("loginEmail").value.trim(),
      password: $("loginPassword").value
    });
    if (error) return message(error.message);
    message("Signed in successfully.", true);
    await showSession();
  });

  $("signOut")?.addEventListener("click", async () => {
    if (!configured()) return;
    const { error } = await window.STARX_SUPABASE.auth.signOut();
    if (error) return message(error.message);
    await showSession();
    message("You have signed out.", true);
  });

  if (configured()) {
    window.STARX_SUPABASE.auth.onAuthStateChange(() => { showSession(); });
    showSession();
  } else {
    showSetupNotice();
  }
})();
