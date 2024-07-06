import "./scrollbar.css";

function Scrollbar({ children, trackColor, thumbColor, maxHeight, maxWidth }) {
  const scrollbarStyle = {
    "--track-color": trackColor,
    "--thumb-color": thumbColor,
    "--max-height": maxHeight,
    // "--max-width": maxWidth,
  };

  return (
    <div className="scroll-container mt-3 pb-1" style={scrollbarStyle}>
      {children}
    </div>
  );
}

export default Scrollbar;
