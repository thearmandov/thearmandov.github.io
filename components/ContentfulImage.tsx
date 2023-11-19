import { Asset } from 'contentful'

interface ImageProps {
    asset: {
        fields : {
            file: {
                url: string | null
            }
            description: string | null
        }
    },
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