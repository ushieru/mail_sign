export const OPTIONS = [
    { name: 'Web', href: (str) => str },
    { name: 'Call', href: (str) => `tel:${str}` },
    { name: 'Github', href: (str) => `https://github.com/${str}/` },
    // { name: 'Google-Developer', href: (str) => `` },
    { name: 'Instagram', href: (str) => `https://www.instagram.com/${str}/` },
    { name: 'Linkedin', href: (str) => `https://www.linkedin.com/in/${str}/` },
    { name: 'Telegram', href: (str) => `https://t.me/${str}/` },
    { name: 'Youtube', href: (str) => `https://www.youtube.com/c/${str}/` },
] 