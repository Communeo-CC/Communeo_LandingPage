import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  instagram_cc,
  facebook_cc,
  tiktok_cc,
  facebook,
  youtube,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "About Us",
    url: "/about",
  },
  {
    id: "2",
    title: "Our Services",
    url: "/services",
  },
  {
    id: "3",
    title: "Contact Us",
    url: "/contact",
  },
  {
    id: "4",
    title: "New Account",
    url: "/signup",
    onlyMobile: true, // This indicates the link should only show on mobile
  },
  {
    id: "5",
    title: "Sign In",
    url: "/login",
    onlyMobile: true, // This indicates the link should only show on mobile
  },
];



export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "AI Matchmaking Tool",
  "Freelancer Ranking System",
  "Project Manager Support",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "What is the communeo platform?",
    description: "Our platform connects Sri Lankan businesses with influencers and freelancers for effective marketing. It utilizes AI and advanced analytics to ensure campaigns resonate with local audiences. This creates a cost-effective solution tailored to your marketing needs.",
    status: "done",
 
    colorful: true,
  },
  {
    id: "1",
    title: "How does AI matching work?",
    description: "AI matching analyzes your business goals and demographics to connect you with suitable creators. This ensures that your marketing efforts are aligned with the right audience. It simplifies the process of finding the perfect influencer or freelancer.",
    status: "progress",
 
  },
  {
    id: "2",
    title: "What are the costs?",
    description: "Our platform offers transparent pricing with no hidden fees. You can negotiate directly with creators to find a deal that fits your budget. This approach empowers both businesses and creators to establish fair agreements.",
    status: "done",
 
  },
  {
    id: "3",
    title: "How to track campaigns?",
    description: "You can monitor your campaigns in real-time through our analytics dashboard. It provides insights into performance and engagement metrics. This allows you to make data-driven decisions and optimize your strategies.",
    status: "progress",
    
  },
  {
    id: "4",
    title: "Support for new influencers?",
    description: "We offer tools and visibility for emerging influencers to help them grow. Our platform supports micro and nano influencers, providing them with opportunities to collaborate. This fosters a diverse and inclusive marketing ecosystem.",
    status: "progress",
   
  }
];


export const collabText =
  "Communeo uses AI to connect businesses with the right influencers and freelancers, ranks talent, and offers tools or marketing managers for campaign management.";

  export const collabText1 =
  " Using AI, Communeo connects Sri Lankan businesses with the right influencers, freelancers, and marketing experts to create targeted and impactful campaigns.";  

    export const collabText2 =
  " Ranks freelancers based on skills, performance, and reviews, making it easy for businesses to find the best talent.";    
  
    export const collabText3 =
  " Businesses can either use our tools to plan, track, and manage campaigns themselves or hire our expert marketing managers, who handle the entire campaign from start to finish, ensuring success";


export const collabContent = [
  {
    id: "0",
    title: "AI Matchmaking",
    text: collabText1,
  },
  {
    id: "1",
    title: "Freelancer Ranking System",
    text: collabText2,
  },
  {
    id: "2",
    title: "Project Management Support",
    text: collabText3,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Youtube",
    icon: youtube,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Instagram",
    icon: instagram_cc,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Facebook",
    icon: facebook_cc,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "TikTok",
    icon: tiktok_cc,
    width: 34,
    height: 35,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Access AI matchmaking and ranking tools",
    price: "0",
    features: [
      "AI matchmaking to find influencers",
      "Freelancer ranking system",
      "Basic platform exploration",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Full marketing suite and priority support",
    price: "9.99",
    features: [
      "Advanced matchmaking and analytics",
      "Campaign management dashboard",
      "Priority support for queries",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
