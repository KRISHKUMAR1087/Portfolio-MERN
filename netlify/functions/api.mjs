import { portfolioData } from '../../server/data.js'

const routes = {
  '/api/portfolio': () => portfolioData,
  '/api/personal': () => portfolioData.personal,
  '/api/about': () => portfolioData.about,
  '/api/hobbies': () => portfolioData.hobbies,
  '/api/school': () => portfolioData.school,
  '/api/college': () => portfolioData.college,
  '/api/achievements': () => portfolioData.achievements,
  '/api/certificates': () => portfolioData.certificates,
  '/api/courses': () => portfolioData.courses,
  '/api/team': () => portfolioData.teamMembers,
  '/api/hackathons': () => portfolioData.hackathons,
  '/api/projects': () => portfolioData.projects,
  '/api/social': () => portfolioData.social,
}

export default async (req) => {
  const pathname = new URL(req.url).pathname
  const handler = routes[pathname]

  if (!handler) {
    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  return Response.json(handler())
}

export const config = {
  path: '/api/*',
}
