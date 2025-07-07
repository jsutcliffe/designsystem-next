import React from 'react';
import PropTypes from 'prop-types';
import Details from '@scottish-government/designsystem-react/dist/components/details/details'

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Configuration = function ({
    componentName,
    children,
    ...props
}) {
    return (
        <Details summary={componentName + ' configuration'} {...props}>
            {children}
        </Details>
    );
};
Configuration.propTypes = {
    componentName: PropTypes.string.isRequired,
    children: PropTypes.element
}

export default Configuration;
