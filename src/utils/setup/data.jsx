import bram from '../../assets/img/Bram.jpeg'
import instagram from '../../assets/img/instagram.svg'
import github from '../../assets/img/github.svg'
import linkedin from '../../assets/img/linkedin.svg'
import gofit from '../../assets/img/gofit.png'

export const navlinks = [
];

export const about = {
  "title": "Bram Majaya Perangin-angin",
  "text": "I am a Back End Developer based in Yogyakarta, Indonesia. I like many programing languages",
  "btn1": "Resume",
  "btn2": "Project",
};

export const profile = {
  "title": "Experience",
  "text": "I have experience in building Web Applications and REST API services using ReactJS, VueJS, Laravel, Codeigniter, Spring Boot Java and Golang (Beginner)",
  "img": bram,
  "experience": [
    { "number": "2+", "title": "Years of Experience" },
    { "number": "2", "title": "Real Project" },
  ],
};

export const project = {
  "images": [ 
    {
      "img": gofit, 
      "name": "GOFIT", 
      "links": "https://gofitfitness.netlify.app/",
      "about": "This project is the final project of the course Software Development Project."+
      "In this final project are a web-based and mobile application systems."+
      "The project success rate is around 90%."
    },
  ],
};

export const footer = {
  "titles": [ {"title": "Contact me"},{"title": ""},{"title": "Preferred Language"} ],
  "links": [
    [
      {"link": "brammajaya1@gmail.com"},
      {"link": "Gg. Sri Rahayu No. 55A Tempel"},
      {"link": "Yogyakarta"},
    ],
    [],
    [
      {"link": "Java"},
      {"link": "GO"},
      {"link": "PHP"},
      {"link": "Javascript"},
    ],
  ],
  "sociallinks": [
    {"icon": instagram, "links" : "https://www.instagram.com/bram.m.p/"},
    {"icon": github, "links" : "https://github.com/PURELIGHT1"},
    {"icon": linkedin, "links" : "https://www.linkedin.com/in/bram-majaya-p-a71a36267/"},
  ]
};