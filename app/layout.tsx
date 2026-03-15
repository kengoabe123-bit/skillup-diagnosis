import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SkillUp Navi - あなたにぴったりのスキルアップ診断',
  description: '7つの質問に答えるだけで、あなたにぴったりのスキルアップ方法が見つかる無料診断テスト。プログラミング、英会話、資格取得、MBA、Webデザインなど人気のスクール・講座からAIがマッチング。',
  openGraph: {
    title: 'SkillUp Navi - あなたにぴったりのスキルアップ診断',
    description: '7つの質問に答えるだけで、あなたにぴったりのスキルアップ方法が見つかる無料診断テスト。',
    type: 'website',
    locale: 'ja_JP',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
