import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-t border-primary/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Course Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary leading-tight">
              MLN131 - Chủ nghĩa xã hội khoa học
            </h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Chủ đề: Tôn giáo trong thời kì quá độ lên chủ nghĩa xã hội
            </p>
          </div>

          {/* Group Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-primary">Thông tin nhóm</h4>
            <div className="space-y-3">
              <p className="text-sm text-foreground/80 leading-relaxed">
                Nhóm 1 - Half1_SE1725
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Giảng viên: HieuNT328
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-primary">Liên kết nhanh</h4>
            <div className="space-y-3">
              <Link 
                href="/ai-usage" 
                className="block text-sm text-foreground/80 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md transition-all duration-200 hover:translate-x-1"
              >
                AI Usage
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-primary">Thông tin bổ sung</h4>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Website học tập và nghiên cứu về chủ nghĩa xã hội khoa học
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-sm text-foreground/70 leading-relaxed">
              © 2024 MLN131 - Chủ nghĩa xã hội khoa học. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-sm text-foreground/70 leading-relaxed">
                Được phát triển bởi Nhóm 1 - Half1_SE1725
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
