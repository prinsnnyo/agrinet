import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import { IOSPageHeader } from "@/components/ios-page-header"

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-marketplace relative z-10">
      <div className="p-5 pb-20 max-w-md mx-auto backdrop-blur-sm rounded-lg shadow-lg">
        <IOSPageHeader title="Marketplace" backLink="/dashboard" />

      <div className="flex gap-2 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#8E8E93]" />
          <Input
            type="search"
            placeholder="Search crops..."
            className="pl-9 bg-white border-[#E5E5EA] rounded-lg h-10 text-[#111111] placeholder:text-[#8E8E93]"
          />
        </div>
        <Button variant="outline" size="icon" className="h-10 w-10 rounded-lg border border-[#E5E5EA] bg-white">
          <Filter className="h-4 w-4 text-[#8E8E93]" />
        </Button>
      </div>

      <div className="space-y-4">
        <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium text-[#111111]">Premium Jasmine Rice</h3>
                <p className="text-sm text-[#8E8E93]">Seller: Green Valley Farm</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    Organic
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    Certified
                  </div>
                </div>
                <p className="text-green-600 font-medium mt-2">₱45 per kg</p>
                <p className="text-sm text-[#8E8E93]">Available: 5,000 kg</p>
              </div>
              <div className="flex flex-col gap-2">
                <Button size="sm" className="bg-green-600 hover:bg-green-700 rounded-full">
                  Buy Now
                </Button>
                <Button size="sm" variant="outline" className="border-green-600 text-green-600 rounded-full">
                  Negotiate
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium text-[#111111]">Organic Brown Rice</h3>
                <p className="text-sm text-[#8E8E93]">Seller: Sunshine Farms</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    Organic
                  </div>
                </div>
                <p className="text-green-600 font-medium mt-2">₱52 per kg</p>
                <p className="text-sm text-[#8E8E93]">Available: 2,000 kg</p>
              </div>
              <div className="flex flex-col gap-2">
                <Button size="sm" className="bg-green-600 hover:bg-green-700 rounded-full">
                  Buy Now
                </Button>
                <Button size="sm" variant="outline" className="border-green-600 text-green-600 rounded-full">
                  Negotiate
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium text-[#111111]">White Rice</h3>
                <p className="text-sm text-[#8E8E93]">Seller: Rice Valley Co-op</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    Certified
                  </div>
                </div>
                <p className="text-green-600 font-medium mt-2">₱38 per kg</p>
                <p className="text-sm text-[#8E8E93]">Available: 10,000 kg</p>
              </div>
              <div className="flex flex-col gap-2">
                <Button size="sm" className="bg-green-600 hover:bg-green-700 rounded-full">
                  Buy Now
                </Button>
                <Button size="sm" variant="outline" className="border-green-600 text-green-600 rounded-full">
                  Negotiate
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium text-[#111111]">Black Rice</h3>
                <p className="text-sm text-[#8E8E93]">Seller: Mountain Rice Farms</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    Organic
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    Certified
                  </div>
                </div>
                <p className="text-green-600 font-medium mt-2">₱65 per kg</p>
                <p className="text-sm text-[#8E8E93]">Available: 1,000 kg</p>
              </div>
              <div className="flex flex-col gap-2">
                <Button size="sm" className="bg-green-600 hover:bg-green-700 rounded-full">
                  Buy Now
                </Button>
                <Button size="sm" variant="outline" className="border-green-600 text-green-600 rounded-full">
                  Negotiate
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
      </div>
    </div>
  )
}
