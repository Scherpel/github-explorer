import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Header } from './styles';
import logoImg from '../assets/logo.svg';


interface RepositoryParams {
    repository: string
}
const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();
    return <Header>
        <img src={logoImg} alt="GitExplorer logo"/>
        Repository: {params.repository}
    </Header>;

};

export default Repository;