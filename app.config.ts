export default defineAppConfig({
  general: {
    title: 'inDearborn',
    logo: '',
    iconLogo: 'fluent-emoji-flat:round-pushpin',
    language: 'en',
  },
  site: {
    // override the general settings for seo tags.
    // leave empty for general priority.
    // url is necessary for correct function of seo module.
    name: 'inDearborn',
    description: 'Find it, inDearborn',
    url: 'https://inDearborn.com',
    favicon: {
      image: '',
      emoji: '📍',
    },
  },
  directory: {
    listingPageLayout: 'card',
    search: {
      placeholder: 'Search {0} businesses',
      icon: 'tabler:search',
      tags: {
        // options: none,select,show-all,
        display: 'select',
        intersection: false,
      },
    },
    grid: {
      list: false,
      emptyState: {
        text: 'Seems that this entry is missing from the archives.',
        // options: button, simple, link
        type: 'button',
        icon: 'tabler:exclamation-mark',
      },
      card: {
        image: true,
        // options: dashed, shadow, outline, bullet
        type: 'shadow',
      },
      submit: {
        show: true,
        first: false,
        title: 'Submit a business',
        description:
          'Submit a business to be added to inDearborn, free!',
        hideable: true,
      },
    },
    featured: {
      showOnAllPages: true,
      showOnSide: true,
      icon: 'tabler:star',
      labelForCard: 'Sponsored ✨',
    },
    tags: [
      { name: 'accountant' },
      { name: 'attorney' },
      { name: 'auto dealer' },
      { name: 'bakery' },
      { name: 'barber' },
      { name: 'beauty' },
      { name: 'behavior therapy' },
      { name: 'car wash' },
      { name: 'clothing' },
      { name: 'coffee' },
      { name: 'consulting' },
      { name: 'day care' },
      { name: 'dumpster rental' },
      { name: 'dentist' },
      { name: 'electrician' },
      { name: 'florist' },
      { name: 'garden' },
      { name: 'grocery' },
      { name: 'handyman' },
      { name: 'health' },
      { name: 'hookah' },
      { name: 'hvac' },
      { name: 'ice cream' },
      { name: 'insurance' },
      { name: 'IT' },
      { name: 'juice' },
      { name: 'marketing' },
      { name: 'mechanic' },
      { name: 'med spa' },
      { name: 'meat market' },
      { name: 'mortgage' },
      { name: 'oil change' },
      { name: 'optometrist' },
      { name: 'party rentals' },
      { name: 'pharmacy' },
      { name: 'plumber' },
      { name: 'real estate' },
      { name: 'restaurant' },
      { name: 'roofing' },
      { name: 'salon' },
      { name: 'shoes' },
      { name: 'smoothie' },
      { name: 'sweets' },
      { name: 'websites' }
    ],
    tagPages: {
      title: 'Available {0} products:',
      description:
        'View all businesses in the {0} category...',
    },
  },
  header: {
    banner: {
      show: true,
      text: 'Advertise with us!',
      link: 'https://inDearborn.com/advertise',
      brandText: 'inDearborn',
    },
    navbar: {
      colorModeSelector: false,
      links: [
        { name: 'Directory', to: '/' },
        { name: 'Blog', to: '/blog' },
        { name: 'Advertise', to: '/advertise' },
        {
          name: 'Analytics',
          to: 'https://us.posthog.com/shared/mjiPyFRqnY_LtGXZEOamOO6rxstKJw',
          target: '_blank',
        },
      ],
    },
    actionButton: {
      text: 'Submit a business',
      href: '/submit',
    },
  },
  footer: {
    description: "Best directory for my business.",
    navigation: [
      {
        title: "Directory", links: [{ title: "Submit", link: "/submit" }, { title: "Advertise", link: "/advertise" }],
      },
    //  {
      //  title: "Categories", links: [
       //   { title: "consulting", link: "/tags/consulting" },
        //  { title: "websites", link: "/tags/websites" },
        //  { title: "mortgage", link: "/tags/mortgage" },
        //  { title: "real estate", link: "/tags/realestate" },
        //  { title: "clothing", link: "/tags/clothing" },
        //  { title: "shoes", link: "/tags/shoes" },
      //  ],
    //  },
      {
        title: "Blog", links: [{ title: "Articles", link: "/blog" }],
      },
      {
        title: "Legal", links: [{ title: "Privacy Policy", link: "/privacy-policy" }, { title: "Terms of Service", link: "/terms-of-service" }],
      },
    ],
    socials: {
      github: {
        link: '',
        icon: 'tabler:brand-github',
      },
      facebook: {
        link: '',
        icon: 'tabler:brand-facebook',
      },
      instagram: {
        link: 'https://instagram.com/indearborn',
        icon: 'tabler:brand-instagram',
      },
      x: {
        link: '',
        icon: 'tabler:brand-twitter',
      },
      youtube: {
        link: '',
        icon: 'tabler:brand-youtube',
      },
    },
  },
  ui: {
    icons: {
      dark: 'tabler:moon',
      light: 'tabler:sun',
    },
  },
});
