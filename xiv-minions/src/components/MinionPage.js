import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Spinner, Tooltip, Button } from 'reactstrap';

import { getSoloMinion } from '../store/actions';

import { fadeIn} from './styles';

const Page = styled.div`
    max-width: 650px;
    margin: 50px 0 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    animation: ${fadeIn} ease 1s;

    @media (max-width: 500px) {
        margin: 0 0 100px;
    }
`
  
const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    margin-bottom: 25px;
`
  
const Icon = styled.img`
    width: 100px;
    margin-right: 20px;
`
  
const Name = styled.h2`
    text-transform: uppercase;
`
  
const Quote = styled.p`
    font-size: 1rem;
    margin: 20px 0 50px 50px;
`

const MinionPage = props => {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);

    const fetch = props.getSoloMinion;
    const { id } = useParams();

    useEffect(() => {
        fetch(id);
    }, [fetch, id]);

    return (
        <>
            {props.isFetching && <Spinner style={{ width: '3rem', height: '3rem' }} color='light' />}
            {!props.isFetching && props.soloMinion && (
                <Page>
                    <Header>
                        <Icon className='minion-page-icon' src={`https://xivapi.com${props.soloMinion.Icon}`} id='minion-icon' alt={`${props.soloMinion.Name} icon`} />
                        <Tooltip placement='bottom-start' isOpen={tooltipOpen} target='minion-icon' toggle={toggle}>
                            {props.soloMinion.Description}
                        </Tooltip>
                        <Name>{props.soloMinion.Name}</Name>
                    </Header>
                    <div>
                        <p>Behavior: {props.soloMinion.Behavior.Name}</p>
                        <p>{props.soloMinion.DescriptionEnhanced}</p>
                    </div>
                    <Quote>{props.soloMinion.Tooltip}</Quote>
                    <Button onClick={() => props.history.push('/')}>Return</Button>
                </Page>
            )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        soloMinion: state.soloMinion,
        isFetching: state.isFetching,
        error: state.error
    }
};

export default connect(mapStateToProps, { getSoloMinion })(MinionPage);
