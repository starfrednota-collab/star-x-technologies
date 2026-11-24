// STAR-X TECHNOLOGIES website interactions
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
navLinks?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));

// Reveal content as the visitor scrolls.
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Product catalogue filters and search.
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = [...document.querySelectorAll(".product-card")];
const searchInput = document.getElementById("productSearch");
let activeFilter = "all";
function filterProducts() {
  const term = (searchInput?.value || "").trim().toLowerCase();
  productCards.forEach(card => {
    const matchesCategory = activeFilter === "all" || card.dataset.category === activeFilter;
    const matchesSearch = (card.dataset.name || "").toLowerCase().includes(term);
    card.hidden = !(matchesCategory && matchesSearch);
  });
}
filterButtons.forEach(button => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach(btn => btn.classList.toggle("active", btn === button));
  filterProducts();
}));
searchInput?.addEventListener("input", filterProducts);

// Enquiry cart: collects products and opens a pre-filled WhatsApp message.
const enquiryItems = new Set();
const cartBar = document.getElementById("cartBar");
const cartCount = document.getElementById("cartCount");
function updateCart() {
  cartCount.textContent = `${enquiryItems.size} ${enquiryItems.size === 1 ? "item" : "items"}`;
  cartBar.classList.toggle("visible", enquiryItems.size > 0);
}
document.querySelectorAll("[data-product]").forEach(button => button.addEventListener("click", () => {
  const product = button.dataset.product;
  if (enquiryItems.has(product)) {
    enquiryItems.delete(product);
    button.classList.remove("added");
    button.textContent = button.classList.contains("quick-add") ? "+" : "Add to enquiry ↗";
  } else {
    enquiryItems.add(product);
    button.classList.add("added");
    button.textContent = button.classList.contains("quick-add") ? "✓" : "Added ✓";
  }
  updateCart();
}));
document.getElementById("checkoutBtn")?.addEventListener("click", () => {
  if (!enquiryItems.size) return;
  const list = [...enquiryItems].map(item => `• ${item}`).join("\n");
  const message = `Hello STAR-X TECHNOLOGIES,\n\nI would like to enquire about:\n${list}\n\nPlease share availability, features, licensing and pricing details.\n\nThank you.`;
  window.open(`https://wa.me/265892990055?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});

// Contact form opens WhatsApp after the visitor reviews the pre-filled message.
document.getElementById("contactForm")?.addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();
  const text = `Hello STAR-X TECHNOLOGIES,\n\nMy name is ${name}.\nEmail: ${email}\nService: ${service}\n\nProject details:\n${message}`;
  const status = document.getElementById("formStatus");
  status.textContent = "Opening WhatsApp with your enquiry. Please review and press Send.";
  window.open(`https://wa.me/265892990055?text=${encodeURIComponent(text)}`, "_blank", "noopener");
});
document.getElementById("year").textContent = new Date().getFullYear();
