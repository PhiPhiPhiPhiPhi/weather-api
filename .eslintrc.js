const {withAliasesEslint} = require('./withAliases');

module.exports = {
    extends: [
        '@nfq'
    ],
    root: true,
    settings: {'import/resolver': withAliasesEslint()}
};