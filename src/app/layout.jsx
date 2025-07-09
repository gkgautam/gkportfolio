import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: "Let's Know Govind",
  description: 'Govind portfolio showing his detailed projects and skills and the daily routine included in his job role',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}<script type="module" src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fgovindsa3025back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.5"></script>
</body>
    </html>
  );
}
