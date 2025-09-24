"use client";

// import { useState } from "react"
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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/custom/dialog";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  CheckCircle,
  Calendar,
  Users,
  Scale,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PageTransition from "@/components/page-transition";

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  type: "constitution" | "law" | "directive" | "congress";
  content: string;
  keyPoints: string[];
  verified: boolean;
  source: {
    title: string;
    url: string;
  };
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "constitution-1946",
    year: "1946",
    title: "Hiến pháp 1946",
    description: "Lần đầu tiên ghi nhận quyền tự do tín ngưỡng.",
    type: "constitution",
    content:
      'Điều 10 Hiến pháp 1946 quy định: "Công dân Việt Nam có quyền: … tự do tín ngưỡng." Đây là bản Hiến pháp đầu tiên, đặt nền móng cho chính sách tôn trọng tự do tôn giáo sau khi giành độc lập.',
    keyPoints: [
      "Điều 10: Công dân Việt Nam có quyền tự do tín ngưỡng",
      "Lần đầu tiên ghi nhận quyền tự do tôn giáo trong văn bản pháp lý",
      "Đặt nền móng cho chính sách tôn giáo sau độc lập",
    ],
    verified: true,
    source: {
      title: "Hiến pháp nước Việt Nam Dân chủ Cộng hòa năm 1946",
      url: "https://thuvienphapluat.vn/van-ban/Bo-may-hanh-chinh/Hien-phap-1946-Viet-Nam-Dan-Chu-Cong-Hoa-36134.aspx?utm_source=chatgpt.com",
    },
  },
  {
    id: "constitution-1959",
    year: "1959",
    title: "Hiến pháp 1959",
    description: "Khẳng định công dân có quyền theo hoặc không theo tôn giáo.",
    type: "constitution",
    content:
      'Hiến pháp 1959 tiếp tục kế thừa tinh thần 1946, quy định: "Công dân nước Việt Nam dân chủ cộng hòa có quyền tự do tín ngưỡng, theo hoặc không theo một tôn giáo nào" Đây là bước cụ thể hóa, trong bối cảnh xây dựng CNXH ở miền Bắc.',
    keyPoints: [
      "Kế thừa và phát triển tinh thần Hiến pháp 1946",
      "Quy định rõ quyền theo hoặc không theo tôn giáo",
      "Cụ thể hóa trong bối cảnh xây dựng CNXH ở miền Bắc",
    ],
    verified: true,
    source: {
      title: "Hiến pháp nước Việt Nam Dân chủ Cộng hòa năm 1959",
      url: "https://noichinh.vn/ho-so-tu-lieu/201401/quyen-tu-do-tin-nguong-ton-giao-trong-hien-phap-viet-nam-293755/?utm_source=chatgpt.com",
    },
  },
  {
    id: "constitution-1980",
    year: "1980",
    title: "Hiến pháp 1980",
    description:
      "Quyền tự do tín ngưỡng gắn chặt với nghĩa vụ công dân, kiểm soát chặt chẽ.",
    type: "constitution",
    content:
      'Điều 68 Hiến pháp 1980: "Công dân có quyền tự do tín ngưỡng, theo hoặc không theo một tôn giáo nào. Không ai được lợi dụng tôn giáo để vi phạm pháp luật." Đây là giai đoạn sau thống nhất, chính sách quản lý tôn giáo còn nhiều hạn chế.',
    keyPoints: [
      "Điều 68: Công dân có quyền tự do tín ngưỡng",
      "Nghiêm cấm lợi dụng tôn giáo để vi phạm pháp luật",
      "Giai đoạn sau thống nhất đất nước",
    ],
    verified: true,
    source: {
      title: "Hiến pháp Cộng hòa xã hội chủ nghĩa Việt Nam năm 1980",
      url: "https://www.phuyen.dcs.vn/o-dau-cung-vay-tu-do-ton-giao-tin-nguong-deu-phai-trong-khuon-kho-cua-phap-luat?utm_source=chatgpt.com",
    },
  },
  {
    id: "constitution-1992",
    year: "1992",
    title: "Hiến pháp 1992",
    description: "Xác định mọi tôn giáo bình đẳng trước pháp luật.",
    type: "constitution",
    content:
      'Việc thể chế hóa thành pháp luật về quyền tự do tôn giáo của công dân được thể hiện rộng rãi, toàn diện hơn tại điều 70 Hiến pháp 1992: "Công dân có quyền tự do tín ngưỡng, tôn giáo, theo hoặc không theo một tôn giáo nào. Các tôn giáo đều bình đẳng trước pháp luật. Những nơi thờ tự của các tín ngưỡng, tôn giáo được pháp luật bảo hộ. Không ai được xâm phạm tự do tín ngưỡng, tôn giáo hoặc lợi dụng tín ngưỡng, tôn giáo để làm trái pháp luật và chính sách của Nhà nước" Đây là bước tiến quan trọng, khẳng định sự bình đẳng pháp lý giữa các tôn giáo.',
    keyPoints: [
      "Điều 70: Quy định toàn diện về quyền tự do tín ngưỡng, tôn giáo",
      "Khẳng định các tôn giáo bình đẳng trước pháp luật",
      "Bảo hộ những nơi thờ tự của các tín ngưỡng, tôn giáo",
    ],
    verified: true,
    source: {
      title: "Hiến pháp Cộng hòa xã hội chủ nghĩa Việt Nam năm 1992",
      url: "https://www.phuyen.dcs.vn/o-dau-cung-vay-tu-do-ton-giao-tin-nguong-deu-phai-trong-khuon-kho-cua-phap-luat?utm_source=chatgpt.com",
    },
  },
  {
    id: "constitution-2013",
    year: "2013",
    title: "Hiến pháp 2013",
    description:
      "Bảo đảm mạnh mẽ quyền tự do tín ngưỡng, tôn giáo; Nhà nước tôn trọng và bảo hộ.",
    type: "constitution",
    content: `Điều 24 Hiến pháp 2013:

1. Mọi người có quyền tự do tín ngưỡng, tôn giáo, theo hoặc không theo một tôn giáo nào. Các tôn giáo bình đẳng trước pháp luật.

2. Nhà nước tôn trọng và bảo hộ quyền tự do tín ngưỡng, tôn giáo.

3. Không ai được xâm phạm tự do tín ngưỡng, tôn giáo hoặc lợi dụng tín ngưỡng, tôn giáo để vi phạm pháp luật.

Đây là sự mở rộng và nâng cao mức độ bảo đảm so với trước.`,
    keyPoints: [
      "Điều 24: Mọi người có quyền tự do tín ngưỡng, tôn giáo",
      "Nhà nước tôn trọng và bảo hộ quyền tự do tín ngưỡng, tôn giáo",
      "Các tôn giáo bình đẳng trước pháp luật",
    ],
    verified: true,
    source: {
      title: "Hiến pháp Cộng hòa xã hội chủ nghĩa Việt Nam năm 2013",
      url: "https://www.phuyen.dcs.vn/o-dau-cung-vay-tu-do-ton-giao-tin-nguong-deu-phai-trong-khuon-kho-cua-phap-luat?utm_source=chatgpt.com",
    },
  },
  {
    id: "law-2016",
    year: "2016",
    title: "Luật Tín ngưỡng, Tôn giáo năm 2016",
    description:
      "Luật chuyên ngành đầu tiên điều chỉnh toàn diện tín ngưỡng, tôn giáo.",
    type: "law",
    content: `Luật số 02/2016/QH14, hiệu lực từ 01-01-2018. 

Một số điểm chính:
- Nhà nước tôn trọng và bảo vệ quyền tự do tín ngưỡng, tôn giáo (Điều 3)
- Các tôn giáo bình đẳng trước pháp luật
- Quy định rõ hoạt động đăng ký tổ chức, sinh hoạt, đào tạo, xây dựng cơ sở thờ tự
- Điều 5: nghiêm cấm lợi dụng tôn giáo để chia rẽ dân tộc, xâm hại an ninh quốc gia, vi phạm pháp luật

Đây là văn bản pháp lý hiện hành toàn diện nhất về tôn giáo ở Việt Nam.`,
    keyPoints: [
      "Luật số 02/2016/QH14, hiệu lực từ 01-01-2018",
      "Điều 3: Nhà nước tôn trọng và bảo vệ quyền tự do tín ngưỡng, tôn giáo",
      "Quy định chi tiết về đăng ký tổ chức, sinh hoạt tôn giáo",
    ],
    verified: true,
    source: {
      title: "Luật Tín ngưỡng, Tôn giáo năm 2016",
      url: "https://thuvienphapluat.vn/van-ban/Van-hoa-Xa-hoi/Luat-tin-nguong-ton-giao-2016-322934.aspx?utm_source=chatgpt.com",
    },
  },
];

