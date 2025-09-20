const planContainer = document.getElementById("planContainer");
const buttons = planContainer.querySelectorAll("button");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b, i) => {
      if (i === index) {
        b.classList.remove("bg-gray-700", "hover:bg-gray-600", "text-gray-200");
        b.classList.add(
          "bg-gradient-to-r",
          "from-purple-500",
          "to-purple-400",
          "text-white"
        );
      } else {
        b.classList.remove(
          "bg-gradient-to-r",
          "from-purple-500",
          "to-purple-400",
          "text-white"
        );
        b.classList.add("bg-gray-700", "hover:bg-gray-600", "text-gray-200");
      }
    });
  });
});



const reviews = [
  {
    email: "go********@gm***.com",
    text: "",
    rating: 5,
    date: "Sep 15, 2025",
  },
  {
    email: "rb*********@gm***.com",
    text: "The Best Product",
    rating: 5,
    date: "Sep 16, 2025",
  },
  {
    email: "mi********@gm***.com",
    text: "Fast and safe, everything worked perfectly. Will buy again!",
    rating: 5,
    date: "Sep 17, 2025",
  },
  {
    email: "la********@gm***.com",
    text: "Excellent service, instant delivery, no issues at all.",
    rating: 5,
    date: "Sep 18, 2025",
  },
  
  // More Reviews
];

const reviewsPerPage = 3;
let currentPage = 1;

const reviewsContainer = document.getElementById("reviewsContainer");
const pageInfo = document.getElementById("pageInfo");
const prevPage = document.getElementById("prevPage");
const nextPage = document.getElementById("nextPage");

function renderReviews() {
  reviewsContainer.innerHTML = "";
  const start = (currentPage - 1) * reviewsPerPage;
  const end = start + reviewsPerPage;
  const currentReviews = reviews.slice(start, end);

  currentReviews.forEach((review) => {
    const reviewEl = document.createElement("div");
    reviewEl.className =
      "bg-gray-800 rounded-xl p-6 border-l-4 border-purple-400 space-y-2";
    reviewEl.innerHTML = `
        <p class="text-gray-300 font-semibold">${review.email}</p>
        <p class="text-gray-300">${review.text}</p>
        <p class="text-yellow-400 font-bold">${"★".repeat(review.rating)}</p>
        <p class="text-gray-400 text-sm">Reviewed on ${review.date}</p>
      `;
    reviewsContainer.appendChild(reviewEl);
  });

  pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(
    reviews.length / reviewsPerPage
  )}`;

  prevPage.disabled = currentPage === 1;
  nextPage.disabled =
    currentPage === Math.ceil(reviews.length / reviewsPerPage);
}

prevPage.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderReviews();
  }
});

nextPage.addEventListener("click", () => {
  if (currentPage < Math.ceil(reviews.length / reviewsPerPage)) {
    currentPage++;
    renderReviews();
  }
});

// Initial render
renderReviews();
