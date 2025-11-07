import { Youtube, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} CrashedGamerz. All rights reserved.</p>
          <div className="flex items-center gap-4 text-gray-700">
            <a
              href="https://www.youtube.com/@crashedgamerz"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-red-600"
            >
              <Youtube className="h-5 w-5" />
              <span className="text-sm">YouTube</span>
            </a>
            <a
              href="mailto:business@crashedgamerz.example"
              className="inline-flex items-center gap-2 hover:text-indigo-600"
            >
              <Mail className="h-5 w-5" />
              <span className="text-sm">Contact</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-sky-600"
            >
              <Twitter className="h-5 w-5" />
              <span className="text-sm">Twitter</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-pink-600"
            >
              <Instagram className="h-5 w-5" />
              <span className="text-sm">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
