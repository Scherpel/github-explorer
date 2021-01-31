import React from 'react';
import { Title, Form, Repositories } from './styles'
import { FiChevronRight } from 'react-icons/fi'
import logoImg from '../assets/logo.svg'
import profile from '../assets/profile.jpeg'

const Dashboard: React.FC = () => {
    return (
    <>
        <img src={logoImg} alt="GitExplorer logo"/>
        <Title>Explore repositórios no Github</Title>
        <Form>
            <input placeholder="Digite aqui o nome do repositório"/>
            <button type="submit">Pesquisar</button>
        </Form>
        <Repositories>
            <a href="#" > 
                <img src={profile} alt="profile pic" />
                <div>
                    <strong>
                        be-the-hero
                    </strong>
                    <p>
                        bla bla bla bla
                    </p>
                </div>
                <FiChevronRight size={20} />
            </a>

            <a href="#" > 
                <img src={profile} alt="profile pic" />
                <div>
                    <strong>
                        be-the-hero
                    </strong>
                    <p>
                        bla bla bla bla
                    </p>
                </div>
                <FiChevronRight size={20} />
            </a>
        </Repositories>
    </>
    );
}

export default Dashboard;