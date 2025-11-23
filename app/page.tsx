"use client";

import { useMemo, useState } from "react";

type Service = {
  id: string;
  title: string;
  description: string;
  gradient: string;
};

const services: Service[] = [
  {
    id: "experience",
    title: "تجارب رقمية آسرة",
    description:
      "نبتكر مواقع وتطبيقات تشدّ الانتباه منذ اللحظة الأولى وتمنح جمهورك إحساسًا بأنهم في المكان الصحيح.",
    gradient: "linear-gradient(135deg, rgba(66,135,245,0.8), rgba(77,196,202,0.65))"
  },
  {
    id: "performance",
    title: "أداء بلا مساومة",
    description:
      "نستفيد من Next.js لضمان سرعة التحميل، تحسين محركات البحث، ومرونة النشر على منصات مثل Vercel.",
    gradient: "linear-gradient(135deg, rgba(150,118,255,0.85), rgba(255,118,186,0.7))"
  },
  {
    id: "partnership",
    title: "شراكة استراتيجية",
    description:
      "نغوص في رؤيتك، نحلّل جمهورك، ونحوّل الأفكار إلى منتج رقمي متكامل يدفع عملك إلى الأمام.",
    gradient: "linear-gradient(135deg, rgba(84,214,154,0.9), rgba(48,120,214,0.75))"
  }
];

export default function HomePage() {
  const [active, setActive] = useState<string>(services[0].id);

  const activeService = useMemo(
    () => services.find((service) => service.id === active) ?? services[0],
    [active]
  );

  return (
    <main className="home">
      <section className="hero">
        <div className="hero__badge">وكالة بناء منتجات رقمية</div>
        <h1>نحن لا نبني مزاقع… بل نصنع تجارب رقمية تُشبه رؤيتك.</h1>
        <p>
          فريقنا يتعامل مع كل مشروع وكأنه منتج مستقل. من الاستراتيجية والمحتوى، إلى واجهات الاستخدام
          المتقنة ونشرها على Vercel في أقل زمن ممكن.
        </p>
        <div className="hero__cta">
          <a className="hero__cta__primary" href="#services">
            خطط معنا الآن
          </a>
          <a className="hero__cta__secondary" href="#process">
            اكتشف المنهجية
          </a>
        </div>
      </section>

      <section id="services" className="services">
        <div className="services__header">
          <h2>ماذا نبني؟</h2>
          <p>
            نركز على الواجهات الحديثة المبنية باستخدام Next.js وReact، مع نظم إدارة محتوى متكاملة، ودعم
            مستمر للتطوير والتجربة.
          </p>
        </div>

        <div className="services__grid">
          <aside className="services__list">
            {services.map((service) => (
              <button
                key={service.id}
                className={`services__item ${service.id === active ? "services__item--active" : ""}`}
                onClick={() => setActive(service.id)}
                type="button"
              >
                <span>{service.title}</span>
                <span className="services__chevron">›</span>
              </button>
            ))}
          </aside>

          <article
            className="services__detail"
            style={{
              background: activeService.gradient
            }}
          >
            <h3>{activeService.title}</h3>
            <p>{activeService.description}</p>
            <ul>
              <li>جلسة اكتشاف معمقة لفهم الأهداف والجمهور.</li>
              <li>تخطيط تجربة مستخدم وواجهات تفاعلية موجهة للأداء.</li>
              <li>إطلاق سريع عبر Vercel مع متابعة القياس والتحسين.</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="process" className="process">
        <h2>كيف نعمل؟</h2>
        <div className="process__timeline">
          <div className="process__step">
            <span className="process__index">01</span>
            <h3>بحث وصياغة الرؤية</h3>
            <p>
              نستكشف سوقك والمنافسين، نصيغ رسالة العلامة التجارية، ونحدد أدوار التجربة الرقمية في تحقيق
              أهدافك.
            </p>
          </div>
          <div className="process__step">
            <span className="process__index">02</span>
            <h3>تصميم وتنفيذ متكامل</h3>
            <p>
              نصمم واجهات عالية الدقة، ونبنيها باستخدام React وNext.js مع بنية قابلة للتوسع وربطها بأية
              خدمات داعمة تحتاجها.
            </p>
          </div>
          <div className="process__step">
            <span className="process__index">03</span>
            <h3>النشر والتحسين المستمر</h3>
            <p>
              ننشر المنتج على Vercel، نراقب الأداء، ونقترح تحسينات مستمرة لضمان تجربة متعة للمستخدم
              وعائد استثماري واضح.
            </p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>جاهز للانطلاق؟</h2>
        <p>أخبرنا عن تحدياتك وسنتولى صناعة منتج رقمي يحقق أهدافك التجارية.</p>
        <a className="cta__button" href="mailto:hello@agentic.studio">
          تواصل معنا
        </a>
      </section>
    </main>
  );
}
