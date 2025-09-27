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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/custom/dialog";
import {
  Heart,
  Star,
  Cross,
  Sun,
  Moon,
  Mountain,
  Flower,
  Eye,
  Globe,
  Users,
  Book,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Shield,
  MessageCircle,
} from "lucide-react";
import PageTransition from "@/components/page-transition";
import Link from "next/link";
import Image from "next/image";

interface Religion {
  id: string;
  name: string;
  summary: string;
  detail: string;
  imageUrl: string;
  icon: React.ReactNode;
}

interface Challenge {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const religions: Religion[] = [
  {
    id: "phat-giao",
    name: "Phật giáo",
    summary:
      "Tôn giáo lớn nhất ở Việt Nam, có nhiều hệ phái (Bắc tông, Nam tông, Khất sĩ…)",
    detail:
      "Phật giáo được Nhà nước công nhận với Giáo hội Phật giáo Việt Nam là tổ chức đại diện. Phật giáo có nhiều hoạt động tín ngưỡng, lễ hội, đào tạo tăng sĩ, phát triển chùa chiền, từ thiện. Các hệ phái như: Bắc tông (Mahayana), Nam tông (Theravada), Khất sĩ... đều được công nhận hoạt động.",
    imageUrl:
      "https://suckhoedoisong.qltns.mediacdn.vn/thumb_w/1200/324455921873985536/2021/7/20/avatar1626761045760-16267610465382025083214.jpg",
    icon: <Mountain className="w-5 h-5" />,
  },
  {
    id: "cong-giao",
    name: "Công giáo",
    summary:
      "Kitô giáo lớn, truyền vào Việt Nam từ thế kỷ 16; có hệ thống giáo phận, chức sắc, hoạt động quốc tế",
    detail:
      "Được công nhận với Giáo hội Công giáo Việt Nam. Có nhiều giáo phận ở các vùng, hoạt động truyền đạo, giáo dục, bác ái xã hội, cơ sở thờ tự. Tuân theo Hiến chương Công giáo, có chức sắc như giám mục, linh mục. Có quan hệ quốc tế với Giáo hội Công giáo toàn cầu.",
    imageUrl:
      "https://media.thanhtra.com.vn/public/data/images/0/2021/10/13/congdinh/linh-muc02-1602254447.jpg?w=1319",
    icon: <Cross className="w-5 h-5" />,
  },
  {
    id: "tin-lanh",
    name: "Tin lành",
    summary:
      "Tôn giáo Kitô giáo không Công giáo, gồm nhiều hệ phái, sinh hoạt tín đồ tại miền Bắc, miền Nam và các tỉnh",
    detail:
      "Bao gồm các hệ phái như: Hội thánh Tin lành Việt Nam (miền Bắc), Hội thánh Tin lành Việt Nam (miền Nam), Hội thánh Phúc Âm Toàn vẹn VN, Hội Truyền giáo Cơ đốc VN, Tổng hội Báp-tít VN, Giáo hội Báp-tít VN, Hội thánh Tin lành Trưởng Lão VN, Hội thánh Tin lành Liên hiệp Truyền giáo VN… Tổ chức có chức sắc, hoạt động truyền đạo, phúc âm, có sinh hoạt lễ, giáo lý, có đăng ký tổ chức, hiến chương, cơ cấu lãnh đạo theo Luật.",
    imageUrl:
      "https://tinnguongviet.info/upload/news/920khai-quat-ve-dao-tin-lanh.jpg",
    icon: <Book className="w-5 h-5" />,
  },
  {
    id: "cao-dai",
    name: "Cao Đài",
    summary:
      "Tôn giáo nội sinh, tổng hợp giáo lý của nhiều tôn giáo, có hệ thống chức sắc, cơ sở thờ tự riêng biệt",
    detail:
      'Cao Đài được Nhà nước công nhận là một trong 16 tôn giáo. Có nhiều chức sắc, hệ phái, cơ sở thờ tự, giáo đồ. Tôn giáo có tổ chức riêng, có lễ nghi, giáo luật; người theo có hoạt động tín ngưỡng, sinh hoạt tín đồ, tổ chức đào tạo chức sắc. Đường hướng hành đạo: "Nước vinh – Đạo sáng".',
    imageUrl:
      "https://i.vnbusiness.vn/2021/07/16/z2613940690849-e876944b50c70fe-1863-2645-1626405758_860x0.jpg",
    icon: <Eye className="w-5 h-5" />,
  },
  {
    id: "phat-giao-hoa-hao",
    name: "Phật giáo Hòa Hảo",
    summary:
      "Một nhánh Phật giáo nội sinh, nhấn mạnh thực hành đời sống đạo, có tổ chức Giáo hội riêng",
    detail:
      "Phật giáo Hòa Hảo được công nhận với Giáo hội Phật giáo Hòa Hảo. Hoạt động tín ngưỡng, lễ nghi, sinh hoạt cộng đồng, từ thiện, giáo dục. Hòa Hảo có đặc điểm gần dân, thực hành đạo trong đời sống hàng ngày, không qua trung gian nhiều dạng như trong các hệ phái Phật truyền thống.",
    imageUrl: "https://cms.btgcp.gov.vn/upload-img/userfiles/images/123.jpg",
    icon: <Flower className="w-5 h-5" />,
  },
  {
    id: "hoi-giao",
    name: "Hồi giáo",
    summary:
      "Tôn giáo quốc tế, có tín đồ chủ yếu ở cộng đồng Chăm, có tổ chức và hệ phái riêng",
    detail:
      "Hồi giáo được công nhận với các tổ chức như Ban Đại diện Cộng đồng Hồi giáo TP. HCM; Cộng đồng Hồi giáo (Islam) tỉnh An Giang; Hội đồng Sư cả Hồi giáo Bàni tỉnh Ninh Thuận; các cộng đồng tỉnh Tây Ninh, Ninh Thuận, Bình Thuận… Hồi giáo hoạt động theo kinh Qur'an, Sunnah, có chức sắc, thầy tu, các lễ hội, sinh hoạt tín ngưỡng, có quyền đào tạo, xây dựng cơ sở thờ (thánh đường, nhà thờ Hồi giáo).",
    imageUrl:
      "https://images.baodantoc.vn/thumbs/600x315/uploads/2021/Th%C3%A1ng_10/Ng%C3%A0y%203/Hoi%20giao/ANH%20TIN%20NGUONG%20NGUOI%20CHAM%203.jpg",
    icon: <Moon className="w-5 h-5" />,
  },
  {
    id: "ton-giao-bahai",
    name: "Baha'i",
    summary:
      "Giáo hội Baha'i được chính thức công nhận, có sinh hoạt ở nhiều cộng đồng nhỏ",
    detail:
      "Được công nhận năm 2008; có các cộng đồng Baha'i tại nhiều tỉnh, thành phố. Có cơ cấu tổ chức gồm Hội đồng thường trực tôn giáo Baha'i Việt Nam, cấp địa phương. Người theo đạo Baha'i sinh hoạt theo giáo lý của đạo, tham gia hoạt động đoàn kết, hòa hợp, phục vụ cộng đồng.",
    imageUrl:
      "https://vanhoatamlinh.com/wp-content/uploads/2022/04/khai-quat-ve-ton-giao-bahai-tai-viet-nam-1.jpg",
    icon: <Star className="w-5 h-5" />,
  },
  {
    id: "tinh-do-cu-si",
    name: "Tịnh độ Cư sĩ Phật hội Việt Nam",
    summary:
      "Hệ phái Phật giáo cư sĩ, hoạt động tín ngưỡng Phật giáo trong đời sống cư sĩ",
    detail:
      "Tôn giáo được công nhận với Giáo hội Tịnh độ Cư sĩ Phật hội Việt Nam. Có tổ chức hội sinh hoạt theo giáo lý Phật, cư sĩ, không tu hành chuyên biệt như tăng sĩ, nhưng có chức việc, nhà tổ chức tín ngưỡng. Hoạt động sinh hoạt tín ngưỡng, lễ Phật, từ thiện.",
    imageUrl:
      "https://cms.btgcp.gov.vn/upload-img/userfiles/images/image-20210915114522-2.jpeg",
    icon: <Heart className="w-5 h-5" />,
  },
  {
    id: "co-duc-phuc-lam",
    name: "Cơ đốc Phục lâm",
    summary:
      "Nhánh Tin lành quốc tế, nhấn mạnh giữ ngày Sabbath (ngày thứ bảy) và hoạt động giáo dục, y tế",
    detail:
      "Cơ đốc Phục lâm được công nhận, với tổ chức giáo hội riêng. Hoạt động truyền đạo, tổ chức giáo dục nếu được phép, tuân theo quy định pháp luật. Sinh hoạt tín đồ, sinh hoạt Tin lành, có chức sắc.",
    imageUrl:
      "https://vanhoatamlinh.com/wp-content/uploads/2022/05/khai-quat-ve-giao-hoi-co-doc-phuc-lam-o-viet-nam-3.jpg",
    icon: <Sun className="w-5 h-5" />,
  },
  {
    id: "phat-giao-tu-an",
    name: "Phật giáo Tứ Ân Hiếu nghĩa",
    summary:
      "Một tôn giáo nội sinh/nhánh Phật giáo, hoạt động tín ngưỡng – lễ nghi riêng",
    detail:
      "Phật giáo Tứ Ân Hiếu nghĩa được công nhận, trước là Đạo Tứ Ân Hiếu nghĩa, đổi tên năm 2020. Có số lượng tín đồ nhất định, các chức sắc chức việc, có cơ sở thờ tự, hoạt động sinh hoạt tín ngưỡng.",
    imageUrl:
      "https://cly.1cdn.vn/2021/06/14/dantoctongiao.congly.vn-upload-content_img-2021-0614-_anh_1_-_lanh_dao_tinh_an_giang_va_huyen_tri_ton_chuc_mung_phat_hoi_tu_an_hieu_nghia.jpg",
    icon: <Mountain className="w-5 h-5" />,
  },
  {
    id: "minh-su-dao",
    name: "Minh Sư đạo",
    summary:
      "Tôn giáo nội sinh, ít phổ biến hơn, có tín đồ nhỏ hơn so với các tôn giáo lớn",
    detail:
      "Minh Sư đạo là một trong các tôn giáo nội sinh được công nhận. Có tổ chức riêng, sinh hoạt tín ngưỡng, lễ nghi, có thờ cơ sở — thực tế hoạt động và mức ảnh hưởng nhỏ hơn so với các tôn giáo lớn.",
    imageUrl:
      "https://vanhoatamlinh.com/wp-content/uploads/2022/07/dao-minh-su-o-hoi-an.jpg",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    id: "minh-ly-dao",
    name: "Minh Lý đạo – Tam Tông Miếu",
    summary:
      "Một tôn giáo nội sinh, có tổ chức, hoạt động tín ngưỡng vùng địa phương",
    detail:
      "Minh Lý đạo – Tam Tông Miếu được công nhận với tổ chức tên Hội thánh Minh Lý đạo - Tam Tông Miếu. Có sinh hoạt tín ngưỡng, lễ nghi riêng, có chức sắc chức việc, có cơ sở thờ tự.",
    imageUrl:
      "https://vanhoatamlinh.com/wp-content/uploads/2022/05/khai-quat-ve-minh-ly-dao-tam-tong-mieu-2.jpg",
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: "ba-la-mon",
    name: "Bà-la-môn giáo",
    summary:
      "Tôn giáo của cộng đồng Chăm, chủ yếu tại vùng Ninh Thuận, Bình Thuận; có hệ thống chức sắc riêng",
    detail:
      "Cộng đồng Bà-la-môn Việt Nam có các tổ chức được công nhận như Hội đồng chức sắc Chăm Bà la môn Ninh Thuận, Hội đồng chức sắc Bà la môn giáo Bình Thuận (cùng năm 2012). Có chức sắc, đền thờ (đền Bà la môn), lễ nghi riêng, sinh hoạt tín ngưỡng trong cộng đồng Chăm.",
    imageUrl:
      "https://pharatravel.com/wp-content/uploads/2021/03/dao-ba-la-mon-2.jpg",
    icon: <Mountain className="w-5 h-5" />,
  },
  {
    id: "mac-mon",
    name: "Mặc môn",
    summary: "Nhánh Kitô giáo, ít tín đồ hơn, nhưng được công nhận",
    detail:
      "Được Nhà nước công nhận Tổ chức Giáo hội Các Thánh hữu ngày sau Chúa Jêsu Ky-tô (Mormon). Hoạt động truyền đạo, sinh hoạt tín hữu, có chức sắc, có sinh hoạt lễ giáo, có hợp pháp tổ chức theo Luật tín ngưỡng, tôn giáo.",
    imageUrl:
      "https://d1s0cxawdx09re.cloudfront.net/uploads/2016/06/Church-granted-full-and-official-recognition-in-Vietnam.jpg",
    icon: <Book className="w-5 h-5" />,
  },
  {
    id: "phat-giao-hieu-nghia",
    name: "Phật giáo Hiếu Nghĩa Tà Lơn",
    summary:
      "Một tôn giáo Phật giáo nhỏ, nội sinh, hoạt động tín ngưỡng tại địa phương",
    detail:
      "Phật giáo Hiếu Nghĩa Tà Lơn được công nhận gần đây (sau Luật mới), có tổ chức Phật hội, tín đồ, hội sinh hoạt tín ngưỡng, lễ nghi, cơ sở thờ tự.",
    imageUrl:
      "https://dangcongsan.org.vn/upload/2006988/20250623/5619702e7279eb513ce83febfe3a636ebaoangiang_20_1__2_.jpg",
    icon: <Flower className="w-5 h-5" />,
  },
  {
    id: "buu-son-ky-huong",
    name: "Bửu Sơn Kỳ Hương",
    summary:
      "Tôn giáo nội sinh, dựa trên nền tảng Phật giáo, ít người biết tới ngoài vùng hoạt động chính",
    detail:
      "Bửu Sơn Kỳ Hương được công nhận như một trong 16 tôn giáo; có một số chùa tại một số tỉnh, thành phố trực thuộc trung ương được cấp đăng ký hoạt động tôn giáo, công nhận Ban Trị sự, Ban Quản trị chùa. Hoạt động tín ngưỡng, lễ nghi địa phương.",
    imageUrl:
      "https://vanhoatamlinh.com/wp-content/uploads/2022/05/khai-quat-ve-dao-buu-son-ky-huong-o-viet-nam-1.jpg",
    icon: <Mountain className="w-5 h-5" />,
  },
];

const challenges: Challenge[] = [
  {
    id: "khac-biet-giao-ly",
    title: "Khác biệt giáo lý, thế giới quan – nhân sinh quan",
    description:
      "Mỗi tôn giáo có hệ tư tưởng, cách nhìn nhận con người và xã hội khác nhau → khó tìm tiếng nói chung nếu thiếu tôn trọng sự khác biệt.",
    icon: <Book className="w-6 h-6" />,
    color: "bg-red-100 text-red-700",
  },
  {
    id: "canh-tranh-tin-do",
    title: "Cạnh tranh tín đồ và phát triển đạo",
    description:
      "Một số tôn giáo mở rộng nhanh (đặc biệt ở vùng dân tộc thiểu số) gây sức ép, tạo tâm lý bất cân bằng giữa các tôn giáo.",
    icon: <Users className="w-6 h-6" />,
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: "mau-thuan-noi-bo",
    title: "Mâu thuẫn và bất ổn nội bộ",
    description:
      "Một số chức sắc tha hóa, tranh chấp vị trí, bất tuân giáo luật → làm suy giảm uy tín và cản trở đối thoại liên tôn.",
    icon: <AlertTriangle className="w-6 h-6" />,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    id: "nguy-co-loi-dung",
    title: "Nguy cơ bị lợi dụng chính trị",
    description:
      "Các thế lực xấu có thể kích động, lợi dụng tôn giáo để chia rẽ, gây mất đoàn kết dân tộc và bất ổn xã hội.",
    icon: <Shield className="w-6 h-6" />,
    color: "bg-red-100 text-red-700",
  },
  {
    id: "thieu-co-che-doi-thoai",
    title: "Thiếu cơ chế đối thoại bền vững",
    description:
      "Hiện chưa có hệ thống đối thoại liên tôn ổn định, chuyên nghiệp → dễ dẫn đến hiểu lầm, thiếu hợp tác, khó xử lý các vấn đề xã hội chung.",
    icon: <MessageCircle className="w-6 h-6" />,
    color: "bg-blue-100 text-blue-700",
  },
];

export default function PracticePage() {
  const [selectedReligion, setSelectedReligion] = useState<Religion | null>(
    null
  );

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <Navigation />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
          <div className="relative z-10 max-w-6xl mx-auto text-center my-10">
            <h1 className="text-4xl font-heading bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
              Thực tiễn và hòa hợp tôn giáo
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Khám phá tình hình thực tế và những thách thức trong quản lý tôn
              giáo tại Việt Nam
            </p>
          </div>
          {/* Background Images Grid */}
          <div className="flex flex-col gap-y-4 pointer-events-none opacity-75 w-full px-16">
            {/* First Row - 8 images */}
            <div className="flex gap-x-2 h-48">
              <div className="flex-1 relative">
                <Image
                  src="/religion-img/phat-giao.png"
                  alt=""
                  fill
                  className="filter grayscale object-contain bg-white"
                />
              </div>
              <div className="flex-1 relative">
                <Image
                  src="/religion-img/cong-giao.png"
                  alt=""
                  fill
                  className="object-contain bg-white filter grayscale"
                />
              </div>
              <div className="flex-1 relative">
                <Image
                  src="/religion-img/tin-lanh.jpeg"
                  alt=""
                  fill
                  className="object-contain bg-white filter grayscale"
                />
              </div>
              <div className="flex-1 relative">
                <Image
                  src="/religion-img/cao-dai.jpeg"
                  alt=""
                  fill
                  className="object-contain bg-white filter grayscale"
                />
              </div>
              <div className="flex-1 relative">
                <Image
                  src="/religion-img/phat-giao-hoa-hao.png"
                  alt=""
                  fill
                  className="object-contain bg-white filter grayscale"
                />
              </div>
              <div className="flex-1 relative">
                <Image
                  src="/religion-img/hoi-giao.png"
                  alt=""
                  fill
                  className="filter grayscale object-contain bg-white"
                />
              </div>
              <div className="flex-1 relative">
                <Image
                  src="/religion-img/baha.jpeg"
                  alt=""
                  fill
                  className="object-contain bg-white filter grayscale"
                />
              </div>
              <div className="flex-1 relative">
                <Image
                  src="/religion-img/cu-si-phat-hoi.jpeg"
                  alt=""
                  fill
                  className="object-contain bg-white filter grayscale"
                />
              </div>
            </div>

            {/* Second Row - 8 images */}
            <div className="flex gap-x-2">
              <div className="flex-1 relative h-50 w-50">
                <Image
                  src="/religion-img/co-doc-phuc-lam.png"
                  alt=""
                  fill
                  className="object-contain bg-white filter grayscale"
                />
              </div>
              <div className="flex-1 relative">
                <Image
                  src="/religion-img/Tu-An-Hieu-Nghia.jpeg"
                  alt=""
                  fill
                  className="object-contain bg-white filter grayscale"
                />
              </div>
              <div className="flex-1 relative">
                <Image
                  src="/religion-img/minh-su-dao.png"
                  alt=""
                  fill
                  className="object-contain bg-white filter grayscale"
                />
              </div>
              <div className="flex-1 relative">
                <Image
                  src="/religion-img/minh-ly-dao.jpeg"
                  alt=""
                  fill
                  className="object-contain bg-white filter grayscale"
                />
              </div>
              <div className="flex-1 relative">
                <Image
                  src="/religion-img/ba-la-mon.png"
                  alt=""
                  fill
                  className="object-contain bg-white filter grayscale"
                />
              </div>
              <div className="flex-1 relative">
                <Image
                  src="/religion-img/mormon.jpeg"
                  alt=""
                  fill
                  className="object-contain bg-white filter grayscale"
                />
              </div>
              <div className="flex-1 relative">
                <Image
                  src="/religion-img/hieu-nghia-ta-lon.jpeg"
                  alt=""
                  fill
                  className="object-contain bg-white filter grayscale"
                />
              </div>
              <div className="flex-1 relative">
                <Image
                  src="/religion-img/buu-son-ky-huong.png"
                  alt=""
                  fill
                  className="object-contain bg-white filter grayscale"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Religion Overview Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-start mb-12">
              <h2 className="text-3xl font-heading font-black text-start text-foreground mb-8">
                16 Tôn giáo được công nhận tại Việt Nam
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl">
                Nước Việt Nam có truyền thống văn hóa lâu đời, có 54 dân tộc với
                nhiều tôn giáo khác nhau. Hiện nay, Việt Nam có 16 tôn giáo được
                Nhà nước công nhận và cho phép hoạt động.
              </p>
            </div>

            {/* Religion Grid*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {religions.map((religion) => (
                <Dialog key={religion.id}>
                  <DialogTrigger>
                    <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm h-full flex flex-col">
                      <CardHeader className="p-0 flex-shrink-0">
                        <div className="w-full h-48 relative mb-3 rounded-lg overflow-hidden">
                          <Image
                            src={religion.imageUrl}
                            alt={religion.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardTitle className="flex items-center text-center flex-col gap-2 text-lg mt-2 min-h-[60px] px-4">
                          {religion.icon}
                          <span className="line-clamp-2">{religion.name}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col justify-between p-4">
                        <p className="text-sm text-gray-600 line-clamp-3 text-center mb-4 flex-1">
                          {religion.summary}
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full mt-auto"
                        >
                          Xem chi tiết
                        </Button>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="min-w-[50%] w-full max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
                    {/* Header Section */}
                    <DialogHeader className="border-b border-gray-100 pb-6 mb-6">
                      <DialogTitle className="flex items-center justify-center gap-3 text-2xl font-bold text-gray-800">
                        <div className="p-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full">
                          {religion.icon}
                        </div>
                        <p className="text-xl font-heading bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                          {religion.name}
                        </p>
                      </DialogTitle>
                    </DialogHeader>

                    {/* Content Section */}
                    <div className="space-y-8 px-2">
                      {/* Image Section */}
                      <div className="w-full h-80 relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-50 to-gray-100">
                        <Image
                          src={religion.imageUrl}
                          alt={religion.name}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Summary Section */}
                      <div className="bg-gradient-to-r from-gray-50 to-gray-200 rounded-xl p-6 border-l-4 border-[#AA8C37]">
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
                          <div className="w-2 h-2 bg-[#AA8C37] rounded-full"></div>
                          Tóm tắt
                        </h4>
                        <p className="text-gray-700 leading-relaxed text-base">
                          {religion.summary}
                        </p>
                      </div>

                      {/* Detail Section */}
                      <div className="rounded-xl p-6 bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-[#008894]">
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-4">
                          <div className="w-2 h-2 bg-[#008894] rounded-full"></div>
                          Chi tiết
                        </h4>
                        <p className="text-gray-700 leading-relaxed text-base">
                          {religion.detail}
                        </p>
                      </div>

                      {/* Footer spacing */}
                      <div className="pb-4"></div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-start mb-12">
              <h2 className="text-3xl font-heading font-black text-start text-foreground mb-8">
                Những thách thức trong thực tiễn
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                Các vấn đề cần được giải quyết để duy trì hòa hợp tôn giáo
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {challenges.map((challenge, idx) => (
                <div
                  key={challenge.id}
                  className="flex items-start gap-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6"
                >
                  <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center text-2xl font-bold ${challenge.color}`}
                  >
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      {challenge.icon}
                      {challenge.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-row justify-between">
              <Link href="/">
                <Button variant="outline">
                  <ChevronLeft className="h-4 w-4" />
                  Về trang chủ
                </Button>
              </Link>
              <Link href="/solutions">
                <Button>
                  Vận dụng
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
