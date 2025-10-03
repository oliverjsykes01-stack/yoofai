import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      parentName,
      email,
      phone,
      childName,
      childAge,
      gradeLevel,
      learningFocus,
      startDate,
      additionalNotes,
    } = body;

    // Validate required fields
    if (!parentName || !email || !childName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format grade level for display
    const gradeLevelMap: Record<string, string> = {
      'primary-ks1': 'Key Stage 1 (Years 1-2)',
      'primary-ks2': 'Key Stage 2 (Years 3-6)',
      'secondary-ks3': 'Key Stage 3 (Years 7-9)',
      'secondary-ks4': 'Key Stage 4 (Years 10-11)',
      'other': 'Other/Home Education'
    };
    const gradeLevelDisplay = gradeLevelMap[gradeLevel] || gradeLevel;

    // Format learning focus for display
    const learningFocusDisplay = learningFocus.map((focus: string) => {
      const labels: Record<string, string> = {
        'ai-art': 'AI Art & Creativity',
        'coding': 'Coding & Programming',
        'robotics': 'Robotics & Engineering',
        'data-science': 'Data Science Basics',
        'digital-literacy': 'Digital Literacy',
        'game-design': 'Game Design'
      };
      return labels[focus] || focus;
    }).join(', ');

    // Format date for display
    const formattedDate = new Date(startDate).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    // Send confirmation email to parent
    // In test mode, send to verified email (oliverjsykes01@gmail.com) instead of user's email
    const testMode = !process.env.RESEND_DOMAIN_VERIFIED;
    const recipientEmail = testMode ? 'oliverjsykes01@gmail.com' : email;

    const confirmationEmail = await resend.emails.send({
      from: 'Yoof <noreply@yoofai.co.uk>',
      to: recipientEmail,
      subject: 'Application Received - Yoof AI Learning',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Thank you for applying to Yoof!</h1>

          <p>Hi ${parentName},</p>

          <p>We've received your application for <strong>${childName}</strong> and are excited to help them start their AI learning journey!</p>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0; color: #333;">Application Summary</h2>
            <p><strong>Student Name:</strong> ${childName}</p>
            <p><strong>Age:</strong> ${childAge} years old</p>
            <p><strong>Grade Level:</strong> ${gradeLevelDisplay}</p>
            <p><strong>Learning Focus:</strong> ${learningFocusDisplay}</p>
            <p><strong>Preferred Start Date:</strong> ${formattedDate}</p>
            ${additionalNotes ? `<p><strong>Additional Notes:</strong> ${additionalNotes}</p>` : ''}
          </div>

          <h3 style="color: #333;">What's Next?</h3>
          <ul style="line-height: 1.8;">
            <li>Our team will review your application within 2-3 business days</li>
            <li>You'll receive an email with next steps and onboarding information</li>
            <li>We'll schedule an introductory call to discuss your child's learning journey</li>
          </ul>

          <p>If you have any questions in the meantime, feel free to reply to this email or contact us at <a href="mailto:hello@yoofai.co.uk">hello@yoofai.co.uk</a>.</p>

          <p style="margin-top: 30px;">Best regards,<br><strong>The Yoof Team</strong></p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">© ${new Date().getFullYear()} Yoof. All rights reserved.</p>
        </div>
      `,
    });

    // Send notification email to admin
    await resend.emails.send({
      from: 'Yoof Application <noreply@yoofai.co.uk>',
      to: testMode ? 'oliverjsykes01@gmail.com' : 'hello@yoofai.co.uk',
      subject: `New Application: ${childName} (${parentName})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">New Application Submitted</h1>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0; color: #333;">Parent/Guardian Information</h2>
            <p><strong>Name:</strong> ${parentName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0; color: #333;">Student Information</h2>
            <p><strong>Name:</strong> ${childName}</p>
            <p><strong>Age:</strong> ${childAge} years old</p>
            <p><strong>Grade Level:</strong> ${gradeLevelDisplay}</p>
          </div>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0; color: #333;">Program Preferences</h2>
            <p><strong>Learning Focus:</strong> ${learningFocusDisplay}</p>
            <p><strong>Preferred Start Date:</strong> ${formattedDate}</p>
            ${additionalNotes ? `<p><strong>Additional Notes:</strong> ${additionalNotes}</p>` : ''}
          </div>

          <p style="color: #666; font-size: 12px; margin-top: 30px;">Submitted on ${new Date().toLocaleString('en-GB')}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      confirmationId: confirmationEmail.data?.id,
    });

  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again.' },
      { status: 500 }
    );
  }
}
