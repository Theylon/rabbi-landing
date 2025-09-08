
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function RabbiLandingPage() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.type = 'text/css';
    styleTag.innerHTML = \`
      * {
        cursor: url(https://cur.cursors-4u.net/symbols/sym-1/sym98.cur), auto !important;
      }
    \`;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div className="bg-[#F6F3E7] text-[#011C39] min-h-screen relative overflow-x-hidden">
      <h1 className="text-4xl text-center mt-20">Get Access to Jewish Success</h1>
    </div>
  );
}
