import Link from 'next/link';
import React from 'react';
import './global.css';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <main>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/notes">Notes</Link>
            <Link href="/products">Products</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
