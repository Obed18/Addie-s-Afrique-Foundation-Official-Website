# Deployment

Every push to `main` builds the React website and uploads the contents of `build/` to Namecheap through GitHub Actions using SFTP. A deployment can also be started manually from the repository's **Actions** tab.

## One-time GitHub setup

In the GitHub repository, open **Settings → Secrets and variables → Actions** and add these repository secrets:

| Secret | Value |
| --- | --- |
| `NAMECHEAP_FTP_SERVER` | The Namecheap hosting server hostname, from your hosting welcome email or cPanel |
| `NAMECHEAP_FTP_USERNAME` | Your Namecheap cPanel username (SFTP does not use a separate FTP account username) |
| `NAMECHEAP_FTP_PASSWORD` | Your Namecheap cPanel password |
| `NAMECHEAP_FTP_SERVER_DIR` | `/home/CPANEL_USERNAME/public_html/` for the main domain, with `CPANEL_USERNAME` replaced by your actual cPanel username |
| `REACT_APP_SUPABASE_URL` | The value of `REACT_APP_SUPABASE_URL` from your local `.env` file |
| `REACT_APP_SUPABASE_PUBLISHABLE_KEY` | The value of `REACT_APP_SUPABASE_PUBLISHABLE_KEY` from your local `.env` file |

SFTP uses port `21098` on Namecheap shared hosting and starts in the account's `/home` area. For the main domain, use the absolute path `/home/CPANEL_USERNAME/public_html/`; for an add-on domain, use its document-root path under `/home/CPANEL_USERNAME/`. Replace `CPANEL_USERNAME` with the actual cPanel username. Do not enter the placeholder `ftp.your-domain.com`.

The Supabase secrets are injected only during the production build. Do not commit `.env` to the repository.

After adding the secrets, push to `main` and check the workflow under the repository's **Actions** tab.
