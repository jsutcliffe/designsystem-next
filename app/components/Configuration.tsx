import React from 'react';

export type ConfigurationProps = {
    componentName: string,
    children: React.ReactNode
}

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Configuration = function ({
    componentName,
    children
}: ConfigurationProps) {
    return (
        <>
            <h2>{componentName + ' configuration'}</h2>
            {children}
        </>
    );
};

export default Configuration;
