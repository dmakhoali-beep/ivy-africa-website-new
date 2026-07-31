# Deploying Ivy Africa to GitHub Pages

## Option 1: GitHub Pages (Free, Recommended)

### Step 1: Install Git
- **Windows**: Download from [git-scm.com](https://git-scm.com/download/win)
- **Mac**: `brew install git` or download from git-scm.com
- **Linux**: `sudo apt install git`

### Step 2: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Name it `ivyafrica` (or any name)
3. Make it **Public**
4. Do NOT initialize with README (we already have one)
5. Click **Create repository**

### Step 3: Push Your Files

Open Terminal / Command Prompt in your project folder (where all the HTML files are):

```bash
# 1. Initialize Git
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Initial Ivy Africa website upload"

# 4. Connect to GitHub (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/ivyafrica.git

# 5. Push
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. On GitHub, go to **Settings** → **Pages** (left sidebar)
2. Under "Source", select **Deploy from a branch**
3. Select **main** branch and **/ (root)** folder
4. Click **Save**
5. Wait 1–2 minutes, then visit: `https://YOUR-USERNAME.github.io/ivyafrica`

---

## Option 2: Netlify (Free, Drag & Drop)

1. Go to [netlify.com](https://netlify.com)
2. Sign up (free)
3. Drag your entire project folder onto the Netlify dashboard
4. Your site is live instantly at a `netlify.app` URL
5. You can add a custom domain later

---

## Option 3: Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your GitHub repo OR drag-drop your folder
4. Site goes live instantly

---

## Option 4: Cloudflare Pages (Free)

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Sign up → Pages → "Create a project"
3. Connect your GitHub repo or upload directly
4. Fast global CDN, free SSL

---

## 🔗 Custom Domain (Optional)

Once live, you can point your own domain (e.g., `ivyafrica.co.za`):

1. Buy domain from [afrihost.com](https://afrihost.com), [xneelo.co.za](https://xneelo.co.za), or [namecheap.com](https://namecheap.com)
2. In your hosting platform (GitHub/Netlify/Vercel), go to **Custom Domain** settings
3. Add your domain and follow DNS instructions
4. Add these DNS records at your registrar:
   - **A record**: `@` → `185.199.108.153` (GitHub) or follow platform instructions
   - **CNAME**: `www` → `YOUR-USERNAME.github.io`

---

## 🔄 Updating Your Site

After making edits locally:

```bash
git add .
git commit -m "Updated prices / content / etc"
git push
```

GitHub Pages will auto-update in 1–2 minutes.

---

## ❓ Need Help?

- GitHub Pages docs: [docs.github.com/en/pages](https://docs.github.com/en/pages)
- Netlify docs: [docs.netlify.com](https://docs.netlify.com)
