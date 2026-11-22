# Deployment

Every push to `main` builds the React website and uploads the contents of `build/` to Namecheap through GitHub Actions. A deployment can also be started manually from the repository's **Actions** tab.

## One-time GitHub setup

In the GitHub repository, open **Settings → Secrets and variables → Actions** and add these repository secrets:

| Secret | Value |
| --- | --- |
| `NAMECHEAP_FTP_SERVER` | Namecheap FTP hostname, commonly `ftp.your-domain.com` |
| `NAMECHEAP_FTP_USERNAME` | The Namecheap/cPanel FTP account username |
| `NAMECHEAP_FTP_PASSWORD` | The FTP account password |
| `NAMECHEAP_FTP_SERVER_DIR` | The remote web-root directory, commonly `/public_html/` |

Use the exact FTP hostname and remote directory shown in Namecheap cPanel. If the domain is an add-on domain, its directory may be different from `/public_html/`.

After adding the secrets, push to `main` and check the workflow under the repository's **Actions** tab.
