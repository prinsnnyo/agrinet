import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageSquare, Phone, Truck } from "lucide-react"
import { IOSNavBar } from "@/components/ios-nav-bar"
import { IOSTabBar } from "@/components/ios-tab-bar"
import { IOSHomeIndicator } from "@/components/ios-home-indicator"

export default function LogisticsDetail({ params }: { params: { id: string } }) {
  return (
    <div className="p-5 max-w-md mx-auto">
      <IOSNavBar title={`Shipment #${params.id}`} backLink="/logistics" />

      <Card className="bg-white rounded-xl shadow-sm overflow-hidden mb-4 mt-2">
        <div className="p-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-medium text-[#111111]">Shipment Status</h3>
              <p className="text-sm text-[#8E8E93]">Premium Jasmine Rice - 1,000 kg</p>
            </div>
            <div className="bg-yellow-100 text-yellow-800 px-2.5 py-1 rounded-full text-xs font-medium">In Transit</div>
          </div>

          <div className="h-48 bg-[#F2F2F7] rounded-xl mb-4 flex items-center justify-center">
            <div className="text-center">
              <Truck className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <p className="text-sm text-[#8E8E93]">Live tracking map</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-green-600"></div>
                <div className="w-0.5 h-full bg-green-600 absolute top-3 bottom-0 left-1.5"></div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#111111]">Pickup Completed</h4>
                <p className="text-xs text-[#8E8E93]">May 12, 2025 - 8:30 AM</p>
                <p className="text-xs text-[#111111]">Nueva Ecija, Philippines</p>
              </div>
            </div>

            <div className="relative flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-green-600"></div>
                <div className="w-0.5 h-full bg-green-600 absolute top-3 bottom-0 left-1.5"></div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#111111]">Departed Origin</h4>
                <p className="text-xs text-[#8E8E93]">May 12, 2025 - 9:15 AM</p>
                <p className="text-xs text-[#111111]">Nueva Ecija, Philippines</p>
              </div>
            </div>

            <div className="relative flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-0.5 h-full bg-gray-300 absolute top-3 bottom-0 left-1.5"></div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#111111]">In Transit</h4>
                <p className="text-xs text-[#8E8E93]">May 12, 2025 - 2:30 PM</p>
                <p className="text-xs text-[#111111]">Bulacan, Philippines</p>
              </div>
            </div>

            <div className="relative flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-0.5 h-full bg-gray-300 absolute top-3 bottom-0 left-1.5"></div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#111111]">Arriving at Destination</h4>
                <p className="text-xs text-[#8E8E93]">Expected: May 15, 2025</p>
                <p className="text-xs text-[#111111]">Quezon City, Philippines</p>
              </div>
            </div>

            <div className="relative flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#111111]">Delivered</h4>
                <p className="text-xs text-[#8E8E93]">Expected: May 15, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
        <div className="p-4">
          <h3 className="font-medium mb-3 text-[#111111]">Shipment Details</h3>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Order ID:</span>
              <span className="text-[#111111]">#{params.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Product:</span>
              <span className="text-[#111111]">Premium Jasmine Rice</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Quantity:</span>
              <span className="text-[#111111]">1,000 kg</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Pickup Date:</span>
              <span className="text-[#111111]">May 12, 2025</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Delivery Date:</span>
              <span className="text-[#111111]">May 15, 2025 (Expected)</span>
            </div>
          </div>
        </div>
      </Card>

      <Card className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
        <div className="p-4">
          <h3 className="font-medium mb-3 text-[#111111]">Carrier Information</h3>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Carrier:</span>
              <span className="text-[#111111]">AgriNet Logistics</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Driver:</span>
              <span className="text-[#111111]">Pedro Santos</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Vehicle:</span>
              <span className="text-[#111111]">Truck (ABC-1234)</span>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <Button variant="outline" className="flex-1 rounded-lg border-[#E5E5EA] bg-white h-10">
              <Phone className="h-4 w-4 mr-1 text-green-600" />
              <span className="text-[#111111]">Call Driver</span>
            </Button>
            <Button variant="outline" className="flex-1 rounded-lg border-[#E5E5EA] bg-white h-10">
              <MessageSquare className="h-4 w-4 mr-1 text-green-600" />
              <span className="text-[#111111]">Message</span>
            </Button>
          </div>
        </div>
      </Card>

      <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4">
          <h3 className="font-medium mb-3 text-[#111111]">Delivery Information</h3>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Recipient:</span>
              <span className="text-[#111111]">Juan Dela Cruz</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Contact:</span>
              <span className="text-[#111111]">+63 917 123 4567</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Address:</span>
              <span className="text-right text-[#111111]">123 Main Street, Quezon City, Metro Manila</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Special Instructions:</span>
              <span className="text-right text-[#111111]">Call recipient 30 minutes before arrival</span>
            </div>
          </div>
        </div>
      </Card>
      <IOSTabBar />
      <IOSHomeIndicator />
    </div>
  )
}
