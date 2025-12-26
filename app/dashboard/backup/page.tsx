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
import { DatabaseBackup } from "lucide-react"

const DUMMY_BACKUPS = [
  {
    id: "BK-001",
    range: "2023-10-01 - 2023-10-31",
    location: "Singapore (SG-1)",
    status: "Success",
    createdAt: "2023-11-01 10:00",
  },
  {
    id: "BK-002",
    range: "2023-09-01 - 2023-09-30",
    location: "Jakarta (JKT-2)",
    status: "Success",
    createdAt: "2023-10-05 14:30",
  },
  {
    id: "BK-003",
    range: "2023-08-01 - 2023-08-31",
    location: "Singapore (SG-1)",
    status: "Failed",
    createdAt: "2023-09-02 09:15",
  },
]

export default function BackupPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleBackup = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DatabaseBackup className="h-5 w-5 text-primary" />
            Backup Database
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleBackup} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
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
              {isLoading ? "Processing..." : "Backup Data"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle>Backup History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead>Backup ID</TableHead>
                  <TableHead>Date Range</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created At</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {DUMMY_BACKUPS.map((backup) => (
                  <TableRow key={backup.id}>
                    <TableCell className="font-medium">{backup.id}</TableCell>
                    <TableCell>{backup.range}</TableCell>
                    <TableCell>{backup.location}</TableCell>
                    <TableCell>
                      <Badge
                        variant={backup.status === "Success" ? "default" : "destructive"}
                        className={backup.status === "Success" ? "bg-green-500 hover:bg-green-600" : ""}
                      >
                        {backup.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">{backup.createdAt}</TableCell>
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
