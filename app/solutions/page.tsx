"use client";

import { Navigation } from "@/components/navigation";
import { Button } from "@/components/custom/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/custom/card";
import {
  ChevronLeft,
  ChevronRight,
  // Target,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PageTransition from "@/components/page-transition";

interface QAItem {
  id: string;
  question: string;
  imageUrl: string;
  sections: {
    title: string;
    content: string[];
  }[];
}

const qaItems: QAItem[] = [
  {
    id: "cq8-3",
    question:
      "Tại sao các tôn giáo khác nhau lại có những ý thức hệ khác nhau, thậm chí đối lập nhau?",
    imageUrl:
      "https://i.ytimg.com/vi/HG2HGAxN8Y0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBUb2T-jtbkH6UODSsS8CKH4kdTaQ",
    sections: [
      {
        title: "Nguyên nhân nguồn gốc:",
        content: [
          "Tôn giáo phản ánh điều kiện lịch sử – xã hội, kinh tế – văn hóa khác nhau.",
          "Mỗi tôn giáo hình thành trong bối cảnh xã hội riêng, từ đó mang ý thức hệ phù hợp với lợi ích giai cấp và dân tộc lúc bấy giờ.",
        ],
      },
      {
        title: "Sự khác biệt và đối lập:",
        content: [
          "Một số tôn giáo mang tính duy tâm, coi trọng thần thánh, siêu nhiên (ví dụ: Thiên Chúa giáo).",
          "Một số khác thiên về tu dưỡng đạo đức, triết lý nhân sinh (ví dụ: Phật giáo).",
          "Do sự khác nhau về giáo lý, đối tượng thờ phụng, cách lý giải thế giới, dẫn tới khác biệt thậm chí đối lập.",
        ],
      },
      {
        title: "Yếu tố giai cấp:",
        content: [
          "Trong xã hội có giai cấp, tôn giáo đôi khi bị lợi dụng thành công cụ ý thức hệ, phục vụ cho lợi ích giai cấp thống trị → càng làm nảy sinh mâu thuẫn.",
        ],
      },
    ],
  },
  {
    id: "cq8-4",
    question:
      "Chủ nghĩa Mác – Lênin là chủ nghĩa duy vật biện chứng, vậy có phải là sẽ xóa bỏ hoàn toàn tôn giáo hay không?",
    imageUrl:
      "https://thichhohap.com/wp-content/uploads/2024/02/On-tap-mon-chu-nghia-Mac-%E2%80%93-Lenin-4-1024x764.jpg",
    sections: [
      {
        title: "Không chủ trương xóa bỏ cưỡng bức.",
        content: [],
      },
      {
        title: "Chủ nghĩa Mác – Lênin khẳng định:",
        content: [
          "Tôn giáo có nguồn gốc khách quan, nên còn tồn tại khi những điều kiện xã hội (bất công, nghèo khổ, hạn chế nhận thức) còn tồn tại.",
          "Quá trình xây dựng CNXH phải tôn trọng quyền tự do tín ngưỡng và không tín ngưỡng.",
        ],
      },
      {
        title: "Con đường giải quyết:",
        content: [
          "Nâng cao đời sống vật chất, phát triển khoa học, xây dựng văn hóa mới.",
          "Khi những điều kiện xã hội thay đổi, tôn giáo sẽ tự mất đi vai trò chi phối, chứ không phải bị xóa bỏ bằng mệnh lệnh hành chính.",
          "Như vậy, CN Mác – Lênin không phủ nhận hoàn toàn tôn giáo, mà hướng tới việc làm nó tự tiêu vong theo sự phát triển của xã hội mới.",
        ],
      },
    ],
  },
  {
    id: "cq8-5",
    question:
      "Việt Nam là quốc gia đa tôn giáo, vậy đã từng có chiến tranh tôn giáo ở Việt Nam hay không? Tại sao?",
    imageUrl:
      "https://media.vov.vn/sites/default/files/styles/large/public/2022-10/vesak.jpg",
    sections: [
      {
        title: "Thực tiễn lịch sử:",
        content: [
          "Việt Nam chưa từng có chiến tranh tôn giáo quy mô lớn như ở châu Âu hay Trung Đông.",
        ],
      },
      {
        title: "Nguyên nhân:",
        content: [],
      },
      {
        title: "Truyền thống văn hóa – tín ngưỡng:",
        content: [
          "Người Việt coi trọng thờ cúng tổ tiên, anh hùng dân tộc, đặt cộng đồng dân tộc lên trên sự khác biệt tôn giáo.",
          "Khi các tôn giáo ngoại nhập (Phật giáo, Nho giáo, Đạo giáo, Công giáo, Hồi giáo…) du nhập, chúng đều phải thích ứng, hòa nhập với văn hóa bản địa.",
        ],
      },
      {
        title: "Chính sách và ý thức:",
        content: [
          "Chính sách khoan dung của các triều đại phong kiến và sau này là Nhà nước XHCN: tạo điều kiện cho các tôn giáo cùng tồn tại, hạn chế xung đột.",
          "Ý thức dân tộc: Trong bối cảnh đất nước thường xuyên bị ngoại xâm, các tôn giáo đều đồng hành cùng dân tộc → đoàn kết chống giặc ngoại xâm.",
        ],
      },
      {
        title: "Ngoại lệ:",
        content: [
          'Thời kỳ thực dân Pháp và đế quốc Mỹ, tôn giáo từng bị lợi dụng làm công cụ chia rẽ dân tộc, nhưng đó là xung đột chính trị – thực dân, không phải bản chất là "chiến tranh tôn giáo".',
          "Do vậy, Việt Nam là quốc gia đa tôn giáo nhưng vẫn giữ được hòa hợp, nhờ nền tảng văn hóa dân tộc, chính sách bao dung, và truyền thống đoàn kết toàn dân.",
        ],
      },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <PageTransition>
      <div className="flex-1 bg-background">
        <Navigation />

        {/* Header */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-heading font-black text-foreground mb-4">
                Vận dụng
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Vận dụng các nội dung lý thuyết và thực tiễn, giải đáp các câu
                hỏi liên quan đến vấn đề tôn giáo
              </p>
            </div>
          </div>
        </section>

        {/* Q&A Section */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-black text-center text-foreground mb-12">
              Câu hỏi và trả lời
            </h2>

            <div className="space-y-8">
              {qaItems.map((item, index) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="text-lg font-heading text-foreground">
                      CQ8.{index + 3}: {item.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 bg-primary/5">
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Image */}
                      <div className="lg:col-span-1">
                        <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                          <Image
                            src={item.imageUrl}
                            alt={`Hình minh họa cho câu hỏi ${index + 3}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-2 space-y-4">
                        {item.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            <h4 className="font-semibold text-foreground mb-2">
                              {section.title}
                            </h4>
                            {section.content.length > 0 && (
                              <ul className="space-y-2">
                                {section.content.map((point, pointIndex) => (
                                  <li
                                    key={pointIndex}
                                    className="flex items-start space-x-2"
                                  >
                                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-muted-foreground">
                                      {point}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* <div className="text-center mt-8">
            <Link href="/qa">
              <Button size="lg" className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Xem thêm câu hỏi khác</span>
              </Button>
            </Link>
          </div> */}
          </div>
        </section>

        {/* Exploration Section */}
        <section className="py-12 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-black text-center text-foreground mb-8">
              Khám phá
            </h2>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
              <iframe
                title="Tín đồ tôn giáo ở Việt Nam"
                aria-label="Map"
                id="datawrapper-chart-DTt34"
                src="https://datawrapper.dwcdn.net/DTt34/1/"
                scrolling="no"
                frameBorder="0"
                style={{
                  width: "100%",
                  minWidth: "100%",
                  border: "none",
                }}
                height="851"
                data-external="1"
              />
              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();`,
                }}
              />
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
                    Phát huy những giá trị tích cực của tôn giáo trong đời sống
                    xã hội
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
                    Đấu tranh chống lợi dụng tôn giáo để chống phá Đảng, Nhà
                    nước
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
    </PageTransition>
  );
}
