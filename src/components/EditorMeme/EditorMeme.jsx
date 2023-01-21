import './EditorMeme.css'
import back from '../../images/back.svg'
import { Link } from 'react-router-dom'
import meme from '../../images/meme-edit.jpg'

const EditorMeme = () => {
  return (
    <div className='editor'>
      <Link to='/' className='editor__link'>
        <img src={back} alt='Назад' />
      </Link>
      <h2 className='editor__title'>Редактор мемов</h2>
      <section className='editor__hero'>
        <div className='editor__column_left'>
          <input className='editor__input editor__input_top' type='text' />
          <input className='editor__input editor__input_bottom' type='text' />
          <img src={meme} alt='Мем' className='editor__image' /> 
        </div>      
        <div className='editor__column_right'>
          <button className='editor__button editor__button_top' type='button'>Текст сверху</button>
          <button className='editor__button editor__button_bottom' type='button'>Текст снизу</button>
        </div>
      </section>
    </div>
  );
};

export default EditorMeme;
