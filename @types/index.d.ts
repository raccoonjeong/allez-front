// src/custom.d.ts

declare module '../components/Navbars/AdminNavbar' {
  import * as React from 'react';
  const AdminNavbar: React.FC;
  export default AdminNavbar;
}

declare module '../components/Sidebar/Sidebar' {
  import * as React from 'react';
  const Sidebar: React.FC;
  export default Sidebar;
}

declare module '../components/Headers/HeaderStats' {
  import * as React from 'react';
  const HeaderStats: React.FC;
  export default HeaderStats;
}

declare module '../components/Footers/FooterAdmin' {
  import * as React from 'react';
  const FooterAdmin: React.FC;
  export default FooterAdmin;
}

declare module '../views/admin/Dashboard' {
  import * as React from 'react';
  const Dashboard: React.FC;
  export default Dashboard;
}

declare module '../views/admin/Maps' {
  import * as React from 'react';
  const Maps: React.FC;
  export default Maps;
}

declare module '../views/admin/Settings' {
  import * as React from 'react';
  const Settings: React.FC;
  export default Settings;
}

declare module '../views/admin/Tables' {
  import * as React from 'react';
  const Tables: React.FC;
  export default Tables;
}
