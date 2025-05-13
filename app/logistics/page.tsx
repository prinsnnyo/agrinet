import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight, Truck } from "lucide-react"
import Link from "next/link"
import { IOSPageHeader } from "@/components/ios-page-header"
import { IOSSegmentedControl } from "@/components/ios-segmented-control"

export default function Logistics() {
  return (
    <div className="min-h-screen bg-logistics relative z-10">
      <div className="p-5 max-w-md mx-auto backdrop-blur-sm rounded-lg shadow-lg">
        <IOSPageHeader title="Logistics" backLink="/dashboard" />

      <IOSSegmentedControl options={["Upcoming", "Completed"]} defaultValue="Upcoming" />

      <div className="mt-4 space-y-4">
        <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-[#111111]">Order #1234</h3>
                <p className="text-sm text-[#8E8E93]">Premium Jasmine Rice - 1,000 kg</p>
              </div>
              <div className="bg-yellow-100 text-yellow-800 px-2.5 py-1 rounded-full text-xs font-medium">
                In Transit
              </div>
            </div>

            <div className="space-y-2 text-sm mt-3">
              <div className="flex justify-between">
                <span className="text-[#8E8E93]">Pickup:</span>
                <span className="text-[#111111]">Surigao City</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E8E93]">Destination:</span>
                <span className="text-[#111111]">Bayugan City</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E8E93]">Carrier:</span>
                <span className="text-[#111111]">AgriNet Logistics</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E8E93]">ETA:</span>
                <span className="font-medium text-[#111111]">May 15, 2025</span>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <Button variant="outline" className="flex-1 rounded-lg border-[#E5E5EA] bg-white h-10">
                <Truck className="h-4 w-4 mr-1 text-green-600" />
                <span className="text-[#111111]">Track</span>
              </Button>
              <Link href="/logistics/1234" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-between rounded-lg border-[#E5E5EA] bg-white h-10"
                >
                  <span className="text-[#111111]">Details</span>
                  <ChevronRight className="h-4 w-4 text-[#8E8E93]" />
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-[#111111]">Order #1233</h3>
                <p className="text-sm text-[#8E8E93]">Organic Brown Rice - 500 kg</p>
              </div>
              <div className="bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full text-xs font-medium">Processing</div>
            </div>

            <div className="space-y-2 text-sm mt-3">
              <div className="flex justify-between">
                <span className="text-[#8E8E93]">Pickup:</span>
                <span className="text-[#111111]">Isabela</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E8E93]">Destination:</span>
                <span className="text-[#111111]">Makati City</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E8E93]">Carrier:</span>
                <span className="text-[#111111]">Express Delivery Co.</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E8E93]">ETA:</span>
                <span className="font-medium text-[#111111]">May 18, 2025</span>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <Button variant="outline" className="flex-1 rounded-lg border-[#E5E5EA] bg-white h-10">
                <Truck className="h-4 w-4 mr-1 text-green-600" />
                <span className="text-[#111111]">Track</span>
              </Button>
              <Link href="/logistics/1233" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-between rounded-lg border-[#E5E5EA] bg-white h-10"
                >
                  <span className="text-[#111111]">Details</span>
                  <ChevronRight className="h-4 w-4 text-[#8E8E93]" />
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
      </div>
    </div>
  )
}
