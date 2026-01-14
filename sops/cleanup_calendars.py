
path = r"c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\client-chat-sop.html"
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Line 955 (1-based) -> Index 954
start_idx = 954
# Line 1082 (1-based) -> Index 1081
end_idx = 1081

print(f"Line {start_idx+1}: {lines[start_idx].strip()}")
print(f"Line {end_idx+1}: {lines[end_idx].strip()}")

if "growth-calendars" not in lines[start_idx]:
    print("ERROR: Start line mismatch")
    exit(1)

if "Overview" not in lines[end_idx]:
    print("ERROR: End line mismatch")
    # Check lines around
    print(f"Line {end_idx}: {lines[end_idx-1].strip()}")
    print(f"Line {end_idx+2}: {lines[end_idx+1].strip()}")
    exit(1)

# Delete lines from start_idx up to (but not including) end_idx
# lines[start_idx] is the first line to delete.
# lines[end_idx] is the first line to KEEP.
new_lines = lines[:start_idx] + lines[end_idx:]

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
print("SUCCESS: Deleted range")
