#!/bin/bash
set -e

echo "=== ApplicationStart: Starting nginx ==="

# Enable nginx to start on boot
systemctl enable nginx

# Start or reload nginx
if systemctl is-active --quiet nginx; then
    echo "Reloading nginx..."
    systemctl reload nginx
else
    echo "Starting nginx..."
    systemctl start nginx
fi

echo "Nginx status:"
systemctl status nginx --no-pager

echo "=== ApplicationStart: Done ==="
