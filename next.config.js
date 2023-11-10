/** @type {import('next').NextConfig} */

const dotenv = require("dotenv");
dotenv.config();

const nextConfig = {
    env : { 
        DATABASE_URL: "postgres://postgres:Eldopeeldope_1@localhost:5432/red"
      },
      images: { 
        remotePatterns: [
          {
            hostname: "yt3.googleusercontent.com"
          }
        ]
      }
}

module.exports = nextConfig

