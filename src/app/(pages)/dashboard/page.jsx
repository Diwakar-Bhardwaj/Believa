export default function Dashboard() {
  const stats = [
    { title: "Users", value: "1,250" },
    { title: "Revenue", value: "$8,450" },
    { title: "Orders", value: "320" },
    { title: "Growth", value: "12%" },
  ];

  const recentOrders = [
    {
      id: "#1001",
      customer: "John Doe",
      status: "Completed",
      amount: "$120",
    },
    {
      id: "#1002",
      customer: "Jane Smith",
      status: "Pending",
      amount: "$85",
    },
    {
      id: "#1003",
      customer: "Mike Johnson",
      status: "Completed",
      amount: "$240",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6 hidden md:block">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

        <nav className="space-y-4">
          <a href="#" className="block hover:text-blue-400">
            Home
          </a>
          <a href="#" className="block hover:text-blue-400">
            Analytics
          </a>
          <a href="#" className="block hover:text-blue-400">
            Users
          </a>
          <a href="#" className="block hover:text-blue-400">
            Reports
          </a>
          <a href="#" className="block hover:text-blue-400">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Dashboard</h2>

          <div className="flex items-center gap-4">
            <span className="text-gray-600">Welcome, Admin</span>

            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
              A
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow p-6"
              >
                <h3 className="text-gray-500 text-sm">{item.title}</h3>
                <p className="text-3xl font-bold mt-2">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="px-6 py-4 border-b">
              <h3 className="text-lg font-semibold">Recent Orders</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Order ID</th>
                    <th className="px-6 py-3">Customer</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Amount</th>
                  </tr>
                </thead>

                <tbody>
                  {recentOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-t hover:bg-gray-50"
                    >
                      <td className="px-6 py-4">{order.id}</td>
                      <td className="px-6 py-4">{order.customer}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            order.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">{order.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}