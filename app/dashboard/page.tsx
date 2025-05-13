import { Card } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import { IOSSegmentedControl } from "@/components/ios-segmented-control"
import { IOSPageHeader } from "@/components/ios-page-header"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-marketplace relative z-10">
      <div className="p-5 max-w-md mx-auto backdrop-blur-sm rounded-lg shadow-lg">
        <IOSPageHeader title="Dashboard" backLink="/" backText="Home" />

      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4">
            <p className="text-sm text-[#8E8E93]">Active Listings</p>
            <h3 className="text-2xl font-bold text-[#111111]">3</h3>
          </div>
        </Card>

        <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4">
            <p className="text-sm text-[#8E8E93]">Pending Orders</p>
            <h3 className="text-2xl font-bold text-[#111111]">2</h3>
          </div>
        </Card>
      </div>

      <div className="mb-6">
        <IOSSegmentedControl options={["My Listings", "Recent Orders"]} defaultValue="My Listings" />

        <div className="mt-4 space-y-3">
          <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-[#111111]">Premium Jasmine Rice</h3>
                  <p className="text-sm text-[#8E8E93]">5,000 kg available</p>
                  <p className="text-green-600 font-medium mt-1">₱45 per kg</p>
                </div>
                <div className="bg-green-100 text-green-800 px-2.5 py-1 rounded-full text-xs font-medium">Active</div>
              </div>
            </div>
          </Card>

          <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-[#111111]">Organic Brown Rice</h3>
                  <p className="text-sm text-[#8E8E93]">2,000 kg available</p>
                  <p className="text-green-600 font-medium mt-1">₱52 per kg</p>
                </div>
                <div className="bg-green-100 text-green-800 px-2.5 py-1 rounded-full text-xs font-medium">Active</div>
              </div>
            </div>
          </Card>

          <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-[#111111]">White Rice</h3>
                  <p className="text-sm text-[#8E8E93]">10,000 kg available</p>
                  <p className="text-green-600 font-medium mt-1">₱38 per kg</p>
                </div>
                <div className="bg-green-100 text-green-800 px-2.5 py-1 rounded-full text-xs font-medium">Active</div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4">
          <div className="flex items-center mb-2">
            <TrendingUp className="h-4 w-4 mr-2 text-green-600" />
            <h3 className="font-medium text-[#111111]">Market Trends</h3>
          </div>
          <p className="text-sm text-[#8E8E93] mb-3">Rice prices are trending upward this month</p>
          <div className="h-20 bg-[#F2F2F7] rounded-lg flex items-end">
            <div className="h-10 w-1/6 bg-green-200 mx-0.5 rounded-t-lg"></div>
            <div className="h-12 w-1/6 bg-green-300 mx-0.5 rounded-t-lg"></div>
            <div className="h-14 w-1/6 bg-green-400 mx-0.5 rounded-t-lg"></div>
            <div className="h-16 w-1/6 bg-green-500 mx-0.5 rounded-t-lg"></div>
            <div className="h-18 w-1/6 bg-green-600 mx-0.5 rounded-t-lg"></div>
            <div className="h-20 w-1/6 bg-green-700 mx-0.5 rounded-t-lg"></div>
          </div>
        </div>
      </Card>
      </div>
    </div>
  )
}
