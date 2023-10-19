/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    swcPlugins: ["next-superjson-plugin","@supabase/auth-helpers-nextjs", {}],
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
    ],
  },
  header:()=>{
    return[{
        source:'/',
        headers:[
            {
                key:'name',
                value:'ashok'
            }
        ]
    }]
  }
};

module.exports = nextConfig;
