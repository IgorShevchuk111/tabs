import DifferentContent from "./DifferentContent";
import Tab from "./Tab";

export default function Tabs({ children, tabActive, setTabActive }) {
  return (
    <div className="tabs-container">
      <div className="tabs">
        {Array.from({ length: 4 }, (_, i) => (
          <Tab
            key={i}
            num={i + 1}
            tabActive={tabActive}
            onClick={() => setTabActive(i)}
          />
        ))}
      </div>

      {tabActive <= 2 ? children : <DifferentContent>1</DifferentContent>}
    </div>
  );
}
