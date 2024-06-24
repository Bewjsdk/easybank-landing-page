import { confettiImg, currencyImg, icons, planeImg, restaurantImg } from "../assets/images";

// Navbar section links
export const sectionLinks = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Contact",
    href: "#contact",
  },
  {
    title: "Blog",
    href: "#blog",
  },
  {
    title: "Careers",
    href: "#careers",
  },
  {
    title: "Support",
    href: "#support",
  },
  {
    title: "Privacy Policy",
    href: "#privacy-policy",
  },
];

// About features card
export const featureCards = [
  {
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    icon: icons.online,
  },

  {
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
    icon: icons.bugeting,
  },

  {
    title: "Fast Onboarding",
    description:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
    icon: icons.onboarding,
  },

  {
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    icon: icons.api,
  },
];

// Blog Card
export const blogCards = [
  {
    title: "Receive money in any currency with no fees",
    author: "Claire Robinson",
    description:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
    image: currencyImg
  },

  {
    title: "Treat yourself without worrying about money",
    author: "Wilson Hutton",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...",
    image: restaurantImg
  }, 

  {
    title: "Take your Easybank card wherever you go",
    author: "Wilson HUtton",
    description:
      "We want you to enjoy your travles, This is why we don't change any fees on purchases while you're abroad. We'll even show you ...",
    image: planeImg
  },

  {
    title: "Our invite-only Beta accounts are now live!",
    author: "Claire Robinson",
    description:
      "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...",
    image: confettiImg
  }
];

// Social Icons
export const socialIcons = [
  {
    title: "facebook",
    icon: icons.facebook
  },

  {
    title: "youtube",
    icon: icons.youtube
  },

  {
    title: "twitter",
    icon: icons.twitter
  },

  {
    title: "pinterest",
    icon: icons.pinterest
  },

  {
    title: "instagram",
    icon: icons.instagram
  }
];
