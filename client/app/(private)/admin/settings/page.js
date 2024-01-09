"use client";
import AdminBer from "@/components/admin/AdminBer";
import UpdateGeneralSettings from "@/components/Settings/UpdateGeneralSettings";
import AddTestimonial from "@/components/Testimonial/AddTestimonial";
import TestimonialTable from "@/components/Testimonial/TestimonialTable";
import { useState } from "react";

export default function TestimonialPage() {
  
  return (
    <div className="max-w-screen-xl mx-auto my-1 md:px-8">
      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/12">
          <AdminBer />
        </div>
        <div className="w-full md:w-9/12 pl-0 md:pl-6">
          <div className="flex flex-col  items-start mt-3">
            <div className="w-full  pr-0 md:mr-8">
              <h1 className="text-md font-semibold mb-2 block">
                General Settings
              </h1>
              <UpdateGeneralSettings
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
