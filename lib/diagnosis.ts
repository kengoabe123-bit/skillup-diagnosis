import { services, Service } from './services';

export interface Question {
    id: number;
    text: string;
    subtext?: string;
    options: Option[];
}

export interface Option {
    label: string;
    scores: Record<string, number>;
}

export interface DiagnosisResult {
    service: Service;
    score: number;
    matchRate: number;
    reason: string;
}

interface ConditionalReason {
    condition: (answers: number[]) => boolean;
    text: string;
}

export const questions: Question[] = [
    {
        id: 1,
        text: 'スキルアップの一番の目的は何ですか？',
        options: [
            {
                label: '転職・キャリアチェンジしたい',
                scores: { techacademy: 5, bizmates: 3, studying: 3, globis: 2, 'digital-hollywood': 5, schoo: 1, 'dmm-webcamp': 5 },
            },
            {
                label: '今の仕事で昇進・昇給したい',
                scores: { techacademy: 2, bizmates: 5, studying: 4, globis: 5, 'digital-hollywood': 1, schoo: 3, 'dmm-webcamp': 1 },
            },
            {
                label: '副業・フリーランスで稼ぎたい',
                scores: { techacademy: 5, bizmates: 1, studying: 2, globis: 2, 'digital-hollywood': 5, schoo: 2, 'dmm-webcamp': 3 },
            },
            {
                label: '教養として学びたい・自己成長',
                scores: { techacademy: 1, bizmates: 3, studying: 3, globis: 4, 'digital-hollywood': 1, schoo: 5, 'dmm-webcamp': 0 },
            },
        ],
    },
    {
        id: 2,
        text: 'どんなスキルに興味がありますか？',
        subtext: '最も関心のあるものを選んでください',
        options: [
            {
                label: 'プログラミング・IT系',
                scores: { techacademy: 5, bizmates: 0, studying: 1, globis: 1, 'digital-hollywood': 3, schoo: 2, 'dmm-webcamp': 5 },
            },
            {
                label: '英語・語学',
                scores: { techacademy: 0, bizmates: 5, studying: 2, globis: 1, 'digital-hollywood': 0, schoo: 2, 'dmm-webcamp': 0 },
            },
            {
                label: 'ビジネス・経営・マネジメント',
                scores: { techacademy: 1, bizmates: 2, studying: 3, globis: 5, 'digital-hollywood': 0, schoo: 4, 'dmm-webcamp': 0 },
            },
            {
                label: 'デザイン・クリエイティブ',
                scores: { techacademy: 2, bizmates: 0, studying: 0, globis: 0, 'digital-hollywood': 5, schoo: 3, 'dmm-webcamp': 1 },
            },
        ],
    },
    {
        id: 3,
        text: '学習にどのくらいの時間を確保できますか？',
        options: [
            {
                label: '1日30分〜1時間（スキマ時間中心）',
                scores: { techacademy: 2, bizmates: 4, studying: 5, globis: 4, 'digital-hollywood': 1, schoo: 5, 'dmm-webcamp': 1 },
            },
            {
                label: '1日1〜2時間は確保できる',
                scores: { techacademy: 4, bizmates: 5, studying: 4, globis: 4, 'digital-hollywood': 3, schoo: 4, 'dmm-webcamp': 3 },
            },
            {
                label: '週末にまとめて学習したい',
                scores: { techacademy: 3, bizmates: 2, studying: 3, globis: 3, 'digital-hollywood': 4, schoo: 3, 'dmm-webcamp': 3 },
            },
            {
                label: '短期集中でがっつり学びたい',
                scores: { techacademy: 4, bizmates: 3, studying: 2, globis: 2, 'digital-hollywood': 4, schoo: 2, 'dmm-webcamp': 5 },
            },
        ],
    },
    {
        id: 4,
        text: '月々の予算はどのくらいですか？',
        options: [
            {
                label: 'できるだけ安く抑えたい（月1万円以内）',
                scores: { techacademy: 1, bizmates: 3, studying: 5, globis: 3, 'digital-hollywood': 0, schoo: 5, 'dmm-webcamp': 1 },
            },
            {
                label: '月1〜3万円は投資できる',
                scores: { techacademy: 3, bizmates: 5, studying: 4, globis: 4, 'digital-hollywood': 2, schoo: 3, 'dmm-webcamp': 2 },
            },
            {
                label: 'しっかり学べるなら月5万円以上もOK',
                scores: { techacademy: 5, bizmates: 3, studying: 2, globis: 3, 'digital-hollywood': 4, schoo: 2, 'dmm-webcamp': 4 },
            },
            {
                label: '給付金・補助金を活用したい',
                scores: { techacademy: 4, bizmates: 2, studying: 2, globis: 2, 'digital-hollywood': 3, schoo: 1, 'dmm-webcamp': 5 },
            },
        ],
    },
    {
        id: 5,
        text: '学習スタイルの好みは？',
        options: [
            {
                label: '完全オンラインで自由に進めたい',
                scores: { techacademy: 5, bizmates: 5, studying: 5, globis: 5, 'digital-hollywood': 2, schoo: 5, 'dmm-webcamp': 3 },
            },
            {
                label: '対面やリアルタイムの授業がほしい',
                scores: { techacademy: 2, bizmates: 3, studying: 1, globis: 2, 'digital-hollywood': 5, schoo: 4, 'dmm-webcamp': 4 },
            },
            {
                label: 'メンターや講師にサポートしてほしい',
                scores: { techacademy: 5, bizmates: 4, studying: 2, globis: 2, 'digital-hollywood': 4, schoo: 2, 'dmm-webcamp': 5 },
            },
            {
                label: '仲間と一緒に学びたい',
                scores: { techacademy: 2, bizmates: 2, studying: 1, globis: 3, 'digital-hollywood': 5, schoo: 4, 'dmm-webcamp': 4 },
            },
        ],
    },
    {
        id: 6,
        text: '今のキャリアの状況は？',
        options: [
            {
                label: '社会人1〜3年目（まだ方向性を模索中）',
                scores: { techacademy: 4, bizmates: 3, studying: 3, globis: 3, 'digital-hollywood': 4, schoo: 5, 'dmm-webcamp': 4 },
            },
            {
                label: '中堅社員（次のステップを考えたい）',
                scores: { techacademy: 3, bizmates: 5, studying: 4, globis: 5, 'digital-hollywood': 3, schoo: 3, 'dmm-webcamp': 2 },
            },
            {
                label: '管理職・リーダー（組織を率いる力がほしい）',
                scores: { techacademy: 1, bizmates: 4, studying: 3, globis: 5, 'digital-hollywood': 1, schoo: 3, 'dmm-webcamp': 0 },
            },
            {
                label: '未経験から新しい業界に挑戦したい',
                scores: { techacademy: 5, bizmates: 2, studying: 3, globis: 1, 'digital-hollywood': 5, schoo: 2, 'dmm-webcamp': 5 },
            },
        ],
    },
    {
        id: 7,
        text: 'スキルアップで一番重視するのは？',
        options: [
            {
                label: '成果が目に見える（資格・ポートフォリオ）',
                scores: { techacademy: 4, bizmates: 2, studying: 5, globis: 2, 'digital-hollywood': 5, schoo: 1, 'dmm-webcamp': 4 },
            },
            {
                label: '実務で即使える実践力',
                scores: { techacademy: 5, bizmates: 5, studying: 3, globis: 3, 'digital-hollywood': 4, schoo: 3, 'dmm-webcamp': 5 },
            },
            {
                label: '続けやすさ（手軽さ・コスパ）',
                scores: { techacademy: 2, bizmates: 4, studying: 5, globis: 4, 'digital-hollywood': 1, schoo: 5, 'dmm-webcamp': 1 },
            },
            {
                label: '人脈・コミュニティ',
                scores: { techacademy: 2, bizmates: 2, studying: 1, globis: 4, 'digital-hollywood': 5, schoo: 4, 'dmm-webcamp': 3 },
            },
        ],
    },
];

