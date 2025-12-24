import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CosmicAnalyticsProvider } from "cosmic-analytics";
import PageTransitionLoader from "./components/PageTransitionLoader";

const primaryFont = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"]
});

// Change the title and description to your own.
export const metadata: Metadata = {
  title: "Elite Fitness - Premium Gym in Miyapur, Hyderabad",
  description: "Transform your fitness journey at Elite Fitness. Premium gym facilities in Miyapur offering Cardio, CrossFit, Zumba, Yoga, Dance & Athletic Training. Opening offer ₹899/month!"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html data-editor-id="app/layout.tsx:27:5" lang="en" className={primaryFont.className}>
      <body data-editor-id="app/layout.tsx:31:7" className="antialiased text-sm">
        <PageTransitionLoader />
        <main data-editor-id="app/layout.tsx:32:9" className="h-screen">
          <CosmicAnalyticsProvider>
            {children}
          </CosmicAnalyticsProvider>
        </main>
        {process.env.VISUAL_EDITOR_ACTIVE === 'true' &&
          <script data-editor-id="app/layout.tsx:50:9" src="/editor.js" async />
        }
      </body>
    </html>);

}