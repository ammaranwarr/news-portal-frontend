
const newsData = [
    {
        id: 1,
        title: "The Future of Artificial Intelligence",
        category: "Technology",
        description: "Discover how AI is transforming modern technology and digital platforms.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
        date: "November 08, 2026"
    },
    {
        id: 2,
        title: "Global Sports Championship",
        category: "Sports",
        description: "A thrilling championship brings exciting moments for sports fans.",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600",
        date: "November 07, 2026"
    },
    {
        id: 3,
        title: "Global Financial Market Outlook",
        category: "Business",
        description: "Explore the latest trends in global business and financial markets.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
        date: "November 06, 2026"
    },
    {
        id: 4,
        title: "The Evolution of Digital Entertainment",
        category: "Entertainment",
        description: "How digital platforms are changing the entertainment industry.",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600",
        date: "November 05, 2026"
    },
    {
        id: 5,
        title: "Latest Technology Innovations",
        category: "Technology",
        description: "New innovations are shaping the future of digital experiences.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600",
        date: "November 04, 2026"
    },
    {
        id: 6,
        title: "Business Growth in the Digital Era",
        category: "Business",
        description: "Modern businesses are adopting new strategies for growth.",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600",
        date: "November 03, 2026"
    }
];

const newsContainer = document.getElementById("newsContainer");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".categories button");

let selectedCategory = "All";

function displayNews(news) {
    newsContainer.innerHTML = "";

    if (news.length === 0) {
        newsContainer.textContent = "No news articles found.";
        return;
    }

    news.forEach(article => {
        const card = document.createElement("article");
        card.className = "news-card";

        const image = document.createElement("img");
        image.src = article.image;
        image.alt = article.title;
        image.loading = "lazy";

        const content = document.createElement("div");
        content.className = "news-content";

        const meta = document.createElement("span");
        meta.className = "news-meta";
        meta.textContent = article.category + " | " + article.date;

        const title = document.createElement("h3");
        title.textContent = article.title;

        const description = document.createElement("p");
        description.textContent = article.description;

        const button = document.createElement("button");
        button.textContent = "Read More →";
        button.addEventListener("click", () => {
            alert("Article details will be connected to the AWS API.");
        });

        content.append(meta, title, description, button);
        card.append(image, content);
        newsContainer.appendChild(card);
    });
}

function filterNews() {
    const searchText = searchInput.value.toLowerCase().trim();

    const filteredNews = newsData.filter(article => {
        const matchesCategory =
            selectedCategory === "All" ||
            article.category === selectedCategory;

        const matchesSearch =
            article.title.toLowerCase().includes(searchText) ||
            article.description.toLowerCase().includes(searchText) ||
            article.category.toLowerCase().includes(searchText);

        return matchesCategory && matchesSearch;
    });

    displayNews(filteredNews);
}

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectedCategory = button.dataset.category;

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");
        filterNews();
    });
});

searchInput.addEventListener("input", filterNews);

document.getElementById("loginBtn").addEventListener("click", event => {
    event.preventDefault();
    alert("Login will be connected to the AWS authentication API.");
});

document.getElementById("registerBtn").addEventListener("click", event => {
    event.preventDefault();
    alert("Registration will be connected to the AWS authentication API.");
});

document.getElementById("contactForm").addEventListener("submit", event => {
    event.preventDefault();
    alert("Contact form API connection is pending.");
});

categoryButtons[0].classList.add("active");
displayNews(newsData);
