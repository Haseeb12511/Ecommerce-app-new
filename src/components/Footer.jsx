import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

export default function FooterShadcn() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 pb-4 text-gray-300">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">My Shop</h2>
            <p className="text-sm text-gray-400">
              Best quality products at your doorstep.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-medium mb-3 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <Link to="/about">
                <li className="hover:text-pink-400 cursor-pointer">About Us</li>
              </Link>
              <Link to="/products">
                <li className="hover:text-pink-400 cursor-pointer">Products</li>
              </Link>
              <Link to="/faqs">
                <li className="hover:text-pink-400 cursor-pointer">FAQs</li>
              </Link>
              <Link to="/contact">
                <li className="hover:text-pink-400 cursor-pointer">Contact</li>
              </Link>
            </ul>
          </div>

          {/* Accordion for Policies */}
          <div>
            <h3 className="font-medium mb-3 text-white">Policies</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="privacy">
                <AccordionTrigger className="text-gray-300 hover:text-pink-400">
                  Privacy Policy
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  We respect your privacy and protect your data.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="terms">
                <AccordionTrigger className="text-gray-300 hover:text-pink-400">
                  Terms of Service
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Please read our terms before using the service.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-medium mb-3 text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2 hover:text-pink-400 cursor-pointer">
                <Mail className="h-4 w-4" /> support@myshop.com
              </li>
              <li className="flex items-center gap-2 hover:text-pink-400 cursor-pointer">
                <Phone className="h-4 w-4" /> +92 123 456789
              </li>
              <li className="flex items-center gap-2 hover:text-pink-400 cursor-pointer">
                <MapPin className="h-4 w-4" /> Lahore, Pakistan
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-6 bg-gray-700" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Icons with Tooltip */}
          <TooltipProvider>
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#">
                    <Facebook className="h-5 w-5 text-gray-400 hover:text-pink-400 transition" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Facebook</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#">
                    <Twitter className="h-5 w-5 text-gray-400 hover:text-pink-400 transition" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Twitter</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#">
                    <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-400 transition" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Instagram</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>

          {/* Copyright */}
          <p className="text-xs text-gray-500">
            © 2025 E-Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
