export default defineAppConfig({
  general: {
    title: 'Dearborn Directory',
    logo: '',
    iconLogo: 'fluent-emoji-flat:round-pushpin',
    language: 'en',
  },
  site: {
    // override the general settings for seo tags.
    // leave empty for general priority.
    // url is necessary for correct function of seo module.
    name: 'Dearborn Directory',
    description: 'A Directory for the Dearborn community.',
    url: 'https://dearborndirectory.com',
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
        title: 'Submit a template',
        description:
          'Submit a template to show off a good project to other people.',
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
      { name: 'IT', color: 'yellow' },
      { name: 'mortgage', color: 'red' },
      { name: 'real estate', color: 'purple' },
    ],
    tagPages: {
      title: 'Available {0} products:',
      description:
        'View all available tools and templates in the {0} category...',
    },
  },
  header: {
    banner: {
      show: true,
      text: 'Advertise with us!',
      link: 'https://dearborndirectory.com/advertise',
      brandText: 'DearbornDirectory',
    },
    navbar: {
      colorModeSelector: true,
      links: [
        { name: 'Directory', to: '/' },
        { name: 'Blog', to: '/blog' },
        { name: 'Advertise', to: '/advertise' },
        {
          name: 'Analytics',
          to: 'https://us.posthog.com/shared/7dgSk4cvgNYnJwBu6R47kZXHBUBJWQ',
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
    description: "Best directory for my niche.",
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
        ],
      },
      {
        title: "Blog", links: [{ title: "Articles", link: "/blog" }],
      },
      {
        title: "Legal", links: [{ title: "Privacy Policy", link: "/legal/terms-of-service" }, { title: "Terms of Service", link: "/legal/privacy-policy" }],
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
        link: 'https://x.com/mark_bruderer',
        icon: 'tabler:brand-twitter',
      },
      youtube: {
        link: 'https://www.youtube.com/@mark_hacks',
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
