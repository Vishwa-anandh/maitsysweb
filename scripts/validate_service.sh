#!/bin/bash
set -e

echo "=== ValidateService: Checking deployment ==="

# Check nginx is running
if ! systemctl is-active --quiet nginx; then
    echo "ERROR: nginx is not running!"
    exit 1
fi

# Check index.html exists and is non-empty
if [ ! -s "/home/ec2-user/maitsysdev/index.html" ]; then
    echo "ERROR: index.html is missing or empty!"
    exit 1
fi

# Check HTTP response on localhost
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost/ 2>/dev/null || echo "000")
if [ "$HTTP_STATUS" != "200" ] && [ "$HTTP_STATUS" != "301" ] && [ "$HTTP_STATUS" != "302" ]; then
    echo "WARNING: HTTP status from localhost is $HTTP_STATUS"
fi

echo "Deployment validated successfully!"
echo "Files deployed: $(find /home/ec2-user/maitsysdev -type f | wc -l)"
echo "=== ValidateService: Done ==="
