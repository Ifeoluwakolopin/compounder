export default function CustomCursor({ children }) {
  const customCursorStyle = {
    cursor: `url('${process.env.PUBLIC_URL}/icons8-cursor-100.png'), pointer`,
  };

  return <div style={customCursorStyle}>{children}</div>;
}
