"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/custom/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/custom/card"
import { Badge } from "@/components/custom/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/custom/collapsible"
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, FileText, ExternalLink, BookOpen } from "lucide-react"
import Link from "next/link"
// import MotionWrapper, { MotionCard, MotionList, MotionListItem } from "@/components/motion-wrapper"

interface QAItem {
  id: string
  question: string
  answer: string
  details: string[]
  sources: string[]
  isOpen: boolean
}

const qaItems: QAItem[] = [
  {
    id: "cq8-3",
    question: "CQ8.3: Vì sao các ý thức hệ tôn giáo có sự khác biệt, thậm chí đối lập nhau?",
    answer:
      "Sự khác biệt và đối lập giữa các ý thức hệ tôn giáo xuất phát từ nhiều nguyên nhân khách quan và chủ quan.",
    details: [
      "Bối cảnh hình thành khác nhau: Mỗi tôn giáo ra đời trong hoàn cảnh lịch sử, địa lý, văn hóa khác nhau",
      "Lợi ích giai cấp: Các tôn giáo phản ánh và phục vụ lợi ích của các giai cấp, tầng lớp xã hội khác nhau",
      "Giáo lý và đối tượng thờ phụng: Mỗi tôn giáo có hệ thống giáo lý, nghi lễ và đối tượng thờ phụng riêng biệt",
      "Cách lý giải thế giới: Khác biệt trong cách nhìn nhận, giải thích về vũ trụ, con người và xã hội",
    ],
    sources: [
      "Giáo trình Lý luận chính trị - Chương 8",
      "Tác phẩm 'Về tôn giáo' của V.I. Lenin",
      "Nghị quyết Đại hội XII của Đảng",
    ],
    isOpen: false,
  },
  {
    id: "cq8-4",
    question: "CQ8.4: Chủ nghĩa Mác-Lênin có chủ trương xóa bỏ tôn giáo hay không?",
    answer: "Chủ nghĩa Mác-Lênin KHÔNG chủ trương xóa bỏ cưỡng bức tôn giáo mà tôn trọng tự do tín ngưỡng.",
    details: [
      "Không xóa bỏ cưỡng bức: Mác-Lênin phản đối việc sử dụng bạo lực, cưỡng chế để xóa bỏ tôn giáo",
      "Tôn trọng tự do tín ngưỡng: Khẳng định quyền tự do tin hoặc không tin tôn giáo của mọi công dân",
      "Phân biệt tín ngưỡng và chính trị: Tôn giáo là vấn đề riêng tư, không được lợi dụng cho mục đích chính trị",
      "Tự giảm ảnh hưởng: Khi điều kiện xã hội thay đổi, tôn giáo sẽ tự giảm vai trò chi phối trong đời sống",
    ],
    sources: [
      "Tác phẩm 'Chủ nghĩa xã hội và tôn giáo' của V.I. Lenin",
      "Hiến pháp 2013 - Điều 14",
      "Luật Tín ngưỡng, Tôn giáo 2016",
    ],
    isOpen: false,
  },
  {
    id: "cq8-5",
    question: "CQ8.5: Việt Nam có xảy ra chiến tranh tôn giáo hay không? Vì sao?",
    answer: "Việt Nam KHÔNG có chiến tranh tôn giáo quy mô lớn nhờ nhiều yếu tố thuận lợi.",
    details: [
      "Văn hóa gắn kết: Truyền thống thờ cúng tổ tiên, anh hùng dân tộc tạo nền tảng đoàn kết",
      "Tôn giáo thích ứng: Các tôn giáo ngoại nhập đều thích ứng với văn hóa bản địa Việt Nam",
      "Chính sách khoan dung: Nhà nước có chính sách tôn trọng, bảo hộ quyền tự do tín ngưỡng",
      "Ý thức dân tộc: Tinh thần yêu nước, đoàn kết dân tộc vượt trên sự khác biệt tôn giáo",
      "Ngoại lệ lịch sử: Một số xung đột trong quá khứ chủ yếu do thế lực ngoại xâm lợi dụng, mang tính chất chính trị hơn là tôn giáo",
    ],
    sources: [
      "Lịch sử Đảng Cộng sản Việt Nam",
      "Chỉ thị 18-CT/TW về công tác tôn giáo",
      "Báo cáo chính trị Đại hội XIII",
    ],
    isOpen: false,
  },
]

