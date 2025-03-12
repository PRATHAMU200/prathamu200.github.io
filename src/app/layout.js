import "@/app/globals.css";

export const metadata = {
  title: "I am Pratham Upadhyay",
  description: "This is my portfolio website!",
};

export default function RootComponent({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head> */}
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
