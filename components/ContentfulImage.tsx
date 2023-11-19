import { Asset } from 'contentful'

interface ContentfulImageProps {
    Asset: Asset | null,
    className: string,
    src: string,
    alt: string | null

}

const ContentfulImage: React.FC<ContentfulImageProps> = ({ Asset, className }) => {
    
    const imageUrl = `https://${Asset?.fields?.file?.url}`
    const altText =  Asset?.fields?.description || ''

    return (
        <img  className={className} src={imageUrl} alt={`${altText}`} />
    )
}

export default ContentfulImage