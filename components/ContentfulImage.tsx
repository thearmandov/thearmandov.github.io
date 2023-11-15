import { Asset } from 'contentful'
import { documentToReactComponents} from '@contentful/rich-text-react-renderer'

interface ContentfulImageProps {
    asset: Asset
}

const ContentfulImage: React.FC<ContentfulImageProps> = ({ asset }) => {
    const imageUrl = `https://${asset.fields.file.url}`
    const altText = asset.fields.description || ''

    return (
        <img src={imageUrl} alt={altText} />
    )
}

export default ContentfulImage