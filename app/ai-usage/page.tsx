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
  purpose: string;
  tools: string;
}

const aiUsageData: AIUsage[] = [
  {
    purpose: "AI hỗ trợ tóm tắt lý thuyết từ sách hoặc nội dung từ nguồn có nội dung dài",
    tools: "NotebookLM, ChatGPT"
  },
  {
    purpose: "AI hỗ trợ thiết kế nội dung để trình bày",
    tools: "ChatGPT, v0"
  },
  {
    purpose: "AI hỗ trợ code",
    tools: "Copilot, ChatGPT"
  }
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
      <div className="flex-1 bg-background">
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-black text-foreground mb-8 text-center">
              Bảng sử dụng AI
            </h2>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary/5">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                          Mục đích sử dụng
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                          Công cụ AI
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {aiUsageData.map((usage, index) => (
                        <tr key={index} className="hover:bg-muted/50 transition-colors">
                          <td className="px-6 py-4 text-sm text-foreground border-b border-border">
                            {usage.purpose}
                          </td>
                          <td className="px-6 py-4 text-sm text-primary font-medium border-b border-border">
                            {usage.tools}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
