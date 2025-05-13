import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageSquare, Truck } from "lucide-react"
import { IOSNavBar } from "@/components/ios-nav-bar"
import { IOSTabBar } from "@/components/ios-tab-bar"
import { IOSHomeIndicator } from "@/components/ios-home-indicator"

export default function OrderDetail({ params }: { params: { id: string } }) {
  return (
    <div className="p-5 max-w-md mx-auto">
      <IOSNavBar title={`Order #${params.id}`} backLink="/orders" />

      <Card className="bg-white rounded-xl shadow-sm overflow-hidden mb-4 mt-2">
        <div className="p-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-medium text-[#111111]">Order Status</h3>
              <p className="text-sm text-[#8E8E93]">May 10, 2025</p>
            </div>
            <div className="bg-yellow-100 text-yellow-800 px-2.5 py-1 rounded-full text-xs font-medium">In Transit</div>
          </div>

          <div className="space-y-4 mt-4">
            <div className="relative flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-green-600"></div>
                <div className="w-0.5 h-full bg-green-600 absolute top-3 bottom-0 left-1.5"></div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#111111]">Order Placed</h4>
                <p className="text-xs text-[#8E8E93]">May 10, 2025 - 9:30 AM</p>
              </div>
            </div>

            <div className="relative flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-green-600"></div>
                <div className="w-0.5 h-full bg-green-600 absolute top-3 bottom-0 left-1.5"></div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#111111]">Payment Confirmed</h4>
                <p className="text-xs text-[#8E8E93]">May 10, 2025 - 10:15 AM</p>
              </div>
            </div>

            <div className="relative flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-green-600"></div>
                <div className="w-0.5 h-full bg-gray-300 absolute top-3 bottom-0 left-1.5"></div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#111111]">Processing</h4>
                <p className="text-xs text-[#8E8E93]">May 11, 2025 - 2:45 PM</p>
              </div>
            </div>

            <div className="relative flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-0.5 h-full bg-gray-300 absolute top-3 bottom-0 left-1.5"></div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#111111]">In Transit</h4>
                <p className="text-xs text-[#8E8E93]">May 12, 2025 - 8:30 AM</p>
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
          <h3 className="font-medium mb-3 text-[#111111]">Order Details</h3>

          <div className="border-t border-b border-[#E5E5EA] py-3 mb-3">
            <p className="font-medium text-[#111111]">Premium Jasmine Rice</p>
            <div className="flex justify-between text-sm">
              <span className="text-[#8E8E93]">1,000 kg × ₱45</span>
              <span className="font-medium text-[#111111]">₱45,000</span>
            </div>
            <p className="text-xs text-[#8E8E93] mt-1">Organic, Certified</p>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Subtotal:</span>
              <span className="text-[#111111]">₱45,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Delivery Fee:</span>
              <span className="text-[#111111]">₱2,500</span>
            </div>
            <div className="flex justify-between font-medium pt-2 border-t border-[#E5E5EA]">
              <span className="text-[#111111]">Total:</span>
              <span className="text-[#111111]">₱47,500</span>
            </div>
          </div>
        </div>
      </Card>

      <Card className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
        <div className="p-4">
          <h3 className="font-medium mb-3 text-[#111111]">Seller Information</h3>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Name:</span>
              <span className="text-[#111111]">Green Valley Farm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Contact:</span>
              <span className="text-[#111111]">+63 912 345 6789</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Location:</span>
              <span className="text-[#111111]">Nueva Ecija, Philippines</span>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <Button variant="outline" className="flex-1 rounded-lg border-[#E5E5EA] bg-white h-10">
              <MessageSquare className="h-4 w-4 mr-1 text-green-600" />
              <span className="text-[#111111]">Message</span>
            </Button>
            <Button variant="outline" className="flex-1 rounded-lg border-[#E5E5EA] bg-white h-10">
              <Truck className="h-4 w-4 mr-1 text-green-600" />
              <span className="text-[#111111]">Track</span>
            </Button>
          </div>
        </div>
      </Card>

      <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4">
          <h3 className="font-medium mb-3 text-[#111111]">Delivery Information</h3>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Address:</span>
              <span className="text-right text-[#111111]">123 Main Street, Quezon City, Metro Manila</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Recipient:</span>
              <span className="text-[#111111]">Juan Dela Cruz</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Contact:</span>
              <span className="text-[#111111]">+63 917 123 4567</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Expected Delivery:</span>
              <span className="text-[#111111]">May 15, 2025</span>
            </div>
          </div>
        </div>
      </Card>
      <IOSTabBar />
      <IOSHomeIndicator />
    </div>
  )
}
