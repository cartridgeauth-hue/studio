
import type { BlogPost, Query } from '@/lib/definitions';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const DUMMY_AUTHORS = [
    { id: '1', name: 'Jane Doe', avatar: PlaceHolderImages.find(p => p.id === 'author-1')!, bio: 'An expert in financial regulations and tax law with over 10 years of experience. Jane is passionate about simplifying complex topics for a broader audience, turning labyrinthine legalese into clear, actionable advice. When not writing, she enjoys hiking and exploring historical cities.' },
    { id: '2', name: 'John Smith', avatar: PlaceHolderImages.find(p => p.id === 'author-2')!, bio: 'A seasoned consultant specializing in corporate finance and investment strategies. John brings a wealth of knowledge from his decade in the financial industry, helping businesses navigate market volatility and achieve sustainable growth. He is also an avid chess player and amateur photographer.' },
];

export const DUMMY_POSTS: BlogPost[] = [
    {
        id: '1',
        slug: 'navigating-the-labyrinth-of-gst',
        title: 'Navigating the Labyrinth of GST',
        excerpt: 'A deep dive into the Goods and Services Tax system and how to stay compliant.',
        image: PlaceHolderImages.find(p => p.id === 'blog-1')!,
        author: DUMMY_AUTHORS[0],
        publishedAt: '2024-05-20',
        content: '<p>The Goods and Services Tax (GST) is a cornerstone of India\'s economic reform, creating a unified market by subsuming a plethora of indirect taxes. For businesses, navigating its complexities is not just about compliance but also about leveraging its benefits. This post breaks down the essentials of GST, from understanding its structure (CGST, SGST, IGST) to mastering the input tax credit (ITC) mechanism, ensuring your business stays on the right side of the law while optimizing its tax liabilities.</p><p>Understanding the nuances of GST can seem daunting. This article will guide you through the process, making it easier to manage your finances and stay compliant. We will cover key aspects such as registration, filing returns, and managing invoices. With our expert advice, you can turn GST compliance into a strategic advantage for your business.</p>'
    },
    {
        id: '2',
        slug: 'the-future-of-digital-stamping',
        title: 'The Future of Digital Stamping',
        excerpt: 'Exploring the shift to eStamps and what it means for legal documentation.',
        image: PlaceHolderImages.find(p => p.id === 'blog-2')!,
        author: DUMMY_AUTHORS[0],
        publishedAt: '2024-05-18',
        content: '<p>eStamping is revolutionizing the way legal and financial documents are validated. This digital transformation offers unparalleled convenience, security, and efficiency compared to traditional stamping methods. We explore the legal framework backing eStamps, the process of obtaining them, and the significant impact this shift has on reducing fraud and speeding up transactions for everything from rental agreements to corporate contracts.</p><p>The move to digital stamping is not just a trend; it is a fundamental change in how we handle legal documents. This article delves into the benefits and challenges of this transition, providing a comprehensive overview for businesses and individuals alike. Learn how to adapt to this new era of digital documentation and what it means for the future of legal tech.</p>'
    },
    {
        id: '3',
        slug: 'maximizing-your-epf-returns',
        title: 'Maximizing Your EPF Returns',
        excerpt: 'Strategies and tips to make the most out of your employee provident fund.',
        image: PlaceHolderImages.find(p => p.id === 'blog-3')!,
        author: DUMMY_AUTHORS[0],
        publishedAt: '2024-05-15',
        content: '<p>The Employee Provident Fund (EPF) is more than just a mandatory savings scheme; it\'s a powerful tool for long-term wealth creation. This guide provides actionable strategies to maximize your EPF returns, including understanding the power of compounding, making voluntary contributions (VPF), and exploring options for partial withdrawal for critical life events. Learn how to make your EPF work harder for your retirement goals.</p><p>From understanding the interest calculations to planning for your future, this article covers everything you need to know about your EPF. We provide practical tips and expert advice to help you make the most of this essential retirement savings vehicle. Whether you are just starting your career or nearing retirement, these strategies will help you secure your financial future.</p>'
    },
    {
        id: '4',
        slug: 'understanding-income-tax-slabs',
        title: 'Understanding Income Tax Slabs for FY 2024-25',
        excerpt: 'A clear breakdown of the new and old tax regimes for the current financial year.',
        image: PlaceHolderImages.find(p => p.id === 'blog-4')!,
        author: DUMMY_AUTHORS[1],
        publishedAt: '2024-05-12',
        content: '<p>The annual choice between the old and new tax regimes can be confusing for many taxpayers. This article provides a clear, comparative breakdown of the income tax slabs for the Financial Year 2024-25. We analyze the pros and cons of each regime, helping you make an informed decision based on your income, investment habits, and eligibility for deductions under Section 80C and others.</p><p>Tax planning is a crucial part of financial management. Our detailed analysis will help you navigate the complexities of the Indian tax system and choose the regime that best suits your financial situation. Make an informed decision this financial year and optimize your tax savings with our comprehensive guide.</p>'
    },
    {
        id: '5',
        slug: 'esic-benefits-a-complete-guide',
        title: 'ESIC Benefits: A Complete Guide for Employees',
        excerpt: 'Learn about all the medical and cash benefits available under the ESIC scheme.',
        image: PlaceHolderImages.find(p => p.id === 'blog-5')!,
        author: DUMMY_AUTHORS[1],
        publishedAt: '2024-05-10',
        content: '<p>The Employees\' State Insurance Corporation (ESIC) scheme offers a comprehensive safety net for employees, covering everything from sickness and maternity to disability and unemployment. This guide details the wide array of medical and cash benefits available to insured persons and their dependents. We explain the eligibility criteria, contribution rates, and the process for claiming benefits, ensuring you can fully leverage this crucial social security scheme.</p><p>This guide is your one-stop resource for all things ESIC. Understand your rights and benefits as an employee and learn how to access the support you are entitled to. From medical care to financial assistance, we cover all aspects of the ESIC scheme to help you and your family stay protected.</p>'
    },
    {
        id: '6',
        slug: 'why-professional-consultation-matters',
        title: 'Why Professional Consultation Matters',
        excerpt: 'The hidden costs of avoiding expert advice in financial and legal matters.',
        image: PlaceHolderImages.find(p => p.id === 'blog-6')!,
        author: DUMMY_AUTHORS[1],
        publishedAt: '2024-05-08',
        content: '<p>In the complex world of finance and law, trying to "do it yourself" can often lead to costly mistakes. This article highlights the importance of seeking professional consultation for matters like tax planning, legal compliance, and investment strategies. We discuss the hidden costs of avoiding expert advice—from missed opportunities to severe penalties—and show how the right guidance can save you time, money, and stress in the long run.</p><p>Investing in professional advice is investing in your future. This article explores the tangible benefits of working with experts and how it can lead to better outcomes in your financial and legal endeavors. Don\'t let avoidable mistakes derail your goals; learn why professional consultation is a smart choice.</p>'
    },
];

