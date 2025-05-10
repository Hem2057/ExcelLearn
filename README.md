# ExcelLearn

## Project Overview
ExcelLearn is an innovative online learning platform that offers a wide range of courses designed to equip learners with essential skills in various fields, including web development, AI & machine learning, and data science. The platform leverages a blend of AI-powered learning, human mentorship, and immersive laboratories to enhance the education experience.

## Installation
To set up the ExcelLearn project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Hem2057/excellearn.git
   cd excellearn
   ```

2. **Open it in your browser** by navigating to `index.html` or any other HTML page, such as `courses.html` or `contact.html`.

## Usage
1. **Homepage**: Navigate to the homepage (`index.html`) to explore the various features of ExcelLearn.
2. **Courses**: Check out the courses available tailored to different skill levels at `courses.html`.
3. **Contact**: Use the `contact.html` page to get in touch with the team or provide feedback via the contact form.

## Features
- **Diverse Course Offerings**: Courses for beginner, intermediate, and advanced levels.
- **Interactive Contact Form**: Connect easily with questions or inquiries.
- **AI-Powered Learning**: Personalized learning paths adjusted to the user's pace.
- **Engaging UI**: Designed for a user-friendly experience with responsive layouts.
- **Integrated Analytics**: Real-time progress tracking and personalized recommendations.

## CSS Architecture
The project uses a modular CSS architecture following the BEM (Block Element Modifier) methodology:

- **Global Styles** (`style.css`):
  - Base styles and variables
  - Common components (header, footer, buttons)
  - Layout utilities and containers
  - Animations and transitions

- **Page-Specific Styles**:
  - `courses.css`: Styles for course cards, filters, and course-related components
  - `contact.css`: Styles for contact form, info cards, and map section

### BEM Naming Convention
```css
/* Block */
.header {}

/* Element */
.header__logo {}
.header__nav {}

/* Modifier */
.btn--outline {}
.btn--gradient {}
```

## Dependencies
The project uses minimal external dependencies:
- [Font Awesome](https://fontawesome.com/) - For icons
- Google Fonts (Poppins) - For typography

No CSS frameworks are used; all styling is custom-built using vanilla CSS.

## Project Structure
```
excellearn/
│
├── index.html          # The main landing page
├── courses.html        # Page displaying course offerings
├── contact.html        # Contact form and information
|
├── css/                # CSS files
|  ├── style.css        # Global styles and shared components
|  ├──courses.css       # Course page specific styles
|  ├──contact.css       # Contact page specific styles
│
├── js/                 # JavaScript files
│   └── script.js       # Main JavaScript functionality
│
└── favicon.svg         # The favicon for the website
```

## Responsive Design
The website is fully responsive with breakpoints at:
- Mobile: < 768px


# ExcelLearn

## Project Overview
ExcelLearn is an innovative online learning platform that offers a wide range of courses designed to equip learners with essential skills in various fields, including web development, AI & machine learning, and data science. The platform leverages a blend of AI-powered learning, human mentorship, and immersive laboratories to enhance the education experience.

## Installation
To set up the ExcelLearn project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/excellearn.git
   cd excellearn
   ```

2. **Open it in your browser** by navigating to `index.html` or any other HTML page, such as `courses.html` or `contact.html`.

## Usage
1. **Homepage**: Navigate to the homepage (`index.html`) to explore the various features of ExcelLearn.
2. **Courses**: Check out the courses available tailored to different skill levels at `courses.html`.
3. **Contact**: Use the `contact.html` page to get in touch with the team or provide feedback via the contact form.

## Features
- **Diverse Course Offerings**: Courses for beginner, intermediate, and advanced levels.
- **Interactive Contact Form**: Connect easily with questions or inquiries.
- **AI-Powered Learning**: Personalized learning paths adjusted to the user’s pace.
- **Engaging UI**: Designed for a user-friendly experience with responsive layouts.
- **Integrated Analytics**: Real-time progress tracking and personalized recommendations.

## Dependencies
The project uses the following libraries:
- [Font Awesome](https://fontawesome.com/) - For icons.

**Note**: The project no longer uses Tailwind CSS. All styling is done with custom hand-written CSS files located in the `css/` directory.



## Contributing
Contributions to improve ExcelLearn are welcome! If you have suggestions for new features or enhancements, feel free to open an issue or submit a pull request.


