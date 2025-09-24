"use client";

import { Navigation } from "@/components/navigation";
import { Button } from "@/components/custom/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/custom/card";
import { Badge } from "@/components/custom/badge";
import {
  ChevronLeft,
  Home,
  QrCode,
  CheckCircle,
  Users,
  Shield,
} from "lucide-react";
import Link from "next/link";
import PageTransition from "@/components/page-transition";

export default function SummaryPage() {
  return (
    <PageTransition>
      <div className="flex-1 bg-background">
        <Navigation />

        {/* Header */}
        <section className="bg-gradient-to-r from-primary to-accent py-16 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-heading font-black mb-6">
                Tổng kết
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                Hoàn thành hành trình tìm hiểu về tôn giáo trong lý thuyết
                Mác-Lênin
              </p>
            </div>
          </div>
        </section>

        {/* Key Messages */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-black text-center text-foreground mb-12">
              Ba thông điệp chính
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-heading font-black text-primary">
                    Tôn trọng
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">
                    Tôn trọng quyền tự do tín ngưỡng, tôn giáo của mọi công dân.
                    Không ai được cưỡng bức về vấn đề tôn giáo.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-10 w-10 text-accent" />
                  </div>
                  <CardTitle className="text-2xl font-heading font-black text-accent">
                    Phát huy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">
                    Phát huy những giá trị tích cực của tôn giáo trong đời sống
                    xã hội, từ thiện, giáo dục và xây dựng cộng đồng.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-chart-3/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-10 w-10 text-chart-3" />
                  </div>
                  <CardTitle className="text-2xl font-heading font-black text-chart-3">
                    Đấu tranh
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">
                    Đấu tranh chống lợi dụng tôn giáo để chống phá Đảng, Nhà
                    nước và chia rẽ khối đại đoàn kết dân tộc.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Journey Summary */}
        <section className="py-16 bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-black text-center text-foreground mb-12">
              Hành trình đã hoàn thành
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Lý thuyết nền tảng",
                  description:
                    "4 bước hiểu về nguồn gốc, bản chất và thái độ của Mác-Lênin",
                  icon: "📚",
                  completed: true,
                },
                {
                  title: "Chính sách Việt Nam",
                  description: "Timeline từ Hiến pháp 2013 đến Đại hội XIII",
                  icon: "🏛️",
                  completed: true,
                },
                {
                  title: "Thực tiễn hòa hợp",
                  description: "Bản đồ vùng nhạy cảm và hoạt động tôn giáo",
                  icon: "🗺️",
                  completed: true,
                },
                {
                  title: "Giải pháp định hướng",
                  description: "Workshop phân loại giải pháp theo 3 lĩnh vực",
                  icon: "🎯",
                  completed: true,
                },
              ].map((item, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="text-3xl">{item.icon}</div>
                      {item.completed && (
                        <Badge variant="default">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Hoàn thành
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg font-heading">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* QR Code & Access */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-black text-foreground mb-8">
              Truy cập & Tài liệu tham khảo
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <QrCode className="h-6 w-6" />
                    <span>QR Code truy cập</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                    <QrCode className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Quét mã QR để truy cập website và tài liệu
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tài liệu tham khảo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-left">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">
                        Giáo trình Lý luận chính trị
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Hiến pháp 2013</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">
                        Luật Tín ngưỡng, Tôn giáo 2016
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Văn kiện Đại hội XII-XIII</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-black mb-4">
              Cảm ơn bạn đã tham gia!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Hy vọng bài thuyết trình đã giúp bạn hiểu rõ hơn về tôn giáo trong
              lý thuyết Mác-Lênin
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" variant="secondary">
                  <Home className="h-5 w-5 mr-2" />
                  Về trang chủ
                </Button>
              </Link>
              <Link href="/theory">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  Xem lại nội dung
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <Link href="/ai-usage">
                <Button variant="outline">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  AI Usage
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
