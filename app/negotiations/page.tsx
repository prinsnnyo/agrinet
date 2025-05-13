import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { IOSPageHeader } from "@/components/ios-page-header"

export default function Negotiations() {
  return (
    <div className="min-h-screen bg-agrinet-pattern relative z-10">
      <div className="p-5 max-w-md mx-auto bg-white/70 backdrop-blur-sm rounded-lg my-4 shadow-lg">
        <IOSPageHeader title="Negotiations" backLink="/dashboard" />

      <div className="space-y-4">
        <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-[#111111]">Premium Jasmine Rice</h3>
                <p className="text-sm text-[#8E8E93]">With: Metro Supermarket</p>
              </div>
              <div className="bg-green-100 text-green-800 px-2.5 py-1 rounded-full text-xs font-medium">Active</div>
            </div>

            <div className="border-t border-b border-[#E5E5EA] py-3 my-3">
              <div className="flex justify-between text-sm">
                <span className="text-[#8E8E93]">Your offer:</span>
                <span className="font-medium text-[#111111]">₱45 per kg</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#8E8E93]">Their offer:</span>
                <span className="font-medium text-[#111111]">₱42 per kg</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#8E8E93]">Quantity:</span>
                <span className="text-[#111111]">2,000 kg</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm mb-3">
              <span className="text-[#8E8E93]">Last updated:</span>
              <span className="text-[#111111]">2 hours ago</span>
            </div>

            <Link href="/negotiations/1">
              <Button
                variant="outline"
                className="w-full flex items-center justify-between rounded-lg border-[#E5E5EA] bg-white h-10"
              >
                <span className="text-[#111111]">Continue Negotiation</span>
                <ChevronRight className="h-4 w-4 text-[#8E8E93]" />
              </Button>
            </Link>
          </div>
        </Card>

        <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-[#111111]">Organic Brown Rice</h3>
                <p className="text-sm text-[#8E8E93]">With: Healthy Foods Co.</p>
              </div>
              <div className="bg-green-100 text-green-800 px-2.5 py-1 rounded-full text-xs font-medium">Active</div>
            </div>

            <div className="border-t border-b border-[#E5E5EA] py-3 my-3">
              <div className="flex justify-between text-sm">
                <span className="text-[#8E8E93]">Your offer:</span>
                <span className="font-medium text-[#111111]">₱52 per kg</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#8E8E93]">Their offer:</span>
                <span className="font-medium text-[#111111]">₱50 per kg</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#8E8E93]">Quantity:</span>
                <span className="text-[#111111]">1,000 kg</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm mb-3">
              <span className="text-[#8E8E93]">Last updated:</span>
              <span className="text-[#111111]">1 day ago</span>
            </div>

            <Link href="/negotiations/2">
              <Button
                variant="outline"
                className="w-full flex items-center justify-between rounded-lg border-[#E5E5EA] bg-white h-10"
              >
                <span className="text-[#111111]">Continue Negotiation</span>
                <ChevronRight className="h-4 w-4 text-[#8E8E93]" />
              </Button>
            </Link>
          </div>
        </Card>

        <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-[#111111]">White Rice</h3>
                <p className="text-sm text-[#8E8E93]">With: Local Restaurant Association</p>
              </div>
              <div className="bg-yellow-100 text-yellow-800 px-2.5 py-1 rounded-full text-xs font-medium">Pending</div>
            </div>

            <div className="border-t border-b border-[#E5E5EA] py-3 my-3">
              <div className="flex justify-between text-sm">
                <span className="text-[#8E8E93]">Your offer:</span>
                <span className="font-medium text-[#111111]">₱38 per kg</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#8E8E93]">Their offer:</span>
                <span className="font-medium text-[#111111]">Awaiting response</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#8E8E93]">Quantity:</span>
                <span className="text-[#111111]">5,000 kg</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm mb-3">
              <span className="text-[#8E8E93]">Last updated:</span>
              <span className="text-[#111111]">3 days ago</span>
            </div>

            <Link href="/negotiations/3">
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
