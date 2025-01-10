
const TimelineSidebar: React.FC = () => {
  return (
    <div className="bg-stone-200">
      <h2 className="">Timeline Sidebar</h2>

      <div>
        <form>
          <input type="text" className="border-stone-600 border-2"></input>
          <input type="submit"></input>
        </form>
      </div>

      <div>
        <h2>Current Catogories</h2>
        <ul>
          <li>x - United States</li>
          <li>x - Tudor Dynasty</li>
          <li>x - France</li>
        </ul>
      </div>
    </div>
  );
}

export default TimelineSidebar;