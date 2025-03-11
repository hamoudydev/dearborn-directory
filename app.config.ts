export default defineAppConfig({
  general: {
    title: 'Souk Dearborn',
    logo: '',
    iconLogo: 'fluent-emoji-flat:round-pushpin',
    language: 'en',
  },
  site: {
    // override the general settings for seo tags.
    // leave empty for general priority.
    // url is necessary for correct function of seo module.
    name: 'Souk Dearborn',
    description: 'A Directory for the Dearborn community.',
    url: 'https://soukdearborn.com',
    favicon: {
      image: '',
      emoji: '📍',
    },
  },
  directory: {
    listingPageLayout: 'card',
    search: {
      placeholder: 'Search {0} businesses',
      icon: 'tabler:bow',
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
          'Submit a business to be added to Souk Dearborn, free!',
        hideable: true,
      },
    },
    featured: {
      showOnAllPages: true,
      showOnSide: true,
      icon: 'tabler:star',
      labelForCard: 'Featured ✨',
    },
    tags: [
      { name: 'consulting', color: 'blue' },
      { name: 'websites', color: 'green' },
      { name: 'IT', color: 'green' },
      { name: 'mortgage', color: 'green' },
      { name: 'real estate', color: 'green' },
      { name: 'clothing', color: 'green' },
      { name: 'shoes', color: 'green' },
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
      link: 'https://soukdearborn.com/advertise',
      brandText: 'SoukDearborn',
    },
    navbar: {
      colorModeSelector: true,
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
      text: 'Submit a listing',
      href: '/submit',
    },
  },
  footer: {
    description: "Best directory for my business.",
    navigation: [
      {
        title: "Directory", links: [{ title: "Submit", link: "/submit" }, { title: "Advertise", link: "/advertise" }],
      },
      {
        title: "Categories", links: [
          { title: "consulting", link: "/tags/consulting" },
          { title: "websites", link: "/tags/websites" },
          { title: "mortgage", link: "/tags/mortgage" },
          { title: "real estate", link: "/tags/realestate" },
          { title: "clothing", link: "/tags/clothing" },
          { title: "shoes", link: "/tags/shoes" },
        ],
      },
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
        link: '',
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
