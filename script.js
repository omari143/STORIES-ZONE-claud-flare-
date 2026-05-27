// Sample Data
const storiesData = {
    popular: [
        {
            id: 1,
            title: "The Secret Files",
            category: "Political Fiction",
            image: "https://ext.same-assets.com/547474108/373526462.jpeg",
            views: "1.6k",
            rating: null,
            status: "completed"
        },
        {
            id: 2,
            title: "ZAINABU",
            category: "Drama",
            image: "https://ext.same-assets.com/547474108/2733826514.jpeg",
            views: "1k",
            rating: null,
            status: "completed"
        },
        {
            id: 3,
            title: "BLOOD MONEY",
            category: "Crime / Thriller",
            image: "https://ext.same-assets.com/547474108/644738520.webp",
            views: "794",
            rating: 5.0,
            status: "completed"
        },
        {
            id: 4,
            title: "The House on the Grave",
            category: "Horror / Mystery",
            image: "https://ext.same-assets.com/547474108/3426105911.webp",
            views: "626",
            rating: null,
            status: "completed"
        },
        {
            id: 5,
            title: "WORLD OF THE DEAD",
            category: "Horror / Mystery",
            image: "https://ext.same-assets.com/547474108/3895805302.jpeg",
            views: "513",
            rating: null,
            status: "completed"
        },
        {
            id: 6,
            title: "LOVE EXPERT",
            category: "Romance",
            image: "https://ext.same-assets.com/547474108/758593148.jpeg",
            views: "485",
            rating: null,
            status: "completed"
        }
    ],
    romance: [
        {
            id: 7,
            title: "LOVE EXPERT",
            category: "Romance",
            image: "https://ext.same-assets.com/547474108/758593148.jpeg",
            views: "485",
            rating: null,
            status: "completed"
        },
        {
            id: 8,
            title: "RED FLOWER",
            category: "Romance",
            image: "https://ext.same-assets.com/547474108/2756016024.jpeg",
            views: "406",
            rating: null,
            status: "ongoing"
        },
        {
            id: 9,
            title: "Last Breath",
            category: "Romance",
            image: "https://ext.same-assets.com/547474108/543874648.jpeg",
            views: "412",
            rating: null,
            status: "completed"
        },
        {
            id: 10,
            title: "Married to a Stranger",
            category: "Romance",
            image: "https://ext.same-assets.com/547474108/1948885921.jpeg",
            views: "243",
            rating: 2.0,
            status: "completed"
        },
        {
            id: 11,
            title: "Love and Pain",
            category: "Romance",
            image: "https://ext.same-assets.com/547474108/3872555437.jpeg",
            views: "152",
            rating: null,
            status: "ongoing"
        },
        {
            id: 12,
            title: "FUNGATE",
            category: "Romance",
            image: "https://ext.same-assets.com/547474108/2630251936.webp",
            views: "229",
            rating: 5.0,
            status: "completed"
        }
    ],
    drama: [
        {
            id: 13,
            title: "TEARS CURSE",
            category: "Drama",
            image: "https://ext.same-assets.com/547474108/49124346.webp",
            views: "152",
            rating: null,
            status: "ongoing"
        },
        {
            id: 14,
            title: "EYE OF BETRAYAL",
            category: "Drama",
            image: "https://ext.same-assets.com/547474108/2785397412.webp",
            views: "111",
            rating: null,
            status: "completed"
        },
        {
            id: 15,
            title: "WHO IS TO BLAME?",
            category: "Drama",
            image: "https://ext.same-assets.com/547474108/3489928339.webp",
            views: "32",
            rating: null,
            status: "ongoing"
        },
        {
            id: 16,
            title: "IN THE NAME OF LOVE",
            category: "Drama",
            image: "https://ext.same-assets.com/547474108/46933696.webp",
            views: "47",
            rating: null,
            status: "completed"
        },
        {
            id: 17,
            title: "PAIN BURDEN",
            category: "Drama",
            image: "https://ext.same-assets.com/547474108/2874828315.webp",
            views: "138",
            rating: null,
            status: "new"
        },
        {
            id: 18,
            title: "FORGETFUL GIRL",
            category: "Drama",
            image: "https://ext.same-assets.com/547474108/389764849.png",
            views: "125",
            rating: null,
            status: "completed"
        }
    ],
    crime: [
        {
            id: 19,
            title: "KILL BEFORE SEVEN",
            category: "Crime / Thriller",
            image: "https://ext.same-assets.com/547474108/2392830921.jpeg",
            views: "107",
            rating: null,
            status: "ongoing"
        },
        {
            id: 20,
            title: "BLOOD MONEY",
            category: "Crime / Thriller",
            image: "https://ext.same-assets.com/547474108/2472004100.webp",
            views: "794",
            rating: null,
            status: "completed"
        },
        {
            id: 21,
            title: "SPY",
            category: "Crime / Thriller",
            image: "https://ext.same-assets.com/547474108/118922016.webp",
            views: "330",
            rating: 5.0,
            status: "completed"
        },
        {
            id: 22,
            title: "BLACK COAT",
            category: "Crime / Thriller",
            image: "https://ext.same-assets.com/547474108/206903098.webp",
            views: "308",
            rating: null,
            status: "completed"
        }
    ],
    horror: [
        {
            id: 23,
            title: "CURSED VILLAGE 1",
            category: "Horror / Mystery",
            image: "https://ext.same-assets.com/547474108/625116174.jpeg",
            views: "64",
            rating: null,
            status: "ongoing"
        },
        {
            id: 24,
            title: "CURSED VILLAGE 2",
            category: "Horror / Mystery",
            image: "https://ext.same-assets.com/547474108/3728337893.webp",
            views: "19",
            rating: null,
            status: "completed"
        },
        {
            id: 25,
            title: "WORLD OF THE DEAD",
            category: "Horror / Mystery",
            image: "https://ext.same-assets.com/547474108/2435955917.webp",
            views: "513",
            rating: null,
            status: "completed"
        },
        {
            id: 26,
            title: "Shared House with Spirits",
            category: "Horror / Mystery",
            image: "https://ext.same-assets.com/547474108/685063726.webp",
            views: "252",
            rating: null,
            status: "completed"
        },
        {
            id: 27,
            title: "The House on the Grave",
            category: "Horror / Mystery",
            image: "https://ext.same-assets.com/547474108/1157285612.jpeg",
            views: "626",
            rating: null,
            status: "completed"
        }
    ]
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeHomePage();
    initializeSearch();
    initializeFilters();
    initializeModals();
    initializeWhatsApp();
    initializeNavigation();
});

