#!/bin/bash
cd "$(dirname "$0")/../yt"
sleep 60
for pair in "gavinortlund UCtWDnUokOD--s2aFxLT5uVA" "aomin UCiQJ59Y5z6__BaV35G-9j-g"; do
  set -- $pair
  yt-dlp --flat-playlist --playlist-items 1-900 --print "%(id)s|%(duration_string)s|%(view_count)s|%(title)s" "https://www.youtube.com/channel/$2/videos" > "list_$1.txt" 2> "list_$1.err"
  echo "$1 $(wc -l < list_$1.txt)" >> lists.log
  sleep 60
done
echo done2 >> lists.log
