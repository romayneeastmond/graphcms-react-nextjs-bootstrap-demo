import { getEpisodesByList, getPage } from '../src/services/contentService'
import Link from 'next/link'
import Page from '../src/components/UI/Page'
import styles from '../styles/Episode.module.scss'

export const getStaticProps = async () => {
    const data = (await getPage('episodes')) || null
    const dataEpisodes = (await getEpisodesByList()) || []

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            page: data,
            episodes: dataEpisodes
        },
        revalidate: 60
    }
}

const Episodes = ({ page, episodes }) => {
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
                episodes &&
                <div className='container'>
                    {
                        episodes.map((episode) => (
                            <div key={episode.id}>
                                <Link href={`/${episode.slug}`}>
                                    {episode.title}
                                </Link>
                            </div>
                        ))
                    }
                </div>
            }
        </Page>
    )
}

export default Episodes
