"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/custom/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/custom/card";
import { Progress } from "@/components/custom/progress";
import { ChevronRight, Users, BookOpen, Globe, Target } from "lucide-react";
import Link from "next/link";
import MotionWrapper, {
  MotionCard,
  MotionList,
  MotionListItem,
} from "@/components/motion-wrapper";

interface PollOption {
  id: string;
  text: string;
  votes: number;
}

export default function HomePage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [pollOptions, setPollOptions] = useState<PollOption[]>([
    {
      id: "yes",
      text: "Có",
      votes: 0,
    },
    { id: "no", text: "Không", votes: 0 },
  ]);

  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResults) {
      setShowResults(true);
    }
  }, [timeLeft, showResults]);

  const handleVote = (optionId: string) => {
    if (selectedOption || showResults) return;

    setSelectedOption(optionId);
    setPollOptions((prev) =>
      prev.map((option) =>
        option.id === optionId ? { ...option, votes: option.votes + 1 } : option
      )
    );
    setShowResults(true);
  };

  const totalVotes = pollOptions.reduce((sum, option) => sum + option.votes, 0);

  return (
    <div className="flex-1 bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper className="text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-black text-foreground mb-6 text-balance">
              Tôn giáo trong thời kì quá độ lên{" "}
              <span className="text-primary">chủ nghĩa xã hội</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Khám phá quan điểm của chủ nghĩa Mác-Lênin về tôn giáo và chính
              sách tôn giáo của Việt Nam trong thời đại mới
            </p>
            <Link href="/theory">
              <Button size="lg" className="text-lg px-8 py-6">
                Bắt đầu khám phá
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </MotionWrapper>
        </div>
      </section>

      {/* Live Poll Section */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper delay={0.2}>
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-heading font-black text-primary mb-2">
                  Khảo sát nhanh - {timeLeft > 0 ? `${timeLeft}s` : "Kết thúc"}
                </CardTitle>
                <p className="text-muted-foreground">
                  Theo bạn, Chủ nghĩa Mác–Lênin có chủ trương xóa bỏ tôn giáo
                  không?
                </p>
              </CardHeader>
              <CardContent>
                <MotionList className="space-y-4">
                  {pollOptions.map((option) => (
                    <MotionListItem key={option.id} className="relative">
                      <Button
                        variant={
                          selectedOption === option.id ? "default" : "outline"
                        }
                        className="w-full text-left justify-start p-4 h-auto"
                        onClick={() => handleVote(option.id)}
                        disabled={showResults}
                      >
                        <span className="flex-1">{option.text}</span>
                        {showResults && (
                          <span className="ml-2 font-semibold">
                            {totalVotes > 0
                              ? Math.round((option.votes / totalVotes) * 100)
                              : 0}
                            %
                          </span>
                        )}
                      </Button>
                      {showResults && (
                        <Progress
                          value={
                            totalVotes > 0
                              ? (option.votes / totalVotes) * 100
                              : 0
                          }
                          className="mt-2 h-2"
                        />
                      )}
                    </MotionListItem>
                  ))}
                </MotionList>

                {showResults && (
                  <MotionWrapper
                    delay={0.5}
                    className="mt-6 p-4 bg-muted rounded-lg text-center"
                  >
                    <p className="text-sm text-muted-foreground mb-4">
                      <Users className="inline h-4 w-4 mr-1" />
                      Tổng số phiếu: {totalVotes}
                    </p>
                    <Link href="/theory">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Đi tìm câu trả lời chính xác nào!
                      </Button>
                    </Link>
                  </MotionWrapper>
                )}
              </CardContent>
            </Card>
          </MotionWrapper>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper delay={0.3} className="text-center mb-12">
            <h2 className="text-3xl font-heading font-black text-foreground mb-4">
              Nội Dung Chính
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tìm hiểu toàn diện về quan điểm Mác-Lênin và thực tiễn Việt Nam
            </p>
          </MotionWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MotionCard index={0} delay={0.4}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader className="text-center">
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg font-heading">
                    Lý thuyết nền tảng
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Nguồn gốc, bản chất và quan điểm của Mác-Lênin về tôn giáo
                  </p>
                </CardContent>
              </Card>
            </MotionCard>

            <MotionCard index={1} delay={0.4}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg font-heading">
                    Chính sách Việt Nam
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Hiến pháp 2013, Luật Tín ngưỡng Tôn giáo 2016 và văn kiện
                    Đảng
                  </p>
                </CardContent>
              </Card>
            </MotionCard>

            <MotionCard index={2} delay={0.4}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg font-heading">
                    Thực tiễn hòa hợp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Tình hình tôn giáo và các vùng nhạy cảm tại Việt Nam
                  </p>
                </CardContent>
              </Card>
            </MotionCard>

            <MotionCard index={3} delay={0.4}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader className="text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg font-heading">
                    Giải pháp định hướng
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Hoàn thiện pháp luật, giáo dục và đối thoại liên tôn
                  </p>
                </CardContent>
              </Card>
            </MotionCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionWrapper delay={0.6}>
            <h2 className="text-3xl font-heading font-black mb-4">
              Sẵn sàng khám phá?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Bắt đầu hành trình tìm hiểu về tôn giáo trong lý thuyết Mác-Lênin
            </p>
            <Link href="/theory">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                Bắt đầu ngay
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </MotionWrapper>
        </div>
      </section>
    </div>
  );
}
