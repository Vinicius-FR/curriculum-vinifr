import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,42,255)", "rgb(0,0,0)"];
export let colors2 = ["rgb(0,255,98)", "rgb(117,117,117)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Vinícius",
    lastName: " F. Rodrigues",
    initials: "vfr", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    gradient2: `-webkit-linear-gradient(135deg, ${colors2})`,
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🎵',
            text: 'into music'
        },
        {
            emoji: '🌎',
            text: 'based in Brazil'
        },
        {
            emoji: "💼",
            text: "Junior Dev at DOMVS IT"
        },
        {
            emoji: "📧",
            text: "viniciusfr@usp.br"
        }
    ],
    socials: [
        {
            link: "https://facebook.com/vinicius.ferreirarodrigues.1",
            icon: 'fa fa-facebook'
        },
        {
            link: "https://instagram.com/viniciusf44a",
            icon: 'fa fa-instagram'
        },
        {
            link: "https://github.com/Vinicius-FR",
            icon: "fa fa-github"
        },
        {
            link: "https://www.linkedin.com/in/vin%C3%ADcius-ferreira-rodrigues-b6490b1b2",
            icon: "fa fa-linkedin"
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Vinícius. I'm a Web Developer for DOMVS IT. I study Computational Physics at the University of São Paulo, I love to be creative, and I would certainly go crazy without music in my life. You should hire me!",
    skills:
        {
            proficientWith: ['.NET', 'C#', 'aws', 'javascript', 'SQL', 'git', 'github', 'html5', 'css3', 'python'],
            exposedTo: ['nodejs', 'react', 'bootstrap']
        }
    ,
    hobbies: [
        {
            label: 'music',
            emoji: '🎵'
        },
        {
            label: 'science',
            emoji: '⚛️'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'french',
            emoji: '🗼'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1: Website",
            live: "https://aluraplus-vinicius-fr.vercel.app", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Vinicius-FR/aluraplus", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2: Interactive Table",
            live: "https://vinicius-fr.github.io/P-gina-Interativa/",
            source: "https://github.com/Vinicius-FR/P-gina-Interativa/tree/master",
            image: mock2
        },
        {
            title: "Project 3: e-Commerce",
            live: "https://vinicius-fr.github.io/Lojinha-CEFiSC/",
            source: "https://github.com/Vinicius-FR/Lojinha-CEFiSC",
            image: mock3
        }
    ]
}