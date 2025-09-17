import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

export default withMDX(config);
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
  basePath: process.env.BASE_PATH,
  assetPrefix: process.env.ASSET_PREFIX,
  reactStrictMode: true,
  output: isProd ? 'export' : 'standalone',
  distDir: 'dist',
  images: {
    unoptimized: true,
  }
};
//next.config.js
const isProd = process.env.NODE_ENV === 'production'
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})