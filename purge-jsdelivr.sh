#!/bin/bash

# JSdelivr purge script for smart.css assets
# This script purges all CSS files in the /dist directory from jsdelivr cache

# Constants
REPO_BRANCH="gh/the-teacher/smart.css@master"
BASE_URL="https://purge.jsdelivr.net"
DIST_DIR="dist"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Color output functions
print_info() {
    echo -e "${BLUE}${1}${NC}"
}

print_success() {
    echo -e "${GREEN}${1}${NC}"
}

print_error() {
    echo -e "${RED}${1}${NC}"
}

print_warning() {
    echo -e "${YELLOW}${1}${NC}"
}

# Function to purge a single CSS file
purge_css_file() {
    local file_path=$1
    local purge_url="${BASE_URL}/${REPO_BRANCH}/${file_path}"
    
    print_info "Purging: ${file_path}"
    
    # Make the purge request
    response=$(curl -s -w "%{http_code}" "${purge_url}")
    http_code="${response: -3}"
    
    if [ "$http_code" = "200" ]; then
        print_success "✓ Successfully purged: ${file_path}"
    else
        print_error "✗ Failed to purge: ${file_path} (HTTP: ${http_code})"
    fi
}

# Function to process directory recursively for CSS files only
process_css_files() {
    local dir_path=$1
    
    # Find all CSS files in the directory recursively
    find "$dir_path" -type f -name "*.css" | while read -r file; do
        
        # Convert absolute path to relative path from project root
        relative_path="${file#./}"
        
        purge_css_file "$relative_path"
        
        # Small delay to avoid overwhelming the API
        sleep 0.1
    done
}

# Main script execution
main() {
    print_warning "Starting jsdelivr CSS purge for repository: ${REPO_BRANCH}"
    print_warning "Base URL: ${BASE_URL}"
    echo ""
    
    # Check if dist directory exists
    if [ ! -d "$DIST_DIR" ]; then
        print_error "Error: ${DIST_DIR} directory not found!"
        exit 1
    fi
    
    # Process all CSS files in dist directory
    process_css_files "$DIST_DIR"
    
    echo ""
    print_warning "CSS purge process completed!"
}

# Run the main function
main 