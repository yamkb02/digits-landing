import { Bell, Grid3x3, Search, Filter, Download } from 'lucide-react'
import DigitsLogo from '@/app/assets/logos/digits-logo.svg'
import { Switch } from '@/components/ui/switch'

export default function SalesDashboard() {
  const customers = [
    { no: 1, customerCode: 'BAKE-001', customerName: 'Artisan Bakery Co.', creditTerm: '30 days', creditLimit: '₱50,000.00', totalSales: '₱25,340.00', balance: '₱8,250.00', status: 'Active' },
    { no: 2, customerCode: 'COFF-002', customerName: 'Morning Brew Coffee', creditTerm: '15 days', creditLimit: '₱75,000.00', totalSales: '₱42,180.00', balance: '₱0.00', status: 'Active' },
    { no: 3, customerCode: 'REST-003', customerName: 'Downtown Restaurant', creditTerm: '45 days', creditLimit: '₱100,000.00', totalSales: '₱65,750.00', balance: '₱12,500.00', status: 'Active' },
    { no: 4, customerCode: 'CAFE-004', customerName: 'Sunshine Cafe', creditTerm: '30 days', creditLimit: '₱25,000.00', totalSales: '₱18,920.00', balance: '₱3,200.00', status: 'Active' },
    { no: 5, customerCode: 'HOTEL-005', customerName: 'Grand Plaza Hotel', creditTerm: '60 days', creditLimit: '₱200,000.00', totalSales: '₱125,680.00', balance: '₱0.00', status: 'Active' },
    { no: 6, customerCode: 'DELI-006', customerName: 'Fresh Market Deli', creditTerm: '30 days', creditLimit: '₱40,000.00', totalSales: '₱28,450.00', balance: '₱5,600.00', status: 'Active' },
    { no: 7, customerCode: 'FAST-007', customerName: 'Quick Bite Express', creditTerm: '15 days', creditLimit: '₱60,000.00', totalSales: '₱35,290.00', balance: '₱2,800.00', status: 'Active' },
    { no: 8, customerCode: 'PUB-008', customerName: 'The Corner Pub', creditTerm: '30 days', creditLimit: '₱45,000.00', totalSales: '₱31,750.00', balance: '₱7,400.00', status: 'Active' },
    { no: 9, customerCode: 'CATER-009', customerName: 'Elite Catering Services', creditTerm: '45 days', creditLimit: '₱150,000.00', totalSales: '₱89,350.00', balance: '₱15,200.00', status: 'Active' },
    { no: 10, customerCode: 'SWEET-010', customerName: 'Sweet Dreams Desserts', creditTerm: '30 days', creditLimit: '₱35,000.00', totalSales: '₱22,680.00', balance: '₱0.00', status: 'Active' },
    { no: 11, customerCode: 'BISTRO-011', customerName: 'Garden Bistro', creditTerm: '30 days', creditLimit: '₱55,000.00', totalSales: '₱38,940.00', balance: '₱4,750.00', status: 'Active' },
    { no: 12, customerCode: 'PIZZA-012', customerName: 'Tony\'s Pizza Palace', creditTerm: '15 days', creditLimit: '₱70,000.00', totalSales: '₱48,520.00', balance: '₱9,100.00', status: 'Active' },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Draft': return 'bg-gray-100 text-gray-700'
      case 'For Approval': return 'bg-orange-100 text-orange-700'
      case 'Draft - Denied': return 'bg-red-100 text-red-700'
      case 'Posted': return 'bg-blue-100 text-blue-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Grid3x3 className="w-6 h-6 text-gray-400" />
            <div className="flex items-center">
              <img src={DigitsLogo.src} alt="Digits ERP" className="h-8" />
            </div>
          </div>
          <nav className="flex items-center space-x-6 text-gray-600">
            <span className="font-medium text-gray-900">Sales</span>
            <span>Customer Sales</span>
            <span>Branch Daily Sales</span>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell className="w-6 h-6 text-gray-600" />
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

      {/* Customer Sales Section */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Customer Sales</h2>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium">
            New
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Switch />
              <span className="text-gray-700">Select Mode</span>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Filter className="w-4 h-4" />
              <span>View</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Customer Code</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Credit Term</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Total Sales</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Customer Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Credit Limit</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Balance</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">{customer.customerCode}</td>
                  <td className="py-3 px-4">{customer.creditTerm}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(customer.status)}`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-medium">{customer.totalSales}</td>
                  <td className="py-3 px-4">{customer.customerName}</td>
                  <td className="py-3 px-4">{customer.creditLimit}</td>
                  <td className="py-3 px-4">{customer.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-700">
            Showing 1 to 4 of 4 rows
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
                <button className="px-2 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">«</button>
                <button className="px-2 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">‹</button>
                <button className="px-2 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">›</button>
                <button className="px-2 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">»</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 