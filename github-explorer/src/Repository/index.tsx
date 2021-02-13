import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
interface RepositoryParams {
    repository: string
}
const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();
    return (
        <>
            <Header>
                <img src={logoImg} alt="GitExplorer logo"/>
                <Link to="/dashboard">
                    <FiChevronLeft size={16}/>
                    Voltar
                </Link>
            </Header>
            <RepositoryInfo>
            <header>
                <img src="https://images.squarespace-cdn.com/content/v1/581e5b6a8419c273288db3e9/1580665601861-JTSHMI6IL3ST58TXK32M/ke17ZwdGBToddI8pDm48kB1kU8bvufUeAQ60mW6QYz9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyQZC19E8KpwFMajRZknZid4dP1m1zDBXggZaxgAOUvy6nnmrtb1V1wH7EOH7U5amk/Hasham.jpg" />
                <div>
                    <strong>Scherpel/github-explorer</strong>
                    <p>Descrição do repositório</p>
                </div>
            </header>
            <ul>
                <li>
                    <strong>1808</strong>
                    <span>Stars</span>
                </li>
                <li>
                    <strong>48</strong>
                    <span>Forks</span>
                </li>
                <li>
                    <strong>67</strong>
                    <span>Issues abertas</span>
                </li>
            </ul>
            </RepositoryInfo>
            <Issues>
                <Link to="aa"> 
                    <div>
                        <strong>skdlsdk</strong>
                        <p>aaa</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );

};

export default Repository;