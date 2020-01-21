import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
    color: white;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 192px;
    margin: 0 10px 50px;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }

    @media (max-width: 1200px) {
        width: 150px;
    }

    @media (max-width: 800px) {
        width: 100px;
    }

    @media (max-width: 500px) {
        width: 80px;
    }
`;

const Icon = styled.img`
    margin-bottom: 10px;
`;
  
const Name = styled.h3`
    text-transform: uppercase;

    @media (max-width: 800px) {
        font-size: 1rem;
    }

    @media (max-width: 500px) {
        font-size: 0.8rem;
    }
`

const MinionCard = props => {
    const history = useHistory();

    return (        
        <Card onClick={() => history.push(`/${props.minion.ID}`)}>
            <Icon src={`https://xivapi.com${props.minion.Icon}`} alt={props.minion.Name} />
            <Name>{props.minion.Name}</Name>
        </Card>        
    );
};

export default MinionCard;