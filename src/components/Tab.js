export default function Tab({ num, tabActive, onClick }) {
  const isActive = tabActive === num - 1;

  return (
    <span onClick={onClick} className={`${isActive ? `active` : ""} tab`}>
      Tab {num}
    </span>
  );
}
