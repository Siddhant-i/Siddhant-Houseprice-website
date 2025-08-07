const projects = [
  {
    name: "lakers city",
    location: "Pune",
    price: "₹100,00,000",
    image: "lakers city.jpg"
  },
    {
    name: "Sage suncity",
    location: "Bhopal",
    price: "₹16,00,000",
    image: "SageSuncityBhopal.jpeg"
  },

  {
    name: "City Heights",
    location: "Mumbai",
    price: "₹1,20,00,000",
    image: "City-Heights.webp"
  },
  
   {
    name: "Brokklyn bridgers",
    location: "Mumbai",
    price: "₹30,00,000",
    image: "Brooklyn_Bridge.jpg"
  },
  {
    name: "palm Residency",
    location: "Kolkata",
    price: "₹108,00,000",
    image: "palmisland.jpg"
  },
  {
    name: "forestry views",
    location: "Palampur",
    price: "₹98,00,000",
    image: "forestry.webp"
  },
   
  {
    name: "Palm Residency",
    location: "Pune",
    price: "₹88,00,000",
    image: "palm residency.jpg"
  },
   {
    name: "Skyview Residency",
    location: "Bhopal",
    price: "₹55,00,000",
    image: "skyview.jpg"
  },
  {
    name: "Green Valley Villas",
    location: "Indore",
    price: "₹75,00,000",
    image: "green valley.jpg"
  },
];

const projectList = document.getElementById('projects');

function displayProjects(filtered = projects) {
  projectList.innerHTML = '';
  filtered.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${project.image}" alt="${project.name}">
      <div class="info">
        <h3>${project.name}</h3>
        <p><strong>Location:</strong> ${project.location}</p>
        <p><strong>Price:</strong> ${project.price}</p>
      </div>
    `;
    projectList.appendChild(card);
  });
}

document.getElementById("searchInput").addEventListener("input", function() {
  const search = this.value.toLowerCase();
  const filtered = projects.filter(p => p.location.toLowerCase().includes(search));
  displayProjects(filtered);
});

displayProjects();
