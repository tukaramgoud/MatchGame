import './index.css'

const TabImages = props => {
  const {imageDetails, changeSubImage} = props
  const {imageUrl, thumbnailUrl} = imageDetails
  const idChanged = () => {
    changeSubImage(imageDetails.id)
  }
  return (
    <li>
      <img
        src={imageUrl}
        alt={thumbnailUrl}
        className="tab-image-styling"
        onClick={idChanged}
      />
    </li>
  )
}

export default TabImages
