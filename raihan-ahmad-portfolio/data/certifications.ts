export type Certification = {
  id: number;
  title: string;
  category: string;
  overview: string;
  img: string;
  detailsTitle: string;
  details: { label: string; value: string; fullWidth?: boolean }[];
  skillsTitle: string;
  skills: string[];
};

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Digital Marketing Certification – Tutedude',
    category: 'Digital Marketing',
    overview:
      'Successfully completed a comprehensive Digital Marketing course from Tutedude. This certification validates my understanding of modern digital marketing strategies, online brand building, and executing effective digital campaigns to drive engagement and growth.',
    img: '/certifications/01-tutedude.png',
    detailsTitle: 'Certification Details',
    details: [
      { label: 'Issuing Authority', value: 'Tutedude' },
      { label: 'Date of Completion', value: 'June 30, 2026' },
      { label: 'Credential ID', value: 'TD-RAIH-DM-0922', fullWidth: true },
    ],
    skillsTitle: 'Key Skills & Competencies Acquired',
    skills: [
      'Search Engine Optimization (SEO): Understanding how to optimize content to improve organic search rankings and drive website traffic.',
      'Social Media Marketing (SMM): Developing strategies for various social platforms to build brand awareness and engage with target audiences.',
      'Content Marketing: Creating and distributing valuable, relevant content to attract and retain a clearly defined audience.',
      'Digital Advertising: Planning and executing paid ad campaigns (such as PPC) to maximize ROI and reach specific demographics.',
      'Web Analytics: Utilizing analytical tools to track campaign performance, measure user behavior, and make data-driven decisions.',
      'Email Marketing: Designing targeted email campaigns for lead nurturing and customer retention.',
    ],
  },
  {
    id: 2,
    title: 'Digital Marketing Certification – HubSpot Academy',
    category: 'Digital Marketing',
    overview:
      'Achieved a globally recognized certification in Digital Marketing from HubSpot Academy. This credential demonstrates a strong foundation in core digital marketing practices with a specific focus on the inbound methodology, ensuring effective audience engagement and sustainable business growth.',
    img: '/certifications/02-hubspot.png',
    detailsTitle: 'Certification Details',
    details: [
      { label: 'Issuing Authority', value: 'HubSpot Academy' },
      { label: 'Validity Period', value: 'October 23, 2024 – November 22, 2025' },
      { label: 'Certification Code', value: '92b75374379e4765be929d144a0064fd', fullWidth: true },
    ],
    skillsTitle: 'Key Skills & Competencies Acquired',
    skills: [
      'Inbound Marketing Strategy: Applying modern digital marketing practices with an inbound mindset to attract, engage, and delight customers.',
      'SEO & Content Creation: Creating search engine-friendly content and optimizing websites to improve organic visibility.',
      'Social Media Strategy: Developing and executing structured social media plans to build community and brand presence.',
      'Video Marketing: Utilizing video content strategically to capture attention and actively engage target audiences.',
      'Digital Advertising: Amplifying brand messaging and reach through targeted online advertising campaigns.',
      'Analytics & Performance Measurement: Tracking, measuring, and analyzing the results of marketing efforts to optimize future strategies.',
    ],
  },
  {
    id: 3,
    title: 'Digital Marketing Internship & Workshop – SISTec Business School',
    category: 'Internship & Workshop',
    overview:
      'Successfully completed an intensive 10-Day Digital Marketing Workshop and Internship program, collaboratively organized by SISTec Business School and Versatile Digital Marketing. Working under expert guidance, this hands-on internship provided practical exposure to core digital marketing concepts, industry trends, and the execution of effective online strategies.',
    img: '/certifications/03-sistec.png',
    detailsTitle: 'Certification Details',
    details: [
      { label: 'Issuing Authority', value: 'SISTec Business School & Versatile Digital Marketing' },
      { label: 'Mentor', value: 'Mr. Vishal Thakur (Digital Marketing Expert)' },
      { label: 'Program Type', value: '10-Day Workshop & Internship', fullWidth: true },
    ],
    skillsTitle: 'Key Skills & Competencies Acquired',
    skills: [
      'Practical Implementation: Gained hands-on experience in executing digital marketing strategies in a real-world, internship-style environment.',
      'Campaign Strategy: Understanding how to plan, structure, and deploy effective digital marketing campaigns from scratch.',
      'Industry Best Practices: Learned real-world applications, tools, and current trends in the digital landscape directly from an industry expert.',
      'Audience Engagement: Explored techniques for accurately targeting and engaging audiences across various digital channels.',
      'Professional Workflow: Experienced the day-to-day practical workflow and problem-solving required in a professional digital marketing setup.',
    ],
  },
  {
    id: 4,
    title: '30-Days Excel Crash Course – Learn More Pro',
    category: 'Professional Development',
    overview:
      'Successfully completed an intensive 30-Day Excel Crash Course. This certification demonstrates my proficiency in spreadsheet management, data analysis, and complex formatting. Through this rigorous training, I have developed a strong command over Microsoft Excel, which further solidifies my overall knowledge and operational fluency within the broader Microsoft Office ecosystem.',
    img: '/certifications/04-excel.png',
    detailsTitle: 'Certification Details',
    details: [
      { label: 'Issuing Authority', value: 'Skill Course by Learn More Pro (ISO 9001:2015 Certified)' },
      { label: 'Date of Completion', value: 'August 19, 2025' },
      { label: 'Certificate Number', value: 'SQ21T01', fullWidth: true },
    ],
    skillsTitle: 'Key Skills & Competencies Acquired',
    skills: [
      'Microsoft Office Proficiency: Developed a robust understanding of MS Office functionalities, with a specialized focus on advanced spreadsheet operations.',
      'Advanced Excel Functions: Mastery in applying complex formulas, logical functions, and mathematical calculations for efficient data processing.',
      'Data Management & Analysis: Organizing, sorting, and analyzing large datasets to extract meaningful business insights.',
      'Data Visualization: Creating professional charts, graphs, and visual reports to present data clearly and effectively.',
      'Formatting & Structuring: Designing clean, organized, and professional spreadsheet layouts for corporate reporting and day-to-day operations.',
    ],
  },
  {
    id: 5,
    title: 'Professional Membership – Bhopal Management Association (BMA)',
    category: 'Professional Membership',
    overview:
      'Currently an active Student Member of the Bhopal Management Association (BMA), proudly affiliated with the All India Management Association (AIMA), New Delhi. This membership is a strong validation of my capability, professional drive, and aptitude for business management. Being welcomed into such a prestigious management body demonstrates my potential to understand complex business environments and my readiness to engage with industry leaders and management professionals.',
    img: '/certifications/05-bma.png',
    detailsTitle: 'Membership Details',
    details: [
      { label: 'Issuing Authority', value: 'Bhopal Management Association (BMA) & AIMA' },
      { label: 'Institution', value: 'Sagar Institute of Science & Technology, Bhopal' },
      { label: 'Membership Number', value: 'STU 040026533' },
      { label: 'Validity', value: 'Valid up to June 30, 2026', fullWidth: true },
    ],
    skillsTitle: 'Professional Value & Demonstrated Capabilities',
    skills: [
      'Recognized Capability & Potential: Being selected and onboarded by a renowned management association highlights my strong foundational knowledge and inherent capability to excel in corporate and management roles.',
      'Business Management Acumen: Reflects my deep interest and continuous engagement with core business principles, strategic planning, and modern industry practices.',
      'Industry Networking & Leadership: Provides a platform to interact with established professionals, fostering a mindset geared towards leadership, collaboration, and professional growth.',
      'Commitment to Excellence: Showcases a proactive approach to stepping outside the classroom to align with national management standards set by AIMA.',
    ],
  },
  {
    id: 6,
    title: 'Basic Accounting Certification – Great Learning Academy',
    category: 'Accounting',
    overview:
      'Successfully completed a foundational course in Basic Accounting from Great Learning Academy. This certification establishes a strong baseline in financial literacy, which perfectly complements broader knowledge in business management and financial services. It demonstrates a clear understanding of how financial transactions are recorded, analyzed, and utilized to support strategic decision-making and new venture planning.',
    img: '/certifications/06-great-learning.png',
    detailsTitle: 'Certification Details',
    details: [
      { label: 'Issuing Authority', value: 'Great Learning Academy' },
      { label: 'Course Name', value: 'Basic Accounting' },
      { label: 'Date of Completion', value: 'October 2024' },
      {
        label: 'Verification Link',
        value: 'https://www.mygreatlearning.com/certificate/TJLBXHSM',
        fullWidth: true,
      },
    ],
    skillsTitle: 'Key Skills & Competencies Acquired',
    skills: [
      'Core Financial Literacy: Developed a solid understanding of fundamental accounting principles necessary for evaluating business health and financial operations.',
      'Bookkeeping Fundamentals: Gained knowledge of the accounting cycle, including the accurate recording of financial transactions, debits, credits, and ledger management.',
      'Financial Statements: Built familiarity with interpreting basic financial documents, such as balance sheets and income statements, to assess performance.',
      'Business Acumen: Learned to apply basic accounting concepts to support broader business operations, financial planning, and venture management.',
      'Analytical Thinking: Enhanced the ability to look at financial data logically to understand the financial trajectory of an organization.',
    ],
  },
  {
    id: 7,
    title: 'Certificate of Appreciation – Sagar Exuberance 4.0',
    category: 'Leadership & Events',
    overview:
      "Received a Certificate of Appreciation as a core driving force behind Team Model Mania during the Sagar Exuberance 4.0 event. This recognition reflects my strong leadership qualities, ability to collaborate effectively, and commitment to executing high-impact projects. It stands as a testament to my dedication, hard work, and capacity to deliver excellence in a fast-paced, team-oriented environment.",
    img: '/certifications/07-sagar-exuberance.png',
    detailsTitle: 'Event & Award Details',
    details: [
      { label: 'Award Title', value: 'Certificate of Appreciation' },
      { label: 'Awarded To', value: 'Team Model Mania (Representing leadership & core contribution)' },
      { label: 'Event Name', value: 'Sagar Exuberance 4.0' },
      { label: 'Organizing Body', value: 'SISTec, Gandhi Nagar, Bhopal' },
      { label: 'Date', value: 'November 21st – 22nd, 2025', fullWidth: true },
    ],
    skillsTitle: 'Key Leadership & Professional Qualities Highlighted',
    skills: [
      "Team Leadership & Synergy: Successfully guided and collaborated within 'Team Model Mania' to achieve collective goals, demonstrating strong interpersonal and team-building skills.",
      'Impactful Execution: Contributed valuable efforts that made a tangible, lasting impact on the overall success of a major institutional event.',
      'Dedication & Work Ethic: Officially recognized for outstanding dedication and hard work, showcasing a high level of accountability and ownership of responsibilities.',
      'Commitment to Excellence: Maintained high standards of performance while navigating the dynamic challenges and pressures of event management and team coordination.',
    ],
  },
];
