# Deployment

Every push to `main` builds the React website and uploads the contents of `build/` to Namecheap through GitHub Actions using SFTP. A deployment can also be started manually from the repository's **Actions** tab.

## One-time GitHub setup

In the GitHub repository, open **Settings → Secrets and variables → Actions** and add these repository secrets:

| Secret | Value |
| --- | --- |
| `NAMECHEAP_FTP_SERVER` | The Namecheap hosting server hostname, from your hosting welcome email or cPanel |
| `NAMECHEAP_FTP_USERNAME` | Your Namecheap cPanel username (SFTP does not use a separate FTP account username) |
| `NAMECHEAP_FTP_PASSWORD` | Your Namecheap cPanel password |
| `NAMECHEAP_FTP_SERVER_DIR` | Your SFTP web-root directory, commonly `/home/CPANEL_USERNAME/public_html/` or `public_html/` |

SFTP uses port `21098` on Namecheap shared hosting. Use the exact hosting server hostname and remote directory shown in Namecheap cPanel. Do not enter the placeholder `ftp.your-domain.com`. If the domain is an add-on domain, its directory may be different from `public_html/`.

After adding the secrets, push to `main` and check the workflow under the repository's **Actions** tab.
