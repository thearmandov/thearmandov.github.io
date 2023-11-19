import { Asset } from 'contentful'

interface ContentfulImageProps {
    asset: Asset | null,
    className: string
}

const ContentfulImage: React.FC<ContentfulImageProps> = ({ asset, className }) => {
    if (asset != null) {
        const imageUrl = `https://${asset.fields.file.url}`
        const altText = asset.fields.description || ''
    
        return (
            <img  className={className} src={imageUrl} alt={altText} />
        )
    } else {
        return ("")
    }

}

export default ContentfulImage