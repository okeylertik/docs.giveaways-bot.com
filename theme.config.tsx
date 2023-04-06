import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

export default {

  project: {
    link: 'https://giveaways-bot.com',
  },
  chat: {
    link: 'https://discord.gg/giveawaysbot'
  },
  navigation: {
    prev: false,
    next: false
  },
  docsRepositoryBase:
    'https://github.com/giveawaysbot-me/docs.giveaways-bot.com',
  editLink: {
    text: 'Edit this page on GitHub'
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig()
    return <>
      <meta name="msapplication-TileColor" content="#005ef5" />
      <meta name="theme-color" content="#005ef5" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Documentation for the GiveAways Bot"
      />
      <meta
        name="og:description"
        content="Documentation for the GiveAways Bot"
      />
      <meta name="og:title" content="GiveAways | Documentation" />
      <meta name="og:image" content="/GiveAways.png" />
      <meta name="apple-mobile-web-app-title" content="GiveAways Docs" />
      <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.discordapp.com/attachments/1003714890638303232/1068603211075825787/Rounded_20221113_102852.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="https://cdn.discordapp.com/attachments/1003714890638303232/1068603211075825787/Rounded_20221113_102852.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.discordapp.com/attachments/1003714890638303232/1068603211075825787/Rounded_20221113_102852.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="https://cdn.discordapp.com/attachments/1003714890638303232/1068603211075825787/Rounded_20221113_102852.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.discordapp.com/attachments/1003714890638303232/1068603211075825787/Rounded_20221113_102852.png" />      
      <meta name="msapplication-TileImage" content="https://cdn.discordapp.com/attachments/1003714890638303232/1068603211075825787/Rounded_20221113_102852.png" />
      <script src="https://cdn.tailwindcss.com"></script>
    </>
  },
  logo: (
    <>
      <div className="hover:opacity-80 transition duration-200">
      <img
          className="md:inline object-contain hidden rounded-full"	
          style={{ height: '2em' }}
          src="/GiveAways.png"
        />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        GiveAways
      </span>
      <span style={{ marginLeft: '.4em', fontWeight: 800, color: '#005ef5' }}>
        Docs
      </span>
      <span className="ml-2 py-0 px-1 font-mono text-xs no-underline text-blue-200 dark:text-blue-500 w-full bg-black border border-transparent border-blue-200 rounded-md bg-opacity-5 dark:bg-white dark:border-blue-700 dark:bg-opacity-5">
        v1.0.0
      </span>
      </div>
    </>
  ),
  footer: {
    text: <span>
     © 2021 - {new Date().getFullYear()} | <a href="https://giveaways-bot.com/team" target="_blank">GiveAways Productions</a>.
    </span>,
  },
  useNextSeoProps() {
    const { frontMatter } = useConfig()
    return {
      additionalLinkTags: [
        {
          href: '/GiveAways.png',
          rel: 'apple-touch-icon',
          sizes: '180x180'
        },
        {
          href: '/GiveAways.png',
          rel: 'icon',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          href: '/GiveAways.png',
          rel: 'icon',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          href: '/GiveAways.png',
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png'
        },
        {
          href: '/GiveAways.png',
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png'
        }
      ],
      additionalMetaTags: [
        { content: 'en', httpEquiv: 'Content-Language' },
        { content: 'GiveAways Docs', name: 'apple-mobile-web-app-title' },
        { content: '#7289DA', name: 'msapplication-TileColor' },
        { content: '/GiveAways.png', name: 'msapplication-TileImage' }
      ],
      description: 'Documentation for the GiveAways Bot',
      openGraph: {
        images: [
          { url: 'https://cdn.discordapp.com/attachments/1003714890638303232/1068603211075825787/Rounded_20221113_102852.png' }
        ]
      },
      titleTemplate: '%s – GiveAways Docs',
      twitter: {
        cardType: 'summary_large_image',
        site: 'https://docs.giveaways-bot.com',
      }
    }
  },
}