/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  /* config options here */
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  api: { 

    invokeUrl: 'https://4pc6wve37j.execute-api.us-east-1.amazonaws.com/prod' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod, 

  } 
}

module.exports = nextConfig