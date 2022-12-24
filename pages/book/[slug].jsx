import { useRouter } from 'next/router'
import Page from '../../src/components/UI/Page'
import styles from '../../styles/Book.module.scss'
import { getBook, getBooksUrls } from '../../src/services/contentService'

export const getStaticPaths = async () => {
    const data = (await getBooksUrls()) || []

    const paths = data.map((book) => {
        return {
            params: {
                slug: decodeURI(book.url).replace('book/', '')
            }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const book = (await getBook(`book/${params.slug}`)) || null

    if (!book) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            book
        },
        revalidate: 60
    }
}

const Content = ({ book }) => {
    const router = useRouter()

    return (
        <Page title={!router.isFallback ? book.title : ''}>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col'>
                        {
                            !router.isFallback &&
                            <>
                                <h1 className='mb-5'>{book.title}</h1>

                                <div dangerouslySetInnerHTML={{ __html: book.description.html }} />

                                <p className='small'>
                                    Created on {book.createdAt}
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