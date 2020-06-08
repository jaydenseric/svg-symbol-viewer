module.exports = {
  env: {
    ORIGIN: process.env.ORIGIN || `https://${process.env.VERCEL_URL}`,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
}
