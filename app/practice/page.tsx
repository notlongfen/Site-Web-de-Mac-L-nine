"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/custom/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/custom/card"
import { Badge } from "@/components/custom/badge"
import { ChevronLeft, ChevronRight, MapPin, Users, Heart, AlertTriangle, CheckCircle, RotateCcw } from "lucide-react"
import Link from "next/link"
import PageTransition from "@/components/page-transition"

interface Region {
  id: string
  name: string
  position: { x: number; y: number }
  description: string
  challenges: string[]
  solutions: string[]
  isActive: boolean
}

interface FlipCard {
  id: string
  title: string
  type: "positive" | "negative"
  frontContent: string
  backContent: string
  isFlipped: boolean
}

const vietnamRegions: Region[] = [
  {
    id: "tay-bac",
    name: "Tây Bắc",
    position: { x: 20, y: 25 },
    description: "Khu vực có nhiều dân tộc thiểu số với tín ngưỡng truyền thống đa dạng",
    challenges: [
      "Tín ngưỡng truyền thống phức tạp",
      "Địa hình khó khăn, thông tin chậm",
      "Một số hoạt động tôn giáo chưa được quản lý chặt chẽ",
    ],
    solutions: [
      "Tăng cường tuyên truyền chính sách tôn giáo",
      "Đào tạo cán bộ dân tộc am hiểu tín ngưỡng địa phương",
      "Phát triển kinh tế-xã hội vùng đồng bào dân tộc thiểu số",
    ],
    isActive: false,
  },
  {
    id: "tay-nguyen",
    name: "Tây Nguyên",
    position: { x: 60, y: 70 },
    description: "Vùng có nhiều dân tộc thiểu số, từng có các vấn đề phức tạp về tôn giáo",
    challenges: [
      "Lợi dụng tôn giáo để kích động ly khai",
      "Truyền đạo trái phép từ nước ngoài",
      "Tâm lý bất an trong một bộ phận đồng bào",
    ],
    solutions: [
      "Đối thoại, thuyết phục, giải thích chính sách",
      "Xử lý nghiêm các hành vi lợi dụng tôn giáo",
      "Phát triển kinh tế, nâng cao đời sống",
    ],
    isActive: false,
  },
  {
    id: "tay-nam-bo",
    name: "Tây Nam Bộ",
    position: { x: 45, y: 85 },
    description: "Khu vực đồng bằng sông Cửu Long với đa dạng tôn giáo",
    challenges: [
      "Hoạt động tôn giáo phức tạp, đa dạng",
      "Một số tổ chức tôn giáo chưa được công nhận",
      "Vấn đề biên giới, di cư tự do",
    ],
    solutions: [
      "Hoàn thiện thủ tục công nhận tổ chức tôn giáo",
      "Tăng cường hợp tác với các nước láng giềng",
      "Phát triển du lịch tâm linh có kiểm soát",
    ],
    isActive: false,
  },
  {
    id: "duyen-hai-mien-trung",
    name: "Duyên hải miền Trung",
    position: { x: 70, y: 50 },
    description: "Vùng ven biển với nhiều di tích tôn giáo, tín ngưỡng",
    challenges: [
      "Quản lý lễ hội tôn giáo quy mô lớn",
      "Cân bằng giữa phát triển du lịch và bảo tồn",
      "Hoạt động tôn giáo nước ngoài",
    ],
    solutions: [
      "Xây dựng quy chế tổ chức lễ hội",
      "Phát triển du lịch tâm linh bền vững",
      "Tăng cường quản lý hoạt động tôn giáo nước ngoài",
    ],
    isActive: false,
  },
]

