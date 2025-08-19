import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { downloaderEmail, timestamp } = await request.json()

    const emailData = {
      to: "jhar52753@gmail.com",
      subject: "Resume Download Notification",
      html: `
        <h2>Your resume has been downloaded!</h2>
        <p><strong>Downloaded by:</strong> ${downloaderEmail}</p>
        <p><strong>Download time:</strong> ${new Date(timestamp).toLocaleString()}</p>
        <p><strong>IP Address:</strong> ${request.ip || "Unknown"}</p>
        <hr>
        <p>This is an automated notification from your portfolio website.</p>
      `,
    }

    // In a real application, you would integrate with an email service like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    // For now, we'll just log the notification
    console.log("[v0] Resume download notification:", emailData)

    // Simulate email sending success
    return NextResponse.json({
      success: true,
      message: "Download notification sent successfully",
    })
  } catch (error) {
    console.error("[v0] Error sending download notification:", error)
    return NextResponse.json({ success: false, message: "Failed to send notification" }, { status: 500 })
  }
}