// Initialize Home Page
function initializeHomePage() {
    loadPopularStories();
    loadTrendingStories();
    loadRomanceStories();
    loadDramaStories();
    loadCrimeStories();
    loadPoliticalStories();
    loadUrbanStories();
    loadFantasyStories();
    loadHorrorStories();
}

// Load Popular Stories
function loadPopularStories() {
    const container = document.getElementById('popularStories');
    if (!container) return;

    container.innerHTML = '';
    storiesData.popular.forEach(story => {
        const card = createStoryCard(story);
        container.appendChild(card);
    });
}

// Load Trending Stories
function loadTrendingStories() {
    const container = document.getElementById('trendingList');
    if (!container) return;

    container.innerHTML = '';
    storiesData.popular.slice(0, 5).forEach((story, index) => {
        const item = createTrendingItem(story, index + 1);
        container.appendChild(item);
    });
}

// Load Romance Stories
function loadRomanceStories() {
    const container = document.getElementById('romanceStories');
    if (!container) return;

    container.innerHTML = '';
    storiesData.romance.slice(0, 6).forEach(story => {
        const card = createStoryCard(story);
        container.appendChild(card);
    });
}

// Load Drama Stories
function loadDramaStories() {
    const container = document.getElementById('dramaStories');
    if (!container) return;

    container.innerHTML = '';
    storiesData.drama.slice(0, 6).forEach(story => {
        const card = createStoryCard(story);
        container.appendChild(card);
    });
}

// Load Crime Stories
function loadCrimeStories() {
    const container = document.getElementById('crimeStories');
    if (!container) return;

    container.innerHTML = '';
    storiesData.crime.slice(0, 4).forEach(story => {
        const card = createStoryCard(story);
        container.appendChild(card);
    });
}

// Load Horror Stories
function loadHorrorStories() {
    const container = document.getElementById('horrorStories');
    if (!container) return;

    container.innerHTML = '';
    storiesData.horror.slice(0, 5).forEach(story => {
        const card = createStoryCard(story);
        container.appendChild(card);
    });
}

