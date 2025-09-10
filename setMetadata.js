const fs = require('fs');

const updateDate = new Date().toLocaleDateString('en-GB');
const packageInfo = require('./package.json');

const PACKAGE_NAME = '@scottish-government/designsystem-react';

const metadata = {
    lastUpdated: updateDate,
    package: {
        url: `https://www.npmjs.com/package/${PACKAGE_NAME}`,
        version: packageInfo.devDependencies[PACKAGE_NAME].replace('^', '')
    }
}

fs.writeFileSync('app/metadata.js', `const metadata = ${JSON.stringify(metadata)};export default metadata;`);
