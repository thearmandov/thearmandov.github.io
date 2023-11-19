import { Asset } from 'contentful'

interface ContentfulImageProps {
    asset: {
        fields: {
            sys: string, 
            fields: {
                file : { url: string }
            },
            metaData: string | null
        }
    },
    className: string,
    src: string,
    alt: string | null

}

const ContentfulImage: React.FC<ContentfulImageProps> = ({ asset, className }) => {
    
    const imageUrl = `https://${asset?.fields?.file?.url}`
    const altText =  asset?.fields?.description || ''

    return (
        <img  className={className} src={imageUrl} alt={`${altText}`} />
    )
}

export default ContentfulImage