// Create Story Card
function createStoryCard(story) {
    const card = document.createElement('a');
    card.href = `story.html?id=${story.id}`;
    card.className = 'story-card';

    const statusBadge = story.status ? `
        <div class="badge-status badge-${story.status}">
            ${story.status.charAt(0).toUpperCase() + story.status.slice(1)}
        </div>
    ` : '';

    const ratingHtml = story.rating ? `
        <div class="story-rating">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1L10.163 5.38L15 6.13L11.5 9.54L12.326 14.34L8 12.06L3.674 14.34L4.5 9.54L1 6.13L5.837 5.38L8 1Z"/>
            </svg>
            ${story.rating.toFixed(1)}
        </div>
    ` : '';

    card.innerHTML = `
        <div class="story-image" style="background-image: url('${story.image}');">
            <div class="story-badges">
                ${statusBadge}
            </div>
        </div>
        <div class="story-info">
            <h3 class="story-title">${story.title}</h3>
            <div class="story-meta">
                <span class="story-category">${story.category}</span>
                ${ratingHtml}
                <div class="story-views">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 3C4.5 3 1.73 5.11 1 8C1.73 10.89 4.5 13 8 13C11.5 13 14.27 10.89 15 8C14.27 5.11 11.5 3 8 3ZM8 11C6.34 11 5 9.66 5 8C5 6.34 6.34 5 8 5C9.66 5 11 6.34 11 8C11 9.66 9.66 11 8 11ZM8 6.5C7.17 6.5 6.5 7.17 6.5 8C6.5 8.83 7.17 9.5 8 9.5C8.83 9.5 9.5 8.83 9.5 8C9.5 7.17 8.83 6.5 8 6.5Z" fill="currentColor"/>
                    </svg>
                    ${story.views}
                </div>
            </div>
        </div>
    `;

    return card;
}

// Create Trending Item
function createTrendingItem(story, rank) {
    const item = document.createElement('a');
    item.href = `story.html?id=${story.id}`;
    item.className = 'trending-item';

    item.innerHTML = `
        <div class="trending-rank">${rank}</div>
        <div class="trending-image" style="background-image: url('${story.image}');"></div>
        <div class="trending-info">
            <h3 class="trending-title">${story.title}</h3>
            <div class="trending-category">${story.category}</div>
        </div>
        <div class="trending-views">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3C4.5 3 1.73 5.11 1 8C1.73 10.89 4.5 13 8 13C11.5 13 14.27 10.89 15 8C14.27 5.11 11.5 3 8 3ZM8 11C6.34 11 5 9.66 5 8C5 6.34 6.34 5 8 5C9.66 5 11 6.34 11 8C11 9.66 9.66 11 8 11ZM8 6.5C7.17 6.5 6.5 7.17 6.5 8C6.5 8.83 7.17 9.5 8 9.5C8.83 9.5 9.5 8.83 9.5 8C9.5 7.17 8.83 6.5 8 6.5Z" fill="currentColor"/>
            </svg>
            ${story.views}
        </div>
    `;

    return item;
}

// Initialize Search
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    let searchTimeout;
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            performSearch(e.target.value);
        }, 300);
    });
}

// Perform Search
function performSearch(query) {
    if (!query.trim()) return;

    console.log('Searching for:', query);
    // In a real application, this would filter the stories
    // and update the display accordingly
}

// Initialize Filters
function initializeFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;
            applyFilter(filter);
        });
    });
}

// Apply Filter
function applyFilter(filter) {
    console.log('Applying filter:', filter);
    // In a real application, this would filter the stories
    // based on the selected filter (new, popular, trending)
}

// Initialize Modals
function initializeModals() {
    const shareModal = document.getElementById('shareModal');
    const closeModal = document.getElementById('closeModal');

    if (closeModal) {
        closeModal.addEventListener('click', function() {
            shareModal.classList.remove('show');
        });
    }

    if (shareModal) {
        shareModal.addEventListener('click', function(e) {
            if (e.target === shareModal) {
                shareModal.classList.remove('show');
            }
        });
    }

    // Show modal after 5 seconds (optional)
    // setTimeout(() => {
    //     if (shareModal) shareModal.classList.add('show');
    // }, 5000);
}

// Initialize WhatsApp
function initializeWhatsApp() {
    const whatsappBtn = document.getElementById('whatsappBtn');
    if (!whatsappBtn) return;

    whatsappBtn.addEventListener('click', function() {
        const message = encodeURIComponent('Hello! I need help with Stories Zone.');
        window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
    });
}

// Initialize Navigation
function initializeNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage) {
            item.classList.add('active');
        }
    });
}

// Utility Functions
function formatViews(views) {
    if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'k';
    }
    return views.toString();
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
}

// Export data for other pages
if (typeof window !== 'undefined') {
    window.storiesData = storiesData;
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
function showLoading(container) {
    container.innerHTML = `
        <div class="loading">
            <div class="loading-spinner"></div>
            <p>Loading stories...</p>
        </div>
    `;
}

// Add empty state
function showEmptyState(container, message) {
    container.innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">📚</div>
            <h3 class="empty-state-title">No Stories Found</h3>
            <p class="empty-state-description">${message}</p>
            <a href="browse.html" class="btn btn-primary">Browse All Stories</a>
        </div>
    `;
}

// Intersection Observer for lazy loading
const observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.dataset.src;
            if (src) {
                img.style.backgroundImage = `url('${src}')`;
                observer.unobserve(img);
            }
        }
    });
}, observerOptions);

// Observe all story images
document.querySelectorAll('.story-image[data-src]').forEach(img => {
    imageObserver.observe(img);
});