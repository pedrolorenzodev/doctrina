#!/bin/bash
cd "$(dirname "$0")/.."
sleep 30
while pgrep -f "node tools/transcript.js" > /dev/null || pgrep -f "tools/batch2.sh" > /dev/null; do sleep 20; done
node tools/transcript.js yt/tr iwQRhEwtQ-I T8-A3UNby0s w_ZcNpg2YuA ZtLBpT1rivk UJ54RX81qCU 2eORFeyfYt8 i9l9Te1KYak ZfdxJUBY00k sFXYH_xu5pA EPGC1-StJmw iPAFgIS9gXY > yt/batch3.log 2>&1
