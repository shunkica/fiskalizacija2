import json
from pathlib import Path

def json_to_md(json_file):
    path = Path(json_file)
    md_file = path.with_suffix(".md")

    with open(json_file, encoding="utf-8") as f:
        obj = json.load(f)

    lines = [f"# Verzija {obj['version']} ({obj['date']})"]

    if "description" in obj:
        lines.append("")
        lines.append(f"## {obj['description']}")

    lines.append("")

    if not obj["data"]:
        raise ValueError(f"No data found in JSON: {json_file}")

    headers = list(obj["data"][0].keys())

    col_widths = [len(h) for h in headers]
    for row in obj["data"]:
        for i, h in enumerate(headers):
            col_widths[i] = max(col_widths[i], len(str(row.get(h, ""))))

    def pad_cell(text, width):
        return text + " " * (width - len(text))

    header_row = "| " + " | ".join(pad_cell(h, col_widths[i]) for i, h in enumerate(headers)) + " |"
    lines.append(header_row)

    sep_row = "|" + "|".join("-" * max(4, col_widths[i] + 2) for i in range(len(headers))) + "|"
    lines.append(sep_row)

    for row in obj["data"]:
        row_line = "| " + " | ".join(pad_cell(str(row.get(h, "")), col_widths[i]) for i, h in enumerate(headers)) + " |"
        lines.append(row_line)

    with open(md_file, "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")

def process_dirs():
    base_dir = Path(__file__).parent
    for subdir in ["eracun", "as4"]:
        dir_path = base_dir / subdir
        if dir_path.exists() and dir_path.is_dir():
            for json_file in dir_path.glob("*.json"):
                try:
                    json_to_md(json_file)
                    print(f"Converted: {json_file}")
                except Exception as e:
                    print(f"Failed: {json_file} -> {e}")

if __name__ == "__main__":
    process_dirs()
