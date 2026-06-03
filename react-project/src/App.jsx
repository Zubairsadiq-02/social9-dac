import "./App.css";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import KPICard from "./components/KPICard";
import Analytics from "./components/Analytics";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="app">

      <Sidebar />

      <div className="main">

        <Topbar />

        <div className="kpi-grid">

          <KPICard
            title="Total Followers"
            value="125,450"
            growth="+12.4%"
          />

          <KPICard
            title="Reach"
            value="985K"
            growth="+8.1%"
          />

          <KPICard
            title="Engagement"
            value="7.2%"
            growth="+2.4%"
          />

          <KPICard
            title="Scheduled Posts"
            value="45"
            growth="+10%"
          />

          <KPICard
            title="Revenue"
            value="$12,400"
            growth="+5.6%"
          />

          <KPICard
            title="Audience Growth"
            value="14%"
            growth="+3.1%"
          />

        </div>

        <Analytics />

        <Calendar />

      </div>

    </div>
  );
}

export default App;