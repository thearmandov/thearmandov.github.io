import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Document } from '@contentful/rich-text-types'

interface RichTextProps {
    document: Document
}

const opts = {
    renderNode: {
        'embedded-asset-block': (node: any) => {
            const { title, file } = node.data.target.fields
            const imgUrl = `https:${file.url}`
            return <img src={imgUrl} alt={title}/>
        }
    }
}

const RichText: React.FC<RichTextProps> = ({ document }) => {
    return (<>{documentToReactComponents(document, opts)}</>)
}

export default RichText