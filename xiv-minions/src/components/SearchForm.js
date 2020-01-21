import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Form as ReactForm, FormGroup, Input } from 'reactstrap';

import { setSearchTerm } from '../store/actions';

const Form = styled(ReactForm)`
    margin-bottom: 50px;
`;

const SearchForm = props => {
    const handleChange = e => {
        e.preventDefault();
        props.setSearchTerm(e.target.value);
    };

    return (
        <Form>
            <FormGroup>
                <Input
                    type='text'
                    placeholder='Filter by name'
                    value={props.searchTerm}
                    onChange={handleChange}
                />
            </FormGroup>
        </Form>
    );
};

const mapStateToProps = state => {
    return {
        minions: state.minions,
        searchTerm: state.searchTerm
    }
};

export default connect(mapStateToProps, { setSearchTerm })(SearchForm);