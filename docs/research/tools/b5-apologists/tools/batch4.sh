#!/bin/bash
cd "$(dirname "$0")/.."
sleep 20
while pgrep -f "node tools/transcript.js" > /dev/null || pgrep -f "tools/batch3.sh" > /dev/null; do sleep 15; done
node tools/transcript.js yt/tr W5HhTyuo6Dg > yt/batch4.log 2>&1
