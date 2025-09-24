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
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";
import MotionWrapper, {
  MotionCard,
} from "@/components/motion-wrapper";

interface Step {
  id: number;
  title: string;
  content: string;
  details: string[];
}

interface MythFact {
  id: string;
  myth: string;
  fact: string;
  isRevealed: boolean;
}

const theorySteps: Step[] = [
  {
    id: 1,
    title: "Nguồn gốc tôn giáo",
    content:
      "Tôn giáo xuất hiện từ ba nguồn gốc chính theo quan điểm Mác-Lênin",
    details: [
      "Nguồn gốc tự nhiên: Con người bất lực trước thiên nhiên, tạo ra niềm tin siêu nhiên",
      "Nguồn gốc xã hội: Áp bức giai cấp, bất công xã hội khiến người ta tìm đến tôn giáo",
      "Nguồn gốc nhận thức: Trình độ khoa học thấp, không giải thích được hiện tượng tự nhiên",
    ],
  },
  {
    id: 2,
    title: "Bản chất tôn giáo",
    content:
      "Tôn giáo là một hình thái ý thức xã hội có hai mặt tích cực và tiêu cực",
    details: [
      "Là hình thái ý thức xã hội: Phản ánh điều kiện tồn tại xã hội của con người",
      "Mặt tích cực: Động viên tinh thần, kết nối cộng đồng, khuyến khích làm thiện",
      "Mặt tiêu cực: Có thể gây mê muội, phụ thuộc, cản trở tư duy khoa học",
    ],
  },
  {
    id: 3,
    title: "Thái độ với tôn giáo",
    content:
      "Mác-Lênin chủ trương tôn trọng tự do tín ngưỡng và phân biệt rõ ràng",
    details: [
      "Tôn trọng tự do tín ngưỡng: Mọi người có quyền tin hoặc không tin tôn giáo",
      "Phân biệt tín ngưỡng với chính trị: Không để tôn giáo can thiệp vào chính trị",
      "Chống lợi dụng tôn giáo: Đấu tranh với việc lợi dụng tôn giáo cho mục đích xấu",
    ],
  },
  {
    id: 4,
    title: "Con đường giải quyết",
    content:
      "Tôn giáo sẽ tự giảm vai trò chi phối khi điều kiện xã hội thay đổi",
    details: [
      "Nâng cao đời sống: Cải thiện điều kiện kinh tế, xã hội của nhân dân",
      "Phát triển khoa học: Nâng cao trình độ dân trí, tư duy khoa học",
      "Phát triển văn hóa: Xây dựng nền văn hóa tiến bộ, nhân văn",
    ],
  },
];

const mythsFacts: MythFact[] = [
  {
    id: "myth1",
    myth: "Chủ nghĩa xã hội cấm tôn giáo",
    fact: "Chủ nghĩa xã hội tôn trọng tự do tín ngưỡng, không cấm tôn giáo mà chỉ không cho phép lợi dụng tôn giáo",
    isRevealed: false,
  },
  {
    id: "myth2",
    myth: "Mác-Lênin muốn xóa bỏ cưỡng bức tôn giáo",
    fact: "Mác-Lênin không chủ trương xóa bỏ cưỡng bức mà cho rằng tôn giáo sẽ tự giảm ảnh hưởng khi xã hội phát triển",
    isRevealed: false,
  },
  {
    id: "myth3",
    myth: "Tôn giáo chỉ có tác hại",
    fact: "Tôn giáo có cả mặt tích cực (kết nối cộng đồng, động viên tinh thần) và tiêu cực (mê muội, phụ thuộc)",
    isRevealed: false,
  },
];

