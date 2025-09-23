"use client";

import type React from "react";

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
import {
  ChevronLeft,
  ChevronRight,
  Scale,
  Users,
  Shield,
  Download,
  Clock,
  Target,
} from "lucide-react";
import Link from "next/link";

interface Solution {
  id: string;
  title: string;
  description: string;
  category: "legal" | "social" | "security";
  priority: "high" | "medium" | "low";
  timeframe: string;
  isPlaced: boolean;
}

interface Column {
  id: "legal" | "social" | "security";
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  solutions: Solution[];
}

const availableSolutions: Solution[] = [
  {
    id: "complete-law",
    title: "Hoàn thiện pháp luật tôn giáo",
    description:
      "Xây dựng, bổ sung các văn bản pháp luật về tôn giáo phù hợp với thực tiễn",
    category: "legal",
    priority: "high",
    timeframe: "2024-2026",
    isPlaced: false,
  },
  {
    id: "education-propaganda",
    title: "Giáo dục - tuyên truyền chuẩn",
    description:
      "Nâng cao nhận thức về chính sách tôn giáo cho cán bộ và nhân dân",
    category: "social",
    priority: "high",
    timeframe: "Liên tục",
    isPlaced: false,
  },
  {
    id: "interfaith-dialogue",
    title: "Đối thoại liên tôn",
    description:
      "Tăng cường đối thoại, hợp tác giữa các tôn giáo và với Nhà nước",
    category: "social",
    priority: "medium",
    timeframe: "Thường xuyên",
    isPlaced: false,
  },
  {
    id: "promote-clergy",
    title: "Phát huy chức sắc/tín đồ",
    description: "Khuyến khích chức sắc, tín đồ tham gia xây dựng đất nước",
    category: "social",
    priority: "medium",
    timeframe: "Dài hạn",
    isPlaced: false,
  },
  {
    id: "security-prevention",
    title: "Tăng cường an ninh phòng ngừa",
    description: "Ngăn chặn lợi dụng tôn giáo để chống phá Đảng, Nhà nước",
    category: "security",
    priority: "high",
    timeframe: "Thường xuyên",
    isPlaced: false,
  },
  {
    id: "connect-sdg",
    title: "Kết nối với mục tiêu phát triển bền vững",
    description:
      "Liên kết hoạt động tôn giáo với các mục tiêu phát triển bền vững",
    category: "social",
    priority: "medium",
    timeframe: "2024-2030",
    isPlaced: false,
  },
  {
    id: "capacity-building",
    title: "Nâng cao năng lực cán bộ",
    description: "Đào tạo, bồi dưỡng cán bộ làm công tác tôn giáo",
    category: "legal",
    priority: "high",
    timeframe: "2024-2025",
    isPlaced: false,
  },
  {
    id: "monitor-system",
    title: "Hệ thống giám sát hiệu quả",
    description: "Xây dựng hệ thống giám sát, đánh giá hoạt động tôn giáo",
    category: "security",
    priority: "medium",
    timeframe: "2024-2026",
    isPlaced: false,
  },
];

