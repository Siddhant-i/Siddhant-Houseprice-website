const awards = [
  {
    title: "Tech Excellence Award",
    date: "May 2025",
    description: "Recognized for excellence in AI-driven property pricing tools.",
    icon: "https://cdn-icons-png.flaticon.com/512/2583/2583341.png"
  },
  {
    title: "Smart City Innovation",
    date: "june 2025",
    description: "Awarded for integrating price predictions into smart housing initiatives.",
    icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png"
  },
  {
    title: "Top Startup Award",
    date: "November 2024",
    description: "Acknowledged as one of the top real estate tech startups of the year.",
    icon: "https://cdn-icons-png.flaticon.com/512/1046/1046890.png"
  }
];

const container = document.getElementById("awardsContainer");

awards.forEach(award => {
  const card = document.createElement("div");
  card.className = "award-card";
  card.innerHTML = `
    <img src="${award.icon}" alt="${award.title}">
    <div class="award-title">${award.title}</div>
    <div class="award-date">${award.date}</div>
    <div class="award-description">${award.description}</div>
  `;
  container.appendChild(card);
});
