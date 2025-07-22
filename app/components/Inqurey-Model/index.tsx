"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { toast } from "sonner"
import { Send, X } from "lucide-react"

interface InquiryModalProps {
    isOpen: boolean
    onClose: () => void
    property?: any
}

export default function InquiryModal({ isOpen, onClose, property }: InquiryModalProps) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Inquiry submitted:", formData)
        toast.success("Inquiry sent successfully!", {
            description: "We'll get back to you soon.",
            duration: 4000,
        })
        setFormData({ fullName: "", email: "", phone: "", message: "" })
        onClose()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[450px] max-h-[85vh] overflow-y-auto glass-strong rounded-3xl border-0 shadow-2xl p-0">
                <div className="relative">
                    {/* Header with gradient background */}
                    <div className="bg-gradient-to-r from-[#2C5DA9] to-[#0B0D3D] rounded-t-3xl p-6 text-white">
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 text-white/80 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                        <DialogHeader className="text-left space-y-1">
                            <DialogTitle className="text-xl font-bold text-white">
                                Send Inquiry
                            </DialogTitle>
                            <DialogDescription className="text-blue-100 text-sm">
                                Get more information about this property
                            </DialogDescription>
                        </DialogHeader>
                    </div>

                    {/* Form content */}
                    <div className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <Label htmlFor="fullName" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                                        Full Name *
                                    </Label>
                                    <Input
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        className="h-9 border-gray-200 focus:border-blue-400 focus:ring-blue-400 rounded-lg text-sm"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <Label htmlFor="phone" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                                        Phone *
                                    </Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="h-9 border-gray-200 focus:border-blue-400 focus:ring-blue-400 rounded-lg text-sm"
                                        placeholder="Your phone"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="email" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                                    Email *
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="h-9 border-gray-200 focus:border-blue-400 focus:ring-blue-400 rounded-lg text-sm"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="message" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                                    Message
                                </Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us more about your requirements..."
                                    className="border-gray-200 focus:border-blue-400 focus:ring-blue-400 rounded-lg text-sm resize-none"
                                    rows={2}
                                />
                            </div>

                            {/* Action buttons */}
                            <div className="flex gap-3 pt-4">
                                <Button 
                                    type="button" 
                                    onClick={onClose} 
                                    variant="outline"
                                    className="flex-1 h-10 rounded-lg border-gray-300 text-gray-700 hover:bg-gray-50"
                                >
                                    Cancel
                                </Button>
                                <Button 
                                    type="submit" 
                                    className="flex-1 h-10 bg-gradient-to-r from-[#2C5DA9] to-[#0B0D3D] hover:from-[#2C5DA9] hover:to-[#0B0D3D] text-white rounded-lg font-semibold shadow-lg transition-all duration-200 hover:shadow-xl"
                                >
                                    <Send size={16} className="mr-2" />
                                    Send Inquiry
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
