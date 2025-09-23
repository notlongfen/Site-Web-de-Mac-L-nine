"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/custom/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/custom/card";
import { Badge } from "@/components/custom/badge";
import { Checkbox } from "@/components/custom/checkbox";
import {
  ChevronLeft,
  ChevronRight,
  Bot,
  User,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import PageTransition from "@/components/page-transition";

interface AIUsage {
  tool: string;
  purpose: string;
  prompt: string;
  result: string;
  studentEdit: string;
}

const aiUsageData: AIUsage[] = [
  {
    tool: "ChatGPT-4",
    purpose: "Tổng hợp nội dung lý thuyết",
    prompt:
      "Hãy tóm tắt quan điểm của Mác-Lênin về nguồn gốc, bản chất và thái độ đối với tôn giáo",
    result:
      "AI đã cung cấp bản tóm tắt cơ bản về 4 khía cạnh chính của lý thuyết Mác-Lênin về tôn giáo",
    studentEdit:
      "Sinh viên đã bổ sung thêm ví dụ cụ thể từ Việt Nam và điều chỉnh ngôn ngữ cho phù hợp với bối cảnh học thuật",
  },
  {
    tool: "Claude 3.5",
    purpose: "Thiết kế cấu trúc thuyết trình",
    prompt:
      "Thiết kế cấu trúc 8 trang thuyết trình tương tác về tôn giáo trong lý thuyết Mác-Lênin",
    result:
      "AI đề xuất cấu trúc với các thành phần tương tác như live poll, timeline, bản đồ và kanban board",
    studentEdit:
      "Sinh viên đã tùy chỉnh nội dung cho phù hợp với yêu cầu bài tập và bổ sung thêm phần AI Usage",
  },
  {
    tool: "Gemini Pro",
    purpose: "Kiểm tra tính chính xác",
    prompt:
      "Kiểm tra tính chính xác của thông tin về chính sách tôn giáo Việt Nam từ 2013-2021",
    result:
      "AI xác nhận các thông tin về Hiến pháp 2013, Luật 2016 và các văn kiện Đảng là chính xác",
    studentEdit:
      "Sinh viên đã đối chiếu thêm với nguồn gốc chính thức và bổ sung các trích dẫn cụ thể",
  },
  {
    tool: "Perplexity AI",
    purpose: "Tìm kiếm nguồn tài liệu",
    prompt:
      "Tìm các nguồn tài liệu chính thức về chính sách tôn giáo của Đảng và Nhà nước Việt Nam",
    result:
      "AI cung cấp danh sách các văn kiện chính thức từ trang web của Đảng và Chính phủ",
    studentEdit:
      "Sinh viên đã lọc và chọn ra những nguồn đáng tin cậy nhất để trích dẫn trong bài thuyết trình",
  },
];

export default function AIUsagePage() {
  const [isCommitted, setIsCommitted] = useState(false);
  const [signature, setSignature] = useState("");

  const handleCommitment = () => {
    if (signature.trim()) {
      setIsCommitted(true);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Header */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-heading font-black text-foreground mb-4">
                Minh bạch sử dụng AI
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cam kết học thuật và minh bạch trong việc sử dụng công cụ trí
                tuệ nhân tạo
              </p>
            </div>
          </div>
        </section>

        {/* AI Usage Table */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-black text-foreground mb-6">
              Bảng sử dụng AI chi tiết
            </h2>

            <div className="space-y-6">
              {aiUsageData.map((usage, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center space-x-2">
                        <Bot className="h-5 w-5 text-primary" />
                        <span>{usage.tool}</span>
                      </CardTitle>
                      <Badge variant="outline">{usage.purpose}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* AI Content */}
                      <div className="space-y-4">
                        <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                          <h4 className="font-semibold text-foreground mb-2 flex items-center">
                            <Bot className="h-4 w-4 mr-2" />
                            Prompt sử dụng
                          </h4>
                          <p className="text-sm text-muted-foreground italic">
                            &ldquo;{usage.prompt}&rdquo;
                          </p>
                        </div>

                        <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                          <h4 className="font-semibold text-foreground mb-2">
                            Kết quả từ AI
                          </h4>
                          <p className="text-sm text-foreground">
                            {usage.result}
                          </p>
                        </div>
                      </div>

                      {/* Student Edit */}
                      <div className="p-4 border-l-4 border-accent bg-accent/5 rounded-r-lg">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          Chỉnh sửa của sinh viên
                        </h4>
                        <p className="text-sm text-foreground">
                          {usage.studentEdit}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Content Classification */}
        <section className="py-12 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-black text-foreground mb-6">
              Phân định nội dung
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-primary">
                    <Bot className="h-5 w-5" />
                    <span>Nội dung từ AI</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 border-2 border-primary/30 rounded-lg">
                      <p className="text-sm text-foreground">
                        Cấu trúc thuyết trình 8 trang
                      </p>
                    </div>
                    <div className="p-3 border-2 border-primary/30 rounded-lg">
                      <p className="text-sm text-foreground">
                        Tóm tắt lý thuyết Mác-Lênin cơ bản
                      </p>
                    </div>
                    <div className="p-3 border-2 border-primary/30 rounded-lg">
                      <p className="text-sm text-foreground">
                        Danh sách văn kiện pháp lý
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-accent">
                    <User className="h-5 w-5" />
                    <span>Nội dung sinh viên chỉnh sửa</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 border-2 border-accent/30 rounded-lg">
                      <p className="text-sm text-foreground">
                        Ví dụ cụ thể từ thực tiễn Việt Nam
                      </p>
                    </div>
                    <div className="p-3 border-2 border-accent/30 rounded-lg">
                      <p className="text-sm text-foreground">
                        Trích dẫn chính xác từ văn kiện gốc
                      </p>
                    </div>
                    <div className="p-3 border-2 border-accent/30 rounded-lg">
                      <p className="text-sm text-foreground">
                        Phân tích và nhận định cá nhân
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Source Verification */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-black text-foreground mb-6">
              Đối chiếu nguồn gốc
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { fact: "Hiến pháp 2013 - Điều 14", source: "chinhphu.vn" },
                {
                  fact: "Luật Tín ngưỡng, Tôn giáo 2016",
                  source: "moj.gov.vn",
                },
                { fact: "Chỉ thị 18-CT/TW", source: "dangcongsan.vn" },
                { fact: "Văn kiện Đại hội XII-XIII", source: "cpv.org.vn" },
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {item.fact}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.source}
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Commitment */}
        <section className="py-12 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-black text-center text-foreground mb-8">
              Cam kết học thuật
            </h2>

            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="commitment"
                      checked={isCommitted}
                      onCheckedChange={(checked) =>
                        setIsCommitted(checked as boolean)
                      }
                    />
                    <label
                      htmlFor="commitment"
                      className="text-sm text-foreground leading-relaxed"
                    >
                      Tôi xác nhận rằng tôi đã sử dụng AI một cách minh bạch và
                      có trách nhiệm. Tất cả nội dung được tạo bởi AI đều đã
                      được tôi kiểm tra, chỉnh sửa và bổ sung để đảm bảo tính
                      chính xác và phù hợp với yêu cầu học thuật.
                    </label>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Chữ ký xác nhận:
                    </label>
                    <input
                      type="text"
                      placeholder="Nhập họ tên để xác nhận"
                      value={signature}
                      onChange={(e) => setSignature(e.target.value)}
                      className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                    />
                  </div>

                  <Button
                    onClick={handleCommitment}
                    disabled={!signature.trim() || isCommitted}
                    className="w-full"
                  >
                    {isCommitted ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Đã cam kết
                      </>
                    ) : (
                      "Xác nhận cam kết"
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between">
              <Link href="/qa">
                <Button variant="outline">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Hỏi đáp
                </Button>
              </Link>
              <Link href="/summary">
                <Button>
                  Tổng kết
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
