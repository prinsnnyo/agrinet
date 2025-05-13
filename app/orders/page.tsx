import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { IOSPageHeader } from "@/components/ios-page-header"
import { IOSSegmentedControl } from "@/components/ios-segmented-control"

export default function Orders() {
  return (
    <div className="min-h-screen bg-orders relative z-10">
      <div className="p-5 max-w-md mx-auto bg-white/70 backdrop-blur-sm rounded-lg my-4 shadow-lg">
        <IOSPageHeader title="My Orders" backLink="/dashboard" />

      <IOSSegmentedControl options={["Active", "Completed", "Cancelled"]} defaultValue="Active" />

      <div className="mt-4 space-y-4">
        <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-[#111111]">Order #1234</h3>
                <p className="text-sm text-[#8E8E93]">May 10, 2025</p>
              </div>
              <div className="bg-yellow-100 text-yellow-800 px-2.5 py-1 rounded-full text-xs font-medium">
                In Transit
              </div>
            </div>

            <div className="border-t border-b border-[#E5E5EA] py-3 my-3">
              <p className="font-medium text-[#111111]">Premium Jasmine Rice</p>
              <div className="flex justify-between text-sm">
                <span className="text-[#8E8E93]">1,000 kg × ₱45</span>
                <span className="font-medium text-[#111111]">₱45,000</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm mb-3">
              <span className="text-[#8E8E93]">Seller:</span>
              <span className="text-[#111111]">Green Valley Farm</span>
            </div>

            <div className="flex justify-between items-center text-sm mb-3">
              <span className="text-[#8E8E93]">Delivery:</span>
              <span className="text-[#111111]">May 15, 2025</span>
            </div>

            <Link href="/orders/1234">
              <Button
                variant="outline"
                className="w-full flex items-center justify-between rounded-lg border-[#E5E5EA] bg-white h-10"
              >
                <span className="text-[#111111]">View Details</span>
                <ChevronRight className="h-4 w-4 text-[#8E8E93]" />
              </Button>
            </Link>
          </div>
        </Card>

        <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-[#111111]">Order #1233</h3>
                <p className="text-sm text-[#8E8E93]">May 8, 2025</p>
              </div>
              <div className="bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full text-xs font-medium">Processing</div>
            </div>

            <div className="border-t border-b border-[#E5E5EA] py-3 my-3">
              <p className="font-medium text-[#111111]">Organic Brown Rice</p>
              <div className="flex justify-between text-sm">
                <span className="text-[#8E8E93]">500 kg × ₱52</span>
                <span className="font-medium text-[#111111]">₱26,000</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm mb-3">
              <span className="text-[#8E8E93]">Seller:</span>
              <span className="text-[#111111]">Sunshine Farms</span>
            </div>

            <div className="flex justify-between items-center text-sm mb-3">
              <span className="text-[#8E8E93]">Delivery:</span>
              <span className="text-[#111111]">May 18, 2025</span>
            </div>

            <Link href="/orders/1233">
              <Button
                variant="outline"
                className="w-full flex items-center justify-between rounded-lg border-[#E5E5EA] bg-white h-10"
              >
                <span className="text-[#111111]">View Details</span>
                <ChevronRight className="h-4 w-4 text-[#8E8E93]" />
              </Button>
            </Link>
          </div>
        </Card>
      </div>
      </div>
    </div>
  )
}
