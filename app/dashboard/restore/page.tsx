"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RotateCcw } from "lucide-react"

const DUMMY_RESTORES = [
  {
    id: "RS-101",
    range: "2023-01-01 - 2023-03-31",
    location: "Jakarta (JKT-2)",
    status: "Success",
    restoredAt: "2023-11-20 15:45",
  },
  {
    id: "RS-102",
    range: "2022-12-01 - 2022-12-31",
    location: "Singapore (SG-1)",
    status: "Success",
    restoredAt: "2023-11-15 11:20",
  },
]

export default function RestorePage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleRestore = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RotateCcw className="h-5 w-5 text-primary" />
            Restore Data
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRestore} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <div className="space-y-2">
              <Label>Date Range</Label>
              <div className="flex gap-2">
                <Input type="date" required className="flex-1" />
                <span className="flex items-center text-muted-foreground">-</span>
                <Input type="date" required className="flex-1" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Location</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sg1">Singapore (SG-1)</SelectItem>
                  <SelectItem value="jkt2">Jakarta (JKT-2)</SelectItem>
                  <SelectItem value="us-west">US West (Oregon)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Processing..." : "Restore Data"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle>Restore History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead>Restore ID</TableHead>
                  <TableHead>Date Range</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Restored At</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {DUMMY_RESTORES.map((restore) => (
                  <TableRow key={restore.id}>
                    <TableCell className="font-medium">{restore.id}</TableCell>
                    <TableCell>{restore.range}</TableCell>
                    <TableCell>{restore.location}</TableCell>
                    <TableCell>
                      <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                        {restore.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">{restore.restoredAt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
