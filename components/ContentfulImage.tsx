import { Asset } from 'contentful'

interface ContentfulImageProps {
    asset: Asset | null,
    className: string
}

const ContentfulImage: React.FC<ContentfulImageProps> = ({ asset, className }) => {
    const imageUrl = `https://${asset?.fields?.file.url}`
    const altText = asset?.fields?.description || ''

    return (
        <img  className={className} src={imageUrl} alt={altText} />
    )
}

export default ContentfulImage