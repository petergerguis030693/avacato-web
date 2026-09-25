import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold text-navy">الصفحة غير موجودة</h1>
      <p className="mt-4 text-muted">عذراً، لم نعثر على الصفحة المطلوبة.</p>
      <Link href="/" className="btn-gold mt-8 inline-flex">
        العودة للرئيسية
      </Link>
    </div>
  );
}
