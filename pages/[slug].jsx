import { useRouter } from 'next/router'
import Page from '../src/components/UI/Page'
import { getPage, getPagesUrls } from '../src/services/contentService'

export const getStaticPaths = async () => {
    const data = (await getPagesUrls()) || []

    const paths = data.filter((page) => {
        if (page.url && (page.url === 'episodes' || page.url === 'books')) {
            return false
        }

        return true
    }).map((page) => {
        return {
            params: {
                slug: page.url
            }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const page = (await getPage(params.slug)) || null

    if (!page) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            page
        },
        revalidate: 60
    }
}

const Content = ({ page }) => {
    const router = useRouter()

    return (
        <Page title={!router.isFallback ? page.title : ''}>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col'>
                        {
                            !router.isFallback &&
                            <>
                                <h1 className='mb-5'>{page.title}</h1>

                                <div dangerouslySetInnerHTML={{ __html: page.content.html }} />

                                <p className='small'>
                                    Created on {page.createdAt}
                                </p>
                            </>
                        }
                    </div>
                </div>
            </div>
        </Page>
    )
}

export default Content