export const DUMMY_QUERIES: Query[] = [
  { id: '1', name: 'Amit Sharma', email: 'amit.sharma@example.com', problemType: 'epfo', description: 'I have a query regarding my EPF withdrawal. I have completed all the necessary paperwork but the status is still pending after 3 weeks. Can you please help?', receivedAt: '2024-05-22T10:30:00Z', status: 'new' },
  { id: '2', name: 'Priya Singh', email: 'priya.singh@example.com', problemType: 'gst', description: 'My business is new and I need help understanding how to file GST returns. I am not sure about the deadlines and the forms to use.', receivedAt: '2024-05-22T11:00:00Z', status: 'new' },
  { id: '3', name: 'Rajesh Kumar', email: 'rajesh.kumar@example.com', problemType: 'income-tax', description: 'I received a notice from the income tax department regarding a mismatch in my TDS. I need assistance in filing a response.', receivedAt: '2024-05-21T14:15:00Z', status: 'read' },
  { id: '4', name: 'Sunita Devi', email: 'sunita.devi@example.com', problemType: 'estamps', description: 'I need to get an e-stamp for a rental agreement for my property in Bangalore. What is the procedure and cost?', receivedAt: '2024-05-20T09:00:00Z', status: 'read' },
  { id: '5', name: 'Vikram Rathore', email: 'vikram.rathore@example.com', problemType: 'other', description: 'Do you provide consultation for setting up a new partnership firm? I need guidance on the legal and financial aspects.', receivedAt: '2024-05-19T16:45:00Z', status: 'archived' },
  { id: '6', name: 'Anjali Mehta', email: 'anjali.mehta@example.com', problemType: 'esic', description: 'I met with an accident and I am covered under ESIC. How do I claim the disability benefit? What documents are required?', receivedAt: '2024-05-18T12:00:00Z', status: 'archived' },
];
