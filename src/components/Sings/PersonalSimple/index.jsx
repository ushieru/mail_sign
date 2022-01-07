import PersonalSimple from './PersonalSimple'

export const personalSimpleExtras = [
    { name: 'Web', href: (str) => str },
    { name: 'Call', href: (str) => `tel:${str}` },
    { name: 'Github', href: (str) => `https://github.com/${str}/` },
    { name: 'Instagram', href: (str) => `https://www.instagram.com/${str}/` },
    { name: 'Linkedin', href: (str) => `https://www.linkedin.com/in/${str}/` },
    { name: 'Telegram', href: (str) => `https://t.me/${str}/` },
    { name: 'Youtube', href: (str) => `https://www.youtube.com/c/${str}/` },
    // { name: 'Google-Developer', href: (str) => `` },
]

export const personalSimpleRequired = [
    { name: 'Name', value: 'Name Test' },
    { name: 'Company', value: 'Company Test' },
    { name: 'Title', value: 'Title Test' },
]

export default PersonalSimple