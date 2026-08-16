# Portfolio Website

A personal developer portfolio built with Next.js and Three.js, inspired by websites in 2010 that had slapped together everything they had.

**Live site:** [WebsiteLink](https://portfolio-website-blush-seven-78.vercel.app/)

## Cool Stuff I made

- **Interactive 3D models**: Cool draggable 3D model :D
- **Rotating icons**: Cool spinny icons
- **Page transitions**: animated fade between routes via Next.js's `template.js`
- **Contact form**: Send messages to my email via emailjs
- **Cool music**: optional background music with a on/off control, music made by me ofcourse

## Tech Stack

| Category | Tools |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| 3D rendering | [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [drei](https://github.com/pmndrs/drei) + [Three.js](https://threejs.org/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Forms | [React Hook Form](https://react-hook-form.com/) + [EmailJS](https://www.emailjs.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Notifications | [Sonner](https://sonner.emilkowal.ski/) |

## Getting Started

### Prerequisites

- Node.js 18+
- An [EmailJS](https://www.emailjs.com/) account (for the contact form)

### Installation

```bash
git clone https://github.com/Lemonzwastaken/PortfolioWebsite.git
cd PortfolioWebsite
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_PUBLIC_KEY=your_emailjs_public_key
```

Without these, the contact form will build fine but fail to send messages.

### Development

```bash
npm run dev
```

Visit `http://localhost:3000`.

### Production Build

```bash
npm run build
npm run start
```

## Deployment

This project is configured for static export (see `next.config.mjs`) and can be deployed to:

- **[Vercel](https://vercel.com/)**: zero-config, recommended for full Next.js features (SSR, image optimization, etc.)

Remember to add your EmailJS environment variables as repository secrets if deploying via GitHub Actions.

## License

No liscense
Feel free to use as you like :D
