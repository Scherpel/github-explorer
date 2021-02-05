import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Title, Form, Repositories, Error } from './styles'
import { FiChevronRight } from 'react-icons/fi'
import logoImg from '../assets/logo.svg'
import api from '../services/api'

const Dashboard: React.FC = () => {

    interface Repository {
        full_name: string,
        description: string,
        owner: {
            login: string,
            avatar_url: string,
        }
        
    }

    const [newRepo, setNewRepo] = useState('');
    const [inputErro, setInputErro] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>( () => {
        const storedRepositories = localStorage.getItem('@GithubExplorer:repositories');

        if(storedRepositories) {
            return JSON.parse(storedRepositories);
        } else {
            return [];
        }


    } );

    useEffect(() => {
        localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories))
    }, [repositories])
    
    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        if(!newRepo) {
            setInputErro('Por favor digite no campo o valor do autor/repositório.');
            return;
        }
        try {    
            const response = await api.get<Repository>(`repos/${newRepo}`);
            const repository = response.data;
            setRepositories([...repositories, repository]);
            setNewRepo('');
            setInputErro('');
        } catch(err) {
            setInputErro('Nenhum repositório encontrado.');
        }
    }


    return (
    <>
        <img src={logoImg} alt="GitExplorer logo"/>
        <Title>Explore repositórios no Github</Title>
        <Form hasError={!!inputErro} onSubmit={handleAddRepository}>
            <input
                value={newRepo}
                onChange={(e) => setNewRepo(e.target.value)}
                placeholder="Digite aqui o nome do repositório"
            />
            <button type="submit">Pesquisar</button>
        </Form>
        {inputErro && <Error>{inputErro}</Error>}
        <Repositories>
            {
                repositories.map( repository => (
                    <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}> 
                            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                        <div>
                            <strong>
                                {repository.full_name}
                            </strong>
                            <p>
                                {repository.description}
                            </p>
                        </div>
                        <FiChevronRight size={20} />
                    </Link>
                ))
            }
        </Repositories>
    </>
    );
}

export default Dashboard;