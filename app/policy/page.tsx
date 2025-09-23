"use client"

// import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/custom/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/custom/card"
import { Badge } from "@/components/custom/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/custom/dialog"
import { ChevronLeft, ChevronRight, FileText, CheckCircle, Calendar, Users, Scale } from "lucide-react"
import Link from "next/link"
import PageTransition from "@/components/page-transition"

interface TimelineEvent {
  id: string
  year: string
  title: string
  description: string
  type: "constitution" | "law" | "directive" | "congress"
  content: string
  keyPoints: string[]
  verified: boolean
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "constitution-2013",
    year: "2013",
    title: "Hiến pháp 2013",
    description: "Quy định về quyền tự do tín ngưỡng, tôn giáo",
    type: "constitution",
    content: "Hiến pháp 2013 khẳng định quyền tự do tín ngưỡng, tôn giáo của công dân Việt Nam",
    keyPoints: [
      "Điều 14: Mọi người có quyền tự do tín ngưỡng, tôn giáo, theo hoặc không theo tôn giáo nào",
      "Các quyền tự do tín ngưỡng, tôn giáo không được xâm phạm",
      "Mọi tôn giáo đều bình đẳng trước pháp luật",
      "Nhà nước tôn trọng và bảo hộ quyền tự do tín ngưỡng, tôn giáo",
    ],
    verified: true,
  },
  {
    id: "law-2016",
    year: "2016",
    title: "Luật Tín ngưỡng, Tôn giáo",
    description: "Luật chuyên biệt về tín ngưỡng và tôn giáo",
    type: "law",
    content: "Luật Tín ngưỡng, Tôn giáo số 02/2016/QH14 được Quốc hội thông qua ngày 18/11/2016",
    keyPoints: [
      "Quy định chi tiết về quyền tự do tín ngưỡng, tôn giáo",
      "Thủ tục đăng ký hoạt động tôn giáo",
      "Quyền và nghĩa vụ của tổ chức tôn giáo",
      "Xử lý vi phạm trong hoạt động tín ngưỡng, tôn giáo",
    ],
    verified: true,
  },
  {
    id: "directive-18",
    year: "2017",
    title: "Chỉ thị 18-CT/TW",
    description: "Về tăng cường sự lãnh đạo của Đảng đối với công tác tôn giáo",
    type: "directive",
    content:
      "Chỉ thị số 18-CT/TW ngày 01/02/2017 của Ban Bí thư về tăng cường sự lãnh đạo của Đảng đối với công tác tôn giáo trong tình hình mới",
    keyPoints: [
      "Phát huy vai trò tích cực của tôn giáo trong xây dựng đất nước",
      "Tăng cường đối thoại, hợp tác với các tổ chức tôn giáo",
      "Đấu tranh chống lợi dụng tôn giáo để chống phá Đảng, Nhà nước",
      "Nâng cao năng lực cán bộ làm công tác tôn giáo",
    ],
    verified: true,
  },
  {
    id: "congress-12",
    year: "2016",
    title: "Văn kiện Đại hội XII",
    description: "Định hướng chính sách tôn giáo giai đoạn 2016-2021",
    type: "congress",
    content: "Văn kiện Đại hội đại biểu toàn quốc lần thứ XII của Đảng Cộng sản Việt Nam",
    keyPoints: [
      "Tiếp tục thực hiện nhất quán chính sách tôn giáo của Đảng",
      "Phát huy giá trị tích cực của tôn giáo trong đời sống xã hội",
      "Tăng cường đại đoàn kết toàn dân tộc",
      "Xây dựng khối đại đoàn kết toàn dân tộc vững mạnh",
    ],
    verified: true,
  },
  {
    id: "congress-13",
    year: "2021",
    title: "Văn kiện Đại hội XIII",
    description: "Định hướng chính sách tôn giáo giai đoạn 2021-2026",
    type: "congress",
    content: "Văn kiện Đại hội đại biểu toàn quốc lần thứ XIII của Đảng Cộng sản Việt Nam",
    keyPoints: [
      "Tiếp tục đổi mới, hoàn thiện chính sách tôn giáo",
      "Phát huy vai trò của tôn giáo trong phát triển kinh tế-xã hội",
      "Tăng cường hợp tác quốc tế về tôn giáo",
      "Xây dựng xã hội dân chủ, văn minh",
    ],
    verified: true,
  },
]

