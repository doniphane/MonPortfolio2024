import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'; // Assurez-vous d'avoir créé ce fichier pour styliser le composant

const initialProjects = [
    { title: 'Tropizzcartour', description: 'Site fictif location voiture', Language: 'PHP / MYSQL', githubLink: 'https://github.com/doniphane/Tropizcartours', image: `${process.env.PUBLIC_URL}/4.png` },
    { title: 'Cybergardien', description: 'Projet fictif association ',  Language: 'HTML /CSS', githubLink: 'https://github.com/doniphane/Cyber-Gardien-Projet-Assos-Fictif-', image: `${process.env.PUBLIC_URL}/5.png` },
    { title: 'Thermos', description: 'Proje récupération temperature via une api ',  Language: 'HTML /CSS', githubLink: 'https://github.com/doniphane/Thermos', image: `${process.env.PUBLIC_URL}/6.png` }, 
    { title: 'RestCountry', description: 'Récuperation du nombre de drapeaux habitant via une api',  Language: 'HTML /CSS', githubLink: 'https://github.com/doniphane/FLag', image: `${process.env.PUBLIC_URL}/7.png` },
    { title: 'Projet 6', description: 'A venir ', githubLink: 'lien_github_projet_6',  image: `${process.env.PUBLIC_URL}/11.jpg` }, 
];

const Projects = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="projects">
            <h2>Mes Projets</h2>
            <div className="projects-list">
                {initialProjects.slice(0, showMore ? initialProjects.length : 4).map(project => (
                    <div key={project.title} className="project-card">
                        <h3>{project.title}</h3>
                        <img src={project.image} alt={`Image du projet ${project.title}`} />
                        <p>{project.description}</p>
                        <p>{project.Language}</p>
                        <Link to={project.githubLink} target="_blank">
                            <button className="btn-github">Voir sur GitHub</button>
                        </Link>
                    </div>
                ))}
            </div>
            
            <div className="show-more-button">
                <button className='btn-1' onClick={() => setShowMore(!showMore)}>
                    {showMore ? 'Voir moins' : 'Voir plus'}
                </button>
            </div>
        </div>
    );
}
    

export default Projects;
