const {withAliases} = require('./withAliases');

/** @type {import('next').NextConfig} */
const nextConfig = withAliases({reactStrictMode: true});

module.exports = nextConfig;