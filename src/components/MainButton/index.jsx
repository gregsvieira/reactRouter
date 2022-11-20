import './MainButton.css';

const MainButton = ({ children, size}) => {
  return (
    <button  
      className={`mainbutton ${size} `} >
      {children}
    </button>
  )
}

export default MainButton;