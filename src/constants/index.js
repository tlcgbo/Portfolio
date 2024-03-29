import {
    bmi,
    weather,
} from "../assets"
 
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


const projects = [
    {
        name: "Igbagbo's Weather App",
        description:
            "Igbagbo's Weather App is an apllication that is designed to get the weather of anywhere in the world.",
        tags: [
            {
                name: "reactJS",
                color: "blue-text-gradient",
            },
            {
                name: "netlify",
                color: "blue-text-gradient",
            },
        ],
        image: weather,
        source_code_link: "https://github.com/tlcgbo/WeatherApp",
        live_preview_link: "https://igbagbosweatherapp.netlify.app/"
    },
    {
        name: "BMI Calculator",
        description: "BMI Calculator is an application designed to calculate your BMI (Body Mass Index).",
        tags: [
            {
                name: "html",
                color: "red-text-gradient",
            },
            {
                name: "css",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "yellow-text-gradient",
            },
            {
                name: "Github",
                color: "black-text-gradient",
            },
        ],
        image: bmi,
        source_code_link: "https://github.com/tlcgbo/BMI_Calculator",
        live_preview_link: "https://tlcgbo.github.io/BMI_Calculator/"
    }
]


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
    tech,
    projects
}
