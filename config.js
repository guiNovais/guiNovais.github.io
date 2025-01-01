
const config = {

    "help": [
        {
            "title": "help",
            "description": "for a list of commands(add flags '-d' for commands description)",
            "info": ["help or ls command gives the list of commands","add '-d' flag for description of all commands also","write command after help to get info about that specific command like 'help typing'"]
        },
        {
            "title": "clear",
            "description": "to clear the terminal",
            "info": ["clear or cls command clears the terminal"]
        },
        {
            "title": "about",
            "description": "to learn more about me",
            "info": ["use about command to learn more about me"]
        },
        {
            "title": "social",
            "description": "to see my social links (add flags '-l' for links and '-d' for detailed results)",
            "info": ["use social command to see my social links","add '-l' flag for links and '-d' flag for detailed results"]
        },
        {
            "title": "projects",
            "description": "to see my projects",
            "info": ["use projects command to see my projects"]
        },
        {
            "title": "contact",
            "description": "to enquire about my services",
            "info": ["use enquire command to enquire about my services"]
        },
        {
            "title": "cheer",
            "description": "to appreciate my work",
            "info": ["use cheer command to appreciate my work"]
        },
        {
            "title": "repos",
            "description": "to see my github repositories",
            "info": ["use repos command to see my github repositories"]
        },
        {
            "title": "ipconfig",
            "description": "to see your IP details",
            "info": ["use ipconfig command to see your IP details"]
        },
        {
            "title": "github",
            "description": "to see my github stats",
            "info": ["use github command to see my github stats"]
        },
        {
            "title": "download",
            "description": "to download my pdf resume",
            "info": ["use download command to download my pdf resume"]
        },
        {
            "title": "calc",
            "description": "to evaluate an expression, for eg: (2 + 3)",
            "info": ["use calc command to evaluate an expression","for eg: write 'calc 2+6*5/3'"]
        },
        {
            "title": "experience",
            "description": "to see my work experience",
            "info": ["use experience command to see my work experience"]
        },
        {
            "title": "history",
            "description": "shows the last 10 valid commands performed, use --clear flag to clear the history",
            "info": ["use history command to show your last 10 commands history","use --clear flag to clear the history","use history {id} command to run command of that id in your history"]
        },
        {
            "title": "skills",
            "description": "to see my skills",
            "info": ["use skills command to see my skills"]
        },
        {
            "title": "typing",
            "description": "shows typing animation status",
            "info": ["use typing command to see typing animation status","Turn typing animation on and off by adding -on or -off flags respectively","Also u can write a number(in ms) to set typing custom animation speed"]
        },
        {
            "title": "reset",
            "description": "to reload site",
            "info": ["use reset command to to reload site"]
        }
    ],
    "terminal": {
        "user": "$Guilherme_Novais",
        "host": "sudo",
        "path": "~/guest"
    },
    "cheer": {
        "responseArray": [
            "Thanks so much for considering my portfolio! 📚 I'm grateful for your interest",
            "Appreciate your time in reviewing my portfolio - thank you again! 😊",
            "Thanks for looking at my portfolio - I hope it showcases my work well! 🎨",
            "Wishing you all the best with your career search! 🌟 Thank you for considering my portfolio as part of it",
            "Thank you for taking a look at my portfolio - I'm thrilled that you're interested! 😊",
        ]
    },
    "about": "Experienced professional developing and supporting systems, currently allocated at Santander Brazil. Worked on chatbot projects and digital solutions for companies such as Localiza, BDMG, MRV and Anglo American. Have large knowledge on technologies such as Java, C# .NET Core, SQL/NoSQL databases and cloud platforms (AWS, Azure, IBM Cloud). Certified as AWS Certified Cloud Practitioner, Oracle Certified Associate, Java SE 8 Programmer and IBM Certified Application Developer - Watson V3.",
    "social": [
        {
            "title": "Github",
            "link": "https://github.com/guiNovais"
        },
        {
            "title": "LinkedIn",
            "link": "https://www.linkedin.com/in/guilhermenovaisdev",
        },
        {
            "title": "Instagram",
            "link:": "https://www.instagram.com/guilhermenovais.sh/"
        }
    ],
    "projects": [
        {
            "title": "RadarPet",
            "link": "https://github.com/guiNovais/radarpet-api",
            "description": "A project to assist people who have lost their pets to meet them up through a free digital platform<br/><br/>🚧 It is currently a work in progress 🚧"
        },
    ],
    "contact": {
        "email": "guilhermenovais.sh@gmail.com"
    },
    "experience": [
        {
            "title": "Systems Development Analyst | Framework Digital",
            "description": "Responsible for the development and support of systems, allocated at Santander Brazil. Also responsible for the maintenance and development of Chatbot oriented to Localiza customers."
        },
        {
            "title": "Systems Analyst | Montreal M.I",
            "description": "Allocated at Banco de Desenvolvimento de Minas Gerais (BDMG), implemented new features on the company’s backend, mobile application and user service portal."
        },
        {
            "title": "Software Developer | HOP",
            "description": "Developed chatbots and all the assets needed for its operation, both by text and audio messages, for customers such as Anglo American, Stihl and Tigre."
        },
        {
            "title": "Systems Analyst | DTI",
            "description": "Allocated at MRV Engenharia, acted on the development of new features and new communication channels of the company's chatbot such as Facebook Messenger and WhatsApp. He was also responsible for remodeling the value calculation systems of real estate assets."
        },
    ],
    "skills": [
        {
            "title": "Programming",
            "description": "Java 8, 11 and 17, Spring Boot, Spring Batch, JavaEE, JPA, Lombok, C# .NET Core, Entity Framework, Dapper, MediatR, REST, SOAP, SOLID, TDD, Python, Jupyter Notebook, Angular, ReactNative, Node, SonarQube, Git"
        },
        {
            "title": "Databases",
            "description": "SQL Server, Oracle, PostgreSQL, MongoDB, SQLite"
        },
        {
            "title": "Cloud Platforms",
            "description": "AWS, Azure, IBM Cloud"
        },
        {
            "title": "Artificial Intelligence",
            "description": "IBM Watson, Watson Assistant, Watson Discovery, Blip, STT, TTS"
        },
        {
            "title": "Other skills",
            "description": "Linux, BMC Control-M, Dynatrace, Citrix, CloudBees, OpenShift"
        },
    ],
    "neofetch": {
        "name": "Guilherme Novais",
        "title": "Software Developer",
        "skills": "Backend, Artificial Intelligence, Cloud Computing",
        "shell": "zsh",
        "languages": "Java, C#, Python, JavaScript, SQL"
    },
}
export default config
