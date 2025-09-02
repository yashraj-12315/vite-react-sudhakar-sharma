export function ClickEvent() {
  function LoadImage() {
    window.open("girl-image.jpg", "Girl Image", "width=300 height=400");
  }

  function handleDoubleClick() {
    setTimeout(LoadImage, 5000);
  }

  function handleContextMenu() {
    document.oncontextmenu = () => {
      alert(`Right Click not allowed`);
      return false;
    };
  }
  return (
    <div className="container-fluid" onContextMenu={handleContextMenu}>
      <img
        src="girl-image.jpg"
        alt=""
        width={100}
        height={100}
        onDoubleClick={handleDoubleClick}
      />
      <p>Double click to view large</p>
      <h3>Right Click is disabled on this page</h3>
    </div>
  );
}
