import Meme from '../Meme/Meme'
import meme from '../../images/meme-image.png'
import { memes } from '../../utils/constants'
import './Main.css'

const Main = () => {
  return (
    <div className="main">
      <h1 className="main__title">Генератор мемов</h1>
      <div className="main__text-box">
        <h3 className="main__text-advice">
          Выберите шаблон для создания мема или
        </h3>
        <button className="main__btn">Загрузите изображение</button>
      </div>
      <div className="main__memebox">
        {memes.map((elem) => (
          <Meme image={meme} key={elem} />
        ))}
      </div>
    </div>
  )
}

export default Main
