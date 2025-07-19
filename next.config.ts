import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    GOOGLE_VISION_API_KEY: process.env.GOOGLE_VISION_API_KEY,
    CLARIFAI_API_KEY: process.env.CLARIFAI_API_KEY,
    USDA_API_KEY: process.env.USDA_API_KEY,
    EDAMAM_API_KEY: process.env.EDAMAM_API_KEY,
    SPOONACULAR_API_KEY: process.env.SPOONACULAR_API_KEY,
    TENSORFLOW_MODEL_URL: process.env.TENSORFLOW_MODEL_URL,
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,
  },
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  serverExternalPackages: ['@tensorflow/tfjs-node'],
}

export default nextConfig
