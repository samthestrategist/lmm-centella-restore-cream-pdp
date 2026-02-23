import { useState } from "react";
import { Helmet } from "react-helmet-async";

const CDN = {
  heroFront: "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/crc-hero-front_26ad5e04-3c33-4c93-afd1-dff74707da43.png?v=1771569957",
  heroAngle: "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/crc-hero-angle_e2e548fa-1756-4701-8f69-83924cbc2201.png?v=1771569970",
  lifestyleHands: "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/crc-texture-swatch_33b5eff6-8a2c-40fb-998a-df3c3a9cab8c.png?v=1771569979",
  textureSwatch: "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/crc-texture-swatch_33b5eff6-8a2c-40fb-998a-df3c3a9cab8c.png?v=1771569979",
  bundle3jars: "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/crc-bundle-3jars_10d120e7-f7d8-41fd-85d6-fa5fc6ce1d32.png?v=1771569973",
  adOverlay: "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/crc-ad-overlay_316b6422-0fa4-438f-ac87-17ad74a35734.png?v=1771569982",
};

const CHECKOUT = {
  jar1: "https://orthocliner.myshopify.com/cart/48026172489883:1?discount=SECRET25",
  jar2: "https://orthocliner.myshopify.com/cart/48026172948635:1?discount=SECRET25",
  jar3: "https://orthocliner.myshopify.com/cart/48026172981403:1?discount=SECRET25",
};

const COLORS = {
  primary: "#C4956A",
  cta: "#B85C38",
  headline: "#3D2B1F",
  body: "#4A3C31",
  bg: "#FAF6F1",
  bgDark: "#F3EDE4",
  green: "#2D6A4F",
  accent: "#8B5E3C",
};

const StarRating = ({ stars = 5 }: { stars?: number }) => (
  <span style={{ color: "#F4A40A", fontSize: "18px" }}>
    {"★".repeat(stars)}{"☆".repeat(5 - stars)}
  </span>
);

const CTAButton = ({ href, children, size = "normal" }: { href: string; children: React.ReactNode; size?: string }) => (
  <a
    href={href}
    style={{
      display: "inline-block",
      background: COLORS.cta,
      color: "#fff",
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 700,
      fontSize: size === "large" ? "18px" : "16px",
      padding: size === "large" ? "18px 40px" : "14px 32px",
      borderRadius: "9999px",
      textDecoration: "none",
      letterSpacing: "0.02em",
      boxShadow: "0 4px 16px rgba(184,92,56,0.25)",
      transition: "opacity 0.2s",
    }}
  >
    {children}
  </a>
);

const DiscountBadge = () => (
  <div style={{
    display: "inline-block",
    background: COLORS.green,
    color: "#fff",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    fontSize: "14px",
    padding: "6px 16px",
    borderRadius: "9999px",
    letterSpacing: "0.05em",
    marginBottom: "8px",
  }}>
    🏷 25% OFF — CODE: SECRET25
  </div>
);

const SectionDivider = () => (
  <div style={{ borderTop: `2px solid ${COLORS.primary}`, opacity: 0.3, margin: "60px 0" }} />
);

