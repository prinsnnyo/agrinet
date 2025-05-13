"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Camera } from "lucide-react"
import { useState } from "react"
import { IOSPageHeader } from "@/components/ios-page-header"

export default function PostCrop() {
  const [images, setImages] = useState<string[]>([])

  // Mock function to simulate image upload
  const handleImageUpload = () => {
    setImages([...images, `/placeholder.svg?height=100&width=100&text=Rice+Image+${images.length + 1}`])
  }

  return (
    <div className="min-h-screen bg-agrinet-pattern relative z-10">
      <div className="p-5 pb-20 max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-lg my-4 shadow-lg">
        <IOSPageHeader title="Post Your Crop" backLink="/dashboard" />

      <form className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="crop-type" className="text-[#111111]">
            Crop Type
          </Label>
          <Select>
            <SelectTrigger id="crop-type" className="bg-white rounded-lg border-[#E5E5EA] h-12">
              <SelectValue placeholder="Select crop type" />
            </SelectTrigger>
            <SelectContent className="bg-white rounded-lg">
              <SelectItem value="jasmine">Jasmine Rice</SelectItem>
              <SelectItem value="brown">Brown Rice</SelectItem>
              <SelectItem value="white">White Rice</SelectItem>
              <SelectItem value="black">Black Rice</SelectItem>
              <SelectItem value="glutinous">Glutinous Rice</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="quantity" className="text-[#111111]">
            Quantity Available (kg)
          </Label>
          <Input
            id="quantity"
            type="number"
            placeholder="Enter quantity"
            className="bg-white rounded-lg border-[#E5E5EA] h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="price" className="text-[#111111]">
            Price per kg (₱)
          </Label>
          <Input
            id="price"
            type="number"
            placeholder="Enter price"
            className="bg-white rounded-lg border-[#E5E5EA] h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="harvest-date" className="text-[#111111]">
            Harvest Date
          </Label>
          <Input id="harvest-date" type="date" className="bg-white rounded-lg border-[#E5E5EA] h-12" />
        </div>

        <div className="space-y-2">
          <Label className="text-[#111111]">Quality Certifications</Label>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="organic"
                className="rounded border-[#E5E5EA] h-5 w-5 text-green-600 focus:ring-green-600"
              />
              <Label htmlFor="organic" className="font-normal text-[#111111]">
                Organic
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="certified"
                className="rounded border-[#E5E5EA] h-5 w-5 text-green-600 focus:ring-green-600"
              />
              <Label htmlFor="certified" className="font-normal text-[#111111]">
                Certified
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="pesticide-free"
                className="rounded border-[#E5E5EA] h-5 w-5 text-green-600 focus:ring-green-600"
              />
              <Label htmlFor="pesticide-free" className="font-normal text-[#111111]">
                Pesticide-free
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="non-gmo"
                className="rounded border-[#E5E5EA] h-5 w-5 text-green-600 focus:ring-green-600"
              />
              <Label htmlFor="non-gmo" className="font-normal text-[#111111]">
                Non-GMO
              </Label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description" className="text-[#111111]">
            Description
          </Label>
          <Textarea
            id="description"
            placeholder="Describe your crop quality, growing conditions, etc."
            className="bg-white rounded-lg border-[#E5E5EA] min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-[#111111]">Upload Images</Label>
          <div className="grid grid-cols-3 gap-3">
            {images.map((img, index) => (
              <div
                key={index}
                className="aspect-square bg-white rounded-xl shadow-sm flex items-center justify-center overflow-hidden"
              >
                <img
                  src={img || "/placeholder.svg"}
                  alt={`Crop image ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              className="aspect-square flex flex-col items-center justify-center gap-1 border-dashed border-[#E5E5EA] bg-white rounded-xl"
              onClick={handleImageUpload}
            >
              <Camera className="h-6 w-6 text-green-600" />
              <span className="text-xs text-[#8E8E93]">Add</span>
            </Button>
          </div>
        </div>

        <Button className="w-full h-12 rounded-full bg-green-600 hover:bg-green-700 mt-4">Post Crop Listing</Button>
      </form>
      </div>
    </div>
  )
}
