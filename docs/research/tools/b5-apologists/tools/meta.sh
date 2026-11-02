#!/bin/bash
cd "$(dirname "$0")/.."
touch yt/meta_all.txt
cat yt/meta1.txt >> yt/meta_all.txt 2>/dev/null; sort -u yt/meta_all.txt -o yt/meta_all.txt
for f in yt/tr/*.tr.txt; do id=$(basename $f .tr.txt); grep -q "^$id|" yt/meta_all.txt && continue
  yt-dlp --skip-download --print "$id|%(upload_date)s|%(channel)s|%(duration_string)s|%(title)s" "https://www.youtube.com/watch?v=$id" 2>/dev/null | tail -1 >> yt/meta_all.txt; sleep 4; done
echo done > yt/meta.done
