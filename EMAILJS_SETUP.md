# 📧 EmailJS Setup Guide for Gobinda Sharma

Your contact form will send messages to: **bishalladhikari22@gmail.com**

## 🚀 Complete Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"**
3. Use your Gmail: **bishalladhikari22@gmail.com**
4. Create a password and verify your email

---

### Step 2: Connect Your Gmail Service
1. In EmailJS Dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"**
5. Sign in with **bishalladhikari22@gmail.com**
6. Allow EmailJS permissions
7. Click **"Create Service"**
8. **✅ COPY YOUR SERVICE ID** (looks like `service_abc1234`)

**Example Service ID:** `service_xyz789`

---

### Step 3: Create Email Template

1. Click **"Email Templates"** in the sidebar
2. Click **"Create New Template"**
3. **IMPORTANT:** Name it something like "Portfolio Contact Form"

#### Template Settings:
**To Email:** `bishalladhikari22@gmail.com` (this is where messages will be sent)

**Subject:** `New Portfolio Message from {{name}}`

**Content (Email Body):**
```
Hello Gobinda,

You have received a new message from your portfolio contact form:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FROM: {{name}}
EMAIL: {{email}}
SUBJECT: {{subject}}

MESSAGE:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply to: {{email}}

This message was sent via your portfolio website.
Timestamp: {{timestamp}}
```

4. Click **"Save"**
5. **✅ COPY YOUR TEMPLATE ID** (looks like `template_xyz1234`)

**Example Template ID:** `template_abc789`

---

### Step 4: Get Your Public Key

1. Click **"Account"** in the sidebar
2. Go to **"General"** tab
3. Scroll to **"API Keys"** section
4. Find **"Public Key"**
5. **✅ COPY YOUR PUBLIC KEY** (looks like `Ab1Cd2Ef3Gh4Ij5`)

**Example Public Key:** `1234567890AbCdEf`

---

### Step 5: Update Your Code

Open `/src/app/components/Contact.tsx`

Find these lines (around line 31-35):

```typescript
emailjs.sendForm(
  'YOUR_SERVICE_ID',      // Replace with your EmailJS Service ID
  'YOUR_TEMPLATE_ID',     // Replace with your EmailJS Template ID
  formRef.current!, 
  'YOUR_PUBLIC_KEY'       // Replace with your EmailJS Public Key
)
```

**Replace with your actual IDs:**

```typescript
emailjs.sendForm(
  'service_abc1234',      // Your Service ID from Step 2
  'template_xyz1234',     // Your Template ID from Step 3
  formRef.current!, 
  '1234567890AbCdEf'      // Your Public Key from Step 4
)
```

**Save the file!** 💾

---

## ✅ Test Your Setup

1. Go to your portfolio website
2. Scroll to the **Contact** section
3. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Subject: Testing EmailJS
   - Message: This is a test message!
4. Click **"Send Message"**
5. Wait for the success animation ✨
6. **Check your Gmail: bishalladhikari22@gmail.com**
7. You should receive the email within seconds! 📧

---

## 🎯 What Happens Now?

When someone sends a message through your portfolio:

1. ✨ **Beautiful loading animation** shows
2. 📤 **EmailJS sends the email** to bishalladhikari22@gmail.com
3. ✅ **Success animation** plays
4. 💌 **You receive email** in your Gmail inbox
5. 📬 **You can reply directly** to the sender's email

---

## 🔧 Important Notes

### Email Delivery
- Messages arrive in **5-30 seconds**
- Check your **Gmail inbox** AND **Spam folder**
- Set up a filter to always deliver EmailJS emails to inbox

### Free Tier Limits
- ✅ **200 emails per month** (plenty for a portfolio)
- ✅ **No credit card required**
- ✅ **No time limit**
- ✅ **Completely free forever**

### Sender Information
Each email you receive will show:
- ✉️ **Sender's Name**
- 📧 **Sender's Email** (so you can reply)
- 📝 **Subject Line**
- 💬 **Full Message**

---

## 🎨 Optional: Set Up Gmail Filter

To ensure emails don't go to spam:

1. Open Gmail: bishalladhikari22@gmail.com
2. Click **Settings** (gear icon) → **See all settings**
3. Go to **"Filters and Blocked Addresses"**
4. Click **"Create a new filter"**
5. In **"From"** field, enter: `support@emailjs.com`
6. Click **"Create filter"**
7. Check **"Never send it to Spam"**
8. Check **"Always mark it as important"**
9. Click **"Create filter"**

---

## 📱 Test Email Example

When someone fills out your form, you'll receive:

```
Subject: New Portfolio Message from John Doe

Hello Gobinda,

You have received a new message from your portfolio contact form:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FROM: John Doe
EMAIL: john@example.com
SUBJECT: UI/UX Project Collaboration

MESSAGE:
Hi Gobinda! I'm impressed with your portfolio and would love 
to discuss a potential project collaboration. Are you available 
for a call next week?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply to: john@example.com

This message was sent via your portfolio website.
```

You can then reply directly to **john@example.com**!

---

## 🚨 Troubleshooting

### Problem: Emails not arriving
**Solution:**
1. Check EmailJS dashboard for sent emails
2. Verify all 3 IDs are correct in Contact.tsx
3. Check Gmail spam folder
4. Make sure Gmail service is connected in EmailJS

### Problem: "Failed to send message" error
**Solution:**
1. Open browser console (F12)
2. Look for error message
3. Verify your Service ID, Template ID, and Public Key
4. Make sure you're online
5. Try disabling ad blockers

### Problem: Form submits but no email
**Solution:**
1. Log into EmailJS dashboard
2. Go to "Email Services"
3. Check if Gmail is still connected
4. Click "Verify" to test connection
5. May need to reconnect Gmail

---

## 📞 Need Help?

- **EmailJS Docs:** https://www.emailjs.com/docs/
- **EmailJS Support:** https://www.emailjs.com/support/
- **Test Email Service:** Dashboard → Email Services → Test

---

## ✨ You're All Set!

Once you complete the 5 steps above:
- ✅ Your contact form will be **fully functional**
- ✅ All messages go to **bishalladhikari22@gmail.com**
- ✅ You can **reply directly** to senders
- ✅ **Beautiful animations** included
- ✅ **Zero backend** required

**Enjoy your world-class portfolio! 🚀**
