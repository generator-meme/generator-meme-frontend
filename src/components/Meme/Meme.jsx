import './Meme.css'

const Meme = ({ image }) => {
  return (
    <div className="meme" style={{ backgroundImage: `url(${image})` }}>
      <button className="meme__create-btn">Создать мем</button>
    </div>
  )
}

export default Meme
