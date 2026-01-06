export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    category: 'Analysis' | 'Company News' | 'Guides' | 'Case Study' | 'Vision' | 'Market';
    date: string;
    image: string;
    content?: string; // For the full post page
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        category: 'Analysis',
        date: 'January 15, 2025',
        title: 'Why Stablecoins Are Becoming Core Treasury Infrastructure',
        excerpt: 'Liquidity trapped in settlement cycles is wasted capital. We explore the economic impact of moving to instant finality in B2B transactions.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4MkA0PXRn_5XOR__pa9qk0pFzsYy3_NN-8OJpsaYPmElry6GsiXKXFnEwf9ZZAetkNGYurTCKeKXP-BTe5PNANBO_EhL6EGUkhj4hbuCSJOWW51cd466pYWuJnGj_Lu3XdBr3lF0S2Ru5AyQ3-dtW1wVckYBjFPxSFxtkhHumS2VDkaXutkV6whlCrTicNIyRv_D17mVWLTf0QrAxxMnNJVYiiz72HSBpxYg1Pdsi_jnaRtN02Cc9R1STjq1N_tY5Y5Dk4h6adC6_',
    },
    {
        id: 2,
        category: 'Company News',
        date: 'January 10, 2025',
        title: 'Launching Multi-Sig Wallets for Enterprise Teams',
        excerpt: 'Security is paramount. Our new multi-signature wallet infrastructure allows for customizable approval workflows, ensuring no single point of failure.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJsK7chXwvB5_cWkn-5fcK6ErEEILP5dekTFYV9Q3Vh1FPB5i8X3-UJdzRa2INhWbOUBc7PV8rtOAB_rDgNXQkcykWUvOioneVJL8Ele52caH8zdmsdPBtMR8hN-DIxKEcHctd5erJAffapUUgRm_kAU0jsGU2ZFC7Tn_cpZcHtsTHY3UuBj98NmXuRPGpaZ2Pc0hHr3ZWv70JwJ6thE4BTDx-0XnrbCj72eUBS_HE2Kcdq8z0-P3MjK7otxhL6vPM2fcNN70nK1Ut',
    },
    {
        id: 3,
        category: 'Analysis',
        date: 'January 05, 2025',
        title: 'The State of Stablecoin Regulation in the EU',
        excerpt: 'With MiCA implementation fully active, we break down what B2B platforms need to know to remain compliant while leveraging crypto rails.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbt0tgk7RFHKdxx0QVJtuqbu3s8S10Mq-FfEeKkpTnHu8MQ474a7zsGpssGeAtxnDDGqHAogjINg6mDLdB7TkeVtjzHD-IavpHtb4nP6Nc3n5wRJ0aCgVsMX684i6JjvqnZ4vuj9bges2cc7tUQX51OGJk_3srMjULXLbBBHVpfzazqV2BoGUv5vpoSPCjSwWpuUDT2wTXvif7d0x8xBPhvB3JDnCc8ECFuELmADwiXhxmMkzoGuegyPr67KrKkZFGWd9LM1q-zkho',
    },
    {
        id: 4,
        category: 'Guides',
        date: 'December 28, 2024',
        title: 'Optimizing Gas Fees for High-Volume Payouts',
        excerpt: "A technical deep dive into how Afblock's batching engine reduces on-chain costs by up to 40% for our enterprise partners.",
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzB8ayTvnrMkyhN1XcfbwrdjT1mbB5QJcuXLW1Xz_DbffwyDlGu6mfKlFhffnEs-GDQCC3vbsmFOJOO2mhHaccfbvvEsw8FjiL1c7NszuD3lpo1fNcqaM6c0-MuxJ2Hsow1FuxunhBhRLYiMU0oodonBeS3Ic4IdSLnAIV2jdZgJr34dA61ga_tV9LZ8uKjWAIZOf-VQg920xr07-B0KVEg22NBjGsVxInkFE36a9U79BuruS38Fa1kd_6vBFloSOhw1sMqFE98dt1',
    },
    {
        id: 5,
        category: 'Case Study',
        date: 'December 15, 2024',
        title: 'Case Study: Accelerating Cross-Border Settlements',
        excerpt: "How a logistics giant reduced vendor payment times from 5 days to 5 minutes using Afblock's stablecoin rails.",
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlk7sY1TByij_LjtdqAzZRqTgazwQx0ZbNAfH-jpa18-ghsb0uzS8J6URMu958no-CzTPLIT-kjcNGqrCd0ZUkV4ndKHBEW8_wb539Oc1kC5WuYJTLxNFbDljOA2djfdshdRVO6pUZEXVzpvTES4bEtHkOP8qinUk-pVloXzdyaPDmoThkfzETEriWFEshavcIQR-JTtG6x61Wiz3ZKWV71SC1Dg_vMRvK6uPWMYAL3oBMriaKH17Fd2Z4VA1uVOxOc0Wyq4iIst-E',
    },
    {
        id: 6,
        category: 'Market',
        date: 'December 01, 2024',
        title: 'Treasury Diversification Strategies for 2025',
        excerpt: 'Best practices for modern CFOs looking to incorporate digital assets into their balance sheet strategy while mitigating volatility.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDV8pLafFgg5CZBVmUOIJjBJABqh-lCB32-j7e2J9uJT0Um65Khgt4COfatIVI11KSdK3D0WhbBfezbbw-2iRLY3i1Ku9y_NS6sWD84OLQGbOZtMBAHuul-HKS8jb5EB32VCZqjEc7B-rI4su9exFJDoZpvvEOCfzGohnzz47JxPW1fqFWWL8QHHUFpvScsUuVh_ORpn5Fgxg2mLMnjVIKe5Jrre22aJpTT2CHzBM-iWjykWUJ8M16LN3oU1dXH-or3nsXo6oUMQ9c0',
    },
];