const flipCards: FlipCard[] = [
  {
    id: "charity",
    title: "Hoạt động từ thiện",
    type: "positive",
    frontContent: "Các tổ chức tôn giáo tích cực tham gia hoạt động từ thiện, giúp đỡ người nghèo",
    backContent:
      "Hàng năm, các tổ chức tôn giáo đóng góp hàng nghìn tỷ đồng cho các hoạt động từ thiện, xã hội. Điển hình như Giáo hội Phật giáo Việt Nam, Ủy ban Đoàn kết Công giáo...",
    isFlipped: false,
  },
  {
    id: "education",
    title: "Giáo dục - Y tế",
    type: "positive",
    frontContent: "Đóng góp tích cực vào sự nghiệp giáo dục và chăm sóc sức khỏe nhân dân",
    backContent:
      "Nhiều cơ sở giáo dục, y tế do tôn giáo thành lập đã đào tạo nhân tài, chăm sóc sức khỏe cho nhân dân. Các trường đại học, bệnh viện công giáo, phật giáo có uy tín cao.",
    isFlipped: false,
  },
  {
    id: "disaster-relief",
    title: "Cứu trợ thiên tai",
    type: "positive",
    frontContent: "Tham gia tích cực công tác cứu trợ, khắc phục hậu quả thiên tai",
    backContent:
      "Trong các đợt thiên tai, lũ lụt, các tổ chức tôn giáo luôn là những đơn vị đầu tiên có mặt tại hiện trường, hỗ trợ đồng bào bị nạn với tinh thần tương thân tương ái.",
    isFlipped: false,
  },
  {
    id: "illegal-preaching",
    title: "Truyền đạo trái phép",
    type: "negative",
    frontContent: "Một số cá nhân, tổ chức tiến hành truyền đạo không đúng quy định",
    backContent:
      "Hoạt động truyền đạo trái phép thường diễn ra ở vùng sâu, vùng xa, nhắm vào đồng bào dân tộc thiểu số. Cần tăng cường tuyên truyền pháp luật và xử lý nghiêm theo quy định.",
    isFlipped: false,
  },
  {
    id: "separatism",
    title: "Kích động ly khai",
    type: "negative",
    frontContent: "Lợi dụng tôn giáo để kích động, chia rẽ khối đại đoàn kết dân tộc",
    backContent:
      "Các thế lực thù địch lợi dụng tôn giáo để tuyên truyền chống phá, kích động ly khai. Cần phân biệt rõ hoạt động tôn giáo chính đáng với hành vi lợi dụng tôn giáo.",
    isFlipped: false,
  },
  {
    id: "extremism",
    title: "Cực đoan tôn giáo",
    type: "negative",
    frontContent: "Ngăn chặn các biểu hiện cực đoan, bạo lực nhân danh tôn giáo",
    backContent:
      "Mặc dù ít xảy ra, nhưng cần cảnh giác với các biểu hiện cực đoan tôn giáo. Tăng cường giáo dục, tuyên truyền về tôn giáo hòa bình, khoan dung.",
    isFlipped: false,
  },
]

