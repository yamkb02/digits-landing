import DigitsLogo from "@/app/assets/logos/digits-logo.svg";
import { Switch } from "@/components/ui/switch";

export default function FinanceDashboard() {
  const payments = [
    {
      paymentNo: "PAY-2500001",
      supplier: "Baking supplies",
      dueDate: "06/15/2025",
      amount: "₱25,340.00",
      status: "Pending",
      method: "Bank Transfer",
      invoiceNo: "INV-001",
    },
    {
      paymentNo: "PAY-2500002",
      supplier: "Kitchen Equipment Co",
      dueDate: "06/20/2025",
      amount: "₱48,750.00",
      status: "Paid",
      method: "Check",
      invoiceNo: "INV-002",
    },
    {
      paymentNo: "PAY-2500003",
      supplier: "Fresh Dairy Ltd",
      dueDate: "06/18/2025",
      amount: "₱12,450.00",
      status: "Overdue",
      method: "Cash",
      invoiceNo: "INV-003",
    },
    {
      paymentNo: "PAY-2500004",
      supplier: "Office Supplies Inc",
      dueDate: "06/25/2025",
      amount: "₱8,920.00",
      status: "Pending",
      method: "Bank Transfer",
      invoiceNo: "INV-004",
    },
    {
      paymentNo: "PAY-2500005",
      supplier: "Tech Solutions Pro",
      dueDate: "06/30/2025",
      amount: "₱65,200.00",
      status: "Approved",
      method: "Wire Transfer",
      invoiceNo: "INV-005",
    },
    {
      paymentNo: "PAY-2500006",
      supplier: "Industrial Cleaners",
      dueDate: "07/02/2025",
      amount: "₱15,680.00",
      status: "Pending",
      method: "Check",
      invoiceNo: "INV-006",
    },
    {
      paymentNo: "PAY-2500007",
      supplier: "Maintenance Services",
      dueDate: "07/05/2025",
      amount: "₱32,150.00",
      status: "Paid",
      method: "Bank Transfer",
      invoiceNo: "INV-007",
    },
    {
      paymentNo: "PAY-2500008",
      supplier: "Transport Logistics",
      dueDate: "07/08/2025",
      amount: "₱18,500.00",
      status: "Pending",
      method: "Cash",
      invoiceNo: "INV-008",
    },
    {
      paymentNo: "PAY-2500009",
      supplier: "Security Systems",
      dueDate: "07/10/2025",
      amount: "₱28,900.00",
      status: "Overdue",
      method: "Bank Transfer",
      invoiceNo: "INV-009",
    },
    {
      paymentNo: "PAY-2500010",
      supplier: "Marketing Agency",
      dueDate: "07/12/2025",
      amount: "₱42,300.00",
      status: "Approved",
      method: "Wire Transfer",
      invoiceNo: "INV-010",
    },
    {
      paymentNo: "PAY-2500011",
      supplier: "Legal Services",
      dueDate: "07/15/2025",
      amount: "₱55,700.00",
      status: "Pending",
      method: "Check",
      invoiceNo: "INV-011",
    },
    {
      paymentNo: "PAY-2500012",
      supplier: "Insurance Provider",
      dueDate: "07/18/2025",
      amount: "₱38,200.00",
      status: "Paid",
      method: "Bank Transfer",
      invoiceNo: "INV-012",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Posted":
        return "bg-blue-100 text-blue-700";
      case "Approved":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl">⚏</span>
            <div className="flex items-center">
              <img src={DigitsLogo.src} alt="Digits ERP" className="h-8" />
            </div>
          </div>
          <nav className="flex items-center space-x-6 text-gray-600">
            <span className="font-medium text-gray-900">Finance</span>
            <span>Payments</span>
            <span className="flex items-center space-x-2 text-sm">
              <span className="text-orange">Home</span>
              <span>/</span>
              <span className="flex items-center space-x-1">
                <span>Accounting</span>
                <span className="text-xs">🔽</span>
              </span>
            </span>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <span className="text-xl">🔔</span>
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">65</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://ui-avatars.com/api/?name=Super+Admin&background=4f46e5&color=fff&size=32"
              alt="Super Admin Avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium">Superadmin</span>
          </div>
        </div>
      </div>

      {/* Payments Section */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Payments</h2>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium">
            New
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search payments..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Switch />
              <span className="text-gray-700">Select Mode</span>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <span>📊</span>
              <span>View</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <span>⬇️</span>
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Payment No.
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Due Date
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Supplier
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Amount
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Method
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Invoice No.
                </th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">{payment.paymentNo}</td>
                  <td className="py-3 px-4">{payment.dueDate}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        payment.status
                      )}`}
                    >
                      {payment.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-orange-500">{payment.supplier}</span>
                  </td>
                  <td className="py-3 px-4 font-medium">{payment.amount}</td>
                  <td className="py-3 px-4">{payment.method}</td>
                  <td className="py-3 px-4">{payment.invoiceNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-700">
            Showing 1 to 10 of 13 rows
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">Rows per page</span>
              <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">Page 1 of 2</span>
              <div className="flex space-x-1">
                <button className="px-2 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                  «
                </button>
                <button className="px-2 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                  ‹
                </button>
                <button className="px-2 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                  ›
                </button>
                <button className="px-2 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                  »
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
