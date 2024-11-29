"use client"
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export function TrafficAccidentForm() {
  const [isCitizen, setIsCitizen] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessPopup(true);
  };

  return (
    <>
      <Card className="w-[500px] mx-auto">
        <CardHeader>
          <CardTitle>Báo cáo tai nạn giao thông</CardTitle>
          <CardDescription>
            Điền thông tin đầy đủ để báo cáo vụ tai nạn giao thông.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              {/* Địa chỉ */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="address">Địa chỉ</Label>
                <Input id="address" placeholder="Nhập địa chỉ nơi xảy ra tai nạn" />
              </div>

              {/* Mô tả */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Mô tả</Label>
                <Textarea
                  id="description"
                  placeholder="Mô tả chi tiết về tai nạn"
                />
              </div>

              {/* Thời gian */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="time">Thời gian</Label>
                <Input id="time" type="datetime-local" />
              </div>

              {/* Hình ảnh */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="images">Hình ảnh</Label>
                <Input id="images" type="file" multiple accept="image/*" />
              </div>

              {/* Xác thực qua VNeID (cho người dân) */}
              <div className="flex items-center space-x-2">
                <Label htmlFor="isCitizen">Bạn là người dân?</Label>
                <input
                  id="isCitizen"
                  type="checkbox"
                  checked={isCitizen}
                  onChange={(e) => setIsCitizen(e.target.checked)}
                />
              </div>
              {isCitizen && (
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="vneid">Xác thực qua VNeID</Label>
                  <Button variant="outline" id="vneid">
                    Xác thực qua VNeID
                  </Button>
                </div>
              )}

              {/* Hành trình */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="video">Dữ liệu camera (video)</Label>
                <Input id="video" type="file" accept="video/*" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="gps-history">Lịch sử GPS</Label>
                <Input id="gps-history" type="file" accept=".csv, .json" />
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <Button type="button" variant="outline">
                Hủy
              </Button>
              <Button type="submit">Gửi báo cáo</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Success Popup */}
      {showSuccessPopup && (
        <Dialog open={showSuccessPopup} onOpenChange={setShowSuccessPopup}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Gửi báo cáo thành công</DialogTitle>
              <DialogDescription>
                Cảm ơn bạn đã gửi thông tin báo cáo. Chúng tôi sẽ xử lý trong thời gian sớm nhất!
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                onClick={() => setShowSuccessPopup(false)}
                className="w-full"
              >
                Đóng
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}