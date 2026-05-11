import { useState } from "react";
import Reveal from "./Reveal";
import { NAV_LINKS } from "../data/portfolioData";

export default function Contact({ sectionRefs, scrollTo }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = async () => {
    // Validation check
    if (!formData.name.trim()) {
      alert("⚠️ Warning: Please enter your name");
      return;
    }
    if (!formData.email.trim()) {
      alert("⚠️ Warning: Please enter your email");
      return;
    }
    if (!formData.message.trim()) {
      alert("⚠️ Warning: Please enter your message");
      return;
    }

    try {
      const response = await fetch(
        "https://portfoli-qvwm.onrender.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.text();

      alert("✅ Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.log(error);
      alert("❌ Backend Connection Error");
    }
  };

  return (
    <section
      id="Contact"
      ref={(el) => (sectionRefs.current["Contact"] = el)}
      style={{
        padding: "100px 5% 60px",
        position: "relative",
        zIndex: 2,
        scrollMarginTop: 90,
      }}
    >

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <Reveal>
          <p
            style={{
              color: "#6366f1",
              fontWeight: 600,
              fontSize: 14,
              textTransform: "uppercase",
              letterSpacing: 3,
              marginBottom: 12,
            }}
          >
            Get In Touch
          </p>

          <h2
            className="section-title"
            style={{
              marginBottom: 12,
            }}
          >
            Let's Build Together
          </h2>

          <p
            style={{
              color: "#64748b",
              fontSize: 16,
              marginBottom: 56,
            }}
          >
            Have a project in mind or just want to say hi?
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: 40,
          }}
        >

          {/* LEFT FORM */}
          <Reveal delay={0.1}>
            <div
              className="glass gradient-border"
              style={{
                borderRadius: 24,
                padding: 32,
                position: "relative",
                zIndex: 10,
              }}
            >

              <h3
                style={{
                  color: "#fff",
                  fontSize: 28,
                  fontWeight: 700,
                  marginBottom: 28,
                  textAlign: "center",
                }}
              >
                Send a Message
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    padding: "16px",
                    borderRadius: "12px",
                    border:
                      "1px solid rgba(99,102,241,0.2)",
                    background: "#111827",
                    color: "#fff",
                    fontSize: "15px",
                    outline: "none",
                  }}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    padding: "16px",
                    borderRadius: "12px",
                    border:
                      "1px solid rgba(99,102,241,0.2)",
                    background: "#111827",
                    color: "#fff",
                    fontSize: "15px",
                    outline: "none",
                  }}
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    padding: "16px",
                    borderRadius: "12px",
                    border:
                      "1px solid rgba(99,102,241,0.2)",
                    background: "#111827",
                    color: "#fff",
                    fontSize: "15px",
                    outline: "none",
                    resize: "none",
                  }}
                />

                <button
                  type="button"
                  onClick={sendMessage}
                  style={{
                    background:
                      "linear-gradient(135deg,#6366f1,#8b5cf6)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "14px",
                    padding: "16px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    width: "100%",
                    marginTop: "6px",
                    position: "relative",
                    zIndex: 999,
                  }}
                >
                  Send Message →
                </button>

              </div>
            </div>
          </Reveal>

          {/* RIGHT CONTACT CARDS */}
          <Reveal delay={0.2}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 22,
              }}
            >

              {[
                {
                  icon: "📧",
                  label: "Email",
                  value: "dhanwanthb@gmail.com",
                  href: "mailto:dhanwanthb@gmail.com",
                },
                {
                  icon: "💼",
                  label: "LinkedIn",
                  value: "dhanwanth-bala",
                  href:
                    "https://www.linkedin.com/in/dhanwanth-bala-a686a7327/",
                },
                {
                  icon: "🐱",
                  label: "GitHub",
                  value: "github.com/DHANWANTH01",
                  href:
                    "https://github.com/DHANWANTH01",
                },
                {
                  icon: "📱",
                  label: "Phone",
                  value: "+91-9629324204",
                  href: "tel:+919629324204",
                },
              ].map((contact) => {
                const buttonText =
                  contact.label === "LinkedIn" || contact.label === "GitHub"
                    ? "View Profile"
                    : contact.label === "Email"
                    ? "Send Email"
                    : "Call";

                return (
                  <div
                    key={contact.label}
                    className="glass gradient-border"
                    style={{
                      borderRadius: 20,
                      padding: 28,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 32,
                        marginBottom: 12,
                      }}
                    >
                      {contact.icon}
                    </div>

                    <div
                      style={{
                        color: "#64748b",
                        marginBottom: 10,
                      }}
                    >
                      {contact.label}
                    </div>

                    <div
                      style={{
                        color: "#818cf8",
                        fontWeight: 600,
                        fontSize: 18,
                        marginBottom: 20,
                      }}
                    >
                      {contact.value}
                    </div>

                    <a
                      href={contact.href}
                      {...(contact.href.startsWith("http")
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                        color: "#fff",
                        borderRadius: 12,
                        padding: "12px 22px",
                        fontSize: 14,
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "transform 0.2s ease, opacity 0.2s ease",
                      }}
                    >
                      {buttonText}
                    </a>
                  </div>
                );
              })}

            </div>
          </Reveal>

        </div>

      </div>

      {/* FOOTER */}
      <div
        style={{
          maxWidth: 1100,
          margin: "80px auto 0",
          borderTop:
            "1px solid rgba(99,102,241,0.1)",
          paddingTop: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >

        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#818cf8",
          }}
        >
          Dhanwanth Bala
        </div>

        <p
          style={{
            color: "#6b7280",
            fontSize: 13,
          }}
        >
          © 2025 · Built with React & MySQL
        </p>

        <div
          style={{
            display: "flex",
            gap: 18,
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: "none",
                border: "none",
                color: "#6b7280",
                cursor: "pointer",
                fontSize: 13,
              }}
            >
              {link}
            </button>
          ))}
        </div>

      </div>

    </section>
  );
}