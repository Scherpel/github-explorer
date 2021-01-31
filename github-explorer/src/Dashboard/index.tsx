import React from 'react';
import { Title, Form} from './styles'
import logoImg from '../assets/logo.svg'

const Dashboard: React.FC = () => {
    return (
    <>
        <img src={logoImg} alt="GitExplorer logo"/>
        <Title>Explore repositórios no Github</Title>
        <Form>
            <input placeholder="Digite aqui o nome do repositório"/>
            <button type="submit">Pesquisar</button>
        </Form>
    </>
    );
}

export default Dashboard;