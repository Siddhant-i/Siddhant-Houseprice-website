const customers = [
  { name: "Ravi Mehta", img: "https://randomuser.me/api/portraits/men/35.jpg", rating: 5, text: "Amazing platform! I sold my flat faster thanks to accurate pricing." },
  { name: "Neha Sharma", img: "https://randomuser.me/api/portraits/women/44.jpg", rating: 4, text: "Easy to use and very helpful in estimating house value." },
  { name: "Amitabh Roy", img: "https://randomuser.me/api/portraits/men/65.jpg", rating: 5, text: "Their prediction was 95% accurate. Impressive tech!" },
  { name: "Sneha Kapoor", img: "https://randomuser.me/api/portraits/women/68.jpg", rating: 5, text: "Clean design and easy interface. Highly recommended!" },
  { name: "Harshit Verma", img: "https://randomuser.me/api/portraits/men/24.jpg", rating: 4, text: "Found it helpful in evaluating rental properties in Pune." },
  { name: "Priya Desai", img: "https://randomuser.me/api/portraits/women/57.jpg", rating: 5, text: "Simple, fast, and very accurate. Loved using it." },
  { name: "Ankush Jain", img: "https://randomuser.me/api/portraits/men/18.jpg", rating: 4, text: "As a broker, this tool saves me hours of work!" },
  { name: "Ritika Joshi", img: "https://randomuser.me/api/portraits/women/52.jpg", rating: 5, text: "A must-have for anyone buying or selling homes." },
  { name: "Nikhil Rao", img: "https://randomuser.me/api/portraits/men/72.jpg", rating: 5, text: "Best prediction tool in the Indian real estate market." },
  { name: "Tanya Singh", img: "https://randomuser.me/api/portraits/women/22.jpg", rating: 5, text: "Loved the simplicity and accuracy of the predictions." },
  { name: "Rajesh Patel", img: "https://randomuser.me/api/portraits/men/45.jpg", rating: 4, text: "Perfect for checking flat prices before investing." },
  { name: "Kavita Iyer", img: "https://randomuser.me/api/portraits/women/61.jpg", rating: 5, text: "Great UX, accurate model, and wonderful support team!" }
];

const container = document.getElementById("reviewsContainer");

customers.forEach(c => {
  const stars = "★".repeat(c.rating) + "☆".repeat(5 - c.rating);
  const card = document.createElement("div");
  card.className = "review-card";
  card.innerHTML = `
    <img src="${c.img}" alt="${c.name}">
    <div class="review-name">${c.name}</div>
    <div class="review-rating">${stars}</div>
    <div class="review-text">"${c.text}"</div>
  `;
  container.appendChild(card);
});
