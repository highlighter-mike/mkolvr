# mkolvr

A minimal personal site with bold typography and controlled spacing. No CMS, no build process—just clean HTML, CSS, and JavaScript managed through conversation with your LLM.

## Design Philosophy

**Cohesive minimalism.** Bold statements where they matter, breathing room everywhere, tight vertical flow so the page reads as one unified piece instead of disconnected sections.

**Three fonts, each with purpose:**
- **Unbounded** (200/900) - Wordmark and major landmarks
- **IBM Plex Serif** (400/600) - All content and reading
- **Source Code Pro** (400/600) - Technical metadata

**LLM-native content.** All blog posts live in `script.js`. Add or edit by talking to your LLM. No admin panel, no database.

## Structure

```
/Users/mikeoliver/Herd/personal/
├── index.html       # Homepage
├── blog.html        # Post archive
├── post.html        # Post template
├── styles.css       # Complete design system
├── script.js        # Blog data + page logic
└── README.md        # This file
```

## Managing Content

All posts are in the `blogPosts` array in `script.js`. To add or edit:

### Adding a Post

Tell your LLM: "Add a new post about [topic]" and it'll insert it into the array with this structure:

```javascript
{
    id: 'url-slug',
    title: 'Post Title',
    date: 'January 15, 2025',
    readingTime: '5 min read',
    excerpt: 'Brief summary for lists',
    content: `<p>Full HTML content here</p>`
}
```

### Supported HTML in Content

- `<p>` - Paragraphs
- `<h2>`, `<h3>` - Section headings
- `<blockquote>` - Pull quotes
- `<ul>`, `<ol>`, `<li>` - Lists
- `<code>` - Inline code
- `<pre><code>` - Code blocks
- `<a>` - Links

### Editing Your Info

**Hero** (`index.html` line 21):
```html
<h1 class="hero-title">
    Building tools that help<br>
    people thrive
</h1>
```

**Bio** (`index.html` lines 28-36):
```html
<p class="about-lead">
    Main intro paragraph (larger text)
</p>
<div class="about-grid">
    <div class="about-content">
        <p>Supporting paragraphs...</p>
    </div>
</div>
```

**Contact** (`index.html` lines 38-47):
```html
<div class="meta-label">Email</div>
<a href="mailto:your@email.com" class="meta-value">your@email.com</a>
```

## Design System

### Typography Scale
```
Hero:        clamp(2.5rem, 7vw, 5rem)     - Unbounded 900
Page Title:  clamp(3rem, 8vw, 5.5rem)     - Unbounded 900
Post Title:  clamp(2rem, 5vw, 3.5rem)     - Unbounded 900
Section:     clamp(1.75rem, 4vw, 2.5rem)  - Unbounded 700
List Titles: clamp(1.5rem, 3vw, 2rem)     - IBM Plex Serif 600
Body:        1.125rem                      - IBM Plex Serif 400
Metadata:    0.75-0.875rem                 - Source Code Pro 400
```

### Spacing System
```
--space-xs:  0.75rem
--space-sm:  1rem
--space-md:  1.5rem
--space-lg:  2.5rem
--space-xl:  4rem
--space-2xl: 6rem
```

Tighter than typical to create cohesion. Everything flows as one page.

### Color Palette
```
--color-black:      #000000
--color-white:      #FAFAF8 (warm off-white)
--color-gray-light: #E8E8E6
--color-gray:       #999999
--color-gray-dark:  #666666
```

## Features

- **No animations** - Static, clean, fast
- **Responsive** - Mobile breakpoints at 768px and 640px
- **Semantic HTML** - Proper structure for accessibility
- **No JavaScript required** - Site works without JS, enhanced with it
- **Fast** - ~30KB total (HTML + CSS + JS)

## Deployment

### Quick Deploy

**Vercel:**
```bash
vercel
```

**Netlify:**
Drag folder to netlify.com/drop

**GitHub Pages:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```
Enable Pages in repo settings.

### Custom Domain

Add to your hosting dashboard or create `CNAME` file:
```
yourdomain.com
```

## Working with Your LLM

### Example Prompts

**Add content:**
```
"Add a post about constraints in design. Keep it under 4 minutes.
Use concrete examples and at least one blockquote."
```

**Edit existing:**
```
"Make the hero text more focused on AI tools specifically"
```

**Adjust design:**
```
"Increase spacing between the hero and about sections"
```

**Update bio:**
```
"Update my bio to emphasize [new focus]"
```

## Typography Notes

### The "mkolvr" Wordmark

**mkolvr** = Mike Oliver with vowels removed (except 'o'). The thin Unbounded weight (200) with slight letter-spacing creates a delicate contrast against the bold hero. The 'k' ascender stands out as a nice visual anchor.

### Why Three Fonts Works

Each has a distinct role:
- Unbounded announces structure ("you are here")
- IBM Plex Serif is for reading (content, paragraphs, navigation)
- Source Code Pro marks data (dates, email, technical info)

Clear separation of concerns. No confusion about hierarchy.

## Browser Support

- Chrome/Edge 90+
- Firefox 90+
- Safari 14+

All modern browsers. No IE11 support needed.

## File Sizes

- HTML: ~3KB each
- CSS: ~12KB
- JS: ~8KB
- Fonts: Google Fonts CDN

Total first load: ~30-35KB (before fonts)

## Philosophy

**Constraints as features.**
- No CMS = No vendor lock-in
- No build = No complexity
- No framework = No obsolescence
- Static files = Own it forever

**Every element earns its place.**
The design is minimal not because of lack of effort, but because every piece that doesn't serve a purpose has been removed.

**Content first.**
Typography is architecture. Whitespace isn't empty—it's breathing room. The design disappears; the words remain.

---

Built with intention. Ready to grow with you.
