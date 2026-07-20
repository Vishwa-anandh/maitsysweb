#!/bin/bash
set -e

echo "=== BeforeInstall: Preparing deployment ==="

# Install nginx if not already installed
if ! command -v nginx &> /dev/null; then
    echo "Installing nginx..."
    dnf install -y nginx
fi

# Create deploy directory if it doesn't exist
mkdir -p /home/ec2-user/maitsysdev

# Backup current deployment (keep last 2 backups)
if [ -d "/home/ec2-user/maitsysdev" ] && [ "$(ls -A /home/ec2-user/maitsysdev)" ]; then
    BACKUP_DIR="/home/ec2-user/maitsysdev_backups/$(date +%Y%m%d_%H%M%S)"
    mkdir -p "$BACKUP_DIR"
    cp -r /home/ec2-user/maitsysdev/* "$BACKUP_DIR/" 2>/dev/null || true
    echo "Backup created at: $BACKUP_DIR"

    # Keep only last 2 backups
    ls -dt /home/ec2-user/maitsysdev_backups/*/ 2>/dev/null | tail -n +3 | xargs rm -rf || true
fi

# Clear old deployment
rm -rf /home/ec2-user/maitsysdev/*

echo "=== BeforeInstall: Done ==="
