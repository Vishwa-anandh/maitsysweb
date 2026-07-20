#!/bin/bash
set -e

echo "=== AfterInstall: Configuring nginx ==="

# Set correct ownership and permissions on deployed files
chown -R nginx:nginx /home/ec2-user/maitsysdev
chmod -R 755 /home/ec2-user/maitsysdev

# Ensure nginx can access ec2-user home directory
chmod o+x /home/ec2-user

NGINX_CONF="/etc/nginx/sites-available/default"

echo "Updating nginx configuration..."

cat > "$NGINX_CONF" <<'EOF'
server {
    listen 80;
    server_name _;

    root /home/ec2-user/maitsysdev;
    index index.html;

    # Serve static assets with long cache
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }

    # React Router fallback
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";
    add_header Referrer-Policy "strict-origin-when-cross-origin";

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript;
    gzip_min_length 1000;
}
EOF

echo "Nginx config updated at: $NGINX_CONF"

# Test nginx configuration
nginx -t

echo "Reloading nginx..."
systemctl reload nginx

echo "=== AfterInstall: Done ==="
