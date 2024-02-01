import request, { gql } from 'graphql-request'

export const getPostsFromHashnode = async () => {
  const graphqlQuery = gql`
    {
      publication(host: "blog.tahirahmedt.com") {
        isTeam
        title
        posts(first: 4) {
          edges {
            node {
              id
              title
              brief
              url
              views
              publishedAt
              readTimeInMinutes
              tags {
                id
                name
              }
              coverImage {
                url
              }
            }
          }
        }
      }
    }
  `
  const response = await request('https://gql.hashnode.com/', graphqlQuery)
  return response
}
