import {
    chatgpt,
    CSS,
    discord,
    firebase,
    Github,
    html,
    javascript,
    netlify,
    reactjs,
    spotify,
    tailwind,
    vscode

} from '../assets/tech'

const tech = {
    dev: [
        {
            logo: CSS,
            name: 'CSS3',
            description: 'CSS'  
        },
        {
            logo: firebase,
            name: 'Firebase',
            description: 'Database',
        },
        {
            logo: html,
            name: 'HTML5',
            description: 'Web Framework',
        },
        {
            logo: javascript,
            name: 'JavaScript',
            description: 'Web Framework',
        },
        {
            logo: netlify,
            name: 'Netlify',
            description: 'Deployment',
        },
        {
            logo: reactjs,
            name: 'ReactJS',
            description: 'Web Framework',
        },
        {
            logo: tailwind,
            name: 'TailwindCSS',
            description: 'CSS',
        },
        {
            logo: vscode,
            name: 'VSCode',
            description: 'Editor',
         },
    ],

    app: [
        {
            logo: chatgpt,
            name: 'ChatGPT',
            description: 'Productivity',
         },
         {
            logo: discord,
            name: 'Discord',
            description: 'Communication',
        },
        {
            logo: Github,
            name: 'Github',
            description: 'Version Control',
        },
        {
            logo: spotify,
            name: 'Spotify',
            description: 'Music',
        }
    ]
}

export {
    tech
}