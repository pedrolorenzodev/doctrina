#!/bin/zsh
# usage: search.sh "query" [n]
yt-dlp --flat-playlist "ytsearch${2:-8}:$1" --print "%(id)s | %(view_count)s | %(duration_string)s | %(channel)s | %(title)s" 2>/dev/null
