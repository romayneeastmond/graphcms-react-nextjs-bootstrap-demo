import { gql, GraphQLClient } from 'graphql-request'

async function getGraphQLClient() {
    const url = process.env.NEXT_GRAPH_CMS_URL

    const graphQLClient = new GraphQLClient(url, {
        headers: {
            'Authorization': process.env.NEXT_GRAPH_CMS_AUTH_TOKEN
        }
    })

    return graphQLClient
}

export async function getBook(slug) {
    try {
        const graphQLClient = await getGraphQLClient()

        const query = gql`
            query Books ($slug: String) {
                book: books(where: { slug: $slug }) {
                    id
                    slug
                    title                
                    description {
                        html
                    }
                    createdAt
                }
            }
        `
        const variables = {
            slug
        }

        const data = await graphQLClient.request(query, variables)

        return data.book[0]
    }
    catch (error) {
        console.log(error)

        return null
    }
}

export async function getBooksByList() {
    try {
        const graphQLClient = await getGraphQLClient()

        const query = gql`
            query Books {
                books {
                    id
                    publishDate
                    slug
                    title
                    shortDescription {
                        html
                    }
                }
            }
        `
        const data = await graphQLClient.request(query)

        return data.books
    }
    catch (error) {
        console.log(error)

        return []
    }
}

export async function getBooksUrls() {
    try {
        const graphQLClient = await getGraphQLClient()

        const query = gql`
            query Books {
                books {
                    url: slug
                }
            }
        `
        const data = await graphQLClient.request(query)

        return data.books
    }
    catch (error) {
        console.log(error)

        return []
    }
}

export async function getEpisode(slug) {
    try {
        const graphQLClient = await getGraphQLClient()

        const query = gql`
            query Episodes ($slug: String) {
                episode: episodes(where: { slug: $slug }) {
                    id
                    slug
                    title
                    videoEmbed                  
                    description {
                        html
                    }
                    createdAt
                }
            }
        `
        const variables = {
            slug
        }

        const data = await graphQLClient.request(query, variables)

        return data.episode[0]
    }
    catch (error) {
        console.log(error)

        return null
    }
}

export async function getEpisodesByList() {
    try {
        const graphQLClient = await getGraphQLClient()

        const query = gql`
            query Episodes {
                episodes {
                    id
                    publishDate
                    slug
                    title
                    videoEmbed
                }
            }
        `
        const data = await graphQLClient.request(query)

        return data.episodes
    }
    catch (error) {
        console.log(error)

        return []
    }
}

export async function getEpisodesUrls() {
    try {
        const graphQLClient = await getGraphQLClient()

        const query = gql`
            query Episodes {
                episodes {
                    url: slug
                }
            }
        `
        const data = await graphQLClient.request(query)

        return data.episodes
    }
    catch (error) {
        console.log(error)

        return []
    }
}

export async function getPage(slug) {
    try {
        const graphQLClient = await getGraphQLClient()

        const query = gql`
            query Pages ($slug: String) {
                page: pages(where: { slug: $slug }) {
                    id
                    slug
                    title
                    summary {
                        html
                    }                    
                    content {
                        html
                    }
                    createdAt
                }
            }
        `
        const variables = {
            slug
        }

        const data = await graphQLClient.request(query, variables)

        return data.page[0]
    }
    catch (error) {
        console.log(error)

        return null
    }
}

export async function getPages() {
    try {
        const graphQLClient = await getGraphQLClient()

        const query = gql`
            query Pages {
                pages {
                    createdAt
                    id
                    metaDescription
                    metaKeywords
                    publishDate
                    publishedAt
                    slug
                    title
                    updatedAt
                    summary {
                        html
                    }                    
                    content {
                        html
                    }
                }
            }
        `
        const data = await graphQLClient.request(query)

        return data.pages
    }
    catch (error) {
        console.log(error)

        return []
    }
}

export async function getPagesByList() {
    try {
        const graphQLClient = await getGraphQLClient()

        const query = gql`
            query Pages {
                pages {
                    id
                    publishDate
                    slug
                    title
                }
            }
        `
        const data = await graphQLClient.request(query)

        return data.pages
    }
    catch (error) {
        console.log(error)

        return []
    }
}

export async function getPagesUrls() {
    try {
        const graphQLClient = await getGraphQLClient()

        const query = gql`
            query Pages {
                pages {
                    url: slug
                }
            }
        `
        const data = await graphQLClient.request(query)

        return data.pages
    }
    catch (error) {
        console.log(error)

        return []
    }
}