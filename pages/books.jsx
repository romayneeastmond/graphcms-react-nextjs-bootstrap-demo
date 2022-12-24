import { getBooksByList, getPage } from '../src/services/contentService'
import Link from 'next/link'
import Page from '../src/components/UI/Page'
import styles from '../styles/Book.module.scss'

export const getStaticProps = async () => {
    const data = (await getPage('books')) || null
    const dataBooks = (await getBooksByList()) || []

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            page: data,
            books: dataBooks
        },
        revalidate: 60
    }
}

const Books = ({ page, books }) => {
    return (
        <Page title={page.title}>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col'>
                        <h1 className='mb-5'>{page.title}</h1>

                        <div dangerouslySetInnerHTML={{ __html: page.content.html }} />
                    </div>
                </div>
            </div>

            {
                books &&
                <div className='container'>
                    {
                        books.map((book) => (
                            <div key={book.id}>
                                <Link href={`/${book.slug}`}>
                                    {book.title}
                                </Link>
                            </div>
                        ))
                    }
                </div>
            }
        </Page>
    )
}

export default Books
