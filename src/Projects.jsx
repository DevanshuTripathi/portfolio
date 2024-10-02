import { Element } from 'react-scroll';
import { useEffect, useState } from 'react';
import Card from './components/Card.jsx';

// https://api.github.com/users/DevanshuTripathi/repos

function Projects() {

    

    const [repos, addRepo] = useState([]);

    const url = 'https://api.github.com/users/DevanshuTripathi/repos';

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    // Proceed only if data is an array
                    const starredRepos = data.filter(repo => repo.stargazers_count > 0);
                    addRepo(starredRepos);
                } else {
                    console.error("Data is not an array:", data);
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [url]);

    return (
        <Element name='projects'>
            <h1 className="text-4xl font-bold flex justify-center pt-16 pb-4">Projects</h1> 
            <div className="projects flex flex-wrap">
            {repos.map((repo) => (
                <div className="flex-none p-2 w-1/2 ">
                    <Card name={repo.name} url={repo.html_url} desc={repo.description} />
                </div>
            ))}
            </div>
        </Element>
    )
}

export default Projects;