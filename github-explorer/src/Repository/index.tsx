import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header } from './styles';
import logoImg from '../assets/logo.svg';
import { FiChevronLeft } from 'react-icons/fi'
interface RepositoryParams {
    repository: string
}
const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();
    return <Header>
        <img src={logoImg} alt="GitExplorer logo"/>
        <Link to="/dashboard">
            <FiChevronLeft size={16}/>
            Voltar
        </Link>
        {/* Repository: {params.repository} */}
    </Header>;

};

export default Repository;