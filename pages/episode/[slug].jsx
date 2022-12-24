import { useRouter } from 'next/router'
import Page from '../../src/components/UI/Page'
import styles from '../../styles/Episode.module.scss'
import { getEpisode, getEpisodesUrls } from '../../src/services/contentService'

export const getStaticPaths = async () => {
    const data = (await getEpisodesUrls()) || []

    const paths = data.map((episode) => {
        return {
            params: {
                slug: episode.url
            }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const episode = (await getEpisode(`episode/${params.slug}`)) || null

    if (!episode) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            episode
        }
    }
}

const Content = ({ episode }) => {
    const router = useRouter()

    return (
        <Page title={!router.isFallback ? episode.title : ''}>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col'>
                        {
                            !router.isFallback &&
                            <>
                                <h1 className='mb-5'>{episode.title}</h1>

                                <div className={[styles.youtube__embed].join(' ')} dangerouslySetInnerHTML={{ __html: episode.videoEmbed }} />

                                <div dangerouslySetInnerHTML={{ __html: episode.description.html }} />

                                <p className='small'>
                                    Created on {episode.createdAt}
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