export default function TabButtons({ children, onSelectedClick, selectedBtn }) {
  return (
    <li>
      <button
        className={selectedBtn ? 'active' : undefined}
        onClick={onSelectedClick}
      >
        {children}
      </button>
    </li>
  );
}
