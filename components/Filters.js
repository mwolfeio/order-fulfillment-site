import Tab from "./Tab.js";

const Header = (props) => {
  return (
    <div className="flex-center-btw" style={{ marginBottom: "32px" }}>
      <div className="flex-center-left tab-wrapper">
        {props.filters.map((filter) => (
          <div
            onClick={() => props.handler(filter)}
            className={`tab flex-center-center ${
              filter == props.active ? "active-tab" : ""
            }`}
          >
            {filter}
          </div>
        ))}
      </div>
      <div>Sort</div>
    </div>
  );
};
export default Header;