const conditionalReasons: Record<string, ConditionalReason[]> = {
    techacademy: [
        {
            condition: (answers) => answers[0] === 0 && answers[1] === 0,
            text: 'IT転職を目指してプログラミングを学びたいというご希望に、テックアカデミーは最適です。現役エンジニアのマンツーマンメンタリングで、未経験からでも着実にスキルを身につけられます。転職保証コースなら、転職できなければ全額返金の安心サポート付きです。',
        },
        {
            condition: (answers) => answers[0] === 2,
            text: '副業・フリーランスで稼ぎたいなら、テックアカデミーの副業向けコースがぴったり。Web制作やアプリ開発のスキルは、副業案件のニーズが高く、学んだ分だけ収入に直結します。現役エンジニアが実案件の取り方までサポートしてくれます。',
        },
        {
            condition: () => true,
            text: 'プログラミングスキルでキャリアの選択肢を広げたい方に、テックアカデミーは最適な選択です。オンライン完結で自分のペースで学べ、現役エンジニアの手厚いメンタリングで挫折しにくい環境が整っています。',
        },
    ],
    bizmates: [
        {
            condition: (answers) => answers[0] === 1 && answers[1] === 1,
            text: '今の仕事で英語力を武器にキャリアアップしたいなら、Bizmatesが最適です。ビジネス経験豊富なトレーナーによるレッスンなので、会議・プレゼン・交渉など実務で即使える英語力が身につきます。毎日25分で無理なく続けられるのも大きなメリットです。',
        },
        {
            condition: (answers) => answers[5] === 1,
            text: '中堅社員としてのキャリアの壁を突破するには、英語力が大きな武器になります。Bizmatesならビジネスに特化した英会話を毎日のルーティンに組み込め、3ヶ月後には確かな変化を実感できるはずです。',
        },
        {
            condition: () => true,
            text: 'ビジネスシーンで通用する英語力を効率的に身につけたい方に、Bizmatesはおすすめです。朝5時から深夜1時まで受講可能で、忙しいビジネスパーソンでも続けやすい環境が整っています。',
        },
    ],
    studying: [
        {
            condition: (answers) => answers[2] === 0 && answers[3] === 0,
            text: 'スキマ時間を活用しながら、コストを抑えて資格取得したいというご希望にスタディングはぴったりです。スマホ1台で学べるから、通勤電車の中でも昼休みでも学習が進められます。業界最安級の価格設定も魅力です。',
        },
        {
            condition: (answers) => answers[6] === 0,
            text: '目に見える成果として「資格」を手に入れたいなら、スタディングは最短ルートです。簿記・FP・宅建など50以上の資格に対応しており、AIによる学習最適化で効率的に合格を目指せます。',
        },
        {
            condition: () => true,
            text: '働きながら資格を取りたい方にとって、スタディングは最もハードルが低い選択肢です。スマホで完結するスキマ時間学習と、業界最安級の受講料で、まずは気軽に始めることができます。',
        },
    ],
    globis: [
        {
            condition: (answers) => answers[5] === 2,
            text: '管理職・リーダーとして組織を率いる力を身につけたいなら、グロービス学び放題が最適です。MBA級の知識を体系的に学べ、戦略思考・リーダーシップ・組織マネジメントなど、管理職に必須のスキルを網羅しています。',
        },
        {
            condition: (answers) => answers[0] === 1 && answers[1] === 2,
            text: 'ビジネス・経営の知識で昇進を目指すなら、グロービス学び放題がおすすめ。MBA留学は数百万円かかりますが、月額制で同等レベルの知識をインプットでき、コスパは圧倒的です。',
        },
        {
            condition: () => true,
            text: 'ビジネスの教養を体系的に身につけたい方に、グロービス学び放題は最適です。1本3分からの短尺動画で手軽に始められ、戦略・マーケティング・リーダーシップなど幅広いテーマを深く学べます。',
        },
    ],
    'digital-hollywood': [
        {
            condition: (answers) => answers[1] === 3 && answers[0] === 0,
            text: 'デザイン・クリエイティブの力で転職を目指すなら、デジハリSTUDIO by LIGは最高の選択肢です。有名Web制作会社が運営しているから、実務で本当に使えるスキルが身につきます。ポートフォリオ制作もサポートしてくれるので、転職活動に直結します。',
        },
        {
            condition: (answers) => answers[0] === 2 && answers[1] === 3,
            text: 'クリエイティブスキルでフリーランスを目指したい方に、デジハリSTUDIO by LIGは最適です。卒業生のフリーランス率が高く、営業方法や案件獲得のノウハウまで学べます。同じ志を持つ仲間とのネットワークも財産になります。',
        },
        {
            condition: () => true,
            text: 'Webデザイン・クリエイティブスキルを実践レベルで身につけたい方に、デジハリSTUDIO by LIGがおすすめです。現役クリエイターの直接指導で、ポートフォリオを作りながら即戦力のスキルが習得できます。',
        },
    ],
    schoo: [
        {
            condition: (answers) => answers[0] === 3 && answers[3] === 0,
            text: '教養として幅広く学びたい、かつコストは抑えたいというご希望にSchooはぴったりです。月額980円で8,000本以上の授業が見放題。興味のある分野を自由に探索でき、学び続ける習慣が自然と身につきます。',
        },
        {
            condition: (answers) => answers[6] === 2,
            text: '続けやすさとコスパを重視するなら、Schooが最適解です。ライブ授業なら無料で参加でき、まずはお金をかけずに学習習慣を作れます。気に入ったら月額制にアップグレードすれば、録画授業も見放題になります。',
        },
        {
            condition: () => true,
            text: 'まずは幅広く学んでみたい方に、Schooはおすすめの入口です。ビジネス・IT・デザイン・教養まで網羅されており、自分の「好き」や「強み」が見つかる場所として最適です。',
        },
    ],
    'dmm-webcamp': [
        {
            condition: (answers) => answers[0] === 0 && answers[5] === 3,
            text: '未経験から本気でエンジニア転職を目指すなら、DMM WEBCAMPは最強の選択肢です。転職成功率98%の実績に加え、経済産業省認定の給付金で最大70%の費用が戻ってきます。チーム開発カリキュラムで、入社後すぐに活躍できる実践力が身につきます。',
        },
        {
            condition: (answers) => answers[3] === 3,
            text: '給付金を活用してスキルアップしたいなら、DMM WEBCAMPの経済産業省認定コースがおすすめ。最大70%の給付金で、実質的な費用を大幅に抑えながら、転職保証付きで安心して学べます。',
        },
        {
            condition: () => true,
            text: 'エンジニアへの転職を本気で考えている方に、DMM WEBCAMPは最も確実な選択肢です。専属キャリアアドバイザーの転職支援と、実務レベルのカリキュラムで、未経験からでもITエンジニアへのキャリアチェンジを実現できます。',
        },
    ],
};

