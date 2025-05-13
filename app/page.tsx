import { Button } from "@/components/ui/button"
import Link from "next/link"
import { IOSHomeIndicator } from "@/components/ios-home-indicator"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-agrinet relative z-10">
      <div className="w-full max-w-md px-5 py-8 flex flex-col items-center gap-8 backdrop-blur-sm rounded-lg my-4 shadow-lg">
        <div className="h-[150px] w-[150px] rounded-full shadow-sm flex items-center justify-center overflow-hidden">
          <img
            src="/logo3.png"
            alt="AgriNet Logo"
            className="h-full w-full object-cover"
          />
        </div>

        <h2 className="text-4xl font-bold text-center text-[#000000]">AgriNet</h2>

        <p className="text-center text-[#ffffff] text-lg">
          Connecting Farmers. Empowering Harvests
        </p>

        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="bg-green-600 rounded-2xl shadow-sm p-4 flex flex-col items-center">
            <div className="h-14 w-14 rounded-full bg-green-800 flex items-center justify-center mb-2">🌾</div>
            <h3 className="font-medium text-center text-[#ffffff]">Crop Posting</h3>
          </div>

          <div className="bg-green-600 rounded-2xl shadow-sm p-4 flex flex-col items-center">
            <div className="h-14 w-14 rounded-full bg-green-800 flex items-center justify-center mb-2">💬</div>
            <h3 className="font-medium text-center text-[#ffffff]">Direct Negotiations</h3>
          </div>

          <div className="bg-green-600 rounded-2xl shadow-sm p-4 flex flex-col items-center">
            <div className="h-14 w-14 rounded-full bg-green-800 flex items-center justify-center mb-2">📦</div>
            <h3 className="font-medium text-center text-[#ffffff]">Order Tracking</h3>
          </div>

          <div className="bg-green-600 rounded-2xl shadow-sm p-4 flex flex-col items-center">
            <div className="h-14 w-14 rounded-full bg-green-800 flex items-center justify-center mb-2">🚚</div>
            <h3 className="font-medium text-center text-[#ffffff]">Logistics Coordination</h3>
          </div>
        </div>

        <div className="w-full mt-4">
          <Link href="/dashboard" className="w-full block">
            <Button className="w-full h-12 rounded-full bg-green-600 hover:bg-green-700 text-base">Get Started</Button>
          </Link>

          <div className="my-6 flex items-center">
            <div className="flex-1 h-px bg-[#E5E5EA]"></div>
            <span className="px-4 text-[#8E8E93] text-sm">or</span>
            <div className="flex-1 h-px bg-[#E5E5EA]"></div>
          </div>

          <Link href="/sign-in" className="w-full block">
            <Button
              variant="outline"
              className="w-full h-12 rounded-full border-green-600 text-green-600 hover:bg-green-50 text-base"
            >
              Sign In
            </Button>
          </Link>
        </div>
      </div>

      <IOSHomeIndicator />
    </main>
  )
}
