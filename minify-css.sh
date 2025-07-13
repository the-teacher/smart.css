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
    echo "Minifying: $file → $target_file"
    cleancss -o "$target_file" "$file"
  fi
done

echo "✅ CSS minification completed!"
