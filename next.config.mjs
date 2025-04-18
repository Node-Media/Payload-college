import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  images: {
    domains: ['www.kjei.edu.in', 'images.unsplash.com', 'img.youtube.com'],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
