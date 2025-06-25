const fs = require('fs');

const updateDate = new Date().toLocaleDateString('en-GB');

fs.writeFileSync('src/app/lastUpdated.js', `export default '${updateDate}';`);
