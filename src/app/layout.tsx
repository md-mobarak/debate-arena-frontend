
// // import type { Metadata } from 'next'
// // import { Inter } from 'next/font/google'
// // import './globals.css'
// // import ThemeProvider from '@/components/ThemeProvider'
// // import AuthProvider from '@/components/AuthProvider'
// // import Navbar from '@/components/Navbar'
// // import Footer from '@/components/Footer'

// // const inter = Inter({ subsets: ['latin'] })

// // export const metadata: Metadata = {
// //   title: 'Debate Arena - Battle of Opinions',
// //   description: 'Join discussions, post arguments, and vote on compelling responses',
// // }

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode
// // }) {
// //   return (
// //     <html lang="en" suppressHydrationWarning>
// //       <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>
// //         <AuthProvider>
// //           <ThemeProvider>
// //             <div className="min-h-screen flex flex-col">
// //               <Navbar />
// //               <main className="flex-grow pt-16">
// //                 {children}
// //               </main>
// //               <Footer />
// //             </div>
// //           </ThemeProvider>
// //         </AuthProvider>
// //       </body>
// //     </html>
// //   )
// // }

// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import './globals.css'
// import ThemeProvider from '@/components/ThemeProvider'
// import AuthProvider from '@/components/AuthProvider'
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
// import { useEffect } from 'react'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Debate Arena - Battle of Opinions',
//   description: 'Join discussions, post arguments, and vote on compelling responses',
// }

// // Client-side only component to clean up extension attributes
// function CleanupExtensions() {
//   useEffect(() => {
//     const cleanup = () => {
//       const body = document.body;
//       body.removeAttribute('data-new-gr-c-s-check-loaded');
//       body.removeAttribute('data-gr-ext-installed');
//       body.removeAttribute('cz-shortcut-listen');
//     };
    
//     // Run cleanup on mount and after a short delay to catch late-added attributes
//     cleanup();
//     const timeout = setTimeout(cleanup, 1000);
    
//     return () => clearTimeout(timeout);
//   }, []);

//   return null;
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>
//         <AuthProvider>
//           <ThemeProvider>
//             <CleanupExtensions />
//             <div className="min-h-screen flex flex-col">
//               <Navbar />
//               <main className="flex-grow pt-16">
//                 {children}
//               </main>
//               <Footer />
//             </div>
//           </ThemeProvider>
//         </AuthProvider>
//       </body>
//     </html>
//   )
// }

// app/layout.tsx
// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import AuthProvider from '@/components/AuthProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HydrationFixer from '@/components/HydrationFixer'
// import HydrationFixer from '@/components/HydrationFixer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Debate Arena - Battle of Opinions',
  description: 'Join discussions, post arguments, and vote on compelling responses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>
        <AuthProvider>
          <ThemeProvider>
            <HydrationFixer>
              <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow pt-16">
                  {children}
                </main>
                <Footer />
              </div>
            </HydrationFixer>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}