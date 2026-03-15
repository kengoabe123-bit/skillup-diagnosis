import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SkillUp Navi - スキルアップ診断テスト',
    description: '7つの質問に答えるだけで、あなたにぴったりのスキルアップ方法が見つかる無料診断テスト。',
    openGraph: {
        title: 'SkillUp Navi - スキルアップ診断テスト',
        description: '7つの質問に答えるだけで、あなたにぴったりのスキルアップ方法が見つかる無料診断テスト。',
        type: 'website',
        locale: 'ja_JP',
    },
};

export default function DiagnosisLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
