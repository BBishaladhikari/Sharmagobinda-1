# 📋 SUPER SIMPLE Copy-Paste Guide

## ✅ You ONLY need to do 2 things:

### 🔹 Thing 1: Get your 3 IDs from EmailJS

### 🔹 Thing 2: Paste them into ONE file

---

## 📍 STEP 1: Get Your IDs

### Go to: https://dashboard.emailjs.com/admin/account

You'll see a page that looks like this:

```
┌─────────────────────────────────────┐
│ EmailJS Dashboard                   │
├─────────────────────────────────────┤
│ ← Admin                             │
│   - Email Services      ← Click     │
│   - Email Templates     ← Click     │
│   - Account            ← Click      │
└─────────────────────────────────────┘
```

---

### 📧 Get ID #1: SERVICE ID

1. Click **"Email Services"** (left sidebar)
2. You'll see your Gmail service
3. **COPY** the Service ID (looks like: `service_abc1234`)

```
Example:
┌──────────────────────────┐
│ Gmail                    │
│ ID: service_abc1234  ← COPY THIS!
└──────────────────────────┘
```

---

### 📝 Get ID #2: TEMPLATE ID

1. Click **"Email Templates"** (left sidebar)
2. You'll see your template
3. **COPY** the Template ID (looks like: `template_xyz5678`)

```
Example:
┌──────────────────────────┐
│ Portfolio Contact Form   │
│ ID: template_xyz5678  ← COPY THIS!
└──────────────────────────┘
```

---

### 🔑 Get ID #3: PUBLIC KEY

1. Click **"Account"** (left sidebar)
2. Click **"General"** tab
3. Scroll to **"API Keys"** section
4. **COPY** the PUBLIC KEY (looks like: `abc123XYZ`)
   - **NOT** the Private Key!

```
Example:
┌──────────────────────────┐
│ API Keys                 │
│ Public Key: abc123XYZ ← COPY THIS!
│ Private Key: ********    │
└──────────────────────────┘
```

---

## 📍 STEP 2: Paste Into Config File

Open this file: `/src/app/config/emailjs.config.ts`

You'll see this:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID',
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
  TO_EMAIL: 'bishalladhikari22@gmail.com',
};
```

**Replace with your IDs:**

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc1234',        // ← Paste Service ID here
  TEMPLATE_ID: 'template_xyz5678',      // ← Paste Template ID here
  PUBLIC_KEY: 'abc123XYZ',              // ← Paste Public Key here
  TO_EMAIL: 'bishalladhikari22@gmail.com',
};
```

**Save the file!** ✅

---

## 🎉 DONE! Test It:

1. Go to your portfolio
2. Fill out the contact form
3. Click "Send Message"
4. Check Gmail: **bishalladhikari22@gmail.com**

---

## ❌ COMMON MISTAKES:

### Wrong ID Format:

```typescript
// ❌ WRONG:
SERVICE_ID: 'abc123'              // Missing "service_" prefix
TEMPLATE_ID: 'xyz789'             // Missing "template_" prefix
PUBLIC_KEY: 'service_abc123'      // This is Service ID, not Public Key!

// ✅ CORRECT:
SERVICE_ID: 'service_abc123'      // Starts with "service_"
TEMPLATE_ID: 'template_xyz789'    // Starts with "template_"
PUBLIC_KEY: 'abc123XYZ'           // NO prefix (just alphanumeric)
```

---

## 🆘 Still Stuck?

### Check the Error Message:
The form will tell you exactly which ID is wrong!

### Screenshot Your Dashboard:
Take screenshots of:
1. Email Services page (showing Service ID)
2. Email Templates page (showing Template ID)
3. Account > General page (showing Public Key)

---

## 📍 File Locations:

```
your-project/
├── src/
│   └── app/
│       └── config/
│           └── emailjs.config.ts  ← EDIT THIS FILE (Paste your 3 IDs)
```

That's it! Just **copy 3 values** and **paste them in 1 file**! 🚀
