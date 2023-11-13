export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">&copy; {currentYear} Ivan. All rights reserved.</small>
      <p className="text-xs">
        <span className="font-semibold">About this website: </span>
        Built with React, Next.js, TypeScript, Tailwind CSS, and Framer Motion. Handles email
        interactions with React Email & Resend. Hosted on Vercel.
      </p>
    </footer>
  );
};
