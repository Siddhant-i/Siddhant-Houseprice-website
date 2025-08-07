const specialists = [
  {
    role: "Data Analyst",
    skill: "Excel, SQL, Python",
    description: "Analyzes large datasets to extract real estate insights and trends."
  },
  {
    role: "Real Estate Agent",
    skill: "Negotiation, Market Research",
    description: "Connects buyers and sellers while understanding the predicted property values."
  },
  
  {
    role: "Frontend Developer",
    skill: "HTML, CSS, JavaScript, React",
    description: "Designs sleek, responsive UIs for seamless user experiences."
  },
  {
    role: "Backend Developer",
    skill: "Node.js, MongoDB, PHP",
    description: "Handles secure data processing and connects frontend with prediction models."
  },
  
];

const specialistList = document.getElementById("specialistList");

function displaySpecialists(list = specialists) {
  specialistList.innerHTML = "";
  list.forEach(sp => {
    const card = document.createElement("div");
    card.className = "specialist-card";
    card.innerHTML = `
      <div class="specialist-role">${sp.role}</div>
      <div class="specialist-skill"><strong>Skills:</strong> ${sp.skill}</div>
      <div class="specialist-description">${sp.description}</div>
    `;
    specialistList.appendChild(card);
  });
}

document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = specialists.filter(sp =>
    sp.role.toLowerCase().includes(query) || sp.skill.toLowerCase().includes(query)
  );
  displaySpecialists(filtered);
});

displaySpecialists();
