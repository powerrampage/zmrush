"use client"

import * as React from "react"

export interface ClientBodyProps {
  children: React.ReactNode
}

export function ClientBody({ children }: ClientBodyProps) {
  return (
    <div className="main-container">
      {children}
    </div>
  )
}