export default function SolutionsPage() {
  const [solutions, setSolutions] = useState<Solution[]>(availableSolutions);
  const [discussionTime, setDiscussionTime] = useState(30);
  const [isDiscussionActive, setIsDiscussionActive] = useState(false);

  const [columns, setColumns] = useState<Column[]>([
    {
      id: "legal",
      title: "Pháp lý",
      icon: Scale,
      color: "bg-primary",
      solutions: [],
    },
    {
      id: "social",
      title: "Xã hội",
      icon: Users,
      color: "bg-accent",
      solutions: [],
    },
    {
      id: "security",
      title: "An ninh",
      icon: Shield,
      color: "bg-chart-3",
      solutions: [],
    },
  ]);

  const handleDragStart = (e: React.DragEvent, solutionId: string) => {
    e.dataTransfer.setData("text/plain", solutionId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (
    e: React.DragEvent,
    columnId: "legal" | "social" | "security"
  ) => {
    e.preventDefault();
    const solutionId = e.dataTransfer.getData("text/plain");
    const solution = solutions.find((s) => s.id === solutionId);

    if (solution && !solution.isPlaced) {
      // Move solution to column
      setSolutions((prev) =>
        prev.map((s) => (s.id === solutionId ? { ...s, isPlaced: true } : s))
      );

      setColumns((prev) =>
        prev.map((col) =>
          col.id === columnId
            ? { ...col, solutions: [...col.solutions, solution] }
            : col
        )
      );
    }
  };

  const removeSolutionFromColumn = (
    solutionId: string,
    columnId: "legal" | "social" | "security"
  ) => {
    // Remove from column
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? {
              ...col,
              solutions: col.solutions.filter((s) => s.id !== solutionId),
            }
          : col
      )
    );

    // Make available again
    setSolutions((prev) =>
      prev.map((s) => (s.id === solutionId ? { ...s, isPlaced: false } : s))
    );
  };

  const startDiscussion = () => {
    setIsDiscussionActive(true);
    const timer = setInterval(() => {
      setDiscussionTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsDiscussionActive(false);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const generatePDF = () => {
    // const allPlacedSolutions = columns.flatMap((col) => col.solutions);
    const pdfContent = {
      legal: columns.find((c) => c.id === "legal")?.solutions || [],
      social: columns.find((c) => c.id === "social")?.solutions || [],
      security: columns.find((c) => c.id === "security")?.solutions || [],
    };

    // Simulate PDF generation
    const blob = new Blob([JSON.stringify(pdfContent, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "giai-phap-ton-giao.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive";
      case "medium":
        return "bg-accent";
      case "low":
        return "bg-muted";
      default:
        return "bg-muted";
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case "high":
        return "Cao";
      case "medium":
        return "Trung bình";
      case "low":
        return "Thấp";
      default:
        return "Không xác định";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-heading font-black text-foreground mb-4">
              Giải pháp định hướng
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Workshop tương tác: Sắp xếp và thảo luận các giải pháp cho công
              tác tôn giáo
            </p>
          </div>
        </div>
      </section>

      {/* Workshop Controls */}
      <section className="py-8 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Button
                onClick={startDiscussion}
                disabled={isDiscussionActive}
                className="flex items-center space-x-2"
              >
                <Clock className="h-4 w-4" />
                <span>
                  {isDiscussionActive
                    ? `Thảo luận: ${discussionTime}s`
                    : "Bắt đầu thảo luận"}
                </span>
              </Button>

              <Badge variant={isDiscussionActive ? "default" : "secondary"}>
                {isDiscussionActive ? "Đang thảo luận" : "Sẵn sàng"}
              </Badge>
            </div>

            <Button onClick={generatePDF} variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Xuất PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Available Solutions */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-black text-foreground mb-6">
            Giải pháp có sẵn
          </h2>
          <p className="text-muted-foreground mb-6">
            Kéo và thả các giải pháp vào cột phù hợp bên dưới
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {solutions
              .filter((s) => !s.isPlaced)
              .map((solution) => (
                <Card
                  key={solution.id}
                  className="cursor-move hover:shadow-lg transition-shadow"
                  draggable
                  onDragStart={(e) => handleDragStart(e, solution.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        className={`${getPriorityColor(
                          solution.priority
                        )} text-white`}
                      >
                        {getPriorityLabel(solution.priority)}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {solution.timeframe}
                      </Badge>
                    </div>
                    <h3 className="font-heading font-bold text-sm text-foreground mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Kanban Board */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-black text-foreground mb-6">
            Bảng phân loại giải pháp
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {columns.map((column) => (
              <div key={column.id}>
                <Card className="min-h-96">
                  <CardHeader className={`${column.color} text-white`}>
                    <CardTitle className="flex items-center space-x-2">
                      <column.icon className="h-5 w-5" />
                      <span>{column.title}</span>
                      <Badge variant="secondary" className="ml-auto">
                        {column.solutions.length}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent
                    className="p-4 min-h-80"
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, column.id)}
                  >
                    <div className="space-y-3">
                      {column.solutions.map((solution) => (
                        <Card key={solution.id} className="relative group">
                          <CardContent className="p-3">
                            <button
                              onClick={() =>
                                removeSolutionFromColumn(solution.id, column.id)
                              }
                              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
                            >
                              ×
                            </button>
                            <div className="flex items-center justify-between mb-2">
                              <Badge
                                className={`${getPriorityColor(
                                  solution.priority
                                )} text-white text-xs`}
                              >
                                {getPriorityLabel(solution.priority)}
                              </Badge>
                            </div>
                            <h4 className="font-semibold text-sm text-foreground mb-1">
                              {solution.title}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              {solution.description}
                            </p>
                            <div className="mt-2">
                              <Badge variant="outline" className="text-xs">
                                {solution.timeframe}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}

                      {column.solutions.length === 0 && (
                        <div className="text-center py-8 text-muted-foreground">
                          <Target className="h-8 w-8 mx-auto mb-2 opacity-50" />
                          <p className="text-sm">Kéo giải pháp vào đây</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Statistics */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-black text-center text-foreground mb-8">
            Thống kê phân loại
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-black text-primary mb-2">
                  {columns.reduce((sum, col) => sum + col.solutions.length, 0)}
                </div>
                <p className="text-sm text-muted-foreground">
                  Tổng giải pháp đã phân loại
                </p>
              </CardContent>
            </Card>

            {columns.map((column) => (
              <Card key={column.id} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-black text-primary mb-2">
                    {column.solutions.length}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {column.title}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-12 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-black text-center text-foreground mb-8">
            Nguyên tắc chỉ đạo
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-primary">
                    Tôn trọng
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Tôn trọng quyền tự do tín ngưỡng, tôn giáo của mọi công dân
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-accent">
                    Phát huy
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Phát huy những giá trị tích cực của tôn giáo trong đời sống xã
                  hội
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-chart-3/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-chart-3">
                    Đấu tranh
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Đấu tranh chống lợi dụng tôn giáo để chống phá Đảng, Nhà nước
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
            <Link href="/practice">
              <Button variant="outline">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Thực tiễn hòa hợp
              </Button>
            </Link>
            <Link href="/qa">
              <Button>
                Hỏi đáp
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
