import { motion } from "framer-motion";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">NYSC Portal</h2>
        <ul>
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Registration</li>
          <li>Notifications</li>
          <li>Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="main">
        {/* Topbar */}
        <header className="topbar">
          <h3>Dashboard</h3>
          <div className="user">Welcome, User</div>
        </header>

        {/* Content */}
        <motion.div
          className="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Cards */}
          <div className="cards">
            <div className="card">
              <h4>Profile Status</h4>
              <p>Completed</p>
            </div>

            <div className="card">
              <h4>Registration</h4>
              <p>Pending</p>
            </div>

            <div className="card">
              <h4>Notifications</h4>
              <p>3 New</p>
            </div>

            <div className="card">
              <h4>Deployment</h4>
              <p>Not Assigned</p>
            </div>
          </div>

          {/* Table Section */}
          <div className="table-section">
            <h3>Recent Activities</h3>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Activity</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2026-03-01</td>
                  <td>Profile Update</td>
                  <td>Successful</td>
                </tr>
                <tr>
                  <td>2026-03-05</td>
                  <td>Registration</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;