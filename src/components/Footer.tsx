import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                <span className="font-bold text-xl">D</span>
              </div>
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                Debate<span className="text-indigo-600">Arena</span>
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A platform for constructive debates where opinions battle with facts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/debates">Debates</FooterLink>
              <FooterLink href="/leaderboard">Leaderboard</FooterLink>
              <FooterLink href="/create-debate">Create Debate</FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="/help">Help Center</FooterLink>
              <FooterLink href="/community">Community</FooterLink>
              <FooterLink href="/guidelines">Debate Guidelines</FooterLink>
              <FooterLink href="/faq">FAQs</FooterLink>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/cookies">Cookie Policy</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center text-gray-600 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} DebateArena. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
        {children}
      </Link>
    </li>
  )
}