const additionalSources = [
  {
    title: "Giáo trình Lý luận chính trị",
    description: "Chương 8: Tôn giáo trong xã hội và quan điểm của chủ nghĩa Mác-Lênin",
    type: "Giáo trình",
  },
  {
    title: "Hiến pháp nước CHXHCN Việt Nam 2013",
    description: "Điều 14: Quyền tự do tín ngưỡng, tôn giáo",
    type: "Pháp luật",
  },
  {
    title: "Luật Tín ngưỡng, Tôn giáo 2016",
    description: "Luật số 02/2016/QH14 ngày 18/11/2016",
    type: "Pháp luật",
  },
  {
    title: "Chỉ thị 18-CT/TW",
    description: "Về tăng cường sự lãnh đạo của Đảng đối với công tác tôn giáo",
    type: "Văn kiện Đảng",
  },
  {
    title: "Văn kiện Đại hội XII-XIII",
    description: "Định hướng chính sách tôn giáo giai đoạn 2016-2030",
    type: "Văn kiện Đảng",
  },
  {
    title: "Tác phẩm của V.I. Lenin về tôn giáo",
    description: "Chủ nghĩa xã hội và tôn giáo, Về tôn giáo",
    type: "Lý thuyết",
  },
]

export default function QAPage() {
  const [questions, setQuestions] = useState<QAItem[]>(qaItems)
  const [showSources, setShowSources] = useState(false)

  const toggleQuestion = (questionId: string) => {
    setQuestions((prev) => prev.map((q) => (q.id === questionId ? { ...q, isOpen: !q.isOpen } : q)))
  }

  const openAllQuestions = () => {
    setQuestions((prev) => prev.map((q) => ({ ...q, isOpen: true })))
  }

  const closeAllQuestions = () => {
    setQuestions((prev) => prev.map((q) => ({ ...q, isOpen: false })))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-heading font-black text-foreground mb-4">Trả lời 3 câu hỏi trọng tâm</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Giải đáp chi tiết các câu hỏi quan trọng về tôn giáo trong lý thuyết Mác-Lênin
            </p>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={openAllQuestions}>
                <ChevronDown className="h-4 w-4 mr-2" />
                Mở tất cả
              </Button>
              <Button variant="outline" size="sm" onClick={closeAllQuestions}>
                <ChevronUp className="h-4 w-4 mr-2" />
                Đóng tất cả
              </Button>
            </div>

            <Button variant="outline" size="sm" onClick={() => setShowSources(!showSources)}>
              <FileText className="h-4 w-4 mr-2" />
              {showSources ? "Ẩn nguồn" : "Hiện nguồn"}
            </Button>
          </div>
        </div>
      </section>

      {/* Q&A Cards */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {questions.map((qa, index) => (
              <Card key={qa.id} className="overflow-hidden">
                <Collapsible open={qa.isOpen} onOpenChange={() => toggleQuestion(qa.id)}>
                  <CollapsibleTrigger>
                    <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline" className="font-mono">
                            {index + 1}
                          </Badge>
                          <CardTitle className="text-lg font-heading text-left">{qa.question}</CardTitle>
                        </div>
                        {qa.isOpen ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        {/* Main Answer */}
                        <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                          <h4 className="font-semibold text-foreground mb-2">Trả lời:</h4>
                          <p className="text-foreground">{qa.answer}</p>
                        </div>

                        {/* Detailed Explanation */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Giải thích chi tiết:</h4>
                          <div className="space-y-3">
                            {qa.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-semibold mt-0.5 flex-shrink-0">
                                  {idx + 1}
                                </div>
                                <p className="text-foreground flex-1">{detail}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Sources */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Nguồn tham khảo:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {qa.sources.map((source, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {source}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sources Sidebar */}
      {showSources && (
        <section className="py-12 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-black text-foreground mb-6">Nguồn kiểm chứng</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {additionalSources.map((source, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {source.type}
                      </Badge>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{source.title}</h3>
                    <p className="text-sm text-muted-foreground">{source.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Takeaways */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-black text-center text-foreground mb-8">Điểm nhấn chính</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Khác biệt tự nhiên</h3>
                <p className="text-sm text-muted-foreground">
                  Sự khác biệt giữa các tôn giáo là tự nhiên, xuất phát từ bối cảnh lịch sử khác nhau
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🕊️</span>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Tôn trọng tự do</h3>
                <p className="text-sm text-muted-foreground">
                  Mác-Lênin không chủ trương xóa bỏ cưỡng bức mà tôn trọng tự do tín ngưỡng
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-chart-3/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🇻🇳</span>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Hòa hợp Việt Nam</h3>
                <p className="text-sm text-muted-foreground">
                  Việt Nam không có chiến tranh tôn giáo nhờ văn hóa gắn kết và chính sách khoan dung
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
            <Link href="/solutions">
              <Button variant="outline">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Giải pháp định hướng
              </Button>
            </Link>
            <Link href="/ai-usage">
              <Button>
                AI Usage
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
