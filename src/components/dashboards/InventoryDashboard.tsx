import { Bell, Grid3x3, Search, ChevronDown, Filter, Download } from 'lucide-react'
import DigitsLogo from '@/app/assets/logos/digits-logo.svg'
import { Switch } from '@/components/ui/switch'

export default function InventoryDashboard() {
  const inventoryItems = [
    { inventoryNo: 'INV-001', itemDescription: 'All Purpose Flour 25kg', itemCode: 'APF-25KG', uom: 'sack', price: '₱850.00', qty: 45, totalValue: '₱38,250.00', location: 'Warehouse A' },
    { inventoryNo: 'INV-002', itemDescription: 'Premium Butter 500g', itemCode: 'BUT-500G', uom: 'piece', price: '₱320.00', qty: 28, totalValue: '₱8,960.00', location: 'Cold Storage' },
    { inventoryNo: 'INV-003', itemDescription: 'Fresh Milk 1L', itemCode: 'MLK-1L', uom: 'liter', price: '₱85.00', qty: 67, totalValue: '₱5,695.00', location: 'Cold Storage' },
    { inventoryNo: 'INV-004', itemDescription: 'Brown Sugar 1kg', itemCode: 'BS-1KG', uom: 'kg', price: '₱95.00', qty: 52, totalValue: '₱4,940.00', location: 'Warehouse A' },
    { inventoryNo: 'INV-005', itemDescription: 'Vanilla Extract 100ml', itemCode: 'VE-100ML', uom: 'bottle', price: '₱185.00', qty: 18, totalValue: '₱3,330.00', location: 'Warehouse B' },
    { inventoryNo: 'INV-006', itemDescription: 'Baking Powder 500g', itemCode: 'BP-500G', uom: 'can', price: '₱125.00', qty: 24, totalValue: '₱3,000.00', location: 'Warehouse A' },
    { inventoryNo: 'INV-007', itemDescription: 'Cocoa Powder 1kg', itemCode: 'CP-1KG', uom: 'kg', price: '₱420.00', qty: 15, totalValue: '₱6,300.00', location: 'Warehouse B' },
    { inventoryNo: 'INV-008', itemDescription: 'Instant Yeast 500g', itemCode: 'IY-500G', uom: 'pack', price: '₱275.00', qty: 32, totalValue: '₱8,800.00', location: 'Cold Storage' },
    { inventoryNo: 'INV-009', itemDescription: 'Olive Oil 1L', itemCode: 'OO-1L', uom: 'bottle', price: '₱450.00', qty: 22, totalValue: '₱9,900.00', location: 'Warehouse A' },
    { inventoryNo: 'INV-010', itemDescription: 'Sea Salt 1kg', itemCode: 'SS-1KG', uom: 'kg', price: '₱65.00', qty: 38, totalValue: '₱2,470.00', location: 'Warehouse B' },
    { inventoryNo: 'INV-011', itemDescription: 'Honey 500g', itemCode: 'HN-500G', uom: 'jar', price: '₱240.00', qty: 26, totalValue: '₱6,240.00', location: 'Warehouse A' },
    { inventoryNo: 'INV-012', itemDescription: 'Almond Flour 1kg', itemCode: 'AF-1KG', uom: 'kg', price: '₱680.00', qty: 12, totalValue: '₱8,160.00', location: 'Warehouse B' },
  ]

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
            <span className="font-medium text-gray-900">Inventory</span>
            <span>Overview</span>
            <span className="flex items-center space-x-1">
              <span>Receiving</span>
              <ChevronDown className="w-3 h-3" />
            </span>
            <span className="flex items-center space-x-1">
              <span>Issuances</span>
              <ChevronDown className="w-3 h-3" />
            </span>
            <span>Items</span>
            <span>Adjustments</span>
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

      {/* Inventories Section */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Inventories</h2>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium">
            New
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button className="px-4 py-2 text-orange-500 border-b-2 border-orange-500 font-medium">
            Item Standards
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900">
            Item Listing
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search inventory items..."
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

        {/* Table with horizontal scroll indicator */}
        <div className="overflow-x-auto relative">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Inventory No.</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Item Description</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Item Code</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">UOM</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Price</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Qty</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Total Value</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Location</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map((item, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">{item.inventoryNo}</td>
                  <td className="py-3 px-4">{item.itemDescription}</td>
                  <td className="py-3 px-4 text-blue-600 font-medium">{item.itemCode}</td>
                  <td className="py-3 px-4">{item.uom}</td>
                  <td className="py-3 px-4 font-medium">{item.price}</td>
                  <td className="py-3 px-4 text-right">{item.qty}</td>
                  <td className="py-3 px-4 font-medium text-green-600">{item.totalValue}</td>
                  <td className="py-3 px-4">{item.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Horizontal scroll indicator */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-100 rounded-full mx-4 mb-2">
            <div className="h-full bg-gray-400 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-700">
            Showing 1 to 5 of 5 rows
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