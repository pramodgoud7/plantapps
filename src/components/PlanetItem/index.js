import './index.css'

const PlaneItem = props => {
  const {projectDetails} = props
  const {description, imageUrl, name} = projectDetails

  return (
    <>
      <div className="Container">
        <img src={imageUrl} alt={name} className="img" />
        <h1 className="name-h1">{name}</h1>
        <p className="p1">{description}</p>
      </div>
    </>
  )
}

export default PlaneItem
