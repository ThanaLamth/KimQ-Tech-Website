import { Link } from "wouter";
import { isPublished } from "@/lib/trust-pages";

export function ConsentNote({ language = "vi", className = "" }: { language?: "vi" | "en"; className?: string }) {
  const policy = isPublished("/chinh-sach-bao-mat");
  const linkClass = "underline underline-offset-2 hover:opacity-80";
  if (language === "en") {
    return (
      <p className={`text-xs leading-relaxed text-[#F9F7F0]/80 ${className}`}>
        By sending your email, you agree that KimQ may contact you about this product
        {policy ? (
          <>
            {" "}as described in our <Link href="/chinh-sach-bao-mat" className={linkClass}>Privacy Policy</Link> (Vietnamese).
          </>
        ) : "."}
      </p>
    );
  }
  return (
    <p className={`text-xs leading-relaxed text-[#F9F7F0]/80 ${className}`}>
      Bằng việc gửi email, anh/chị đồng ý để KimQ liên hệ tư vấn về sản phẩm này
      {policy ? (
        <>
          {" "}theo <Link href="/chinh-sach-bao-mat" className={linkClass}>Chính sách bảo vệ dữ liệu cá nhân</Link>.
        </>
      ) : "."}
    </p>
  );
}
