# Contact Page - Content & Structure

## Page Overview
The Contact page provides multiple ways for potential clients to get in touch with ES Celebrations.

---

## Section 1: Page Header

### Headline
> "Let's Start Planning Your Celebration"

### Subheadline
> "Get in touch with us today. We'd love to hear about your vision and bring it to life."

---

## Section 2: Contact Information

### Office Address

**Label:** Office Address

**Content:**
> Sf-114, Omkar-2, Station Rd, beside Lords Plaza, GIDC, Ankleshwar GIDC, Ankleshwar, Gujarat 393002

**Map Integration:**
- Embed Google Maps with location pin
- "Get Directions" button

---

### Phone

**Label:** Phone

**Content:**
> 99250 44514

**Action:** Click to call functionality

---

### Email

**Label:** Email

**Content:**
> Hello@entertainmentsportz.com

**Action:** Click to email functionality

---

### Business Hours (Optional)

**Label:** Business Hours

**Content:**
- Monday - Saturday: 10:00 AM - 7:00 PM
- Sunday: By Appointment Only

*(Note: Adjust based on actual business hours)*

---

## Section 3: Contact Form

### Form Title
> "Send Us a Message"

### Form Fields

**Field 1: Name**
- Type: Text input
- Label: "Your Name"
- Placeholder: "Enter your full name"
- Required: Yes
- Validation: Minimum 2 characters

**Field 2: Email**
- Type: Email input
- Label: "Email Address"
- Placeholder: "your.email@example.com"
- Required: Yes
- Validation: Valid email format

**Field 3: Phone**
- Type: Tel input
- Label: "Phone Number"
- Placeholder: "+91 XXXXX XXXXX"
- Required: Yes
- Validation: Valid phone format

**Field 4: Event Type**
- Type: Dropdown/Select
- Label: "Type of Event"
- Options:
  - Wedding
  - Birthday/Milestone
  - Baby Shower
  - Griha Pravesh
  - Social Gathering
  - Corporate Event
  - Other
- Required: Yes

**Field 5: Event Date**
- Type: Date picker
- Label: "Preferred Event Date"
- Placeholder: "Select a date"
- Required: No

**Field 6: Guest Count**
- Type: Number input
- Label: "Expected Number of Guests"
- Placeholder: "Approximate guest count"
- Required: No

**Field 7: Budget Range**
- Type: Dropdown/Select
- Label: "Budget Range (Optional)"
- Options:
  - Under ₹5 Lakhs
  - ₹5-10 Lakhs
  - ₹10-20 Lakhs
  - ₹20-50 Lakhs
  - Above ₹50 Lakhs
  - Prefer not to say
- Required: No

**Field 8: Message**
- Type: Textarea
- Label: "Tell Us About Your Vision"
- Placeholder: "Share details about your celebration, preferences, or any questions you have..."
- Required: Yes
- Validation: Minimum 10 characters
- Rows: 5

**Field 9: How Did You Hear About Us?**
- Type: Dropdown/Select
- Label: "How did you hear about us?"
- Options:
  - Google Search
  - Social Media (Instagram/Facebook)
  - Friend/Family Referral
  - Previous Client
  - Wedding Directory
  - Other
- Required: No

### Form Actions

**Submit Button:**
- Text: "Send Message"
- Style: Primary button with golden accent
- Loading state: "Sending..."
- Success message: "Thank you! We'll get back to you within 24 hours."
- Error message: "Oops! Something went wrong. Please try again or email us directly."

**Privacy Note:**
> "We respect your privacy. Your information will only be used to respond to your inquiry."

---

## Section 4: Social Media Links

### Headline
> "Follow Us"

### Social Links

**LinkedIn:**
- Icon: LinkedIn logo
- Link: [To be provided]
- Opens in new tab

**Instagram:**
- Icon: Instagram logo
- Link: [To be provided]
- Opens in new tab
- Optional: Display recent Instagram posts

**Facebook (Optional):**
- Icon: Facebook logo
- Link: [To be provided]
- Opens in new tab

---

## Section 5: Quick Links / FAQ

### Headline
> "Quick Information"

### Content

**Response Time:**
> We typically respond to inquiries within 24 hours during business days.

**Consultation:**
> Initial consultations are complimentary. We'll discuss your vision, budget, and how we can bring your celebration to life.

**Service Areas:**
> We primarily serve Gujarat and surrounding regions, with destination event capabilities across India.

**Booking:**
> We recommend booking 3-6 months in advance for weddings and 1-3 months for other events, though we can accommodate shorter timelines based on availability.

---

## Section 6: Call to Action

### Alternative CTA

**Headline:**
> "Prefer to Talk?"

**Content:**
> Give us a call at **99250 44514** or email **Hello@entertainmentsportz.com**

**Button:**
- "Schedule a Consultation" (links to calendar booking if available)

---

## Section 7: Map Section

### Layout
- Full-width or half-width embedded Google Map
- Location marker for office address
- Zoom controls
- "View Larger Map" link

---

## Technical Requirements

### Form Handling
- Client-side validation
- Server-side validation
- CAPTCHA/reCAPTCHA to prevent spam
- Email notification to ES Celebrations
- Auto-response email to client
- Form data storage (database or email)

### API Integration
- Contact form API endpoint: `/api/contact`
- Email service integration (SendGrid, Mailgun, or similar)
- Optional: CRM integration

### Accessibility
- Proper form labels
- Error messages clearly associated with fields
- Keyboard navigation support
- Screen reader friendly
- Focus indicators

### Mobile Optimization
- Stack form fields vertically on mobile
- Touch-friendly input fields
- Responsive map embed
- Click-to-call and click-to-email on mobile

---

## Design Notes

- Clean, minimal form design
- Golden accent for submit button
- Subtle animations on form interactions
- Success/error states clearly visible
- Loading indicators during submission
- Form field validation feedback (green checkmark for valid, red for errors)
- Sticky contact info sidebar (desktop)
- Smooth scroll to form from CTA buttons
- Thank you page or modal after successful submission
