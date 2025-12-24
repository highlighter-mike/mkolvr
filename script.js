// ============================================
// Blog Posts Data
// ============================================

const blogPosts = [
    {
        id: 'future-of-ai-collaboration',
        title: 'The Future of Human-AI Collaboration',
        date: 'January 15, 2025',
        readingTime: '5 min read',
        excerpt: 'How AI tools are evolving from assistants to thought partners, and what that means for knowledge work.',
        content: `
            <p>This is sample content for the first blog post. When you add real posts, you'll replace this with your actual content.</p>

            <p>The design system supports rich typography and proper content hierarchy. Every element is carefully considered for optimal reading experience.</p>

            <h2>The Evolution of Tools</h2>

            <p>The best tools feel like an extension of your mind. They're invisible when they work, delightful when you notice them, and powerful enough to transform how you think.</p>

            <blockquote>
                <p>Technology should amplify human capability, not replace human judgment.</p>
            </blockquote>

            <p>This philosophy guides how we should think about AI collaboration tools—not as replacements for human thinking, but as amplifiers of it.</p>
        `
    },
    {
        id: 'building-with-constraints',
        title: 'Building with Constraints',
        date: 'January 8, 2025',
        readingTime: '4 min read',
        excerpt: 'Why limitations often lead to better products, and how to embrace constraints in your design process.',
        content: `
            <p>Constraints are often seen as obstacles to creativity. But in reality, they're the foundation of good design.</p>

            <p>When you remove all constraints, you don't get infinite possibilities—you get paralysis. The blank canvas is intimidating precisely because it offers too much freedom.</p>

            <h2>The Power of Limits</h2>

            <p>The best products emerge from clear constraints: Twitter's 140 characters, Instagram's square photos, Wordle's single daily puzzle.</p>

            <p>These limitations weren't bugs—they were features that defined the entire experience.</p>

            <h3>Embracing Constraints</h3>

            <ul>
                <li>Start with user needs, not technical possibilities</li>
                <li>Define what you won't build as clearly as what you will</li>
                <li>Let constraints guide your creative decisions</li>
            </ul>

            <p>The next time you face a limitation, ask yourself: how can this constraint make the product better?</p>
        `
    },
    {
        id: 'minimum-viable-delight',
        title: 'Minimum Viable Delight',
        date: 'December 28, 2024',
        readingTime: '3 min read',
        excerpt: 'Moving beyond MVP thinking to create products that spark joy from day one.',
        content: `
            <p>The concept of a Minimum Viable Product has been incredibly useful. But somewhere along the way, we started building products that were viable but joyless.</p>

            <p>What if we aimed for Minimum Viable Delight instead?</p>

            <h2>Delight as a Feature</h2>

            <p>Delight isn't about adding features—it's about crafting experiences. A smooth animation. A thoughtful empty state. A well-timed confirmation message.</p>

            <blockquote>
                <p>People forget what you said, people forget what you did, but people never forget how you made them feel.</p>
            </blockquote>

            <p>This applies to products too. Users might not remember every feature, but they'll remember if your product felt good to use.</p>

            <p>The goal isn't to build everything—it's to build something that feels complete, even in its simplicity.</p>
        `
    }
];

// ============================================
// Utility Functions
// ============================================

function createPostHTML(post) {
    return `
        <a href="post.html?id=${post.id}" class="post-item">
            <div class="post-item-meta">${post.date} · ${post.readingTime}</div>
            <h3 class="post-item-title">${post.title}</h3>
            <p class="post-item-excerpt">${post.excerpt}</p>
        </a>
    `;
}

function getPostById(id) {
    return blogPosts.find(post => post.id === id);
}

// ============================================
// Page Initialization
// ============================================

function initHomePage() {
    const postsContainer = document.getElementById('posts');
    if (!postsContainer) return;

    const recentPosts = blogPosts.slice(0, 3);
    postsContainer.innerHTML = recentPosts.map(post => createPostHTML(post)).join('');
}

function initBlogPage() {
    const postsContainer = document.getElementById('posts-list');
    if (!postsContainer) return;

    postsContainer.innerHTML = blogPosts.map(post => createPostHTML(post)).join('');
}

function initPostPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (!postId) {
        window.location.href = 'blog.html';
        return;
    }

    const post = getPostById(postId);

    if (!post) {
        window.location.href = 'blog.html';
        return;
    }

    // Update page
    document.getElementById('post-title-tag').textContent = `${post.title} — Mike Oliver`;
    document.getElementById('post-date').textContent = post.date;
    document.getElementById('post-reading-time').textContent = post.readingTime;
    document.getElementById('post-title').textContent = post.title;

    // NOTE: Using innerHTML here since all content is controlled by you via the blogPosts array
    document.getElementById('post-content').innerHTML = post.content;
}

// ============================================
// Initialize
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname.toLowerCase();
    const page = path.substring(path.lastIndexOf('/') + 1).replace('.html', '');

    if (page === 'index' || page === '') {
        initHomePage();
    } else if (page === 'blog') {
        initBlogPage();
    } else if (page === 'post') {
        initPostPage();
    }
});

// ============================================
// LLM Content Management
// ============================================
// To add/edit posts, modify the blogPosts array above
// Each post needs: id, title, date, readingTime, excerpt, content
