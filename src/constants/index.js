import {
    bmi,
    weather,
    bookshelf,
    igb,
    learn,
    agency,
    blogg,
    birth,
    virtuo,
    taskly,
    shop,
    recipe,
    
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
        name: "KidCoders",
        description: "Kidcoders is like a portofilio website. It was for fun.",
        tags: [
            {
                name: "reactJS",
                color: "blue-text-gradient",
            },
            {
                name: "github",
                color: "blue-text-gradient",
            },
        ],
        image: igb,
        source_code_link: "https://kid-coders.vercel.app/",
        live_preview_link: "https://github.com/tlcgbo/KidCoders"
    },
    {
        name: "Igbabo's Bookshelf",
        description: "Igbagbo's Bookshelf is an apllication that lets you see the books I have read and my reviews and the price of them.",
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
                name: "Github",
                color: "black-text-gradient",
            },
        ],
        image: bookshelf,
        source_code_link: "https://igbagbo-s-bookshelf.vercel.app/index.html",
        live_preview_link: "https://github.com/tlcgbo/Igbagbo-s-Bookshelf"
    },
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
        live_preview_link: "https://github.com/tlcgbo/WeatherApp",
        source_code_link: "https://igbagbosweatherapp.netlify.app/"
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
        live_preview_link: "https://github.com/tlcgbo/BMI_Calculator",
        source_code_link: "https://tlcgbo.github.io/BMI_Calculator/"
    },
    {
        name: "Learn To Code",
        description: "Learn To Code is a subscription based website that sends weekly newspapers on programming and practice questions.",
        tags: [
            {
                name: "reactJS",
                color: "blue-text-gradient",
            },
            {
                name: "Github",
            },
        ],
        image: learn,
        live_preview_link: "https://github.com/tlcgbo/Modern-Website",
        source_code_link: "https://learn-to-code-rho.vercel.app/",
    },
    {
        name: "Tech Agency",
        description: "Tech Agency is a company that actively tries to level up your tech life. It can provide tips and tricks to optimzie your work flow via newsletters. We are also inspired by results and driven by data.",
        tags: [
            {
                name: "reactJS",
                color: "blue-text-gradient",
            },
            {
                name: "Github",
            },
        ],
        image: agency,
        live_preview_link: "https://github.com/tlcgbo/Agency",
        source_code_link: "https://tech-agency12.netlify.app/",
    },
    {
        name: "Blog",
        description: "The Blog app allows you to create a blog in which you can write about anything and everything going on in your life. All you have to do is login with your google account, create a post and submit to the world.",
        tags: [
            {
                name: "reactJS",
                color: "blue-text-gradient",
            },
            {
                name: "Github",
            },
        ],
        image: blogg,
        live_preview_link: "https://github.com/tlcgbo/Blog-App",
        source_code_link: "https://blog-app-nine-woad.vercel.app/",
    },
    {
        name: "Birth Registration",
        description: "Birth Registration is a website that allows you to register your baby and all the characterstics of he or she. It is connected to governments and organisation all around the world.",
        tags: [
            {
                name: "reactJS",
                color: "blue-text-gradient",
            },
            {
                name: "Github",
            },
        ],
        image: birth,
        live_preview_link: "https://github.com/tlcgbo/Birth-Registration",
        source_code_link: "https://birth-registration.vercel.app/",
    },
    {
        name: "Virtuo Learn",
        description: "Virtuo Learn is our first and succesful online school across the globe.",
        tags: [
            {
                name: "reactJS",
                color: "blue-text-gradient",
            },
            {
                name: "Github",
            },
        ],
        image: virtuo,
        live_preview_link: "https://github.com/tlcgbo/virtruo-learn",
        source_code_link: "https://virtruo-learn-three.vercel.app/",
    },
    {
        name: "Taskly",
        description: "Taskly is a task management platform designed to help individuals and teams stay organized and productive. Users can create, track, and prioritize tasks, ensuring they stay on top of their to-do lists. With a simple and user-friendly interface, Taskly makes managing daily tasks efficient and seamless.",
        tags: [
            {
                name: "reactJS",
                color: "blue-text-gradient",
            },
            {
                name: "Github",
            },
        ],
        image: taskly,
        live_preview_link: "https://github.com/tlcgbo/task-manager",
        source_code_link: "https://task-manager-three-puce-86.vercel.app/",
    },
    {
        name: "E-commerce App",
        description: "StyleRush is your ultimate destination for bold, effortless fashion. Whether you're after stylish men’s shoes or cozy women’s jackets, we’ve got curated pieces designed to elevate your look. With a sleek interface, instant Google login, and a smooth, responsive experience across devices, shopping has never been this easy. ",
        tags: [
            {
                name: "reactJS",
                color: "blue-text-gradient",
            },
            {
                name: "Github",
            },
        ],
        image: shop,
        live_preview_link: "https://github.com/tlcgbo/ecommerce-app",
        source_code_link: "https://ecommerce-app-one-theta.vercel.app/",
    },
     {
        name: "Recipe Finder",
        description: "Recipe Finder is a modern web application that helps users quickly discover recipes based on their ingredients or cravings. With a sleek user interface and intuitive search functionality, users can explore a wide variety of meals—from quick snacks to full-course dishes.",
        tags: [
            {
                name: "reactJS",
                color: "blue-text-gradient",
            },
            {
                name: "Github",
            },
        ],
        image: recipe,
        live_preview_link: "https://github.com/tlcgbo/recipe-app",
        source_code_link: "https://recipe-app-psi-navy.vercel.app/",
    },
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

const footlinks = [
    {
     name: 'Links',
     links: [
       {
         name: 'About',
         id: '/about',
       },
       {
         name: 'Projects',
         id: '/#projects',
       },
       {
         name: 'Tech Stack',
         id: '/stack',
       },
       {
         name: 'Contact',
         id: '/contact',
       },
     ]
    },
    {
     name: 'Elsewhere',
     links: [
       {
         name: 'Email',
         
       },
       {
         name: 'LinkedIn',
       },
       {
         name: 'GitHub',
       },
     ]
    }
   
   ]

export {
    tech,
    projects,
    footlinks,
}