const policyPrinciples = [
  {
    icon: Scale,
    title: "Bình đẳng tôn giáo",
    description: "Mọi tôn giáo đều bình đẳng trước pháp luật, không phân biệt đối xử",
  },
  {
    icon: Users,
    title: "Đại đoàn kết",
    description: "Tăng cường khối đại đoàn kết toàn dân tộc, hòa hợp tôn giáo",
  },
  {
    icon: CheckCircle,
    title: "Tôn trọng - Phát huy",
    description: "Tôn trọng quyền tự do tín ngưỡng, phát huy giá trị tích cực của tôn giáo",
  },
]

export default function PolicyPage() {
  // const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "constitution":
        return <Scale className="h-5 w-5" />
      case "law":
        return <FileText className="h-5 w-5" />
      case "directive":
        return <Users className="h-5 w-5" />
      case "congress":
        return <Calendar className="h-5 w-5" />
      default:
        return <FileText className="h-5 w-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "constitution":
        return "bg-primary"
      case "law":
        return "bg-accent"
      case "directive":
        return "bg-secondary"
      case "congress":
        return "bg-chart-3"
      default:
        return "bg-muted"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "constitution":
        return "Hiến pháp"
      case "law":
        return "Luật"
      case "directive":
        return "Chỉ thị"
      case "congress":
        return "Đại hội Đảng"
      default:
        return "Văn kiện"
    }
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-heading font-black text-foreground mb-4">Chính sách tôn giáo Việt Nam</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Khám phá sự phát triển của chính sách tôn giáo qua các văn kiện pháp lý quan trọng
            </p>
          </div>
        </div>
      </section>

      {/* Policy Principles */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-black text-center text-foreground mb-8">Nguyên tắc chính sách</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {policyPrinciples.map((principle, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <principle.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-heading">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-black text-center text-foreground mb-12">
            Dòng thời gian chính sách
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-8">
              {timelineEvents.map((event) => (
                <div key={event.id} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-6 w-4 h-4 rounded-full ${getTypeColor(event.type)} border-4 border-background z-10`}
                  ></div>

                  {/* Content */}
                  <div className="ml-16 flex-1">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg ${getTypeColor(event.type)} text-white`}>
                              {getTypeIcon(event.type)}
                            </div>
                            <div>
                              <CardTitle className="text-xl font-heading">{event.title}</CardTitle>
                              <p className="text-sm text-muted-foreground">{event.year}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">{getTypeLabel(event.type)}</Badge>
                            {event.verified && (
                              <Badge variant="default">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground mb-4">{event.description}</p>
                        <Dialog>
                          <DialogTrigger>
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4 mr-2" />
                              Xem trích dẫn
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle className="flex items-center space-x-2">
                                <div className={`p-2 rounded-lg ${getTypeColor(event.type)} text-white`}>
                                  {getTypeIcon(event.type)}
                                </div>
                                <span>{event.title}</span>
                              </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <p className="text-foreground">{event.content}</p>
                              <div>
                                <h4 className="font-semibold text-foreground mb-2">Điểm chính:</h4>
                                <ul className="space-y-2">
                                  {event.keyPoints.map((point, idx) => (
                                    <li key={idx} className="flex items-start space-x-2">
                                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                      <span className="text-sm text-foreground">{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-12 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-black text-center text-foreground mb-8">Thống kê chính sách</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-black text-primary mb-2">1</div>
                <p className="text-sm text-muted-foreground">Hiến pháp</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-black text-primary mb-2">1</div>
                <p className="text-sm text-muted-foreground">Luật chuyên biệt</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-black text-primary mb-2">1</div>
                <p className="text-sm text-muted-foreground">Chỉ thị của Đảng</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-black text-primary mb-2">2</div>
                <p className="text-sm text-muted-foreground">Văn kiện Đại hội</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <Link href="/theory">
              <Button variant="outline">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Lý thuyết nền tảng
              </Button>
            </Link>
            <Link href="/practice">
              <Button>
                Thực tiễn hòa hợp
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  )
}
