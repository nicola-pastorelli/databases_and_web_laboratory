if (!sessionStorage.getItem("visit_logged")) {
  sessionStorage.setItem("visit_logged", "1");
  fetch("https://uawimfhjaesndymvyxzx.supabase.co/rest/v1/visits", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": "sb_publishable_uye0lqct8dY92ai8wm2f8A_FgnrB3If",
      "Authorization": "Bearer sb_publishable_uye0lqct8dY92ai8wm2f8A_FgnrB3If",
      "Prefer": "return=minimal"
    },
    body: JSON.stringify({
      site: "Teddit"
    })
  });
}