function selectReason(serviceId: string, answers: number[], fallbackReason: string): string {
    const reasons = conditionalReasons[serviceId];
    if (reasons) {
        for (const r of reasons) {
            if (r.condition(answers)) return r.text;
        }
    }
    return fallbackReason;
}

export function calculateResults(answers: number[]): DiagnosisResult[] {
    const scoreMap: Record<string, number> = {};
    services.forEach((s) => {
        scoreMap[s.id] = 0;
    });
    answers.forEach((optionIndex, questionIndex) => {
        const question = questions[questionIndex];
        if (question && question.options[optionIndex]) {
            Object.entries(question.options[optionIndex].scores).forEach(([serviceId, score]) => {
                if (scoreMap[serviceId] !== undefined) {
                    scoreMap[serviceId] += score;
                }
            });
        }
    });
    const results: DiagnosisResult[] = services
        .map((service) => ({
            service,
            score: scoreMap[service.id] || 0,
            matchRate: 0,
            reason: selectReason(service.id, answers, service.tagline),
        }))
        .sort((a, b) => b.score - a.score);
    const top3 = results.slice(0, 3);
    const topScore = top3[0]?.score || 1;
    return top3.map((r, i) => {
        const scoreRatio = topScore > 0 ? r.score / topScore : 0.5;
        let displayRate: number;
        if (i === 0) displayRate = 73 + Math.round(scoreRatio * 12);
        else if (i === 1) displayRate = 67 + Math.round(scoreRatio * 11);
        else displayRate = 60 + Math.round(scoreRatio * 12);
        return { ...r, matchRate: displayRate };
    });
}