const Index = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How is Centella Restore Cream different from other cica moisturizers?",
      a: "The active question. Most brands use Centella extract at trace concentrations — enough to appear on the ingredient label, not enough to trigger the biological response that makes Centella valuable. The Centelloid Renewal Cascade™ is built around TECA (Titrated Extract of Centella Asiatica) — a pharmaceutical-grade preparation of the four active centellosides documented in NIH-published peer-reviewed research to activate fibroblast proliferation, Type I collagen synthesis, and glycosaminoglycan production. It's not just \"contains Centella.\" It's using the concentration that actually does what Centella can do.",
    },
    {
      q: "Can I use this with my retinol?",
      a: "Yes — and it pairs particularly well. Apply retinol first and let it absorb, then apply Centella Restore Cream as your final PM step. The ceramide and barrier-restoring compounds in the formula can actually reduce retinol-related irritation by strengthening the skin barrier before it can be disrupted. Many women find their retinol tolerance improves after 4-6 weeks of pairing.",
    },
    {
      q: "My skin is sensitized and reactive. Will this cause a reaction?",
      a: "Centella Asiatica has a decades-long clinical history as an anti-inflammatory, calming compound — it's used in pharmaceutical wound healing products (Madecassol®, Centellase®) where the last thing you want is irritation. The formula contains no added fragrance, synthetic dyes, or common sensitizers. That said: do a 48-hour patch test on your inner forearm before first use.",
    },
    {
      q: "How long before I see results, realistically?",
      a: "Weeks 1-2: Skin feels more hydrated, less tight. Weeks 3-4: Texture starts to improve. Dullness decreases. Weeks 6-8: This is when the structural work becomes visible. Skin feels thicker, more resilient, more like it did years ago. This is why we give you 60 days — we want you to see Phase 3 results before you make your decision.",
    },
    {
      q: "What does SECRET25 do?",
      a: "SECRET25 is our reader code for 25% off any bundle. Enter it at checkout — it applies automatically to any tier (1, 2, or 3 jars). No minimum order, no expiration date listed publicly. It's the best discount we offer. Use it.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Centella Restore Cream™ — Little Miss Mineral | Centelloid Renewal Cascade™</title>
        <meta name="description" content="Centella Restore Cream™ uses pharmaceutical-grade TECA to trigger the Centelloid Renewal Cascade™ — the three-phase biological process that restores perimenopausal skin from within. 60-Day Guarantee." />
      </Helmet>

      <div style={{ fontFamily: "'Inter', sans-serif", background: COLORS.bg, color: COLORS.body, minHeight: "100vh" }}>

        {/* NAV */}
        <nav style={{ background: "#fff", padding: "14px 24px", borderBottom: `1px solid rgba(196,149,106,0.2)`, display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "18px", color: COLORS.headline, letterSpacing: "-0.02em" }}>
            Little Miss Mineral
          </div>
          <a href={CHECKOUT.jar2} style={{ background: COLORS.cta, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "14px", padding: "10px 24px", borderRadius: "9999px", textDecoration: "none" }}>
            Shop Now — 25% OFF
          </a>
        </nav>

        {/* HERO */}
        <section style={{ background: `linear-gradient(135deg, #FDF8F3 0%, #F5EDE0 100%)`, padding: "60px 24px 80px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <DiscountBadge />
              <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 5vw, 52px)", lineHeight: 1.1, color: COLORS.headline, margin: "16px 0 24px", letterSpacing: "-0.02em" }}>
                I Still Feel 38 Inside.<br />
                <span style={{ color: COLORS.primary }}>I Just Want My Face to Match.</span>
              </h1>
              <p style={{ fontSize: "18px", lineHeight: 1.7, color: COLORS.body, maxWidth: "480px", marginBottom: "32px" }}>
                For women 40-55 whose skin changed faster than expected — introducing the Centelloid Renewal Cascade™, the three-phase biological process that addresses why your moisturizer stopped working.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "24px" }}>
                <CTAButton href={CHECKOUT.jar2} size="large">Choose Your Bundle — Save 25%</CTAButton>
              </div>
              <div style={{ fontSize: "13px", color: COLORS.accent }}>
                ✓ 60-Day Money-Back Guarantee &nbsp;·&nbsp; ✓ Free gifts with every order &nbsp;·&nbsp; ✓ Free shipping over $50
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src={CDN.heroFront}
                alt="Centella Restore Cream — front view"
                style={{ maxWidth: "100%", borderRadius: "20px", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
              />
            </div>
          </div>
        </section>

        {/* INTRO COPY */}
        <section style={{ maxWidth: "760px", margin: "0 auto", padding: "60px 24px" }}>
          <p style={{ fontSize: "18px", lineHeight: 1.8, color: COLORS.body }}>
            After 40, estrogen decline triggers a specific cascade inside your skin: fibroblast activity slows, collagen production drops by up to 30%, and your barrier begins leaking moisture faster than any moisturizer can replace it. That's not a product failure — that's biology. Centella Restore Cream™ works with a different mechanism entirely: pharmaceutical-grade TECA (Titrated Extract of Centella Asiatica) that signals dormant skin cells to rebuild from within, not just hydrate from the outside. Your skin didn't fail you. Your moisturizer just wasn't built for what your skin actually needs right now.
          </p>
        </section>

        {/* ANGLE IMAGE */}
        <section style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px 60px" }}>
          <img
            src={CDN.heroAngle}
            alt="Centella Restore Cream — angle view showing texture"
            style={{ width: "100%", borderRadius: "20px", objectFit: "cover", maxHeight: "500px" }}
          />
        </section>

        <SectionDivider />

        {/* MECHANISM */}
        <section style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px 80px" }}>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 40px)", color: COLORS.headline, textAlign: "center", marginBottom: "16px" }}>
            Introducing the Centelloid Renewal Cascade™
          </h2>
          <p style={{ textAlign: "center", fontSize: "18px", color: COLORS.body, maxWidth: "600px", margin: "0 auto 60px", lineHeight: 1.7 }}>
            Three Phases. One Cream. The Restoration Your Skin Has Been Waiting For.
          </p>
          <p style={{ textAlign: "center", fontSize: "16px", color: COLORS.body, maxWidth: "640px", margin: "0 auto 60px", lineHeight: 1.7 }}>
            Most moisturizers coat the surface. The Centelloid Renewal Cascade™ works beneath it — triggering a chain reaction in the cells responsible for everything your skin has lost in the last decade.
          </p>

          {[
            {
              phase: "Phase 1",
              title: "Fibroblast Reactivation",
              body: "Think of fibroblasts as your skin's construction crew. They build collagen, maintain structure, keep skin thick and resilient. When estrogen declines in perimenopause, these cells essentially go dormant. TECA contains four documented active compounds — asiaticoside, madecassoside, asiatic acid, and madecassic acid — that signal dormant fibroblasts to proliferate and migrate. Not \"stimulate\" in the vague marketing sense. Literally signal the cells to wake up and return to work. This is the switch. Everything else follows.",
              icon: "🔬",
            },
            {
              phase: "Phase 2",
              title: "Type I Collagen Synthesis",
              body: "Once fibroblasts are reactivated, they begin producing what your skin lost: Type I collagen — the structural scaffold that gives skin thickness, resilience, and that \"bounce\" you remember from your 30s. TECA also increases fibronectin production — the protein that holds collagen fibers in their proper formation. Together, these changes create thicker, more structurally sound skin. Not surface plumping. Actual architectural restoration from within.",
              icon: "🏗️",
            },
            {
              phase: "Phase 3",
              title: "Barrier & Hydration Restoration",
              body: "Instead of applying hyaluronic acid from outside and hoping it penetrates, TECA's triterpenoid compounds stimulate your skin to produce its own glycosaminoglycans — including its own hyaluronic acid. Simultaneously, ceramide-supporting compounds rebuild the skin barrier, reducing transepidermal water loss (TEWL). The bucket gets refilled. And for the first time, the hole gets patched.",
              icon: "💧",
            },
          ].map((phase, i) => (
            <div key={i} style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "40px",
              marginBottom: "24px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              borderLeft: `4px solid ${COLORS.primary}`,
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
                <div style={{ fontSize: "36px", lineHeight: 1 }}>{phase.icon}</div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "13px", color: COLORS.primary, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>
                    {phase.phase}
                  </div>
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "22px", color: COLORS.headline, marginBottom: "16px" }}>
                    {phase.title}
                  </h3>
                  <p style={{ lineHeight: 1.8, color: COLORS.body }}>{phase.body}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        <SectionDivider />

        {/* TEXTURE IMAGE */}
        <section style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px 80px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <img src={CDN.textureSwatch} alt="Centella Restore Cream texture" style={{ width: "100%", borderRadius: "20px", objectFit: "cover" }} />
            <img src={CDN.lifestyleHands} alt="Centella Restore Cream lifestyle" style={{ width: "100%", borderRadius: "20px", objectFit: "cover" }} />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section style={{ background: COLORS.bgDark, padding: "80px 24px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3.5vw, 36px)", color: COLORS.headline, textAlign: "center", marginBottom: "8px" }}>
              What Women Are Saying After 8 Weeks
            </h2>
            <p style={{ textAlign: "center", color: COLORS.accent, marginBottom: "48px", fontSize: "15px" }}>
              Real customers. Real skin. Real kitchens, real mirror moments.
            </p>

            {[
              {
                stars: 5,
                text: "After forty-seven years and two kids, I'd made peace with being disappointed by skincare. Six weeks into the Centella Restore Cream, I caught my reflection in the kitchen window on a Tuesday morning — no makeup, just me — and I thought: oh, there you are. That's the only way I can describe it. I looked like myself again.",
                name: "Karen M., 49",
                location: "Denver, CO",
                duration: "9 weeks",
              },
              {
                stars: 5,
                text: "I have sensitive skin that breaks out at the drop of a hat. I've thrown away more expensive creams than I care to admit. But eight weeks later, the texture has genuinely changed. Not 'feels softer when I touch it.' The actual architecture of my face looks different. I look like I got a good night's sleep even when I didn't.",
                name: "Susan T., 51",
                location: "Asheville, NC",
                duration: "11 weeks",
              },
              {
                stars: 5,
                text: "My dermatologist told me my skin thinning was 'just normal for my age.' The explanation of the Centelloid Renewal Cascade was the first time skincare science actually made sense to me. Eight weeks in, my skin has structure again. My husband asked if I'd done something different. I said: I found the right mechanism.",
                name: "Diane L., 48",
                location: "Madison, WI",
                duration: "10 weeks",
              },
            ].map((t, i) => (
              <div key={i} style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "32px",
                marginBottom: "24px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              }}>
                <StarRating stars={t.stars} />
                <p style={{ fontSize: "17px", lineHeight: 1.8, color: COLORS.body, margin: "16px 0 20px", fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "14px", color: COLORS.accent }}>
                  — {t.name} | {t.location} | using Centella Restore Cream for {t.duration}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BUNDLES */}
        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }} id="shop">
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3.5vw, 36px)", color: COLORS.headline, textAlign: "center", marginBottom: "8px" }}>
            Choose Your Restoration Protocol
          </h2>
          <p style={{ textAlign: "center", color: COLORS.accent, marginBottom: "48px", fontSize: "16px" }}>
            Use code <strong>SECRET25</strong> at checkout for 25% off any bundle — automatic, no hoops
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {/* Tier 1 */}
            <div style={{ background: "#fff", borderRadius: "24px", padding: "36px 28px", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: "1px solid rgba(196,149,106,0.2)" }}>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "22px", color: COLORS.headline, marginBottom: "8px" }}>Try It — 1 Jar</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "8px" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "32px", color: COLORS.cta }}>$59.25</span>
                <span style={{ textDecoration: "line-through", color: "#9CA3AF", fontSize: "18px" }}>$99</span>
                <span style={{ background: COLORS.green, color: "#fff", fontSize: "12px", fontWeight: 700, padding: "2px 8px", borderRadius: "9999px" }}>25% OFF</span>
              </div>
              <p style={{ fontSize: "13px", color: COLORS.accent, marginBottom: "4px" }}>Regular: $79 → <strong>$59.25 with SECRET25</strong></p>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: COLORS.body, margin: "16px 0 24px" }}>
                One jar of Centella Restore Cream™ (45-60 day supply). The perfect entry point to experience the first two phases of the Centelloid Renewal Cascade.
              </p>
              <p style={{ fontSize: "14px", color: COLORS.green, fontWeight: 600, marginBottom: "24px" }}>✓ FREE: Digital "Centella Skin Protocol" Guide ($29 value)</p>
              <CTAButton href={CHECKOUT.jar1}>Start With 1 Jar →</CTAButton>
            </div>

            {/* Tier 2 — BEST SELLER */}
            <div style={{ background: "linear-gradient(135deg, #FDF4EC 0%, #F5E6D3 100%)", borderRadius: "24px", padding: "36px 28px", boxShadow: "0 8px 32px rgba(184,92,56,0.15)", border: `2px solid ${COLORS.primary}`, position: "relative" }}>
              <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: COLORS.cta, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "13px", padding: "6px 20px", borderRadius: "9999px", whiteSpace: "nowrap" }}>
                ⭐ BEST SELLER — Most Popular
              </div>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "22px", color: COLORS.headline, marginBottom: "8px", marginTop: "8px" }}>Best Seller — 2 Jars</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "8px" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "32px", color: COLORS.cta }}>$111.75</span>
                <span style={{ textDecoration: "line-through", color: "#9CA3AF", fontSize: "18px" }}>$198</span>
                <span style={{ background: COLORS.green, color: "#fff", fontSize: "12px", fontWeight: 700, padding: "2px 8px", borderRadius: "9999px" }}>25% OFF</span>
              </div>
              <p style={{ fontSize: "13px", color: COLORS.accent, marginBottom: "4px" }}>Regular: $149 → <strong>$111.75 with SECRET25</strong></p>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: COLORS.body, margin: "16px 0 24px" }}>
                Two jars (90-120 day supply). Most women notice real structural change at weeks 6-8 — this gives you the full protocol with room to feel the results settle into your skin.
              </p>
              <div style={{ fontSize: "14px", color: COLORS.green, fontWeight: 600, marginBottom: "24px" }}>
                <div>✓ FREE: Digital "Centella Skin Protocol" Guide ($29 value)</div>
                <div>✓ FREE: Mini Rose Quartz Facial Roller ($24.99 value)</div>
                <div>✓ Free shipping included</div>
              </div>
              <CTAButton href={CHECKOUT.jar2}>Get 2 Jars — Best Seller →</CTAButton>
            </div>

            {/* Tier 3 */}
            <div style={{ background: "#fff", borderRadius: "24px", padding: "36px 28px", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: "1px solid rgba(196,149,106,0.2)" }}>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "22px", color: COLORS.headline, marginBottom: "8px" }}>Best Value — 3 Jars</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "8px" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "32px", color: COLORS.cta }}>$147.75</span>
                <span style={{ textDecoration: "line-through", color: "#9CA3AF", fontSize: "18px" }}>$297</span>
                <span style={{ background: COLORS.green, color: "#fff", fontSize: "12px", fontWeight: 700, padding: "2px 8px", borderRadius: "9999px" }}>25% OFF</span>
              </div>
              <p style={{ fontSize: "13px", color: COLORS.accent, marginBottom: "4px" }}>Regular: $197 → <strong>$147.75 with SECRET25</strong></p>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: COLORS.body, margin: "16px 0 24px" }}>
                Three jars (135-180 day supply). The Centelloid Renewal Cascade works deepest at the 8-12 week mark — 3 jars gives you the complete protocol at the lowest price-per-jar.
              </p>
              <div style={{ fontSize: "14px", color: COLORS.green, fontWeight: 600, marginBottom: "24px" }}>
                <div>✓ FREE: Digital "Centella Skin Protocol" Guide ($29 value)</div>
                <div>✓ FREE: Rose Quartz Facial Roller ($24.99 value)</div>
                <div>✓ FREE: 3-Pack Collagen Sheet Masks ($24.99 value)</div>
                <div>✓ Free shipping included</div>
              </div>
              <CTAButton href={CHECKOUT.jar3}>Get 3 Jars — Best Value →</CTAButton>
            </div>
          </div>

          {/* Bundle image */}
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <img src={CDN.bundle3jars} alt="Centella Restore Cream 3-jar bundle" style={{ maxWidth: "500px", width: "100%", borderRadius: "20px" }} />
          </div>
        </section>

        {/* GUARANTEE */}
        <section style={{ background: COLORS.bgDark, padding: "80px 24px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "64px", marginBottom: "16px" }}>🛡️</div>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3.5vw, 36px)", color: COLORS.headline, marginBottom: "16px" }}>
              60-Day Money-Back Guarantee
            </h2>
            <p style={{ fontStyle: "italic", color: COLORS.accent, fontSize: "18px", marginBottom: "32px" }}>
              Because the biology takes time — and we want you to see the results before you decide.
            </p>
            <p style={{ lineHeight: 1.8, color: COLORS.body, fontSize: "17px", marginBottom: "16px" }}>
              The Centelloid Renewal Cascade doesn't work in a week. Phase 1 (fibroblast reactivation) takes 4-6 weeks. Phase 2 (collagen synthesis) deepens through week 8. Real structural change happens over time — because real structural change is what's happening.
            </p>
            <p style={{ lineHeight: 1.8, color: COLORS.body, fontSize: "17px", marginBottom: "16px" }}>
              That's exactly why we give you <strong>60 days, not 30</strong>.
            </p>
            <p style={{ lineHeight: 1.8, color: COLORS.body, fontSize: "17px", marginBottom: "32px" }}>
              If you're not seeing the restoration you were promised — if your skin doesn't feel more resilient, more hydrated, more like the version of yourself you recognize — contact us and we will refund you completely. No forms. No restocking fees. No fine print. No explaining yourself. Full refund, no questions asked.
            </p>
            <CTAButton href={CHECKOUT.jar2} size="large">Start Your 60-Day Trial →</CTAButton>
          </div>
        </section>

        {/* INGREDIENTS */}
        <section style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px" }}>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3.5vw, 36px)", color: COLORS.headline, marginBottom: "8px" }}>
            What's Inside — And Why Every Ingredient Earns Its Place
          </h2>
          <div style={{ borderTop: `3px solid ${COLORS.primary}`, margin: "24px 0 32px" }} />

          {[
            { name: "TECA — Titrated Extract of Centella Asiatica (Pharmaceutical Grade)", desc: "The driver of the Centelloid Renewal Cascade™. A standardized preparation of the four active centellosides — asiaticoside, madecassoside, asiatic acid, madecassic acid — at concentrations documented in peer-reviewed NIH-published research (PMC3834700) to stimulate fibroblast proliferation, Type I collagen synthesis, fibronectin production, and glycosaminoglycan synthesis." },
            { name: "Hyaluronic Acid (Multi-Molecular Weight Complex)", desc: "Three molecular sizes working at three depths simultaneously. Large-molecule HA: surface hydration. Medium-molecule HA: mid-layer moisture binding. Low-molecular-weight HA: deeper penetration for sustained hydration. Together, they address dehydration from every layer." },
            { name: "Ceramides (Complex — Ceramide NP, AP, EOP)", desc: "Perimenopause depletes ceramide production, making the skin barrier increasingly permeable. This ceramide complex rebuilds and reinforces tight junctions in the skin barrier, reducing transepidermal water loss and restoring the barrier integrity your skin needs to stop the constant moisture drain." },
            { name: "Matrixyl Peptide Complex", desc: "Matrixyl works through a complementary pathway to TECA's fibroblast activation — sending collagen-synthesis signals through a separate channel. Together, TECA + Matrixyl create a two-pathway approach to structural collagen production." },
            { name: "Niacinamide (5%)", desc: "Reduces chronic low-grade inflammation — what researchers call \"inflammaging\" — that silently degrades collagen and accelerates visible aging. Also regulates melanin production and fortifies the skin barrier by stimulating ceramide synthesis. At 5%, the research-validated concentration." },
          ].map((ing, i) => (
            <div key={i} style={{ borderBottom: "1px solid rgba(196,149,106,0.2)", paddingBottom: "24px", marginBottom: "24px" }}>
              <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "17px", color: COLORS.headline, marginBottom: "8px" }}>{ing.name}</h4>
              <p style={{ lineHeight: 1.8, color: COLORS.body, fontSize: "15px" }}>{ing.desc}</p>
            </div>
          ))}

          <div style={{ background: COLORS.bgDark, borderRadius: "16px", padding: "20px 24px", fontSize: "14px", color: COLORS.accent, lineHeight: 1.7 }}>
            <strong>No added fragrance. No synthetic dyes. No parabens. No common sensitizers.</strong>
            <br />Because perimenopausal skin is reactive enough without asking it to tolerate anything it doesn't need.
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: COLORS.bgDark, padding: "80px 24px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3.5vw, 36px)", color: COLORS.headline, textAlign: "center", marginBottom: "40px" }}>
              Frequently Asked Questions
            </h2>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid rgba(196,149,106,0.2)", marginBottom: "0" }}>
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  style={{ width: "100%", textAlign: "left", padding: "20px 0", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}
                >
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "17px", color: COLORS.headline }}>{faq.q}</span>
                  <span style={{ fontSize: "24px", color: COLORS.primary, flexShrink: 0 }}>{activeFaq === i ? "−" : "+"}</span>
                </button>
                {activeFaq === i && (
                  <div style={{ padding: "0 0 20px", lineHeight: 1.8, color: COLORS.body, fontSize: "15px" }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CLOSING CTA */}
        <section style={{ background: `linear-gradient(135deg, ${COLORS.headline} 0%, #5C3D2E 100%)`, padding: "80px 24px", textAlign: "center", color: "#fff" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <img src={CDN.adOverlay} alt="Centella Restore Cream" style={{ maxWidth: "200px", marginBottom: "32px", borderRadius: "16px" }} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "20px", lineHeight: 1.7, marginBottom: "8px", opacity: 0.9 }}>
              Your skin has been asking for the right mechanism.
            </p>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 4vw, 36px)", marginBottom: "24px", lineHeight: 1.2 }}>
              Start Your Centelloid Renewal Cascade™ Today
            </h2>
            <p style={{ opacity: 0.85, marginBottom: "32px", fontSize: "16px", lineHeight: 1.7 }}>
              Give your skin 60 days to show you what it can do when it gets what it actually needs.
            </p>
            <div style={{ marginBottom: "24px" }}>
              <DiscountBadge />
            </div>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "20px" }}>
              <a href={CHECKOUT.jar1} style={{ background: "rgba(255,255,255,0.15)", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, padding: "12px 24px", borderRadius: "9999px", textDecoration: "none", fontSize: "15px" }}>1 Jar — $59.25</a>
              <a href={CHECKOUT.jar2} style={{ background: COLORS.cta, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, padding: "16px 36px", borderRadius: "9999px", textDecoration: "none", fontSize: "17px" }}>2 Jars — $111.75 (Best Seller)</a>
              <a href={CHECKOUT.jar3} style={{ background: "rgba(255,255,255,0.15)", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, padding: "12px 24px", borderRadius: "9999px", textDecoration: "none", fontSize: "15px" }}>3 Jars — $147.75</a>
            </div>
            <p style={{ opacity: 0.7, fontSize: "13px" }}>
              60-Day Money-Back Guarantee · Free gifts with every order · Use code SECRET25 at checkout
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: "#1a1a1a", color: "#9CA3AF", padding: "40px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#fff", marginBottom: "16px" }}>Little Miss Mineral</p>
            <p style={{ fontSize: "12px", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto 16px" }}>
              <strong>FDA Disclaimer:</strong> These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Results may vary. Individual results will depend on many factors including diet, exercise, and adherence to the protocol.
            </p>
            <p style={{ fontSize: "12px" }}>
              © 2026 Little Miss Mineral. All Rights Reserved. | <a href="https://www.littlemissmineral.com" style={{ color: "#9CA3AF" }}>littlemissmineral.com</a>
            </p>
          </div>
        </footer>

      </div>
    </>
  );
};

export default Index;
