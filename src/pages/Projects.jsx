import React from 'react'
import IndividualProject from './IndividualProject'

const projects = [
    { 
        title: 'Pizza Restaurant',
        description: 'I wanted to build a project with just html and css, completely ignoring css frameworks, so I came up with the idea of building a Pizza Restaurant website.',
        githubLink: 'https://github.com/BS000BS/html-css-project',
        imgSrc: '/DeliveryPizza.png'
    },
    { 
        title: 'To-Do List',
        description: 'I just wanted to create something with plain javascript, so what better than a to-do list application.',
        githubLink: 'https://github.com/BS000BS/To-Do-List',
        imgSrc: '/To-Do-List.png'
    },
    { 
        title: 'Tic-Tac-Toe',
        description: "When I first delved into web development, I believed that crafting a Tic-Tac-Toe game would be a complex undertaking. However, as I gained more experience in this field, I discovered that creating a Tic-Tac-Toe game was surprisingly straightforward, almost child's play.",
        githubLink: 'https://github.com/BS000BS/Tic-Tac-Toe',
        imgSrc: '/Tic-Tac-Toe.png'
    },
    { 
        title: 'E-Commerce',
        description: 'I decided to play around with my web development skills by conceptualizing and building an e-commerce application.',
        githubLink: 'https://github.com/BS000BS/e-commerce',
        imgSrc: '/e-commerce.png'
    },
    { 
        title: 'Expense Tracker',
        description: 'I decided to explore MERN stack development a little bit, and after learning some basic stuff, I took on the challenge of building an Expense Tracker app.',
        githubLink: 'https://github.com/BS000BS/Expense-Tracker',
        imgSrc: '/Expense-Tracker.png'
    }
]

function Projects() {
    return (
        <>
            <div className='pt-5 pb-4 text-center'>
                <h3>My projects</h3>
            </div>
            <div>
                {projects.map(p => (
                    <IndividualProject title={p.title} description={p.description} githubLink={p.githubLink} imgSrc={p.imgSrc} />
                ))}
            </div>
        </>
    )
}

export default Projects