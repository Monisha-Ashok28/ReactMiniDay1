import "./ShowHideText.css";

function ShowHideText() {
  const isVisible = true; 

  return (
    <div className="showhide-box">
      {isVisible && <h2>Hello, World!</h2>}
    </div>
  );
}

export default ShowHideText;