export default function PracticePage() {
  const [regions, setRegions] = useState<Region[]>(vietnamRegions)
  const [cards, setCards] = useState<FlipCard[]>(flipCards)
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null)

  const handleRegionClick = (regionId: string) => {
    const region = regions.find((r) => r.id === regionId)
    setSelectedRegion(region || null)
    setRegions(regions.map((r) => ({ ...r, isActive: r.id === regionId })))
  }

  const flipCard = (cardId: string) => {
    setCards(cards.map((card) => (card.id === cardId ? { ...card, isFlipped: !card.isFlipped } : card)))
  }

  const resetCards = () => {
    setCards(flipCards.map((card) => ({ ...card, isFlipped: false })))
  }

  return (
    <PageTransition>
      <div className="flex-1 bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-heading font-black text-foreground mb-4">Thực tiễn & Hòa hợp tôn giáo</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Khám phá tình hình thực tế và những thách thức trong quản lý tôn giáo tại Việt Nam
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-black text-center text-foreground mb-8">Bản đồ vùng nhạy cảm</h2>
          <p className="text-center text-muted-foreground mb-8">
            Nhấp vào các vùng để xem thông tin chi tiết về tình hình tôn giáo
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="relative">
              <Card className="p-6">
                <div className="relative w-full h-96 bg-gradient-to-b from-blue-50 to-green-50 rounded-lg overflow-hidden">
                  {/* Vietnam map outline (simplified) */}
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      d="M30 10 L70 10 L75 25 L70 40 L65 55 L70 70 L60 85 L40 90 L25 85 L20 70 L25 55 L20 40 L25 25 Z"
                      fill="rgba(8, 145, 178, 0.1)"
                      stroke="rgba(8, 145, 178, 0.3)"
                      strokeWidth="0.5"
                    />
                  </svg>

                  {/* Region hotspots */}
                  {regions.map((region) => (
                    <button
                      key={region.id}
                      className={`absolute w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all hover:scale-125 ${
                        region.isActive ? "bg-primary scale-125" : "bg-accent"
                      }`}
                      style={{
                        left: `${region.position.x}%`,
                        top: `${region.position.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      onClick={() => handleRegionClick(region.id)}
                    >
                      <MapPin className="w-3 h-3 text-white" />
                    </button>
                  ))}
                </div>
              </Card>
            </div>

            {/* Region Details */}
            <div>
              {selectedRegion ? (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>{selectedRegion.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground">{selectedRegion.description}</p>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <AlertTriangle className="h-4 w-4 text-destructive mr-2" />
                        Thách thức
                      </h4>
                      <ul className="space-y-1">
                        {selectedRegion.challenges.map((challenge, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Giải pháp
                      </h4>
                      <ul className="space-y-1">
                        {selectedRegion.solutions.map((solution, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="flex items-center justify-center h-64">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Chọn một vùng trên bản đồ để xem thông tin chi tiết</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Flip Cards Section */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-heading font-black text-foreground">
              Hoạt động tôn giáo: Tích cực & Tiêu cực
            </h2>
            <Button variant="outline" size="sm" onClick={resetCards}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Đặt lại
            </Button>
          </div>
          <p className="text-muted-foreground mb-8">Nhấp vào các thẻ để khám phá chi tiết về các hoạt động tôn giáo</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <Card
                key={card.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-300 min-h-48"
                onClick={() => flipCard(card.id)}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center space-x-2 mb-4">
                    {card.type === "positive" ? (
                      <Heart className="h-5 w-5 text-primary" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                    )}
                    <Badge variant={card.type === "positive" ? "default" : "destructive"}>
                      {card.type === "positive" ? "Tích cực" : "Tiêu cực"}
                    </Badge>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">{card.title}</h3>

                  <p className="text-sm text-muted-foreground flex-1">
                    {card.isFlipped ? card.backContent : card.frontContent}
                  </p>

                  <div className="mt-4 text-xs text-muted-foreground text-center">
                    {card.isFlipped ? "Nhấp để xem tóm tắt" : "Nhấp để xem chi tiết"}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-black text-center text-foreground mb-8">Nhận định chính</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">Hòa hợp tôn giáo</h3>
                <p className="text-sm text-muted-foreground">
                  Việt Nam không có chiến tranh tôn giáo quy mô lớn nhờ văn hóa gắn kết và chính sách khoan dung
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">Đóng góp tích cực</h3>
                <p className="text-sm text-muted-foreground">
                  Các tôn giáo đóng góp tích cực vào từ thiện, giáo dục, y tế và cứu trợ thiên tai
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <AlertTriangle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">Quản lý hiệu quả</h3>
                <p className="text-sm text-muted-foreground">
                  Cần tiếp tục tăng cường quản lý để ngăn chặn lợi dụng tôn giáo cho mục đích xấu
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
            <Link href="/policy">
              <Button variant="outline">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Chính sách Việt Nam
              </Button>
            </Link>
            <Link href="/solutions">
              <Button>
                Giải pháp định hướng
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
