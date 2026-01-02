export const homeSections = [
  "Hero",
  "Features",
  "Testimonials",
  "CTA",
  "Footer",
];

export const nodesData = [
  { id: "home", label: "Home", level: 1 },

  { id: "about", label: "About", level: 2 },
  { id: "services", label: "Services", level: 2 },
  { id: "blog", label: "Blog", level: 2 },
  { id: "contact", label: "Contact", level: 2 },

  { id: "service1", label: "Service Detail 1", parent: "services", level: 3 },
  { id: "service2", label: "Service Detail 2", parent: "services", level: 3 },

  { id: "blog1", label: "Blog Post 1", parent: "blog", level: 3 },
  { id: "blog2", label: "Blog Post 2", parent: "blog", level: 3 },
  { id: "author", label: "Author Page", parent: "blog", level: 3 },

  { id: "location", label: "Location Info", parent: "contact", level: 3 },
  { id: "support", label: "Support Page", parent: "contact", level: 3 },
];

export const edgesData = [
  { source: "home", target: "about" },
  { source: "home", target: "services" },
  { source: "home", target: "blog" },
  { source: "home", target: "contact" },

  { source: "services", target: "service1" },
  { source: "services", target: "service2" },

  { source: "blog", target: "blog1" },
  { source: "blog", target: "blog2" },
  { source: "blog", target: "author" },

  { source: "contact", target: "location" },
  { source: "contact", target: "support" },
];