const policyPrinciples = [
  {
    icon: Scale,
    title: "Bình đẳng tôn giáo",
    description:
      "Mọi tôn giáo đều bình đẳng trước pháp luật, không phân biệt đối xử",
  },
  {
    icon: Users,
    title: "Đại đoàn kết",
    description: "Tăng cường khối đại đoàn kết toàn dân tộc, hòa hợp tôn giáo",
  },
  {
    icon: CheckCircle,
    title: "Tôn trọng - Phát huy",
    description:
      "Tôn trọng quyền tự do tín ngưỡng, phát huy giá trị tích cực của tôn giáo",
  },
];

export default function PolicyPage() {
  // const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "constitution":
        return <Scale className="h-5 w-5" />;
      case "law":
        return <FileText className="h-5 w-5" />;
      case "directive":
        return <Users className="h-5 w-5" />;
      case "congress":
        return <Calendar className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "constitution":
        return "bg-primary";
      case "law":
        return "bg-accent";
      case "directive":
        return "bg-secondary";
      case "congress":
        return "bg-chart-3";
      default:
        return "bg-muted";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "constitution":
        return "Hiến pháp";
      case "law":
        return "Luật";
      case "directive":
        return "Chỉ thị";
      case "congress":
        return "Đại hội Đảng";
      default:
        return "Văn kiện";
    }
  };

  return (
    <PageTransition>
      <div className="flex-1 bg-background">
        <Navigation />

        {/* Header */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Images above title */}
              <div className="flex justify-center items-center gap-8 mb-8">
                <div className="relative">
                  <Image
                    src="https://static.mattran.org.vn/Uploaded/buidoanhung/2021_08_03/3_8_huongdandantoctongiao_RIEL.jpg"
                    alt="Hướng dẫn dân tộc tôn giáo"
                    width={530}
                    height={150}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="https://xdcs.cdnchinhphu.vn/446259493575335936/2025/2/27/dt-1740632213853374599276-0-0-590-944-crop-1740632219225493771900.png"
                    alt="Chính sách dân tộc tôn giáo"
                    width={600}
                    height={150}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>
              </div>
              
              <h1 className="text-4xl font-heading font-black text-foreground mb-4">
                Chính sách về tôn giáo
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Khám phá sự phát triển của chính sách tôn giáo Việt Nam từ 1946
                đến nay qua các văn kiện pháp lý quan trọng
              </p>
            </div>
          </div>
        </section>

        {/* Policy Principles */}
        <section className="py-12 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-black text-center text-foreground mb-8">
              Nguyên tắc chính sách
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {policyPrinciples.map((principle, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <principle.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-heading">
                      {principle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {principle.description}
                    </p>
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
                      className={`absolute left-6 w-4 h-4 rounded-full ${getTypeColor(
                        event.type
                      )} border-4 border-background z-10`}
                    ></div>

                    {/* Content */}
                    <div className="ml-16 flex-1">
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div
                                className={`p-2 rounded-lg ${getTypeColor(
                                  event.type
                                )} text-white`}
                              >
                                {getTypeIcon(event.type)}
                              </div>
                              <div>
                                <CardTitle className="text-xl font-heading">
                                  {event.title}
                                </CardTitle>
                                <p className="text-sm text-muted-foreground">
                                  {event.year}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline">
                                {getTypeLabel(event.type)}
                              </Badge>
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
                          <p className="text-foreground mb-4">
                            {event.description}
                          </p>
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
                                  <div
                                    className={`p-2 rounded-lg ${getTypeColor(
                                      event.type
                                    )} text-white`}
                                  >
                                    {getTypeIcon(event.type)}
                                  </div>
                                  <span>{event.title}</span>
                                </DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <p className="text-foreground whitespace-pre-line">
                                  {event.content}
                                </p>
                                <div>
                                  <h4 className="font-semibold text-foreground mb-2">
                                    Điểm chính:
                                  </h4>
                                  <ul className="space-y-2">
                                    {event.keyPoints.map((point, idx) => (
                                      <li
                                        key={idx}
                                        className="flex items-start space-x-2"
                                      >
                                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-sm text-foreground">
                                          {point}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="pt-4 border-t">
                                  <h4 className="font-semibold text-foreground mb-2">
                                    Nguồn tham khảo:
                                  </h4>
                                  <a
                                    href={event.source.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-colors"
                                  >
                                    <FileText className="h-4 w-4" />
                                    <span>{event.source.title}</span>
                                    <svg
                                      className="h-3 w-3"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                      />
                                    </svg>
                                  </a>
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
            <h2 className="text-3xl font-heading font-black text-center text-foreground mb-8">
              Thống kê chính sách
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-black text-primary mb-2">5</div>
                  <p className="text-sm text-muted-foreground">
                    Hiến pháp (1946-2013)
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-black text-primary mb-2">1</div>
                  <p className="text-sm text-muted-foreground">
                    Luật chuyên biệt (2016)
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-black text-primary mb-2">
                    70
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Năm phát triển
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-black text-primary mb-2">6</div>
                  <p className="text-sm text-muted-foreground">
                    Văn kiện chính
                  </p>
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
  );
}
