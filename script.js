// ============================================
// Case Studies Data
// ============================================

const caseStudies = [
    {
        id: 'instituto-mundo-verde',
        title: 'Instituto Mundo Verde',
        subtitle: 'AI-Powered Teacher Training Simulation',
        role: 'Technical Lead',
        year: '2024–Present',
        excerpt: 'Interactive simulation helping teachers practice and develop skills for dual-language classroom instruction.',
        content: `
            <p>Instituto Mundo Verde (IMV) is transforming how teachers develop their craft. Working with their team, I built an AI-powered simulation platform that lets educators practice classroom strategies with realistic student personas—before they ever step into a real classroom.</p>

            <h2>The Challenge</h2>

            <p>Teacher training traditionally relies on observation and theory. But teaching is a performance skill—you get better by doing. IMV needed a way for teachers to practice responding to real classroom moments: a student who's distracted, a pair working at different paces, a child who needs more processing time.</p>

            <p>The goal was to create something that felt authentic enough to be useful, while being safe enough to experiment and make mistakes.</p>

            <h2>How It Works</h2>

            <p>Teachers select a teaching strategy they want to practice—like asking open-ended questions or leading with inquiry. The platform presents a realistic classroom scenario with AI-powered student personas.</p>

            <figure class="case-study-figure">
                <img src="images/imv/open-ended-questions-strategy.png" alt="Strategy interface showing an open-ended questions scenario with students Lucía and Riley" class="case-study-image">
                <figcaption>Teachers practice specific strategies with AI student personas like Lucía and Riley, each with distinct learning profiles.</figcaption>
            </figure>

            <p>Each persona has a distinct personality and learning profile. Lucía is an emerging bilingual student who processes ideas carefully. Riley is neurodivergent and generates ideas rapidly. The AI responds authentically to whatever the teacher says—there are no scripted paths.</p>

            <h2>Structured Learning</h2>

            <p>The platform organizes content around proven pedagogical frameworks, making it easy for teachers to find relevant practice scenarios.</p>

            <figure class="case-study-figure">
                <img src="images/imv/inquiry-based-play-overview.png" alt="Inquiry-Based Play module overview" class="case-study-image">
                <figcaption>Content is organized into topics and subtopics, with each strategy containing multiple practice scenarios.</figcaption>
            </figure>

            <p>Topics like "Hands-On & Inquiry-Based Learning" contain subtopics such as inquiry-based play, game-based learning, and leading with questions. Each subtopic offers multiple strategies, and each strategy has scenarios tailored to different grade levels and interaction types.</p>

            <h2>Meaningful Feedback</h2>

            <p>After each practice session, the platform generates detailed feedback. It identifies what worked, what could improve, and—importantly—opportunities the teacher might have missed.</p>

            <figure class="case-study-figure">
                <img src="images/imv/reflection.png" alt="Feedback showing missed opportunities with specific suggestions" class="case-study-image">
                <figcaption>AI-generated feedback highlights specific moments where different approaches might have been more effective.</figcaption>
            </figure>

            <p>The feedback isn't generic. It references specific moments from the conversation and offers concrete suggestions. In this example, the system noticed the teacher moved quickly between prompts and suggested building in deliberate pauses—a nuanced observation that would be difficult to surface without AI analysis.</p>

            <h2>Technical Approach</h2>

            <p>The platform is built on Laravel and Vue.js, with OpenAI's API powering the conversational AI. The architecture prioritizes:</p>

            <ul>
                <li><strong>Authentic personas:</strong> Each student character has detailed behavioral prompts that adapt to grade level and learning profile</li>
                <li><strong>Goal-based evaluation:</strong> Feedback is generated against specific learning objectives for each scenario</li>
                <li><strong>Conversation context:</strong> The AI maintains awareness of the full interaction, enabling nuanced responses and feedback</li>
            </ul>

            <h2>Impact</h2>

            <p>The platform enables teachers to practice dozens of classroom interactions in an hour—something that would take months of real classroom time. More importantly, they can experiment with different approaches, receive immediate feedback, and develop intuition for effective teaching strategies.</p>

            <p>This work continues to evolve as we expand the scenario library and refine the feedback models based on educator input.</p>
        `
    }
];

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

function getCaseStudyById(id) {
    return caseStudies.find(study => study.id === id);
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

function initCaseStudyPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const studyId = urlParams.get('id');

    if (!studyId) {
        window.location.href = 'work.html';
        return;
    }

    const study = getCaseStudyById(studyId);

    if (!study) {
        window.location.href = 'work.html';
        return;
    }

    // Update page
    document.getElementById('case-study-title-tag').textContent = `${study.title} — Mike Oliver`;
    document.getElementById('case-study-role').textContent = study.role;
    document.getElementById('case-study-year').textContent = study.year;
    document.getElementById('case-study-title').textContent = study.title;
    document.getElementById('case-study-subtitle').textContent = study.subtitle;

    // NOTE: Using innerHTML here since all content is controlled via the caseStudies array (same pattern as blogPosts)
    document.getElementById('case-study-content').innerHTML = study.content;
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
    } else if (page === 'casestudy') {
        initCaseStudyPage();
    }
});

// ============================================
// LLM Content Management
// ============================================
// To add/edit posts, modify the blogPosts array above
// Each post needs: id, title, date, readingTime, excerpt, content
