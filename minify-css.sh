#!/bin/bash

# Configuration
SOURCE_DIR="dist/ui-kit"
TARGET_DIR="dist/ui-kit/min"

# Create target directory
mkdir -p "$TARGET_DIR"

# Find all CSS files recursively and process them
find "$SOURCE_DIR" -name "*.css" -type f | while read -r file; do
  # Skip files that are already in min directory
  if [[ "$file" == *"/min/"* ]]; then
    continue
  fi
  
  # Get relative path from source directory
  relative_path="${file#$SOURCE_DIR/}"
  
  # Create target file path
  target_file="$TARGET_DIR/$relative_path"
  
  # Create target directory structure
  target_dir=$(dirname "$target_file")
  mkdir -p "$target_dir"
  
  # Minify CSS file
  cleancss -o "$target_file" "$file"
  
  # Get file size in KB with 2 decimal places
  if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    size_bytes=$(stat -f%z "$target_file")
  else
    # Linux
    size_bytes=$(stat -c%s "$target_file")
  fi
  size_kb=$(awk "BEGIN {printf \"%.2f\", $size_bytes / 1024}")
  
  echo "Minifying: $relative_path → min/$relative_path (${size_kb} KB)"
done

echo "✅ CSS minification completed!"
echo "📁 Minified files structure preserved in: $TARGET_DIR"
