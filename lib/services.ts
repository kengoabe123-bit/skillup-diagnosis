export interface Service {
    id: string;
    slug: string;
    name: string;
    nameEn: string;
    tagline: string;
    description: string;
    category: string;
    target: string;
    targetAge: string[];
    features: string[];
    pros: string[];
    cons: string[];
    recommended: string[];
    affiliateUrl: string;
    ctaText: string;
    color: string;
}

export const services: Service[] = [
    {
        id: 'techacademy',
        slug: 'techacademy',
        name: 'テックアカデミー',
        nameEn: 'TechAcademy',
        tagline: '現役エンジニアから学ぶ、オンラインプログラミングスクール',
        description: '受講者数No.1のオンラインプログラミングスクール。現役エンジニアによるマンツーマンメンタリングで、未経験からでもWebエンジニアを目指せる。',
        category: 'プログラミング',
        target: 'IT業界への転職・副業でプログラミングを活かしたい方',
        targetAge: ['20代', '30代', '40代'],
        features: [
            '現役エンジニアによるマンツーマンメンタリング',
            '完全オンラインで自分のペースで学べる',
            '転職保証コースあり（転職できなければ全額返金）',
            '副業向けコースも充実',
        ],
        pros: [
            'オンライン完結で通学不要',
            '豊富なコースから選べる',
            '転職サポートが手厚い',
        ],
        cons: [
            '自己管理能力が求められる',
            '対面での質問ができない',
        ],
        recommended: ['プログラミングを学びたい', 'IT転職を目指したい', '副業スキルがほしい'],
        affiliateUrl: '#',
        ctaText: '詳細を見る',
        color: '#1ABC9C',
    },
    {
        id: 'bizmates',
        slug: 'bizmates',
        name: 'Bizmates（ビズメイツ）',
        nameEn: 'Bizmates',
        tagline: 'ビジネス特化型オンライン英会話で、仕事で使える英語力を',
        description: 'ビジネス経験豊富なトレーナーによるマンツーマンレッスン。実際のビジネスシーンで使える英語力を、1レッスン25分・毎日受講可能な環境で効率的に習得。',
        category: '英会話',
        target: 'ビジネスで英語を使いたい・英語力でキャリアアップしたい方',
        targetAge: ['20代', '30代', '40代', '50代'],
        features: [
            'ビジネス英語に特化したカリキュラム',
            'ビジネス経験豊富な講師陣',
            '毎日25分のマンツーマンレッスン',
            '初心者から上級者まで対応',
        ],
        pros: [
            '仕事で即使える英語が身につく',
            '毎日受講可能でコスパが良い',
            'オンラインで朝5時〜深夜1時まで対応',
        ],
        cons: [
            '日常英会話よりビジネス寄り',
            '毎日の継続が必要',
        ],
        recommended: ['ビジネス英語を学びたい', '英語力でキャリアアップしたい', '海外出張・外資系転職を目指す'],
        affiliateUrl: '#',
        ctaText: '詳細を見る',
        color: '#2C3E50',
    },
    {
        id: 'studying',
        slug: 'studying',
        name: 'スタディング',
        nameEn: 'STUDYing',
        tagline: 'スマホ1台で、難関資格をスキマ時間に攻略',
        description: '累計受講者25万人突破のオンライン資格講座。スマホで学べるから通勤時間や休憩時間を有効活用。簿記・FP・宅建・中小企業診断士など50以上の資格に対応。',
        category: '資格取得',
        target: '働きながら資格を取りたい・キャリアの武器がほしい方',
        targetAge: ['20代', '30代', '40代', '50代'],
        features: [
            'スマホで完結するスキマ時間学習',
            '業界最安級の受講料',
            '50以上の資格講座をラインナップ',
            'AIによる学習最適化機能',
        ],
        pros: [
            '圧倒的にコスパが良い',
            '通勤時間を活用できる',
            '自分のペースで進められる',
        ],
        cons: [
            '対面指導がない',
            '自己管理が必要',
        ],
        recommended: ['コスパ重視で資格を取りたい', 'スキマ時間を活用したい', '仕事と両立したい'],
        affiliateUrl: '#',
        ctaText: '詳細を見る',
        color: '#E74C3C',
    },
    {
        id: 'globis',
        slug: 'globis',
        name: 'グロービス学び放題',
        nameEn: 'GLOBIS Unlimited',
        tagline: 'ビジネススキルを体系的に学べる、定額制動画学習',
        description: 'MBAの知見を凝縮した3,000本以上のビジネス動画が月額制で見放題。戦略・マーケティング・リーダーシップなど、ビジネスの教養を網羅的にインプットできる。',
        category: 'ビジネス学習',
        target: '経営知識を身につけたい・マネジメント層を目指す方',
        targetAge: ['20代', '30代', '40代'],
        features: [
            '3,000本以上のMBA級ビジネス動画',
            '月額定額制で見放題',
            '1本3分〜の短尺動画で手軽に学習',
            '思考力を鍛える演習問題付き',
        ],
        pros: [
            '体系的にビジネス知識が身につく',
            'MBA留学より圧倒的に安い',
            '幅広いテーマをカバー',
        ],
        cons: [
            '実践の場は自分で見つける必要がある',
            '動画視聴がメインで対話が少ない',
        ],
        recommended: ['ビジネス全般の知識を身につけたい', 'マネジメントスキルを高めたい', '将来起業・独立を考えている'],
        affiliateUrl: '#',
        ctaText: '詳細を見る',
        color: '#8E44AD',
    },
    {
        id: 'digital-hollywood',
        slug: 'digital-hollywood',
        name: 'デジタルハリウッドSTUDIO by LIG',
        nameEn: 'Digital Hollywood STUDIO by LIG',
        tagline: 'Web制作会社が運営する、実践型Webデザインスクール',
        description: '有名Web制作会社LIGが運営するデザインスクール。現役クリエイターから直接学べ、卒業後すぐにWebデザイナーとして活躍できるスキルが身につく。',
        category: 'Webデザイン',
        target: 'Webデザイナーとして転職・フリーランスを目指す方',
        targetAge: ['20代', '30代'],
        features: [
            '有名Web制作会社LIG監修のカリキュラム',
            'オンライン＋通学のハイブリッド型',
            '現役クリエイターによる直接指導',
            'ポートフォリオ制作サポートあり',
        ],
        pros: [
            '実践的なスキルが身につく',
            '転職・フリーランス支援が充実',
            'クリエイティブな仲間ができる',
        ],
        cons: [
            '受講料がやや高め',
            '通学が必要な講座もある',
        ],
        recommended: ['Webデザイナーになりたい', 'クリエイティブな仕事がしたい', 'フリーランスを目指したい'],
        affiliateUrl: '#',
        ctaText: '詳細を見る',
        color: '#F39C12',
    },
    {
        id: 'schoo',
        slug: 'schoo',
        name: 'Schoo（スクー）',
        nameEn: 'Schoo',
        tagline: '生放送で学ぶ、社会人のためのオンライン学習コミュニティ',
        description: '8,000本以上の録画授業が見放題＋毎日のライブ授業に無料参加可能。ビジネス・IT・デザイン・教養まで幅広いジャンルを、まるで学校のように楽しく学べる。',
        category: '総合学習',
        target: '幅広く学びたい・学び続ける習慣をつけたい方',
        targetAge: ['20代', '30代', '40代', '50代'],
        features: [
            '毎日のライブ授業を無料視聴可能',
            '8,000本以上の録画授業が見放題',
            'ビジネス・IT・デザイン・教養まで網羅',
            '他の受講者とリアルタイムで交流できる',
        ],
        pros: [
            '幅広いジャンルをカバー',
            '月額980円で見放題のコスパ',
            'ライブ授業の臨場感がある',
        ],
        cons: [
            '資格取得に特化していない',
            '深い専門知識には物足りない場合も',
        ],
        recommended: ['まずは色々な分野を学んでみたい', '学習習慣をつけたい', 'コスパ重視で始めたい'],
        affiliateUrl: '#',
        ctaText: '詳細を見る',
        color: '#3498DB',
    },
    {
        id: 'dmm-webcamp',
        slug: 'dmm-webcamp',
        name: 'DMM WEBCAMP',
        nameEn: 'DMM WEBCAMP',
        tagline: '転職成功率98%、未経験からITエンジニアへ',
        description: 'DMMグループが運営するプログラミングスクール。転職成功率98%の実績を誇り、経済産業省認定のリスキリング講座で最大70%の給付金を受給可能。',
        category: 'プログラミング（転職特化）',
        target: 'エンジニアへの転職を本気で目指す方',
        targetAge: ['20代', '30代'],
        features: [
            '転職成功率98%の実績',
            '経済産業省認定で最大70%給付金対象',
            '専属キャリアアドバイザーによる転職支援',
            'チーム開発で実務レベルのスキル習得',
        ],
        pros: [
            '転職保証で安心して学べる',
            '給付金で費用を大幅に抑えられる',
            '実務に近いカリキュラム',
        ],
        cons: [
            '学習期間中は相当な時間が必要',
            'コースによっては通学が必要',
        ],
        recommended: ['本気でエンジニア転職したい', '給付金を活用したい', '短期集中で学びたい'],
        affiliateUrl: '#',
        ctaText: '詳細を見る',
        color: '#16A085',
    },
];

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((s) => s.slug === slug);
}
