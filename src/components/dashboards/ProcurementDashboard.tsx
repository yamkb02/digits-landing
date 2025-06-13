import DigitsLogo from "@/app/assets/logos/digits-logo.svg";
import { Switch } from "@/components/ui/switch";

export default function ProcurementDashboard() {
  const purchaseRequests = [
    {
      prNo: "RQ-2500026",
      date: "06/13/2025",
      status: "Draft",
      supplier: "Baking supplies",
      poNo: "",
      totalItems: 1,
      approvers: "Super Admin",
      createdBy: "Super Admin",
    },
    {
      prNo: "RQ-2500025",
      date: "06/13/2025",
      status: "Draft",
      supplier: "Baking supplies",
      poNo: "",
      totalItems: 2,
      approvers: "Super Admin",
      createdBy: "Super Admin",
    },
    {
      prNo: "RQ-2500024",
      date: "06/11/2025",
      status: "Draft",
      supplier: "Ong Kin King - Carbo...",
      poNo: "",
      totalItems: 1,
      approvers: "Super Admin",
      createdBy: "Super Admin",
    },
    {
      prNo: "RQ-2500023",
      date: "06/11/2025",
      status: "For Approval",
      supplier: "Baking supplies",
      poNo: "",
      totalItems: 1,
      approvers: "Super Admin",
      createdBy: "Super Admin",
    },
    {
      prNo: "RQ-2500022",
      date: "06/03/2025",
      status: "For Approval",
      supplier: "Baking supplies",
      poNo: "",
      totalItems: 1,
      approvers: "ACCOUNTING1 ENCOD...",
      createdBy: "miguel reyes",
    },
    {
      prNo: "RQ-2500021",
      date: "05/26/2025",
      status: "Approved",
      supplier: "Baking supplies",
      poNo: "PO-2500018",
      totalItems: 1,
      approvers: "Super Admin",
      createdBy: "Super Admin",
    },
    {
      prNo: "RQ-2500020",
      date: "05/26/2025",
      status: "Approved",
      supplier: "Baking supplies",
      poNo: "PO-2500016",
      totalItems: 1,
      approvers: "Super Admin",
      createdBy: "Super Admin",
    },
    {
      prNo: "RQ-2500019",
      date: "05/26/2025",
      status: "Approved",
      supplier: "Baking supplies",
      poNo: "PO-2500019",
      totalItems: 1,
      approvers: "OPERATIONS1 MANAGE...",
      createdBy: "Niq Bengz",
    },
    {
      prNo: "RQ-2500018",
      date: "05/25/2025",
      status: "Approved",
      supplier: "Kitchen Equipment Co",
      poNo: "PO-2500017",
      totalItems: 3,
      approvers: "OPERATIONS1 MANAGE...",
      createdBy: "Sarah Chen",
    },
    {
      prNo: "RQ-2500017",
      date: "05/24/2025",
      status: "For Approval",
      supplier: "Fresh Dairy Ltd",
      poNo: "",
      totalItems: 2,
      approvers: "Super Admin",
      createdBy: "Mike Johnson",
    },
    {
      prNo: "RQ-2500016",
      date: "05/23/2025",
      status: "Draft",
      supplier: "Office Supplies Inc",
      poNo: "",
      totalItems: 5,
      approvers: "ACCOUNTING1 ENCOD...",
      createdBy: "Lisa Wong",
    },
    {
      prNo: "RQ-2500015",
      date: "05/22/2025",
      status: "Approved",
      supplier: "Tech Solutions Pro",
      poNo: "PO-2500015",
      totalItems: 1,
      approvers: "Super Admin",
      createdBy: "David Kim",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Draft":
        return "bg-gray-100 text-gray-700";
      case "For Approval":
        return "bg-orange-100 text-orange-700";
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
            <span className="font-medium text-gray-900">Procurement</span>
            <span>Purchase Requests</span>
            <span>Purchase Orders</span>
            <span>Purchase Invoices</span>
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

      {/* Purchase Requests Section */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Purchase Requests
          </h2>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium">
            New
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search purchase requests..."
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
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  <div className="flex items-center space-x-1">
                    <span>PR No.</span>
                    <span className="text-xs">🔽</span>
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  <div className="flex items-center space-x-1">
                    <span>PR Date</span>
                    <span className="text-xs">🔽</span>
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  <div className="flex items-center space-x-1">
                    <span>Status</span>
                    <span className="text-xs">🔽</span>
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  Supplier
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  PO No.
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  Total Items
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  Approvers
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  Created By
                </th>
              </tr>
            </thead>
            <tbody>
              {purchaseRequests.map((request, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">▶</span>
                      <span>{request.prNo}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">{request.date}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        request.status
                      )}`}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-orange-500">{request.supplier}</span>
                  </td>
                  <td className="py-3 px-4">{request.poNo}</td>
                  <td className="py-3 px-4">{request.totalItems}</td>
                  <td className="py-3 px-4">{request.approvers}</td>
                  <td className="py-3 px-4">{request.createdBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-700">
            Showing 1 to 12 of 12 rows
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
              <span className="text-sm text-gray-700">Page 1 of 1</span>
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
