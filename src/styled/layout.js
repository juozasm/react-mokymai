import styled from 'styled-components'
import PropTypes from 'prop-types';

export const Container =  styled.div`
    max-width: ${({ fluid })=> fluid ? '100%' : '800px'};
    margin: 0 auto;
`

Container.propTypes = {
    fluid: PropTypes.bool.isRequired
};