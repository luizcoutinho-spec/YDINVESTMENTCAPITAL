import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, company, email, phone, subject, message } = await req.json();

    await resend.emails.send({
      from: "YD Investment Capital <onboarding@resend.dev>",
      to: "luiz.coutinho@brandvakt.com",
      subject: subject ? `[YD] ${subject}` : `[YD] Nova mensagem de ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
          <h2 style="border-bottom:1px solid #eee;padding-bottom:12px">Nova mensagem — YD Investment Capital</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#666;width:120px">Nome</td><td style="padding:8px 0"><strong>${name}</strong></td></tr>
            <tr><td style="padding:8px 0;color:#666">Empresa</td><td style="padding:8px 0">${company || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666">Telefone</td><td style="padding:8px 0">${phone || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Assunto</td><td style="padding:8px 0">${subject || "—"}</td></tr>
          </table>
          <h3 style="margin-top:24px">Mensagem</h3>
          <p style="line-height:1.6;white-space:pre-wrap">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Falha ao enviar email" }, { status: 500 });
  }
}
