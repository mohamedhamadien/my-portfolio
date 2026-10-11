# Mohamed Hamadeen — Full Stack .NET Developer Portfolio

A responsive, dark navy Angular portfolio with blue/purple accents, project case studies, experience timeline, skills, and a mailto-based contact form.

## Requirements

- Node.js 22 LTS (recommended)
- npm (included with Node.js)
- Git (for publishing)
- A GitHub account (for free GitHub Pages hosting)

## Run locally

Open PowerShell in this folder:

```powershell
npm install
npm start
```

Open <http://localhost:4200>.

Build a production version locally:

```powershell
npm run build
```

The production files are generated under `dist/my-portfolio/browser`.

## Personalize before publishing

Open `src/app/app.component.ts` and replace these placeholders everywhere they appear:

- `YOUR_USERNAME` — your GitHub username (this project uses `mohamedhamadien`)
- `YOUR_LINKEDIN` — your LinkedIn profile slug (this project uses `mohamed-hamdeen`)
- `YOUR_EMAIL@example.com` — your professional email (configured as `mohamedhmdeen@gmail.com`)

Also update the About, experience, projects, and skills so each statement reflects your exact role and work. The microservices project is presented as hands-on learning, not professional employment.

### CV download

Replace `public/assets/Mohamed-Hamadeen-CV.pdf` with your final, approved CV PDF. A starter CV PDF is included; review and update its contact details before sharing it.

### Project content

The healthcare case study is a high-level description. Do not publish confidential company code, patient information, internal URLs, or screenshots without permission. Add real GitHub links and screenshots only when you are authorized to share them.

## Publish to GitHub Pages

1. Create a **public** GitHub repository named `my-portfolio`.
2. Upload this project to the repository's `main` branch. You can do this using GitHub Desktop or the commands below.
3. In the repository, open **Settings → Pages** and set the source to **GitHub Actions**.
4. The included workflow `.github/workflows/deploy.yml` builds and publishes the Angular site after each push to `main`.
5. Open the **Actions** tab and wait for **Deploy Angular Portfolio to GitHub Pages** to complete successfully.
6. Your URL will be `https://mohamedhamadien.github.io/my-portfolio/`.

### First push with Git

The configured GitHub username is `mohamedhamadien`:

```powershell
git init
git add .
git commit -m "Create developer portfolio"
git branch -M main
git remote add origin https://github.com/mohamedhamadien/my-portfolio.git
git push -u origin main
```

If Git is already initialized, skip `git init`. If the `origin` remote already exists, inspect it with `git remote -v` instead of adding it again.

### If your repository has a different name

The workflow automatically uses the repository name to set Angular's base href. For this repository, the URL is `https://mohamedhamadien.github.io/my-portfolio/`.

## Contact form note

The form opens the visitor's default email app using `mailto:`. It does not store or send messages through a server. Replace the email placeholder first. If you want messages without the visitor opening an email app, connect a form service or add a backend API.

## Design notes

- Mobile navigation
- Responsive project and skill grids
- Accessible focus styles and reduced-motion support
- No extra icon or UI libraries required
- GitHub Actions deployment
