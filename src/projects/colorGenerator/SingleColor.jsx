
const SingleColor = ({hex, weight}) => {
  return (
    <div style={{backgroundColor: hex}}>
      <p>{weight}</p>
      <p>{hex}</p>
    </div>
  )
}

export default SingleColor