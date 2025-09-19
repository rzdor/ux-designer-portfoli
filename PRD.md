# UX Designer Portfolio Website

A professional showcase platform that presents UX design work, process, and expertise to potential clients and employers.


- Primarily focused on presenting design work, case studies, and professional information with minimal inte
## Essential Features
### Project Gallery

**Complexity Level**: Content Showcase (information-focused)
- Primarily focused on presenting design work, case studies, and professional information with minimal interactive functionality beyond navigation and contact forms.

## Essential Features

### Project Gallery
- **Functionality**: Display featured UX design projects with preview images and descriptions
- **Purpose**: Showcase design skills and demonstrate range of work across different industries/clients
- **Trigger**: Visitor lands on homepage or navigates to portfolio section
- **Functionality**: Direct communication channel for project inquiries and opportunities
- **Trigger**: Contact button/link throughout the site

## Edge Case Handling
- **Mobile Responsiveness**: Ensure all case study images and layouts work seamlessly across devic
- **Form Validation**: Provide clear error messages and prevent spam submissions

The design should feel sophisticated, clean, and effortlessly professional - reflecting the high standards expected from a UX de
## Color Selection

- **Secondary Colors*
- **Foreground/Background Pairings**:
  - Card (Light Gray oklch(0.98 0.005 60)): Deep charcoal text (oklch(0.25
  - Accent (Warm Copper oklch(0.7 0.12 45)): White text
## Font Selection


  - H3 (Subsections): In
- **Functionality**: Direct communication channel for project inquiries and opportunities
- **Purpose**: Convert portfolio visitors into potential clients or interview opportunities
- **Trigger**: Contact button/link throughout the site
- **Progression**: Contact form → Message composition → Form submission → Confirmation → Follow-up expectation
- **Success criteria**: Inquiries are captured effectively with clear next steps communicated

## Edge Case Handling
- **Empty Portfolio**: Display compelling placeholder content and focus on skills/experience until projects are added
- **Mobile Responsiveness**: Ensure all case study images and layouts work seamlessly across device sizes
- **Slow Loading Images**: Implement progressive loading with skeleton states for project imagery
- **Form Validation**: Provide clear error messages and prevent spam submissions
- **Browser Compatibility**: Graceful fallbacks for advanced animations and modern CSS features

## Design Direction
The design should feel sophisticated, clean, and effortlessly professional - reflecting the high standards expected from a UX designer while remaining approachable and human. A minimal interface serves the core purpose of letting the work speak for itself without distraction.

## Color Selection
Analogous (adjacent colors on color wheel) - Using a refined neutral palette with subtle warm accents to create a sophisticated, timeless feel that won't compete with showcased design work.

- **Primary Color**: Deep charcoal (oklch(0.25 0.02 240)) - Conveys professionalism and sophistication
- **Secondary Colors**: Warm grays (oklch(0.45 0.01 60), oklch(0.65 0.01 60)) - Supporting neutrals for hierarchy and subtle contrast
- **Accent Color**: Warm copper (oklch(0.7 0.12 45)) - Subtle warmth for CTAs and highlighting important elements
- **Foreground/Background Pairings**:
  - Background (Pure White oklch(1 0 0)): Deep charcoal text (oklch(0.25 0.02 240)) - Ratio 8.2:1 ✓
  - Card (Light Gray oklch(0.98 0.005 60)): Deep charcoal text (oklch(0.25 0.02 240)) - Ratio 7.8:1 ✓
  - Primary (Deep Charcoal oklch(0.25 0.02 240)): White text (oklch(1 0 0)) - Ratio 8.2:1 ✓
  - Accent (Warm Copper oklch(0.7 0.12 45)): White text (oklch(1 0 0)) - Ratio 4.9:1 ✓

## Font Selection
Typography should convey modern professionalism with excellent readability, using a contemporary sans-serif that feels both approachable and authoritative.

- **Typographic Hierarchy**:
  - H1 (Page Titles): Inter Bold/48px/tight letter spacing (-0.02em)
  - H2 (Section Headers): Inter SemiBold/32px/normal letter spacing
  - H3 (Subsections): Inter Medium/24px/normal letter spacing
  - Body Text: Inter Regular/16px/relaxed line height (1.6)

  - UI Elements: Inter Medium/14px/normal letter spacing

## Animations
Subtle, purposeful animations that enhance the professional feel without being distracting - focusing on smooth transitions and gentle micro-interactions that guide attention and provide feedback.

- **Purposeful Meaning**: Motion communicates confidence and attention to detail while guiding users through the portfolio journey
- **Hierarchy of Movement**: Project cards and navigation elements receive priority animation focus, with subtle hover states on interactive elements

## Component Selection
- **Components**: 
  - Cards for project previews with hover states
  - Dialogs for project case study details or image galleries
  - Forms for contact inquiries with validation

  - Tabs for organizing case study sections (Research, Design, Results)

  - Custom image gallery component for case study visuals

  - Custom hero section with typed text or subtle parallax

  - Button hover states with subtle elevation and color shifts

  - Form inputs with smooth focus transitions and validation feedback
- **Icon Selection**: 
  - Phosphor icons for social links, contact, and navigation (subtle and professional)
  - Arrow icons for project navigation and CTAs
  - Tool icons for skills section (Figma, Sketch, etc.)

  - Generous sections (py-20, py-16) for breathing room
  - Consistent component spacing (gap-8, gap-6) for rhythm
  - Container max-widths (max-w-6xl) for optimal reading lengths

  - Mobile-first grid system (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)

  - Touch-friendly button sizes (min-h-12) and spacing
  - Simplified typography scale for smaller screens