export default function TheoryPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [myths, setMyths] = useState<MythFact[]>(mythsFacts);

  const handleStepComplete = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const toggleMythFact = (mythId: string) => {
    setMyths(
      myths.map((myth) =>
        myth.id === mythId ? { ...myth, isRevealed: !myth.isRevealed } : myth
      )
    );
  };

  const resetMyths = () => {
    setMyths(mythsFacts.map((myth) => ({ ...myth, isRevealed: false })));
  };

  const currentStepData = theorySteps.find((step) => step.id === currentStep);

  return (
    <div className="flex-1 bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper className="text-center">
            <h1 className="text-4xl font-heading font-black text-foreground mb-4">
              Lý thuyết nền tảng Mác-Lênin
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tìm hiểu quan điểm của Mác-Lênin về nguồn gốc, bản chất và cách
              giải quyết vấn đề tôn giáo
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="py-8 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper delay={0.2}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-heading font-bold">
                Tiến trình học tập
              </h2>
              <span className="text-sm text-muted-foreground">
                {completedSteps.length}/{theorySteps.length} bước hoàn thành
              </span>
            </div>
            <div className="flex items-center space-x-2">
              {theorySteps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      completedSteps.includes(step.id)
                        ? "bg-primary text-primary-foreground"
                        : currentStep === step.id
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {completedSteps.includes(step.id) ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      step.id
                    )}
                  </div>
                  {index < theorySteps.length - 1 && (
                    <div
                      className={`w-12 h-1 mx-2 ${
                        completedSteps.includes(step.id)
                          ? "bg-primary"
                          : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Main Content - Stepper */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentStepData && (
            <MotionCard delay={0.3}>
              <Card className="mb-8">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-heading font-black text-primary">
                      Bước {currentStepData.id}: {currentStepData.title}
                    </CardTitle>
                    <Badge
                      variant={
                        completedSteps.includes(currentStepData.id)
                          ? "default"
                          : "secondary"
                      }
                    >
                      {completedSteps.includes(currentStepData.id)
                        ? "Hoàn thành"
                        : "Đang học"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground mb-6">
                    {currentStepData.content}
                  </p>
                  <div className="space-y-4">
                    {currentStepData.details.map((detail, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-muted rounded-lg"
                      >
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-foreground flex-1">{detail}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-8">
                    <Button
                      variant="outline"
                      onClick={() =>
                        setCurrentStep(Math.max(1, currentStep - 1))
                      }
                      disabled={currentStep === 1}
                    >
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Bước trước
                    </Button>

                    <Button
                      onClick={() => handleStepComplete(currentStepData.id)}
                      disabled={completedSteps.includes(currentStepData.id)}
                    >
                      {completedSteps.includes(currentStepData.id)
                        ? "Đã hoàn thành"
                        : "Hoàn thành bước này"}
                    </Button>

                    <Button
                      variant="outline"
                      onClick={() =>
                        setCurrentStep(
                          Math.min(theorySteps.length, currentStep + 1)
                        )
                      }
                      disabled={currentStep === theorySteps.length}
                    >
                      Bước tiếp
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </MotionCard>
          )}
        </div>
      </section>

      {/* Myth vs Fact Section */}
      <section className="py-12 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-heading font-black text-foreground">
              Ngộ nhận vs Sự thật
            </h2>
            <Button variant="outline" size="sm" onClick={resetMyths}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Đặt lại
            </Button>
          </div>
          <p className="text-muted-foreground mb-8">
            Nhấp vào các thẻ để khám phá sự thật đằng sau những ngộ nhận phổ
            biến
          </p>

          <div className="grid gap-6">
            {myths.map((item) => (
              <Card
                key={item.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-300"
                onClick={() => toggleMythFact(item.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-2 rounded-full ${
                        item.isRevealed ? "bg-primary" : "bg-destructive"
                      }`}
                    >
                      {item.isRevealed ? (
                        <CheckCircle className="h-5 w-5 text-primary-foreground" />
                      ) : (
                        <XCircle className="h-5 w-5 text-destructive-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge
                          variant={item.isRevealed ? "default" : "destructive"}
                        >
                          {item.isRevealed ? "Sự thật" : "Ngộ nhận"}
                        </Badge>
                      </div>
                      <p className="text-foreground font-medium">
                        {item.isRevealed ? item.fact : item.myth}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <Link href="/">
              <Button variant="outline">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Về trang chủ
              </Button>
            </Link>
            <Link href="/policy">
              <Button>
                Chính sách Việt Nam
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
