import { Asset } from 'contentful'

interface ContentfulImageProps {
    fields : {
        file: string | null, 
        description: string | null
    }
}

interface ImageProps {
    asset: ContentfulImageProps,
    className: string,
    src: string,
    alt: string
}

const ContentfulImage: React.FC<ImageProps> = ({ asset, className }) => {
    
    const imageUrl = `https://${asset!.fields!.file!.url!}`
    const altText = asset!.fields!.description || ''

    return (
        <img  className={className} src={imageUrl} alt={ altText } />
    )
}

export default ContentfulImage