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
import MotionWrapper, { MotionCard } from "@/components/motion-wrapper";

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
    title: "Tôn giáo – Hiện tượng xã hội đặc thù",
    content:
      "Tôn giáo là một hiện tượng xã hội đặc thù, gắn liền với đời sống tinh thần và lịch sử phát triển của các dân tộc",
    details: [
      "Gắn liền với đời sống tinh thần và lịch sử phát triển của các dân tộc",
      "Trong quá trình quá độ lên CNXH: vừa là nhu cầu tinh thần của một bộ phận nhân dân",
      "Vừa chứa đựng những yếu tố lịch sử – xã hội có thể bị lợi dụng",
      "Vấn đề cốt lõi: phải nhận diện đúng và giải quyết phù hợp để vừa tôn trọng tự do tín ngưỡng, vừa đảm bảo ổn định chính trị, đoàn kết dân tộc",
    ],
  },
  {
    id: 2,
    title: "Nguồn gốc tôn giáo theo Mác-Lênin",
    content:
      "Tôn giáo xuất hiện từ ba nguồn gốc cơ bản theo quan điểm Mác-Lênin",
    details: [
      "Nguồn gốc tự nhiên: Sự bất lực của con người trước thiên nhiên, không thể giải thích và chế ngự các hiện tượng tự nhiên",
      "Nguồn gốc xã hội: Áp bức giai cấp, bất công xã hội khiến con người tìm kiếm sự an ủi trong tôn giáo",
      "Nguồn gốc nhận thức: Trình độ khoa học hạn chế, không thể giải thích được các hiện tượng xã hội và tự nhiên",
    ],
  },
  {
    id: 3,
    title: "Bản chất tôn giáo",
    content: "",
    details: [
      "Là một hình thái ý thức xã hội: Phản ánh hiện thực một cách hư ảo, không trung thực",
      "Mặt tích cực: Gắn kết cộng đồng, duy trì chuẩn mực đạo đức, có giá trị văn hóa",
      "Mặt tiêu cực: Bị lợi dụng để duy trì áp bức, thống trị và che đậy mâu thuẫn xã hội",
    ],
  },
  {
    id: 4,
    title: "Quan điểm Mác-Lênin: Tôn giáo là 'thuốc phiện'",
    content:
      "Tư tưởng Mác-Lênin coi tôn giáo là 'thuốc phiện của nhân dân' nhưng không phủ nhận hoàn toàn vai trò, giá trị đạo đức, văn hóa của nó",
    details: [
      "Tôn giáo là 'thuốc phiện' của nhân dân: Vừa an ủi tinh thần, vừa ru ngủ ý thức, kìm hãm nhận thức",
      "Tôn trọng quyền tự do tín ngưỡng và không tín ngưỡng",
      "Phân biệt tín ngưỡng chân chính của quần chúng với việc lợi dụng tôn giáo cho mục đích chính trị",
    ],
  },
  {
    id: 5,
    title: "Con đường giải quyết: Không 'xóa bỏ cưỡng bức'",
    content:
      "Mác-Lênin không chủ trương 'xóa bỏ cưỡng bức' tôn giáo mà cho rằng nó sẽ tự mất đi dần dần",
    details: [
      "Phát triển kinh tế: Nâng cao đời sống vật chất của nhân dân",
      "Nâng cao văn hóa: Xây dựng nền văn hóa tiến bộ, nhân văn",
      "Phát triển khoa học: Nâng cao trình độ dân trí và tư duy khoa học",
      "Kết quả: Đời sống vật chất – tinh thần được nâng cao, tôn giáo sẽ tự giảm ảnh hưởng",
    ],
  },
];

const mythsFacts: MythFact[] = [
  {
    id: "myth1",
    myth: "Chủ nghĩa xã hội cấm tôn giáo",
    fact: "Chủ nghĩa xã hội tôn trọng tự do tín ngưỡng, không cấm tôn giáo mà chỉ không cho phép lợi dụng tôn giáo cho mục đích chính trị",
    isRevealed: false,
  },
  {
    id: "myth2",
    myth: "Mác-Lênin muốn xóa bỏ cưỡng bức tôn giáo",
    fact: "Mác-Lênin không chủ trương xóa bỏ cưỡng bức mà cho rằng tôn giáo sẽ tự giảm ảnh hưởng khi điều kiện kinh tế, văn hóa, khoa học phát triển",
    isRevealed: false,
  },
  {
    id: "myth3",
    myth: "Tôn giáo chỉ có tác hại",
    fact: "Tôn giáo vừa có giá trị tích cực (gắn kết cộng đồng, duy trì chuẩn mực đạo đức) vừa có mặt tiêu cực (bị lợi dụng để duy trì áp bức, thống trị)",
    isRevealed: false,
  },
  {
    id: "myth4",
    myth: "Tôn giáo sẽ tồn tại mãi mãi",
    fact: "Theo quan điểm Mác-Lênin, tôn giáo sẽ tự mất đi dần dần khi đời sống vật chất - tinh thần của nhân dân được nâng cao",
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
                  <div className="flex items-start space-x-4 pt-6">
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
