import { Asset } from 'contentful'
import { documentToReactComponents} from '@contentful/rich-text-react-renderer'

interface ContentfulImageProps {
    asset: Asset,
    className: string
}

const ContentfulImage: React.FC<ContentfulImageProps> = ({ asset, className }) => {
    const imageUrl = `https://${asset.fields.file.url}`
    const altText = asset.fields.description || ''

    return (
        <img  className={className} src={imageUrl} alt={altText} />
    )
}

export default ContentfulImage