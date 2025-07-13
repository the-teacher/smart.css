#!/bin/bash

# Configuration
SOURCE_DIR="dist/ui-kit"
TARGET_DIR="dist/ui-kit/min"
FILE_PATTERN="*.css"

# Create target directory
mkdir -p "$TARGET_DIR"

# Process each CSS file
for file in "$SOURCE_DIR"/$FILE_PATTERN; do
  if [[ -f "$file" ]]; then
    filename=$(basename "$file")
    target_file="$TARGET_DIR/$filename"
    cleancss -o "$target_file" "$file"

    # Get file size in KB with 2 decimal places
    size_bytes=$(stat -c%s "$target_file")
    size_kb=$(awk "BEGIN {printf \"%.2f\", $size_bytes / 1024}")

    echo "Minifying: $file → $target_file (${size_kb} KB)"
  fi
done

echo "✅ CSS minification completed!"
