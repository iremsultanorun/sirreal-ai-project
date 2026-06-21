import './Titles.css';

const Titles = ({ titleText }) => {
  return (
    <div className='title-wrapper'>
      <div className="title-container">
        <h2>{titleText}</h2>
      </div>

      <div className='line-container'></div>
    </div>
  );
}

export default Titles;
