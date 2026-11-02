#!/bin/bash
cd "$(dirname "$0")/../yt"
for h in drjordanbcooper PatristicNectarFilms Ligonier gavinortlund aomin; do
  yt-dlp --flat-playlist --playlist-items 1-1200 --print "%(id)s|%(duration_string)s|%(view_count)s|%(title)s" "https://www.youtube.com/@$h/videos" > "list_$h.txt" 2> "list_$h.err"
  echo "$h $(wc -l < list_$h.txt)" >> lists.log
  sleep 45
done
echo done >> lists.log
